export const metadata = {
  title: "Privacy Policy | Hampshire Business Plans",
  description:
    "Hampshire Business Plans offers tailored business planning and financial forecasting services for entrepreneurs. Get expert guidance and support to launch and grow your business.",
};

import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Banner from "@/components/banner";
import Privacy from "@/components/privacy";

export default function Home() {
  return (
    <>
      <Banner />
      <Privacy />
      <Cta />
      <Faq />
    </>
  );
}
