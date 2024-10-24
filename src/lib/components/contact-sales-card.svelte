<script>
  import { initializeCalendlyPopup } from "$lib/utils";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import Button from "./button.svelte";

  export let heading = "";
  export let para1 = "";
  export let para2 = "";
  export let getInTouch = false;

  let mainElement;
  let containerElement;
  let elementHeight = 0;
  let containerWidth = 0;

  const updateDimensions = () => {
    elementHeight = mainElement.clientHeight;
    containerWidth = mainElement.clientWidth;
  };

  onMount(() => {
    if (browser) {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
    }
    return () => {
      if (browser) {
        window.removeEventListener("resize", updateDimensions);
      }
    };
  });
</script>

<div
  class="rounded-[10px] mbl-lg:rounded-[20px] relative w-full mt-[20px]"
  style=" background-color: rgba(230, 235, 247, 0.5);"
  style:height="{elementHeight}px"
  bind:this={containerElement}
>
  <div
    class="bg-white p-[20px] mbl-lg:p-[40px] grid grid-cols-1 laptop:grid-cols-2 gap-[12px] mbl-lg:gap-6 rounded-[10px] mbl-lg:rounded-[20px] w-[93%] absolute left-1/2 -top-[3%] mbl-lg:-top-[5%] laptop:-top-[10%] transform -translate-x-1/2"
    style="box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.05);
border: solid 0.5px rgba(0, 0, 0, 0.1);"
    bind:this={mainElement}
  >
    <div class="max-w-[468px] flex flex-col laptop:order-1 order-2">
      <h2
        class="text-blue-gray text-[20px] mbl-lg:text-[28px] laptop:text-[32px] leading-[1.4]"
      >
        {heading}
      </h2>
      <p
        class="mt-[12px] mb-[24px] mbl-lg:mb-[40px] text-[#5c6972] text-[13px] mb-lg:text-[18px] leading-[1.4] font-[300]"
      >
        {para1}
        <br />
        <br />
        {para2}
      </p>
      <div class="flex items-center gap-[12px] mbl-lg:gap-[24px] mt-auto">
        {#if getInTouch}
          <Button text="Get in touch" href="/contact" />
        {:else}
          <Button
            text="Schedule a Demo"
            onClick={() => {
              initializeCalendlyPopup();
            }}
          />
          <a
            href="/contact"
            class="px-[10px] py-[12px] flex items-center gap-[8px] text-[14px] mbl-lg:text-[16px] leading-[1.6] text-primary"
            >Contact Sales <img
              src="/contact-phone.svg"
              class="size-[12px]"
              alt=""
              srcset=""
            /></a
          >
        {/if}
      </div>
    </div>
    <img
      src="/contact-sales.png"
      alt=""
      class="w-full h-full object-cover rounded-[10px] laptop:order-2 order-1"
      srcset=""
    />
  </div>
</div>
