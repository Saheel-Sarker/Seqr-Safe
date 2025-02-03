import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Pricing from "@/components/Pricing";
import SlidingCards from "@/components/SlidingCards";

export default function Home() {
  return (
    <Main>
      <Hero></Hero>
      <SlidingCards></SlidingCards>
      <Pricing></Pricing>
    </Main>
    
  );
}
