import React from "react";
import ManageLayout from "@/components/layout/manage-layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ManageDepartmentC() {
  return <ManageLayout></ManageLayout>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
