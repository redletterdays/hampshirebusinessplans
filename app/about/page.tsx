export const metadata = {
  title: "About Us | Hampshire Business Plans",
  description:
    "Hampshire Business Plans offers tailored business planning and financial forecasting services for entrepreneurs. Get expert guidance and support to launch and grow your business.",
};

import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Banner from "@/components/banner";
import AboutUs from "@/components/about-us";
import Team from "@/components/team";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <Team />
      <Cta />
      <Faq />
    </>
  );
}
