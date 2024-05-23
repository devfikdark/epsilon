import HeaderTitle from "@/components/header-title";
import { Metadata } from "next";
import DataSection from "./_components/data-section";

export const metadata: Metadata = {
  title: "Data List",
};

const Data = () => {
  return (
    <div className="container mx-auto">
      <HeaderTitle>Data List</HeaderTitle>
      <DataSection />
    </div>
  );
};

export default Data;
