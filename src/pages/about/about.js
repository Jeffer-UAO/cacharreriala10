import { Footer, AboutUs, FooterApp, Redes } from "@/components";
import { BasicLayout } from "../../layouts";

export default function AboutHome() {
  return (
    <>
      <BasicLayout>
        <Redes />
        <AboutUs />
        <FooterApp />
        <Footer />
      </BasicLayout>
    </>
  );
}
