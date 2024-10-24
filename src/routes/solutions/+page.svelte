<script>
  import SectorCard from "$lib/components/sector-card.svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import ContactSalesCard from "$lib/components/contact-sales-card.svelte";

  export let data;
  $: active_tab = $page?.url?.searchParams?.get("type") ?? "organization";
</script>

<div class="flex justify-center overflow-hidden">
  <div class="w-[1440px] max-[1440px]:w-screen">
    <main
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] my-[50px] max-[800px]:my-[40px]"
    >
      <section
        class="flex flex-col items-center justify-center gap-[12px] mb-[40px]"
      >
        <strong
          class="uppercase text-[16px] mbl-lg:text-[20px] text-primary leading-[1.4] tracking-[0.4px] font-[500]"
          >solutions</strong
        >
        <h2
          class="laptop:text-[60px] tablet:text-[48px] mbl-lg:text-[32px] text-[28px] leading-[1.4] text-blue-gray text-center tablet:max-w-[670px] max-w-[450px]"
        >
          Integrated Solutions for Diverse Sectors
        </h2>
        <p
          class="text-center tablet:text-[20px] font-[300] text-[16px] text-blue-gray max-w-[580px]"
        >
          Discover our comprehensive solutions tailored for various
          organizations and industries, fostering global progress and
          sustainable development
        </p>
      </section>
      <section class="">
        <div class="w-full flex items-center justify-center gap-[20px]">
          <button
            on:click={() => {
              goto(`?type=organization`);
            }}
            type="button"
            class="text-[20px] font-[400] w-[164px] py-[13px] border-2 border-white {active_tab ===
            'organization'
              ? ' border-b-primary'
              : ''}">Organization</button
          >
          <button
            on:click={() => {
              goto(`?type=industry`);
            }}
            type="button"
            class="text-[20px] font-[400] w-[164px] py-[13px] border-2 border-white {active_tab ===
            'industry'
              ? ' border-b-primary'
              : ''}">Industry</button
          >
        </div>
        <div class="mt-[34px]">
          <div
            class="grid grid-cols-3 max-[1150px]:grid-cols-2 max-[700px]:grid-cols-1 place-items-center gap-[40px] max-[800px]:gap-[30px]"
          >
            {#each data[active_tab] as sector}
              <SectorCard {sector} />
            {/each}
          </div>
        </div>
      </section>
      <section
        class="laptop:mt-[120px] tablet:mt-[100px] mt-[80px] laptop:mb-[100px] tablet:mb-[80px] mb-[64px]"
      >
        <ContactSalesCard
          getInTouch={true}
          heading="Ready to take the next step? "
          para1="Are you seeking expert guidance tailored to your specific needs? Look no further! Our seasoned consultation expert is here to offer you personalized advice and support.!"
          para2="Get a FREE roadmap with an expert consultation. Schedule yours today"
        />
      </section>
    </main>
  </div>
</div>
