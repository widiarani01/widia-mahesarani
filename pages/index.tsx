import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainSection from "@/components/Skills";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Widia Mahesarani - Portfolio</title>
        <meta name="description" content="Portfolio of Widia Mahesarani, an experienced professional in retail and food & beverage industry." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <AboutMe/>
      <MainSection />
      <CTA />
      <Footer />
    </>
  );
}
