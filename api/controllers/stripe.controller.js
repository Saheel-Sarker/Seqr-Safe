
import Stripe from "stripe";
import {User} from "../models/user.model.js";

const stripe_webhook = process.env.STRIPE_WEBHOOK_SECRET;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeWebhook = async (req, res) => {

  let event = req.body;
  // Only verify the event if you have an endpoint secret defined.
  // Otherwise use the basic event deserialized with JSON.parse
  if (stripe_webhook) {
    // Get the signature sent by Stripe
    const signature = req.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        stripe_webhook
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return res.sendStatus(400);
    }
  }

  let user;
  const data = event.data;

  switch (event.type) {
    case 'checkout.session.completed':
        try {
            const session = await stripe.checkout.sessions.retrieve(
                data.object.id,
                {
                    expand: ['line_items']
                }
            );
            const customerId = session?.customer;
            const customer = await stripe.customers.retrieve(customerId);
            const priceId = session?.line_items?.data[0]?.price.id;

            user = await User.findOne({ email: customer.email });
            if (!user) {
                return res.status(404).json({ success: false, message: "User not found" });
            }
            user.customerId = customerId;
            user.priceId = priceId;
            user.hasAccess = true;
            await user.save();
        } catch (error) {
            console.error("Error handling checkout.session.completed event:", error);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }


      break;
    case 'customer.subscription.deleted':
        try {
            const subscription = await stripe.subscriptions.retrieve(event.data.object.id);
            user = await User.findOne({ customerId: subscription.customer });
            if (user) {
                user.hasAccess = false;
                await user.save();
            }
        } catch (error) {
            console.error("Error handling customer.subscription.deleted event:", error);
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
        break;
    default:
      // Unexpected event type
      return res.status(500).json({ success: false, message: "Internal server error" });
      console.log(`Unhandled event type ${event.type}.`);
  }

  res.send();

}