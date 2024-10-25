import React from "react";

import AllBook from "@/components/st/book/all_book";
import SortBook from "@/components/st/book/sort_book";
import MainLayout from "@/components/layout/main-layout";

export default function Book() {
  return (
    <MainLayout>
      <div className="l-book">
        <SortBook />
        <AllBook />
      </div>
    </MainLayout>
  );
}
