import "flowbite";

const Explore = () => {
  return (
    <>
      <div className="explore-container transition-all">
        <div className="slide max-w-[1256px] overflow-hidden">
          <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide"
          >
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div className=" duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://animerulz.pro/images/sololevelingSlider.png"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className=" duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://animerulz.pro/images/JujutsuKaisenSlider3.jpg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className=" duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://animerulz.pro/images/OnePieceLiveActionSlider.jpg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className=" duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://animerulz.pro/images/SpyXFamilySlider.jpg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>

            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
            </div>

            <button
              type="button"
              class="group transition-all absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>

            <button
              type="button"
              class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
        <div className="card max-w-[1256px] flex flex-col gap-y-4 overflow-x-scroll">
          <div className="flex max-w-[1256px] px-2 py-4 gap-4 overflow-x-scroll">
            <div className="min-w-[170px] h-[260px] bg-zinc-600/30">
              <img
                className="w-full h-full"
                src="https://cdn.noitatnemucod.net/thumbnail/300x400/100/edfc7fe935b6eac2d704cf5b0a60e356.jpg"
                alt=""
              />
            </div>

            <div className="min-w-[170px] h-[260px] bg-zinc-600/30">
              <img
                className="w-full h-full"
                src="https://s.yimg.com/ny/api/res/1.2/kwgFlI04miUYlOnDKTuZNQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTEzNTk7Y2Y9d2VicA--/https://media.zenfs.com/en/parade_250/7a3b14711f20dca472b3ee99a37b5e21"
                alt=""
              />
            </div>

            <div className="min-w-[170px] h-[260px] bg-zinc-600/30">
              <img
                className="w-full h-full"
                src="https://cdn.noitatnemucod.net/thumbnail/300x400/100/1f06eb0baf5520aa639b546fc189400d.jpg"
                alt=""
              />
            </div>

            <div className="min-w-[170px] h-[260px] bg-zinc-600/30">
              <img
                className="w-full h-full"
                src="https://cdn.noitatnemucod.net/thumbnail/300x400/100/af4938d7388aad3438e443e74b02531e.jpg"
                alt=""
              />
            </div>

            <div className="min-w-[170px] h-[260px] bg-zinc-600/30">
              <img
                className="w-full h-full"
                src="https://cdn.noitatnemucod.net/thumbnail/300x400/100/d9bb23228e5a641b5a3e9386382dae3a.jpg"
                alt=""
              />
            </div>

            <div className="min-w-[170px] h-[260px] bg-zinc-600/30">
              <img
                className="w-full h-full"
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-m1gX3iwfIsLu.png"
                alt=""
              />
            </div>

            <div className="min-w-[170px] h-[260px] bg-zinc-600/30">
              <img
                className="w-full h-full"
                src="https://cdn.noitatnemucod.net/thumbnail/300x400/100/a7ab15fb2281cce25179cd739112f426.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="flex max-w-[1256px] px-2 py-4 gap-4 overflow-x-scroll">
            <div className="min-w-[170px] h-[260px] bg-zinc-600/30">
              <img
                className="w-full h-full"
                src="https://cdn.noitatnemucod.net/thumbnail/300x400/100/edfc7fe935b6eac2d704cf5b0a60e356.jpg"
                alt=""
              />
            </div>

            <div className="min-w-[170px] h-[260px] bg-zinc-600/30">
              <img
                className="w-full h-full"
                src="https://s.yimg.com/ny/api/res/1.2/kwgFlI04miUYlOnDKTuZNQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTEzNTk7Y2Y9d2VicA--/https://media.zenfs.com/en/parade_250/7a3b14711f20dca472b3ee99a37b5e21"
                alt=""
              />
            </div>

            <div className="min-w-[170px] h-[260px] bg-zinc-600/30">
              <img
                className="w-full h-full"
                src="https://cdn.noitatnemucod.net/thumbnail/300x400/100/1f06eb0baf5520aa639b546fc189400d.jpg"
                alt=""
              />
            </div>

            <div className="min-w-[170px] h-[260px] bg-zinc-600/30">
              <img
                className="w-full h-full"
                src="https://cdn.noitatnemucod.net/thumbnail/300x400/100/af4938d7388aad3438e443e74b02531e.jpg"
                alt=""
              />
            </div>

            <div className="min-w-[170px] h-[260px] bg-zinc-600/30">
              <img
                className="w-full h-full"
                src="https://cdn.noitatnemucod.net/thumbnail/300x400/100/d9bb23228e5a641b5a3e9386382dae3a.jpg"
                alt=""
              />
            </div>

            <div className="min-w-[170px] h-[260px] bg-zinc-600/30">
              <img
                className="w-full h-full"
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-m1gX3iwfIsLu.png"
                alt=""
              />
            </div>

            <div className="min-w-[170px] h-[260px] bg-zinc-600/30">
              <img
                className="w-full h-full"
                src="https://cdn.noitatnemucod.net/thumbnail/300x400/100/a7ab15fb2281cce25179cd739112f426.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
