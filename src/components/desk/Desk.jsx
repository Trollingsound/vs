"use client";
import { useContext } from "react";
import { DashBoardContext } from "@/context/context";
import Explore from "@/page/explore/Explore";
import Search from "@/page/search/Search";
import Download from "@/page/download/Download";

const Desk = () => {
  const all = useContext(DashBoardContext);

  if (all?.explore) {
    return <Explore />;
  } else if (all?.search) {
    return <Search />;
  } else if (all?.download) {
    return <Download />;
  } else {
    return (
      <>
        <div className="w-full px-4 py-2 transition-all">No Page</div>
      </>
    );
  }
};

export default Desk;
