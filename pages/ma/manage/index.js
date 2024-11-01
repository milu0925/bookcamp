import React from "react";
import ManageLayout from "@/components/layout/manage-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Manage_Home from "@/components/ma/content/home/home";

export default function Manage() {
  return (
    <ManageLayout>
      <Manage_Home />
    </ManageLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
