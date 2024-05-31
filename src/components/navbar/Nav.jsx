"use client";
import { DashBoardContext } from "@/context/context";
import Search from "@/page/search/Search";
import { useContext } from "react";

const Nav = () => {
  const all = useContext(DashBoardContext);
  return (
    <>
      <div className="h-full py-6 space-y-4 min-w-[74px] gap-y-3 bg-[#1e1f22] flex flex-col items-center">
        <span className="flex items-center justify-center w-full">
          <button className="group">
            <div className=" bg-[#313338] group-hover:bg-[#00a571] flex items-center justify-center h-[48px] w-[48px] rounded-[24px] bg-background transition-all group-hover:rounded-[16px]">
              <svg
                aria-hidden="true"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z"
                  className="group-hover:text-white transition text-emerald-500"
                ></path>
              </svg>
            </div>
          </button>
        </span>

        <span className="flex items-center justify-center w-full">
          <button
            className="group"
            onClick={() =>
              all?.setExplore(
                (prev) => !prev,
                all?.setSearch(false),
                all?.setDownload(false)
              )
            }
          >
            <div className="bg-[#313338] group-hover:bg-[#00a571] flex items-center justify-center h-[48px] w-[48px] rounded-[24px] bg-background transition-all group-hover:rounded-[16px]">
              <svg
                aria-hidden="true"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                  class=""
                ></path>
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z"
                  clip-rule="evenodd"
                  className="group-hover:text-white transition text-[#00a571]"
                ></path>
              </svg>
            </div>
          </button>
        </span>

        <div className="h-[2px] w-[32px] rounded-[1px] bg-zinc-500 " />

        <span className="flex items-center justify-center w-full">
          <button
            className="group"
            onClick={() =>
              all?.setSearch(
                (prev) => !prev,
                all?.setExplore(false),
                all?.setDownload(false)
              )
            }
          >
            <div className="bg-[#313338] group-hover:bg-[#00a571] flex items-center justify-center h-[48px] w-[48px] rounded-[24px] bg-background transition-all group-hover:rounded-[16px]">
              <svg
                class="icon__5c8c7 visible__720ac"
                aria-hidden="true"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M15.62 17.03a9 9 0 1 1 1.41-1.41l4.68 4.67a1 1 0 0 1-1.42 1.42l-4.67-4.68ZM17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  clip-rule="evenodd"
                  className="group-hover:text-white transition text-emerald-500"
                ></path>
              </svg>
            </div>
          </button>
        </span>

        <span className="flex items-center justify-center w-full">
          <button
            className="group"
            onClick={() =>
              all?.setDownload(
                (prev) => !prev,
                all?.setExplore(false),
                all?.setSearch(false)
              )
            }
          >
            <div className="bg-[#313338] group-hover:bg-[#00a571] flex items-center justify-center h-[48px] w-[48px] rounded-[24px] bg-background transition-all group-hover:rounded-[16px]">
              <svg
                aria-hidden="true"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"
                  className="group-hover:text-white transition text-emerald-500"
                ></path>
              </svg>
            </div>
          </button>
        </span>
      </div>
    </>
  );
};
export default Nav;
