<script>
  import Accordion from "$lib/components/accordion.svelte";
  import Button from "$lib/components/button.svelte";
  import ArrowCorner from "$lib/components/icons/arrow-corner.svelte";
  import { initializeCalendlyPopup } from "$lib/utils";
  import { urlFor } from "$lib/image";
  import ContactSalesCard from "$lib/components/contact-sales-card.svelte";
  import iconsMap from "$lib/utils/sectorsIconsMap.js";
  import SectorStats from "$lib/components/sector-stats.svelte";

  export let data;
</script>

<div class="flex justify-center overflow-hidden">
  <main
    class="w-[1440px] max-[1440px]:w-screen flex flex-col laptop:gap-[100px] tablet:gap-[80px] gap-[64px] tablet:my-[80px] my-[64px]"
  >
    <section
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] grid grid-cols-1 laptop:grid-cols-2 gap-8"
    >
      <div class="max-w-[500px] flex flex-col gap-[12px] mbl-lg:gap-[20px]">
        <span
          class="uppercase text-[13px] mbl-lg:text-[16px] laptop:text-[18px] leading-[1.4] tracking-[2px] rounded-[5px] w-fit p-[10px] flex items-center gap-[8px] mbl-g:gap-[10px]"
          style:background-color={data?.theme?.bgcolor}
          style:color={data?.theme?.color}
        >
          <span class="block mbl-lg:hidden">
            <svelte:component
              this={iconsMap[data?.sector?.sector_name]}
              color={data?.theme?.color}
              size="13px"
            />
          </span>
          <span class="hidden mbl-lg:block">
            <svelte:component
              this={iconsMap[data?.sector?.sector_name]}
              color={data?.theme?.color}
              size="20px"
            />
          </span>

          {data?.sector?.sector_name}</span
        >
        <h1
          class="text-[28px] tablet:text-[30px] desktop:text-[44px] leading-[1.4] text-blue-gray font-[500]"
        >
          {data?.sector?.hero_section?.tagline}
        </h1>
        <p
          class="text-[14px] mbl-lg:text-[16px] laptop:text-[20px] leading-[1.6] text-[#5c6972] font-[300]"
        >
          {data?.sector?.hero_section?.subtitle}
        </p>
        <div class="mt-[20px]">
          <Button
            text="Schedule a Demo"
            onClick={() => {
              initializeCalendlyPopup();
            }}
          />
        </div>
      </div>
      {#if data?.sector?.hero_section?.stats}
        <div class="flex items-center justify-center">
          <SectorStats
            stats={data?.sector?.hero_section?.stats}
            cover={urlFor(data?.sector?.hero_section?.cover) ?? ""}
          />
        </div>
      {/if}
    </section>
    <section
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px]"
    >
      <div
        class="rounded-[10px] mbl-lg:rounded-[20px] px-[12px] py-[24px] mbl-lg:p-[40px] grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-[20px] mbl-lg:gap-[40px]"
        style="background-color: rgba(230, 235, 247, 0.5);"
      >
        {#each data?.sector?.hero_section?.promises as promise}
          <div
            class="p-[12px] mbl-lg:p-[20px] rounded-[10px] bg-white flex flex-col gap-[20px] h-full w-full"
            style=" box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.05);
  border: solid 0.5px rgba(0, 0, 0, 0.05);"
          >
            <div
              class="size-[40px] mbl-lg:size-[50px] p-[8px] mbl-lg:p-[10px] flex items-center justify-center rounded-[5px]"
              style=" background-color: rgba(230, 235, 247, 0.5);"
            >
              <img src={urlFor(promise?.icon) ?? ""} alt="" srcset="" />
            </div>
            <h4
              class="text-[16px] mbl-lg:text-[20px] leading-[1.4] text-[#33444f] max-w-[266px]"
            >
              {promise?.title}
            </h4>
            <span class="w-[30%] mbl-lg:w-[40%] bg-[#093baa] h-[2px]" />
            <p
              class="texþ-[12px] mbl-lg:text-[14px] leading-[1.6] text-blue-gray font-[300]"
            >
              {promise?.description}
            </p>
          </div>
        {/each}
      </div>
    </section>
    {#if data?.sector?.is_additional_section_active}
      <section
        class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] flex flex-col gap-[24px] tablet:gap-[40px]"
      >
        <div class="flex flex-col desktop:flex-row justify-between">
          <h3
            class="text-[28px] tablet:text-[30px] desktop:text-[40px] leading-[1.3] text-blue-gray max-w-[379px] font-[500]"
          >
            <strong class="text-primary font-[500]"
              >{data?.sector?.addtional_section?.highlighted_text}</strong
            >
            {data?.sector?.addtional_section?.regular_text}
          </h3>
          <p
            class="text-[14px] mbl-lg:text-[16px] laptop:text-[20px] leading-[1.6] text-[#5c6972] font-[300] mt-[8px] mbl-lg:mt-[12px] max-w-[568px]"
          >
            {data?.sector?.addtional_section?.description}
          </p>
        </div>
        <div
          class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-[20px]"
        >
          {#each data?.sector?.addtional_section?.features as feature}
            <div
              class="p-[12px] mbl-lg:p-[20px] rounded-[10px] bg-white flex flex-col gap-[20px] h-full w-full"
              style=" box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.05);
  border: solid 0.5px rgba(0, 0, 0, 0.05);"
            >
              <div
                class="size-[40px] mbl-lg:size-[50px] p-[8px] mbl-lg:p-[10px] flex items-center justify-center rounded-[5px]"
                style=" background-color: rgba(230, 235, 247, 0.5);"
              >
                <img src={urlFor(feature?.icon) ?? ""} alt="" srcset="" />
              </div>
              <h4
                class="text-[16px] mbl-lg:text-[20px] leading-[1.4] text-[#33444f] max-w-[266px]"
              >
                {feature?.title}
              </h4>
              <span class="w-[30%] mbl-lg:w-[40%] bg-[#093baa] h-[2px]" />
              <p
                class="texþ-[12px] mbl-lg:text-[14px] leading-[1.6] text-blue-gray font-[300]"
              >
                {feature?.description}
              </p>
            </div>
          {/each}
        </div>
      </section>
    {/if}
    <section
      class="bg-primary desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] laptop:py-[100px] py-[56px] grid grid-cols-1 desktop:gap-0 gap-[32px] desktop:grid-cols-2 items-center"
    >
      <div class="">
        <h3
          class="text-[28px] tablet:text-[30px] desktop:text-[40px] leading-[1.3] text-white font-[500] max-w-[415px]"
        >
          <strong class="text-secondary font-[500]"
            >{data?.sector?.takeaways_section?.highlighted_text}</strong
          >
          {data?.sector?.takeaways_section?.regular_text}
        </h3>
        <p
          class="text-[14px] mbl-lg:text-[16px] laptop:text-[20px] leading-[1.6] text-[#e8e8e8] font-[300] mt-[12px] mbl-lg:mt-[24px] max-w-[480px]"
        >
          {data?.sector?.takeaways_section?.description}
        </p>
      </div>
      <div class="flex flex-col gap-[40px] max-w-[620px]">
        {#each data?.sector?.takeaways_section?.take_aways as take_away}
          <div class="flex tablet:flex-row flex-col gap-[12px]">
            <div
              class="pb-[4px] tablet:pb-0 tablet:pr-[8px] bg-secondary rounded-t-[4px] tablet:rounded-t-[0px] tablet:!rounded-l-[4px] overflow-hidden h-fit w-fit"
            >
              <div
                class="size-[40px] tablet:size-[60px] bg-white p-[8px] tablet:p-[12px]"
              >
                <img
                  src={urlFor(take_away?.icon) ?? ""}
                  alt=""
                  srcset=""
                  class="object-contain"
                />
              </div>
            </div>
            <div class="max-w-[540px] flex-1">
              <h5
                class="text-[16px] mbl-lg:text-[24px] leading-[1.3] text-white"
              >
                {take_away?.title}
              </h5>
              <p
                class="text-[13px] mbl-lg:text-[18px] leading-[1.3] text-[#e8e8e8] font-[300]"
              >
                {take_away?.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </section>
    <section
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px]"
    >
      <div class="max-w-[508px]">
        <h1
          class="text-[28px] tablet:text-[32px] desktop:text-[46px] leading-[1.3] text-blue-gray"
        >
          How it works?
        </h1>
        <p
          class="text-[14px] mbl-lg:text-[16px] laptop:text-[20px] leading-[1.6] text-[#5c6972] font-[300] mt-[8px] mbl-lg:mt-[12px] mb-[20px] mbl-lg:mb-[40px]"
        >
          {data?.sector?.how_it_works_section?.description}
        </p>
      </div>
      <div
        class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-[20px] mbl-lg:gap-[40px]"
      >
        {#each data?.sector?.how_it_works_section?.features as feature, index}
          <div
            class="p-[12px] mbl-lg:p-[20px] rounded-[10px] bg-white h-full w-full"
            style=" box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.05);
border: solid 0.5px rgba(0, 0, 0, 0.05);"
          >
            <strong
              class="font-bold text-[74px]"
              style="color: rgba(230, 235, 247, 0.5);"
            >
              {"0" + (index + 1)}
            </strong>
            <h4
              class="text-[20px] mbl-lg:text-[26px] leading-[1.2] text-[#33444f] font-[600] -mt-7"
            >
              {feature?.title}
            </h4>
            <hr class="w-full bg-[#e6ebf7] h-[2px] my-[20px]" />
            <p
              class="texþ-[12px] mbl-lg:text-[14px] leading-[1.6] text-blue-gray font-[300]"
            >
              {feature?.description}
            </p>
          </div>
        {/each}
      </div>
    </section>
    <section
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] grid grid-cols-1 laptop:grid-cols-2 gap-[24px] mbl-lg:gap-10"
    >
      <div class="relative">
        <img
          src={urlFor(data?.sector?.features_section?.feature_image) ??
            ""}
          class="pb-[20px] tablet:pb-[40px] pr-[20px] tablet:pr-[40px] h-full w-full tablet:rounded-t-[20px] rounded-t-[10px] overflow-hidden"
          alt=""
          srcset=""
        />
        <img
          src="/tcl-tag.svg"
          class="absolute right-0 bottom-0 h-[50%] w-auto"
          alt=""
          srcset=""
        />
      </div>
      <div class="pl-0 laptop:pl-[100px]">
        <h3
          class="text-[28px] tablet:text-[32px] desktop:text-[46px] leading-[1.3] text-blue-gray"
        >
          Features
        </h3>
        <p
          class="text-[14px] mbl-lg:text-[16px] laptop:text-[18px] leading-[1.6] text-[#5c6972] font-[300] mt-[8px] mbl-lg:mt-[12px] mb-[24px]"
        >
          {data?.sector?.features_section?.description}
        </p>
        <div class="flex flex-col gap-[16px] mbl-lg:gap-[20px]">
          {#each data?.sector?.features_section?.features as feature}
            <p
              class="flex gap-[12px] items-center text-blue-gray leading-[1.4] text-[13px] mbl-lg:text-[16px] laptop:text-[20px] font-[300]"
            >
              <img src="/green-tick.svg" alt="" srcset="" />{feature}
            </p>
          {/each}
        </div>
      </div>
    </section>
    <section
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px]"
    >
      <ContactSalesCard
        heading={data?.sector?.sales_section?.heading}
        para1={data?.sector?.sales_section?.para_1}
        para2={data?.sector?.sales_section?.para_2}
      />
    </section>
    <section
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px]"
    >
      <div
        class=" flex justify-between gap-[24px] tablet:gap-10 flex-col laptop:flex-row"
      >
        <div class="max-w-[405px]">
          <h1
            class="text-[28px] tablet:text-[32px] desktop:text-[46px] leading-[1.3] text-blue-gray"
          >
            Frequently Asked Questions
          </h1>
          <p
            class="text-[14px] mbl-lg:text-[16px] laptop:text-[20px] leading-[1.6] text-[#5c6972] font-[300] mt-[8px] mbl-lg:mt-[12px] mb-[20px] mbl-lg:mb-[40px]"
          >
            Here is the list of FAQ's about us and how we work. Got more
            questions? Feel free to reach us out
          </p>

          <Button
            href="/contact"
            icon={ArrowCorner}
            className=" text-primary border-primary border-2 hover:text-white hover:bg-primary hover:border-primary"
            text="Contact Us"
            outlined={true}
            iconColor="#093BAA"
            iconHoverColor="#ffffff"
          />
        </div>

        <div class="laptop:max-w-[700px] laptop:w-[700px] max-w-full w-full">
          <Accordion accordionItems={data?.sector?.faqs_section?.faqs} />
        </div>
      </div>
    </section>
    {#if data?.sector?.is_partnership_section_active}
      <section
        class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px]"
      >
        <div
          class="flex laptop:flex-row flex-col laptop:justify-between laptop:items-center gap-10"
        >
          <div class="max-w-[526px]">
            <h3
              class="text-[28px] tablet:text-[32px] desktop:text-[46px] leading-[1.3] text-blue-gray"
            >
              Meet Our Trusted Collaborator
            </h3>
            <p
              class="text-[14px] mbl-lg:text-[16px] laptop:text-[20px] leading-[1.6] text-[#5c6972] font-[300] mt-[8px] mbl-lg:mt-[12px]"
            >
              {data?.sector?.partnership_section?.experience}
            </p>
          </div>
          <div
            class="laptop:mx-0 mx-auto max-w-[500px] max-h-[200px] min-w-full mbl-lg:min-w-[500px] min-h-[200px] h-full w-full rounded-[10px] overflow-hidden grid grid-cols-2 group"
            style="box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.05);"
          >
            <div
              class="w-full transition-all duration-200 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 flex flex-col items-center justify-center"
            >
              <img
                src={urlFor(
                  data?.sector?.partnership_section?.company_logo
                ) ?? ""}
                alt=""
                srcset=""
              />
            </div>
            <div
              class="py-[40px] px-[20px] flex flex-col justify-between bg-[#C0C5C8] group-hover:bg-[#3BAA3C] text-white transition-all duration-200"
            >
              <p class="text-[12px] mbl-lg:text-[16px] leading-[1.6]">
                {data?.sector?.partnership_section?.company_description}
              </p>
              <span class="text-[10px] mbl-lg:text-[12px]">
                {data?.sector?.partnership_section?.date}
              </span>
            </div>
          </div>
        </div>
      </section>
    {/if}
  </main>
</div>
