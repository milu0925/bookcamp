import { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "@/components/layout/main-layout";

import Advertise from "@/components/home/advertise";
import HotList from "@/components/home/hot-list";

export default function Home() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const [hotList, setHotList] = useState([]);

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      const { data } = await axios.get(`${domain}/product/top`);
      setHotList(data.data);
    } catch (error) {
      console.log(error, "index.js error");
    }
  };

  return (
    <MainLayout>
      <Advertise />
      <HotList data={hotList} />
    </MainLayout>
  );
}
