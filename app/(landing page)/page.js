import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Pricing from "@/components/Pricing";
import SlidingCards from "@/components/SlidingCards";
import { auth0 } from "@/lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();

  if (!session) {
    console.log("No session");
  } else {
    console.log(session.user.name);
  }

  return (
    <Main>
      <Hero></Hero>
      <SlidingCards></SlidingCards>
      <Pricing></Pricing>
    </Main>
    
  );
}
