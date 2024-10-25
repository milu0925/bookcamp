import Advertise from "@/components/st/home/advertise";
import HotList from "@/components/st/home/hot-list";
import Footer from "@/components/st/footer";
import MainLayout from "@/components/layout/main-layout";
export default function Home() {
  return (
    <MainLayout>
      <Advertise />
      <HotList />
      <Footer />
    </MainLayout>
  );
}
