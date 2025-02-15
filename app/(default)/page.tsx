export const metadata = {
  title: "Hampshire Business Plans",
  description:
    "Hampshire Business Plans offers tailored business planning and financial forecasting services for entrepreneurs. Get expert guidance and support to launch and grow your business.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import PageIllustration from "@/components/page-illustration";
import Banner from "@/components/banner";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <LargeTestimonial />
      <BusinessCategories />
      <PageIllustration />
      <Pricing />
      <FeaturesPlanet />
      <Cta />
      <Faq />
    </>
  );
}
