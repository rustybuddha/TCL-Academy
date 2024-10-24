<script>
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { register } from "swiper/element/bundle";
  import { urlFor } from "$lib/image";
  register();

  export let stats = [];
  export let cover = "";
  const params = {
    spaceBetween: 0,
  };

  onMount(() => {
    let swiperEl;
    swiperEl = document.querySelector(
      `swiper-container.sector-stats-container`
    );
    Object.assign(swiperEl, params);

    swiperEl.initialize();
  });
</script>

<div class="relative h-fit w-fit">
  <img
    src="/solutions/grainy-bg.svg"
    class="max-w-[650px] w-full h-auto"
    alt=""
    srcset=""
  />
  <div
    class="top-1/2 absolute transform -translate-y-1/2 laptop:right-[32px] h-fit max-w-[48%] bg-white scale-[1.05] right-[18px] mbl-lg:scale-[1.09] mbl-lg:right-[32px] tablet:right-[48px] tablet:scale-[1.2] laptop:scale-[1.09] rounded-[12px] overflow-hidden"
    style="box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px rgba(0, 0, 0, 0.05);"
  >
    <img
      src={cover}
      class="object-cover h-full w-full max-h-[42%]"
      alt=""
      srcset=""
    />
    {#if browser}
      <swiper-container
        pagination={false}
        loop={true}
        init={false}
        autoplay-delay={2000}
        class="sector-stats-container w-full p-[8px] mbl-lg:px-[15px] mbl-lg:py-[15px] mbl-lg:pb-[20px]"
      >
        {#each stats as { stat, icon, title, description }}
          <swiper-slide class="">
            <p
              class="text-[9px] laptop:text-[14px] leading-[1.4] text-[#5c6972] flex items-center gap-[8px]"
            >
              {title}
              <span
                ><img
                  src={urlFor(icon) ?? ""}
                  class="size-[10px] laptop:size-[18px]"
                  alt=""
                  srcset=""
                /></span
              >
            </p>
            <h5
              class="text-blue-gray text-[18px] laptop:text-[23px] leading-[1.2] mt-[4px] mb-[8px] laptop:mb-[20px]"
            >
              {stat}
            </h5>
            <p
              class="text-[8px] laptop:text-[12px] leading-[1.4] font-[300] text-[#5c6972] flex items-center gap-[8px] p-[8px] mbl-lg:px-[10px] mbl-lg:py-[14px] bg-[#e6fae6] rounded-[4px]"
            >
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6673 8.49998C14.6673 4.81808 11.6825 1.83331 8.00065 1.83331C4.31875 1.83331 1.33398 4.81808 1.33398 8.49998C1.33398 12.1818 4.31875 15.1666 8.00065 15.1666C11.6825 15.1666 14.6673 12.1818 14.6673 8.49998Z"
                  stroke="#039200"
                />
                <path
                  d="M5.33398 8.99998C5.33398 8.99998 6.40065 9.60831 6.93398 10.5C6.93398 10.5 8.53398 6.99998 10.6673 5.83331"
                  stroke="#039200"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {description}
            </p>
          </swiper-slide>
        {/each}
      </swiper-container>
    {/if}
  </div>
</div>
