import React from "react";

import AllBook from "@/components/book/all_book";
import SortBook from "@/components/book/sort_book";
export default function Book() {
  return (
    <div className="l-book">
      <SortBook />
      <AllBook />
    </div>
  );
}
