<script>
  import { urlFor } from "$lib/image";
  import { parseText } from "$lib/utils";
  import Testimonials from "$lib/components/testimonials.svelte";
  import Button from "$lib/components/button.svelte";
  import ArrowRight from "$lib/components/icons/arrow-right.svelte";
  import { onMount, afterUpdate } from "svelte";
  import { superForm } from "sveltekit-superforms/client";
  import toast, { Toaster } from "svelte-french-toast";
  export let data;
  export let { case_study, testimonials } = data;
  console.log(testimonials);
  const sections = ["challenge", "solution", "benefits"];
  let activeSection = sections[0];
  const { form, enhance, errors, message, delayed } = superForm(data.form);
  $: if ($message?.status == "success" && $message.content) {
    toast.success($message.content, {
      position: "top-right",
    });
  } else if ($message?.status == "failed" && $message.content) {
    toast.error("Error occuured while submitting form! Try again.", {
      position: "top-right",
    });
  }

  const handleScroll = () => {
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom > 0) {
          activeSection = section;
          break;
        }
      }
    }
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  afterUpdate(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<Toaster />
<main>
  <!-- {JSON.stringify(case_study)} -->
  <section
    class="grid grid-cols-1 tablet:grid-cols-2 gap-[40px] desktop:gap-[80px] pr-[100px] max-[1200px]:pr-[40px] max-[1150px]:pr-[30px] max-[768px]:px-0"
  >
    <div>
      <img
        class="w-screen tablet:w-fit"
        src={urlFor(case_study.hero_image) ?? ""}
        alt=""
      />
    </div>
    <div
      class="flex justify-center flex-col gap-[30px] laptop:gap-[63px] tablet:px-0 mbl-sm:px-[30px] px-[16px]"
    >
      <div class="grid grid-cols-3 gap-[50px] desktop:gap-[80px]">
        {#each case_study.stats as { stat, label }}
          <div>
            <h2
              class="text-primary font-[600] text-[30px] laptop:text-[48px] desktop:text-[64px]"
            >
              {stat}
            </h2>
            <p class="text-blue-gray font-[300] text-[14px] mbl-sm:text-[16px]">
              {label}
            </p>
          </div>
        {/each}
      </div>
      <div>
        <h5
          class="text-[20px] desktop:text-[24px] mb-[0] desktop:mb-[20px] font-[500] text-primary uppercase leading-[38.4px]"
        >
          quick stats
        </h5>
        <div
          class="grid grid-cols-2 gap-x-[56px] tablet:gap-x-[40px] desktop:gap-x-[63px] gap-y-[12px] laptop:gap-y-[24px]"
        >
          {#each Object.entries(case_study.about) as [key, value]}
            <div class="">
              <h6
                class="font-[500] text-[20px] laptop:text-[26px] desktop:text-[32px] leading-[41.6px] text-blue-gray"
              >
                {parseText(key)}
              </h6>
              <p
                class="text-blue-gray font-[300] text-[14px] mbl-sm:text-[16px]"
              >
                {value}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  <section
    class="px-[100px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[360px]:px-[16px] mt-[16px]"
  >
    <div class="sticky top-0 bg-white">
      <div
        class="flex items-center justify-center gap-[50px] tablet:gap-[100px]"
      >
        {#each sections as section, index}
          <button
            class="py-[20px] cursor-default capitalize text-[16px] tablet:text-[20px] font-[400] leading-[32px]"
            class:active={section === activeSection}>{section}</button
          >
        {/each}
      </div>
    </div>
    <div
      class=" flex flex-col gap-[64px] tablet:gap-[100px] my-[64px] tablet:my-[90px]"
    >
      {#each sections as section, index}
        <div id={section} class="grid grid-cols-1 laptop:grid-cols-2">
          <div
            class={index % 2 == 0
              ? "px-0 py-5 mbl-lg:py-8 laptop:py-0 laptop:pr-[40px] desktop:pr-[60px] order-2 laptop:order-1"
              : "px-0 py-5 mbl-lg:py-8 laptop:py-0 laptop:pl-[40px] desktop:pl-[60px] order-2 laptop:order-2"}
          >
            <p
              class="text-[16px] mbl-lg:text-[20px] font-[400] leading-[32px] text-primary uppercase"
            >
              {section}
            </p>
            <h4
              class="text-[16px] mbl-sm:text-[20px] tablet:text-[26px] tablet:leading-[36.5px] desktop:text-[32px] desktop:leading-[41.6px] text-blue-gray font-[400] my-[6px]"
            >
              {case_study[section].heading}
            </h4>
            <p
              class="font-[300] text-[12px] mbl-sm:text-[14px] tablet:text-[16px] tablet:leading-[25.6px] desktop:text-[20px] desktop:leading-[32px]"
            >
              {case_study[section].description}
            </p>
          </div>
          <div
            class={index % 2 == 0
              ? "order-1 laptop:order-2"
              : "order-1 laptop:order-1"}
          >
            <img
              class="rounded-[8px] mbl-lg:rounded-[20px] w-full"
              src={urlFor(case_study[section].image) ?? ""}
              alt=""
              srcset=""
            />
          </div>
        </div>
      {/each}
    </div>
  </section>
  <section
    class="bg-primary px-[100px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[360px]:px-[16px] py-[40px] tablet:py-[77px] flex flex-col laptop:flex-row gap-[24px] tablet:gap-[38px] justify-between"
  >
    <div class="max-w-[467px]">
      <h4
        class="text-[16px] mbl-lg:text-[20px] font-[400] leading-[32px] text-secondary uppercase"
      >
        {case_study.testimonial.subtitle}
      </h4>
      <h2
        class="text-[20px] mbl-lg:text-[28px] laptop:text-[32px] front-[400] laptop:leading-[41.6px] text-white my-[8px]"
      >
        {case_study.testimonial.heading}
      </h2>
      <p
        class="text-[16px] mbl-lg:text-[20px] font-[300] mbl-lg:leading-[32px] text-white"
      >
        {case_study.testimonial.description}
      </p>
    </div>
    <div class="h-full max-w-full laptop:max-w-[500px] desktop:max-w-[735px] w-full">
      <Testimonials {testimonials} small={true} />
    </div>
  </section>
  <section
    class="px-[100px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[360px]:px-[16px] my-[64px] tablet:my-[90px]"
  >
    <div class="max-w-[550px] mb-[40px]">
      <p
        class="text-[16px] mbl-lg:text-[20px] font-[400] leading-[32px] text-primary uppercase"
      >
        engagement
      </p>
      <h4
        class="text-[16px] mbl-sm:text-[20px] tablet:text-[26px] tablet:leading-[36.5px] desktop:text-[32px] desktop:leading-[41.6px] text-blue-gray font-[400] my-[6px]"
      >
        {case_study.engagement.heading}
      </h4>
      <p
        class="font-[300] text-[12px] mbl-sm:text-[14px] tablet:text-[16px] tablet:leading-[25.6px] desktop:text-[20px] desktop:leading-[32px]"
      >
        {case_study.engagement.description}
      </p>
    </div>
    <div
      class="grid grid-cols-2 mbl-lg:grid-cols-3 desktop:grid-cols-5 gap-[20px] tablet:gap-[40px] desktop:gap-[70px]"
    >
      {#each case_study.engagement.phases as phase}
        <div class="">
          <h4
            class="text-[20px] laptop:text-[24px] font-[600] text-blue-gray laptop:leading-[33.6px]"
          >
            {phase.name}
          </h4>
          <ul
            class="mt-[12px] tablet:mt-[20px] flex flex-col gap-[10px] tablet:gap-[20px]"
          >
            {#each phase.items as item}
              <li
                class="text-[12px] mbl-sm:text-[14px] mbl-lg:text-[16px] mbl-lg:leading-[25.6px] text-blue-gray"
              >
                {item}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </section>
  <section
    class="px-[100px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[360px]:px-[16px]"
  >
    <h3
      class="text-[20px] text-blue-gray mbl-sm:text-[28px] laptop:text-[40px] font-[600] mbl-sm:leading-[32px] laptop:leading-[48px]"
    >
      Tech Stack
    </h3>
    <p
      class="max-w-[564px] text-[14px] mbl-sm:text-[16px] tablet:text-[18px] font-[300] tablet:leading-[28.8px] mb-[40px] text-blue-gray"
    >
      {case_study.tech_stack.description}
    </p>
    <div
      class="flex justify-start gap-x-[50px] gap-y-[20px] laptop:gap-y-[60px] laptop:gap-x-[88px] flex-wrap"
    >
      {#each case_study.tech_stack.logos as logo}
        <img
          src={urlFor(logo) ?? ""}
          class="max-h-[20px] mbl-sm:max-h-[30px] laptop:max-h-[40px] w-auto"
          alt=""
          srcset=""
        />
      {/each}
    </div>
  </section>
  <section
    class="px-[100px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[360px]:px-[16px] my-[64px] tablet:my-[90px] grid grid-cols-1 tablet:grid-cols-2 tablet:gap-0 gap-[30px]"
  >
    <div class="px-0 tablet:pr-[70px] laptop:pr-[100px]">
      <div class="bg-primary w-fit p-[10px] rounded-[8px] mb-[20px]">
        <img src="/contact.svg" class="" alt="" srcset="" />
      </div>
      <h6
        class="font-[500] text-[20px] laptop:text-[26px] desktop:text-[32px] leading-[41.6px] text-blue-gray"
      >
        Let’s Talk
      </h6>
      <p
        class="font-[300] text-[12px] mbl-sm:text-[14px] tablet:text-[16px] tablet:leading-[25.6px] desktop:text-[20px] desktop:leading-[32px] text-blue-gray mb-[40px]"
      >
        Have a project in mind or questions about our services? Fill out the
        form given alongside and we will get back to you shortly.
      </p>
      <Button
        text="Contact Sales"
        href="/contact"
        outlined={true}
        icon={ArrowRight}
        iconColor="#093BAA"
        iconHoverColor="#ffffff"
        className="bg-white hover:bg-primary text-primary hover:text-white border-2 border-primary"
      />
    </div>
    <div>
      <div class="p-[20px] bg-[#E6EBF7] rounded-[24px]">
        <form
          action="?/consultRequest"
          method="POST"
          use:enhance
          novalidate
          class="w-full flex flex-col px-5 py-8 rounded-[16px] bg-white"
        >
          <div class="flex-1 flex flex-col mb-5">
            <input
              name="senderName"
              id="senderName"
              placeholder="Full Name"
              class="rounded-[6px] py-3 px-2"
              type="text"
              bind:value={$form.senderName}
              required
              style="border: 1px solid rgba(0, 0, 0, 0.1);"
            />
            {#if $errors.senderName != null}
              <span class="text-red-600 text-xs font-medium"
                >{$errors.senderName[0]}</span
              >
            {/if}
          </div>

          <div class="flex-1 flex flex-col mb-5">
            <input
              name="senderEmail"
              id="senderEmail"
              placeholder="Email Address"
              class="rounded-[6px] py-3 px-2"
              type="email"
              bind:value={$form.senderEmail}
              required
              style="border: 1px solid rgba(0, 0, 0, 0.1);"
            />
            {#if $errors.senderEmail != null}
              <span class="text-red-600 text-xs font-medium"
                >{$errors.senderEmail[0]}</span
              >
            {/if}
          </div>
          <div class="flex-1 flex flex-col mb-5">
            <input
              name="senderCompanyName"
              id="senderCompanyName"
              placeholder="Company’s Name"
              class="rounded-[6px] py-3 px-2"
              type="text"
              bind:value={$form.senderCompanyName}
              required
              style="border: 1px solid rgba(0, 0, 0, 0.1);"
            />
            {#if $errors.senderCompanyName != null}
              <span class="text-red-600 text-xs font-medium"
                >{$errors.senderCompanyName[0]}</span
              >
            {/if}
          </div>

          <div class="flex-1 flex flex-col mb-5">
            <textarea
              name="senderDescription"
              bind:value={$form.senderDescription}
              placeholder="Tell us more..."
              id="senderDescription"
              class=" rounded-[6px] p-2 h-32 resize-none"
              required
              style="border: 1px solid rgba(0, 0, 0, 0.1);"
            />
            {#if $errors.senderDescription != null}
              <span class="text-red-600 text-xs font-medium"
                >{$errors.senderDescription[0]}</span
              >
            {/if}
          </div>

          <Button text="Send Request" htmlType="submit" />
        </form>
      </div>
    </div>
  </section>
</main>

<style>
  .active {
    border-bottom: 3px solid #093baa;
  }
</style>
