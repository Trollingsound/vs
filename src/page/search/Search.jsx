const Search = () => {
  return (
    <>
      <div className="bg-[#272727] w-full px-4 py-2 transition-all ">
        <div className="w-full flex flex-row">
          <div className="flex items-center justify-center absolute h-[37px] px-3">
            <svg
              class="icon__5c8c7 visible__720ac"
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
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
          <input
            className="w-full text-[13px] border-none  focus:ring-[#00a571] focus:ring-2 focus:outline-2  rounded-lg text-[#e2e2de] pl-14 px-5 py-3 bg-[#3d3d3b] ring-[#00a571] right-1"
            type="text"
            placeholder="Search"
          />
        </div>



      </div>
    </>
  );
};

export default Search;
