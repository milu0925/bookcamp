import MainLayout from "@/components/layout/main-layout";
// 首頁 - 廣告牆
import Advertise from "@/components/home/advertise";
import HotList from "@/components/home/hot-list";

export default function Home() {
  return (
    <>
      <Advertise />
      <HotList/>
    </>
  );
}
