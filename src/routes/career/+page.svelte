<script>
  import Button from "$lib/components/button.svelte";
  import ArrowRight from "$lib/components/icons/arrow-right.svelte";

  export let data;

  const { openings } = data;

  const benefits = [
    {
      label: "Team work",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
      icon: "/team-work.svg",
    },
    {
      label: "Secured Future",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
      icon: "/secured.svg",
    },
    {
      label: "Upgrade Skills",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
      icon: "/upgrade.svg",
    },
    {
      label: "Learning Opportunity",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
      icon: "/learning.svg",
    },
  ];
</script>

<main class="w-[1440px] max-[1440px]:w-screen">
  <section
    class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] laptop:my-[100px] tablet:my-[80px] my-[64px]"
  >
    <div
      class="grid grid-cols-1 laptop:grid-cols-2 gap-[30px] tablet:gap-10 laptop:place-items-center w-full"
    >
      <div class="order-2 laptop:order-1">
        <h1
          class="laptop:text-[48px] mbl-lg:text-[36px] mbl-lg:leading-[46px] mbl-sm:text-[30px] text-[20px] font-[500] laptop:leading-[53px] mbl-sm:leading-[36px] leading-[28px]"
        >
          Come for the <strong class="text-primary" style="font-weight: 500;"
            >mission</strong
          >, Stay for the
          <strong class="text-primary" style="font-weight: 500;">team</strong>
        </h1>

        <p
          class="text-blue-gray font-[300] my-[22px] max-[800px]:my-[15px] max-[360px]:my-[10px] text-[20px] max-[360px]:text-[12px]"
        >
          We are assisting teams in working with greater thoughtfulness, and we
          are assembling an exceptional team to achieve this goal.
        </p>
        <Button
          href="#openings"
          icon={ArrowRight}
          iconColor="white"
          iconHoverColor="white"
          text="Join The Team"
        />
      </div>

      <div class="w-full relative order-1 laptop:order-2">
        <img src="/career-bg.png" class="w-full" alt="" srcset="" />
      </div>
    </div>
  </section>
  <section
    class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px]"
  >
    <div
      class="grid grid-cols-1 laptop:grid-cols-2 gap-[30px] tablet:gap-10 place-items-center w-full"
    >
      <div class="w-full">
        <img src="/career-about-bg.png" class="w-full" alt="" srcset="" />
      </div>
      <div class="">
        <h1
          class="laptop:text-[48px] mbl-lg:text-[36px] mbl-lg:leading-[46px] mbl-sm:text-[30px] text-[20px] font-[500] laptop:leading-[53px] mbl-sm:leading-[36px] leading-[28px]"
        >
          About Timechain Labs
        </h1>

        <p
          class="text-blue-gray font-[300] tablet:my-[20px] mbl-sm:my-[15px] my-[10px] tablet:text-[18px] text-[14px]"
        >
          Timechain Labs is a global professional blockchain development
          services company with leading capabilities in blockchain solutions.
          Combining unmatched experience and specialized skills across
          industries, We offer Blockchain Strategy Consulting and Development.

          <br />
          <br />

          Our team deliver on the promise of technology and human ingenuity
          every day, serving clients across globe. We embrace the power of
          change to create value and shared success for our clients, people,
          shareholders, partners and communities.
        </p>
      </div>
    </div>
  </section>
  <section
    class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] laptop:my-[100px] tablet:my-[80px] my-[64px]"
  >
    <div
      class="grid grid-cols-1 laptop:grid-cols-2 gap-[30px] laptop:gap-10 tablet:gap-10 w-full"
    >
      <div class="max-w-[423px]">
        <h1
          class="text-primary uppercase font-[500] tablet:text-[20px] mbl-sm:text-[18px] text-[14px]"
        >
          BENEFITS
        </h1>
        <h1
          class="laptop:leading-[41px] max-[500px]:leading-[32px] leading-[28px] laptop:text-[32px] tablet:text-[26px] text-[20px] text-blue-gray tablet:my-[10px] my-[5px]"
        >
          Why you Should Join Our Awesome Team
        </h1>
        <p
          class=" text-blue-gray font-[300] tablet:text-[20px] mbl-sm:text-[16px] text-[12px] mbl-lg:mb-[20px] mb-[10px]"
        >
          We want to feel like home when you are working at TCL(Timechain Labs)
          & for that we have curated a great set of benefits for you.It all
          starts with the free lunch!
        </p>
      </div>
      <div
        class="grid grid-cols-1 mbl-lg:grid-cols-2 gap-[24px] mbl-lg:gap-[40px]"
      >
        {#each benefits as { label, description, icon }}
          <div>
            <img src={icon} alt="" srcset="" />
            <h5
              class="text-blue-gray tablet:text-[18px] mbl-sm:text-[16px] text-[14px] my-[8px]"
            >
              {label}
            </h5>
            <p class="tetx-[12px] mbl-sm:text-[14px] font-[300]">
              {description}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>
  <section
    class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] laptop:mb-[100px] tablet:mb-[80px] mb-[64px]"
    id="openings"
  >
    <h1
      class="desktop:text-[48px] laptop:text-[38px] text-[20px] font-[500] desktop:leading-[53px] laptop:leading-[45px] mbl-lg:leading-[41.6px] leading-[28px] tablet:mb-[40px] mb-[20px]"
    >
      Open Positions
    </h1>
    {#if openings?.length > 0}
      <div class="flex flex-col gap-[20px]">
        {#each openings as { position, location, availability, form_link }}
          <div
            class="p-[24px] mbl-lg:p-[40px] flex justify-between items-center gap-[10px] rounded-[12px]"
            style="box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.03);
          border: solid 0.5px rgba(0, 0, 0, 0.1);"
          >
            <div>
              <h3
                class=" text-[14px] mbl-sm:text-[16px] mbl-lg:text-[24px] font-[500] tect-blue-gray"
              >
                {position}
              </h3>
              <h5
                class="flex items-center text-[12px] mbl-sm:text-[14px] mbl-lg:text-[18px] font-[300] text-[#33444f] gap-[8px]"
              >
                <span>{location}</span><span
                  class="rounded-full bg-[#c0c5c8] h-[8px] w-[8px]">&nbsp;</span
                ><span>{availability}</span>
              </h5>
            </div>
            <div class="h-fit w-fit">
              <Button href={form_link} openInNewTab={true} text="Apply Now" />
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <p class="text-center mx-auto text-4xl">No Openings yet!</p>
    {/if}
  </section>
</main>
