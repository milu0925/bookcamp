import Advertise from "@/components/st/home/advertise";
import HotList from "@/components/st/home/hot-list";
import Footer from "@/components/st/footer";
import MainLayout from "@/components/layout/main-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function Home() {
  return (
    <MainLayout>
      <Advertise />
      <HotList />
      <Footer />
    </MainLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
