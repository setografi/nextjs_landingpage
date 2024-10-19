import Hero from "../components/organism/Hero";
import Latest from "../components/organism/Latest";
import Categories from "../components/organism/Categories";
import Benefits from "../components/organism/Benefits";
import FeedBack from "../components/organism/FeedBack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Latest />
      <Categories />
      <Benefits />
      <FeedBack />
    </main>
  );
}
