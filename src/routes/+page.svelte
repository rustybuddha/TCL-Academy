<script>
  import Accordion from "../lib/components/accordion.svelte";
  import { superForm } from "sveltekit-superforms/client";
  import Products from "../lib/components/products.svelte";
  import Testimonials from "../lib/components/testimonials.svelte";
  import { analyticsStore } from "$lib/stores/analyticsStore";
  import toast, { Toaster } from "svelte-french-toast";
  import VideoLoader from "../lib/webm-loader/video-loader.svelte";
  import NewsArticlePost from "../lib/components/news-article-post.svelte";
  import Button from "../lib/components/button.svelte";
  import ArrowRight from "../lib/components/icons/arrow-right.svelte";
  import ArrowCorner from "../lib/components/icons/arrow-corner.svelte";
  import { initializeCalendlyPopup } from "$lib/utils";
  const new_event = {
    id: "#tclAnalytics",
    data: { app: "timechainlabs-website" },
    event: "landing-page",
    type: "event",
  };
  analyticsStore.update((existing_events) => [...existing_events, new_event]);

  export let data;
  const { form, enhance, errors, message, delayed } = superForm(data.form);
  const { blogs } = data;
  $: if ($message?.status == "success" && $message.content) {
    toast.success($message.content, {
      position: "top-right",
    });
  } else if ($message?.status == "failed" && $message.content) {
    toast.error("Error occuured while submitting form! Try again.", {
      position: "top-right",
    });
  }

  const accordionItems = [
    {
      id: 1,
      question: "What is Timechain Labs?",
      answer:
        "Timechain Labs is a company working on the BSV technology based on original vision of Satoshi Nakamoto. We work on building the applications of the present with the help of the technology of the future. We provide blockchain development, consultation, contract management, or a full fledged team to be hired for a project in Blockchain.",
    },
    {
      id: 2,
      question: "How can Timechain Labs help my business?",
      answer:
        "Timechain Labs offers a range of tailored solutions that leverage BSV blockchain's capabilities. Whether you're looking to streamline transactions, enhance data integrity, or explore new revenue streams, our expertise has you covered.",
    },
    {
      id: 3,
      question: "How secure are your blockchain solutions?",
      answer:
        "Security is paramount. Timechain Labs employs cutting-edge encryption and authentication protocols to ensure your data remains confidential and tamper-proof, aligning with the highest standards of cybersecurity.",
    },
  ];

  let stats = [
    {
      icon: "/clock.svg",
      value: "25+",
      description: "Cumulative years of experience building",
    },
    {
      icon: "/money.svg",
      value: "400M+",
      description: "Earnings generated on a worldwide scale.",
    },
    {
      icon: "/industry.svg",
      value: "10+",
      description: "Various industries spanning different sectors.",
    },
    {
      icon: "/clients.svg",
      value: "20+",
      description: "Clients who have expressed satisfaction with our services",
    },
    {
      icon: "/global.svg",
      value: "12+",
      description: "Global launches of products on an international scale.",
    },
  ];

  const paradigms = [
    { label: "Efficient", path: "paradigm/efficient.svg" },
    { label: "Scalable", path: "paradigm/scalable.svg" },
    { label: "Tokenless", path: "paradigm/tokenless.svg" },
    { label: "Instant", path: "paradigm/receive.svg" },
    { label: "Atomic Swap", path: "paradigm/atomic.svg" },
    { label: "Sustainable", path: "paradigm/sustainable.svg" },
    { label: "Private", path: "paradigm/private.svg" },
    { label: "Stable", path: "paradigm/stable.svg" },
    { label: "Secure", path: "paradigm/secure.svg" },
    { label: "Smart", path: "paradigm/smart.svg" },
    { label: "Compliant", path: "paradigm/complaint.svg" },
    { label: "Robust", path: "paradigm/robust.svg" },
  ];

  const ledgerServices = [
    {
      heading: "Ledger as a Service",
      points: [
        "Creating value for your business through trust and automation.",
        "We take a first principles approach to building scalable and compliant blockchain solutions.",
        "Launching another blockchain token is easy, but building an innovative product that reaches the masses and lasts? Needs a depth of understanding and experience.",
      ],
    },
    {
      heading: "Join the shared ledger consortium",
      points: [
        "Connect your business to the shared ledger to increase trust for employees, partners, customers, regulators, and auditors.",
      ],
    },
  ];
  const cards = [
    {
      title: "Professional and Efficient",
      content: "I'm impressed with the professionalism and efficiency of this company. They delivered exactly what they promised, and the results exceeded my expectations.",
      date: "MAR 18, 2023"
    },
    {
      title: "Customer-Centric Approach",
      content: "Their customer service and a customer-centric approach make this company stand out. I've experienced a noticeable improvement in my business since partnering with them.",
      date: "MAR 18, 2023"
    },
    {
      title: "Committed to Delivering",
      content: "I highly recommend this company for their commitment to delivering value. They not only met our expectations but exceeded them, proving to be an invaluable partner.",
      date: "MAR 18, 2023"
    }
  ];
  let activeSlideIndex = 0;

  function changeSlide(index) {
    activeSlideIndex = index;
  }

  const products = [
    { label: "neucron", link: "https://neucron.io" },
    { label: "ganak", link: "https://ganak.vercel.app" },
    { label: "assetyzer", link: "https://www.assetyzer.io" },
    { label: "manthan", link: "https://www.manthan.exchange" },
    { label: "dhara", link: "/" },
  ];

  const sectors = [
    { label: "Governments", icon: "/government.svg" },
    { label: "Banks", icon: "/bank.svg" },
    { label: "Universities", icon: "/university.svg" },
    { label: "Regulators", icon: "/regulators.svg" },
    { label: "Startups", icon: "/startups.svg" },
    { label: "NGOs", icon: "/ngos.svg" },
  ];
  const industies = [
    { label: "Cyber Security", icon: "/cyber.svg" },
    { label: "Hotels", icon: "/hotels.svg" },
    { label: "Gaming", icon: "/gaming.svg" },
    { label: "Real Estate", icon: "/realestate.svg" },
    { label: "Travels", icon: "/travels.svg" },
    { label: "Financials", icon: "/financials.svg" },
  ];
  let popup=false;
    import { onMount } from 'svelte';
    import Popup from "../lib/popup.svelte";
    
    let showPopup = true;
  
    onMount(() => {
      setTimeout(() => {
        showPopup = false;
      }, 4000);
    });
</script>
<Toaster />

<div class="flex justify-center overflow-hidden">

  
  {#if showPopup}
    <div class="main fixed top-0 z-20 px-[100px] h-[130px] left-0 right-0 bg-blue-700 text-white flex justify-between items-center bg-[url('/background.png')] bg-cover bg-center">
      <p class="desc">Unlock your business potential with us. <br> Get FREE expert guidance.</p>
      <button class="bt bg-white text-blue-600 px-4py-2 rounded-md">
        Book your slot today!
      </button>
    </div>
  {/if}

  <div class="w-[1440px] max-[1440px]:w-screen">
    <!-- <Popup/> -->
    <section class="relative flex items-center overflow-hidden">
      <div
        class="grid grid-cols-1 laptop:grid-cols-2 gap-10 place-items-center w-full desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] desktop:my-[100px] tablet:my-[50px] my-[24px]"
      >
        <div class="order-2 laptop:order-1">
          <h1
            class="laptop:text-[48px] mbl-lg:text-[36px] mbl-lg:leading-[46px] mbl-sm:text-[30px] text-[20px] font-[500] laptop:leading-[53px] mbl-sm:leading-[36px] leading-[28px]"
          >
            <strong class="text-primary" style="font-weight: 500;">
              Creating value for your business
            </strong>
            through trust and automation
          </h1>

          <p
            class="text-blue-gray font-[300] my-[22px] max-[800px]:my-[15px] max-[360px]:my-[10px] text-[20px] max-[360px]:text-[12px] font-rubik"
          >
            You have the vision to innovate your processes to gain an edge. We
            have inter-disciplinary expertise to establish a robust and enduring
            technology strategy for you.
          </p>
          <Button
            href="/contact"
            icon={ArrowRight}
            iconColor="white"
            iconHoverColor="white"
            text="Want to know more?"
          />
        </div>

        <div class="w-full relative order-1 laptop:order-2">
          <img
            src="/bg-shadow.svg"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[1.1] laptop:scale-[1.15] -z-1"
            alt=""
            srcset=""
            style=" filter: blur(10px);"
          />
          <div
            class=" w-full tablet:p-[28.5px] rounded-3xl relative z-10"
            style="box-shadow: inset -5.1px -5.1px 19px 0 rgba(121, 135, 176, 0.25), inset 3.8px 3.8px 7.6px 0 rgba(121, 135, 176, 0.08);
          background-color: #fff;"
          >
          <video
              autoplay
              muted
              loop
              playsinline
              class=" inset-0 w-full h-full object-cover"
            >
              <source src="/tcl.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
            <!-- <VideoLoader
              className="rounded-2xl"
              webmSrc="https://res.cloudinary.com/dnpq9ntdu/video/upload/v1715351819/iw00jakphjwjyarmffbb.webm"
              mp4Src="https://res.cloudinary.com/dnpq9ntdu/video/upload/v1715353656/zqah3idw9hgamznii4na.mp4"
              poster="/hero-illustration-thumbnail.webp"
              alt="hero illustration"
            /> -->
          </div>
        </div>
      </div>
      <img
        src="/lines-bg.svg"
        class="hidden laptop:block absolute right-0 top-1/2 transform -translate-y-1/2"
        alt=""
        srcset=""
      />
    </section>

    <section
      class="slider flex laptop:gap-[50px] mbl-lg:gap-[30px] gap-[24px] py-[20px] border border-x-0 border-[#e8e8e8]"
    >
      {#each Array(2) as _}
        <div
          class="px-[100px] flex items-center laptop:gap-[50px] mbl-lg:gap-[30px] gap-[24px] w-full slide-track"
        >
          {#each stats as { icon, value, description }}
            <div
              class="flex h-full items-center gap-[8px] mbl-lg:gap-[10px] slide"
            >
              <img
                src={icon}
                class="tablet:h-[30px] h-[24px] tablet:w-[30px] w-[24px]"
                alt=""
              />
              <h1
                class="tablet:text-[30px] text-[20px] text-primary font-[500]"
              >
                {value}
              </h1>
              <p
                class="tablet:w-[180px] w-[90px] text-blue-gray tablet:text-[12px] text-[10px]"
              >
                {description}
              </p>
            </div>
          {/each}
        </div>
      {/each}
    </section>

    <section
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] laptop:my-[100px] my-[64px]"
    >
      <div class="flex justify-between items-end">
        <div>
          <h1
            class="text-primary text-[20px] max-[900px]:text-[18px] max-[360px]:text-[14px]"
          >
            OUR PRODUCTS
          </h1>

          <h1
            class="text-[46px] font-[500] my-[8px] leading-[59px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] max-[900px]:text-[26px] max-[360px]:text-[20px] max-w-[700px]"
          >
            Discover Excellence: <br> Our Product Portfolio Unleashed
          </h1>
        </div>
        <div class="hidden laptop:block">
          <Button
            onClick={initializeCalendlyPopup}
            icon={ArrowCorner}
            className=" text-primary border-primary border-2 hover:text-white hover:bg-primary hover:border-primary"
            text="Book a Demo"
            outlined={true}
            iconColor="#093BAA"
            iconHoverColor="#ffffff"
          />
        </div>
      </div>
      <div
        class=" flex justify-between items-center relative overflow-hidden mt-[40px]"
      >
        <div class="laptop:flex flex-col gap-[30px] w-[138px] hidden">
          {#each products as { label }, index}
            <button
              on:click={() => changeSlide(index)}
              type="button"
              class="font-rubik font-normal capitalize text-[20px] text-start relative {activeSlideIndex ===
              index
                ? 'text-primary font-[400]'
                : 'font-[400]'}"
              >{label}

              {#if activeSlideIndex === index}
                <span
                  class="h-[4px] w-[40px] rounded-[10px] bg-primary absolute -bottom-2 left-0"
                />
              {/if}
            </button>
          {/each}
        </div>
        
        <div
          class="max-w-full laptop:max-w-[800px] flex-1 relative flex-col flex gap-5 laptop:gap-0 laptop:flex-row laptop:overflow-hidden"
        >
          {#each products as { label, link }, index}
            <a
              href={link}
              target="_blank"
              class="h-full w-full flex justify-center items-center"
            >
              <img
                class="slide-animation transition-transform duration-500 laptop:block hidden max-w-[800px]"
                style="transform: translateX({-activeSlideIndex * 100}%);"
                src={`/products/${label}.png`}
                alt={label}
                srcset=""
              />
              <img
                class="laptop:hidden block w-full"
                src={`/products/${label}.png`}
                alt={label}
                srcset=""
              /></a
            >
          {/each}
        </div>
      </div>
      <div class="block laptop:hidden mt-[40px]">
        <Button
          onClick={initializeCalendlyPopup}
          icon={ArrowCorner}
          className=" text-primary border-primary border-2 hover:text-white hover:bg-primary hover:border-primary"
          text="Book a Demo"
          outlined={true}
          iconColor="#093BAA"
          iconHoverColor="#ffffff"
        />
      </div>
    </section>
    <section
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] my-[64px] laptop:my-[100px] flex flex-col gap-[40px]"
    >
      <div
        class="flex flex-col laptop:flex-row justify-between gap-[40px] laptop:items-center"
      >
        <div class="max-w-[545px]">
          <h1
            class="text-primary text-[20px] max-[900px]:text-[18px] max-[360px]:text-[14px] tracking-[4px]"
          >
            ORGANIZATION
          </h1>
          <h1 class="laptop:text-[46px] mbl-lg:text-[32px] text-[24px]">
            Integrated Solutions for Diverse Sectors
          </h1>
          <p
            class="font-rubik text-blue-gray font-[300] text-[20px] max-[900px]:text-[16px] max-[360px]:text-[12px] mt-[8px]"
          >
            Explore our integrated solutions for diverse sectors, driving
            positive change and sustainable development worldwide.
          </p>
          <div class="mt-6">
            <Button
              href="/solutions?type=organization"
              icon={ArrowRight}
              iconColor="white"
              iconHoverColor="white"
              text="Explore All"
            />
          </div>
        </div>
        <div
          class="flex-1 h-fit laptop:max-w-[510px] grid grid-cols-2 gap-[24px]"
        >
          {#each sectors as { label, icon }}
            <div
              class="font-rubik laptop:max-w-[252px] pb-[9px] border-[#B5B5B5] border-b flex items-center gap-[10px]"
            >
              <img src={icon} alt="" class="" />
              <p class="max-[360px]:text-[14px] font-[300]">
                {label}
              </p>
            </div>
          {/each}
        </div>
      </div>
      <div
        class="flex flex-col laptop:flex-row justify-between gap-[40px] laptop:items-center"
      >
        <div
          class="flex-1 h-fit laptop:max-w-[510px] grid grid-cols-2 gap-[24px] laptop:order-1 order-2"
        >
          {#each industies as { label, icon }}
            <div
              class="font-rubik laptop:max-w-[252px] pb-[9px] border-[#B5B5B5] border-b flex items-center gap-[10px]"
            >
              <img src={icon} alt="" class="" />
              <p class="max-[360px]:text-[14px] font-[300]">
                {label}
              </p>
            </div>
          {/each}
        </div>
        <div class="max-w-[545px] laptop:order-2 order-1">
          <h1
            class="text-primary text-[20px] max-[900px]:text-[18px] max-[360px]:text-[14px] tracking-[4px]"
          >
            INDUSTRY
          </h1>
          <h1 class="laptop:text-[46px] mbl-lg:text-[32px] text-[24px]">
            Integrated Solutions for Diverse Industry
          </h1>
          <p
            class="font-rubik text-blue-gray font-[300] text-[20px] max-[900px]:text-[16px] max-[360px]:text-[12px] mt-[8px]"
          >
            Explore our integrated solutions for diverse sectors, driving
            positive change and sustainable development worldwide.
          </p>
          <div class="mt-6">
            <Button
              href="/solutions?type=industry"
              icon={ArrowRight}
              iconColor="white"
              iconHoverColor="white"
              text="Explore All"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      class="bg-primary desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] flex flex-col gap-[100px] max-[900px]:gap-[80px] max-[500px]:gap-[70px] max-[360px]:gap-[64px] py-[64px]"
    >
      <div
        class="grid grid-cols-1 laptop:grid-cols-2 place-items-center laptop:gap-[100px] tablet:gap-[50px] gap-[24px]"
      >
        <div class="laptop:order-1 order-2">
          <h1
            class="text-secondary uppercase font-[500] text-[20px] max-[900px]:text-[18px] max-[360px]:text-[14px]"
          >
            AUTOMATING TRUST
          </h1>

          <div class="flex flex-col gap-[40px] mbl-lg:gap-[60px]">
            {#each ledgerServices as { heading, points }}
              <div>
                <h3
                  class="leading-[41px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] text-[32px] max-[900px]:text-[26px] max-[360px]:text-[20px] mb-[20px] text-white"
                >
                  {heading}
                </h3>
                {#each points as point}
                  <div class="flex gap-[12px] mt-[12px]">
                    <p class="bg-secondary m-1">&nbsp;</p>
                    <p
                      class="font-rubik text-white mbl-lg:text-[20px] font-[300] text-[14px] leading-[19.6px] mbl-lg:leading-[28px]"
                    >
                      {point}
                    </p>
                  </div>
                {/each}
              </div>
            {/each}
          </div>
        </div>
        <div class="laptop:order-2 order-1">
          <img src="/ledger-hero.svg" alt="" srcset="" />
        </div>
      </div>

      <div
        class="grid grid-cols-1 laptop:grid-cols-2 gap-[90px] max-[1200px]:gap-[70px] max-[700px]:gap-[45px] max-[360px]:gap-[24px]"
        id="consultation"
      >
        <!-- FORM INFO -->
        <div class="">
          <h1
            class="text-secondary text-[20px] max-[900px]:text-[18px] max-[360px]:text-[14px]"
          >
            CONSULTATION SOLUTIONS
          </h1>
          <h1
            class="text-[32px] text-white my-[8px] font-[500] leading-[41px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] max-[900px]:text-[26px] max-[360px]:text-[20px]"
          >
            Not sure what to do? Get in touch with our experts today.
          </h1>
          <p
            class="font-rubik text-white text-[20px] mb-[20px] max-[360px]:mb-[10px] max-[900px]:text-[16px] max-[360px]:text-[12px] font-[300]"
          >
            At Timechain Labs we value your time and money, our experts are here
            to consult you on making the right decisions for your business and
            provide a step-by-step guide on implementing blockchain services. We
            provide you with the following services like:
          </p>

          <div
            class="font-rubik grid grid-cols-2 gap-[20px] max-[550px]:grid-cols-1 max-[550px]:gap-[10px]"
          >
            <div
              class="flex items-center gap-[10px] pb-[20px] border-[#116FF5] border-b max-[550px]:border-none max-[550px]:pb-0"
            >
              <div><img src="../../research.svg" alt="" class="" /></div>
              <div class="text-white max-[360px]:text-[14px] font-[300]">
                Research and Strategy
              </div>
            </div>

            <div
              class="flex items-center gap-[10px] pb-[20px] border-[#116FF5] border-b max-[550px]:border-none max-[550px]:pb-0"
            >
              <div>
                <img src="../../blockchain.svg" alt="" class="" />
              </div>
              <div class="text-white max-[360px]:text-[14px] font-[300]">
                Blockchain Architecture
              </div>
            </div>

            <div
              class="flex items-center gap-[10px] pb-[20px] border-[#116FF5] border-b max-[550px]:border-none max-[550px]:pb-0"
            >
              <div><img src="../../product.svg" alt="" class="" /></div>
              <div class="text-white max-[360px]:text-[14px] font-[300]">
                Product Design
              </div>
            </div>

            <div
              class="flex items-center gap-[10px] pb-[20px] border-[#116FF5] border-b max-[550px]:border-none max-[550px]:pb-0"
            >
              <div>
                <img src="../../innovation.svg" alt="" class="" />
              </div>
              <div class="text-white max-[360px]:text-[14px] font-[300]">
                Innovation Sprint
              </div>
            </div>
          </div>
        </div>

        <!-- FORM -->
        <div class="">
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
      </div>

      <div
        class="grid grid-cols-1 laptop:grid-cols-2 gap-[90px] max-[1200px]:gap-[70px] max-[700px]:gap-[45px] max-[360px]:gap-[24px]"
        id="development"
      >
        <div class="laptop:order-1 order-2">
          <img src="../../code-screen.png " alt="" />
        </div>
        <div class=" text-white laptop:order-2 order-1">
          <h1
            class="text-secondary text-[20px] max-[900px]:text-[18px] max-[360px]:text-[14px]"
          >
            DEVELOPMENT SOLUTION
          </h1>

          <h1
            class="text-[32px] font-[500] text-white my-[8px] leading-[41px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] max-[900px]:text-[26px] max-[360px]:text-[20px]"
          >
            Get the rocket fuel you need to implement ideas in your business
          </h1>
          <p
            class="font-rubik text-white font-[300] text-[20px] mb-[20px] max-[360px]:mb-[10px] max-[900px]:text-[16px] max-[360px]:text-[12px]"
          >
            We provide you with a dedicated team of developers who can help you
            use blockchain technology to fuel your business. We will work with
            you to understand your needs and develop a solution that is right
            for you. We provide you with following development services:
          </p>
          <div
            class="font-rubik grid grid-cols-2 gap-[20px] max-[550px]:grid-cols-1 max-[550px]:gap-[10px] mb-[20px] tablet:mb-[40px]"
          >
            <div
              class="flex items-center gap-[10px] pb-[20px] border-[#116FF5] border-b max-[550px]:border-none max-[550px]:pb-0"
            >
              <div><img src="../../ui.svg" alt="" class="" /></div>
              <div class="text-white max-[360px]:text-[14px] font-[300]">
                UI Development
              </div>
            </div>

            <div
              class="flex items-center gap-[10px] pb-[20px] border-[#116FF5] border-b max-[550px]:border-none max-[550px]:pb-0"
            >
              <div><img src="../../api.svg" alt="" class="" /></div>
              <div class="text-white max-[360px]:text-[14px] font-[300]">
                API Development
              </div>
            </div>

            <div
              class="flex items-center gap-[10px] pb-[20px] border-[#116FF5] border-b max-[550px]:border-none max-[550px]:pb-0"
            >
              <div>
                <img src="../../system.svg" alt="" class="" />
              </div>
              <div class="text-white max-[360px]:text-[14px] font-[300]">
                System Integration
              </div>
            </div>
          </div>
          <Button
            href="/contact"
            iconColor="#0EDDBA"
            iconHoverColor="#093BAA"
            icon={ArrowCorner}
            className=" text-secondary border-secondary border-2 hover:text-primary hover:bg-secondary"
            text="Contact Us"
            outlined={true}
          />
        </div>
      </div>
    </section>
    <section
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] laptop:my-[100px] my-[64px]"
      id="whyTCL"
    >
    <h1
      class="text-primary uppercase font-[500] text-[20px] max-[900px]:text-[18px] max-[360px]:text-[14px]"
    >
      WHY TIMECHAIN LABS?
    </h1>
      <div class="">
        <div class="flex w-full justify-between">
          <h1
            class="leading-[41px] w-[480px]:leading-[32px] max-[360px]:leading-[28px] text-[32px] max-[480px]:text-[26px] max-[360px]:text-[20px] text-blue-gray my-[10px]"
          >
            What sets us apart from typical <br> innovative brands and services?
          </h1>
          <p
            class="text-blue-gray font-[300] text-[20px] mb-[20px] w-[652px] font-rubik"
          >
            Launching another blockchain token is easy but building an innovative
            product that reaches the masses and lasts? Needs a depth of
            understanding and experience. We work on building the applications of
            the present with the help of the technology of the future.
          </p>
        </div>
      </div>

      <div
        class="font-rubik grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-5 gap-[20px]"
      >
        <div
          class="col-span-1 desktop:col-span-2 px-[16px] py-[28px] mbl-lg:px-[20px] mbl-lg:py-[50px] flex rounded-[6px] items-center justify-between bg-[#E6EBF7]"
        >
          <div>
            <h1
              class="text-[#33444F] text-[16px] mbl-lg:text-[30px] font-light mbl-lg:font-[400] mbl-lg:leading-[48px]"
            >
              Integrity
            </h1>
            <p
              class="mbl-lg:text-[16px] font-[300] text-[13px] leading-[19.2px] mbl-lg:leading-[25.6px]"
            >
              Integrity is the very foundation of Timechain Labs. Trust of our
              clients is our top priority and we're on a mission to build a
              secure digital future.
            </p>
          </div>
          <div
            class="min-h-[100px] min-w-[100px] mbl-lg:min-h-[200px] mbl-lg:min-w-[200px]"
          >
            <img src="/integrity.svg" alt="" srcset="" />
          </div>
        </div>
        <div
          class="col-span-1 desktop:col-span-3 px-[16px] py-[28px] mbl-lg:px-[20px] mbl-lg:py-[50px] flex rounded-[6px] items-center justify-between bg-[#FFEBED]"
        >
          <div>
            <h1
              class="text-[#33444F] text-[16px] leading-[22.4px] mbl-lg:text-[30px] font-[600] mbl-lg:font-[500] mbl-lg:leading-[48px]"
            >
              Intelligence
            </h1>
            <p
              class="mbl-lg:text-[16px] font-[300] text-[13px] leading-[19.2px] mbl-lg:leading-[25.6px]"
            >
              We're not just about technology at Timechain Labs; we aim to use
              our collective intelligence to drive blockchain solutions that
              make your business life smarter and more efficient.
            </p>
          </div>
          <div
            class="min-h-[100px] min-w-[100px] mbl-lg:min-h-[200px] mbl-lg:min-w-[200px]"
          >
            <img src="/intelligence.svg" alt="" srcset="" />
          </div>
        </div>
        <div
          class="col-span-1 desktop:col-span-3 px-[16px] py-[28px] mbl-lg:px-[20px] mbl-lg:py-[50px] flex rounded-[6px] items-center justify-between bg-[#DCFFDC]"
        >
          <div>
            <h1
              class="text-[#33444F] text-[16px] leading-[22.4px] mbl-lg:text-[30px] font-[600] mbl-lg:font-[500] mbl-lg:leading-[48px]"
            >
              Innovation
            </h1>
            <p
              class="mbl-lg:text-[16px] font-[300] text-[13px] leading-[19.2px] mbl-lg:leading-[25.6px]"
            >
            Innovation isn't just a buzzword for us – it's the spark that lights up unlimited possibilities. Our blockchain solutions are rewriting the innovation playbook to make your digital dreams a reality.
            </p>
          </div>
          <div
            class="min-h-[100px] min-w-[100px] mbl-lg:min-h-[200px] mbl-lg:min-w-[200px]"
          >
            <img src="/innovative.svg" alt="" srcset="" />
          </div>
        </div>
        <div
          class="col-span-1 desktop:col-span-2 px-[16px] py-[28px] mbl-lg:px-[20px] mbl-lg:py-[50px] flex rounded-[6px] items-center justify-between bg-[#FBFBE5]"
        >
          <div>
            <h1
              class="text-[#33444F] text-[16px] leading-[22.4px] mbl-lg:text-[30px] font-[500] mbl-lg:font-[500] mbl-lg:leading-[48px]"
            >
              Immediacy
            </h1>
            <p
              class="mbl-lg:text-[16px] font-[300] text-[13px] leading-[19.2px] mbl-lg:leading-[25.6px]"
            >
              Time won't wait, and neither do we. Timechain Labs leverages the
              speed of BSV blockchain to bring you immediate solutions. Stay in
              control of your digital present and future with us.
            </p>
          </div>
          <div
            class="min-h-[100px] min-w-[100px] mbl-lg:min-h-[200px] mbl-lg:min-w-[200px]"
          >
            <img src="/immediacy.svg" alt="" srcset="" />
          </div>
        </div>
      </div>
      <div
        class="mt-[64px] mbl-lg:mt-[100px] flex flex-col laptop:flex-row gap-[24px] mbl-lg:gap-[50px] laptop:gap-[85px] laptop:items-center justify-start"
      >
        <div class="max-w-[345px]">
          <h1
            class="text-primary uppercase font-[500] text-[20px] max-[900px]:text-[18px] max-[360px]:text-[14px]"
          >
            TIMECHAIN
          </h1>
          <h1
            class="leading-[41px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] text-[32px] max-[900px]:text-[26px] max-[360px]:text-[20px] text-blue-gray my-[10px]"
          >
            New Paradigm in Enterprise Blockchains
          </h1>
        </div>
        <div
          class="grid grid-cols-3 gap-x-[20px] tablet:grid-cols-4 laptop:grid-cols-3 desktop:grid-cols-4 flex-1 gap-y-[20px] tablet:gap-y-[32px] tablet:gap-x-[50px]"
        >
          {#each paradigms as { label, path }}
            <div class="font-rubik flex gap-[10px] items-center">
              <img
                src={path}
                alt=""
                class="mbl-lg:w-[24px] w-[22px] mbl-lg:h-[24px] h-[22px]"
                srcset=""
              />
              <span
                class="text-[16px] mbl-lg:text-[20px] font-[300] leading-[25.6px] mbl-lg:leading-[32px]"
                >{label}</span
              >
            </div>
          {/each}
        </div>
      </div>
    </section>

    <section
      class="px-[100px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[800px]:px-[30px] max-[360px]:px-[10px] mt-[100px] max-[800px]:mt-[80px] max-[360px]:mt-[64px]"
    >
      <h1
        class="text-[48px] max-[1100px]:text-[38px] max-[360px]:text-[20px] font-[500] leading-[53px] max-[1100px]:leading-[45px] max-[500px]:leading-[41.6px] max-[360px]:leading-[28px]"
      >
        Blogs
      </h1>
      <p
        class="font-rubik text-[20px] max-[900px]:text-[18px] max-[360px]:text-[14px] text-blue-gray font-[300] max-w-[568px] mt-[12px]"
      >
        Discover Compassionate Updates and Empowering Resources – Nurturing
        Knowledge for a Better Tomorrow.
      </p>
      <div
        class="my-[40px] grid grid-cols-1 mbl-lg:grid-cols-2 laptop:grid-cols-3 gap-[40px]"
      >
        {#each blogs as post}
          <NewsArticlePost {post} />
        {/each}
      </div>
      <div class="flex tablet:justify-end w-full">
        <Button
          href="/blogs"
          text="View More"
          addClasses="w-[170px] mbl-lg:w-[200px] justify-center"
          icon={ArrowRight}
          iconColor="#ffffff"
          iconHoverColor="#ffffff"
        />
      </div>
    </section>

    <section
      class="px-[100px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[800px]:px-[30px] max-[360px]:px-[10px] my-[100px] max-[800px]:my-[80px] max-[360px]:my-[64px]"
      id="casestudies"
    >
    <h1
      id="case-studies"
      class="text-primary uppercase font-[500] text-[20px] max-[900px]:text-[18px] max-[360px]:text-[14px]"
    >
      CLIENTS PROJECTS
    </h1>
      <div
        class="flex justify-between"
      >

        <h1
          class=" leading-[41px] w-[306px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] text-[32px] max-[900px]:text-[26px] max-[360px]:text-[20px] text-blue-gray my-[10px]"
        >
          Exploring Our Client <br> Ventures
        </h1>
        <p
          class="font-rubik w-[586px] text-blue-gray font-[300] text-[20px] max-[900px]:text-[16px] max-[360px]:text-[12px] mb-[20px] max-[360px]:mb-[10px]"
        >
          Giving power to your vision with the help of our powerful suite of
          products that perform the way you want to and help you to build a
          future-proof business using Blockchain technology.
        </p>
      </div>
      <Products />
    </section>

    <section
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px]"
    >
      <div class=" flex justify-between gap-10 max-[950px]:flex-col">
        <div class="max-w-[505px]">
          <!-- <p
            class="text-primary uppercase font-[500] text-[20px] max-[900px]:text-[18px] max-[360px]:text-[14px]"
          >
            FREQUENTLY ASKED QUESTIONS
          </p> -->
          <h1
            class="text-[40px] leading-[46px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] text-[32px] max-[900px]:text-[26px] max-[360px]:text-[20px] text-blue-gray my-[10px]"
          >
            Common Concerns <br> and Helpful Answers
          </h1>
          <p
            class="font-rubik text-blue-gray text-[18px] max-[900px]:text-[16px] max-[360px]:text-[12px] mb-[20px] max-[360px]:mb-[10px] font-[300]"
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

        <div
          class="font-rubik z-10 max-w-[700px] w-[700px] max-[950px]:max-w-full max-[950px]:w-full"
        >
          <Accordion {accordionItems} />
        </div>
      </div>
    </section>

    <section
      id="testimonials"
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] my-[100px] max-[800px]:my-[80px] max-[360px]:my-[64px]"
    >
    <p
      class="text-primary uppercase font-[500] text-[20px] max-[900px]:text-[18px] max-[360px]:text-[14px]"
    >
    Testimonial
    </p>
      <div
        class="mb-[52px] flex justify-between"
      >
        <h1
          class="leading-[41px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] text-[32px] max-[900px]:text-[26px] max-[360px]:text-[20px] text-blue-gray my-[10px]"
        >
        Don’t take our words for it. <br> Here’s what they have to say
        </h1>
        <p
          class="font-rubik text-blue-gray font-[300] text-[20px] w-[586px] max-[900px]:text-[16px] max-[360px]:text-[12px] mb-[20px] max-[360px]:mb-[10px]"
        >
          Discover the possibilities of using state-of-the-art technology to
          build apps that are scalable, secure, and backed by impeccable
          services.
        </p>
      </div>
      <div class="rounded-[20px] flex flex-col sm:flex-row justify-between items-start gap-[20px] p-[40px] bg-gray-100">
        {#each cards as card}
          <div class="relative flex flex-col bg-white rounded-[10px] shadow p-[20px] w-full sm:w-1/3 h-[201px] mb-4 sm:mb-0">
            <h2 class="text-[20px] font-semibold mb-2">{card.title}</h2>
            <p class="text-[14px] font-rubik font-[300] text-[#5C6972] mb-4">{card.content}</p>
            <p class="absolute bottom-5 justify-bottom text-xs text-gray-400">{card.date}</p>
          </div>
        {/each}
      </div>
      <!-- <Testimonials testimonials={data?.testimonials} /> -->
    </section>
  </div>
</div>

<style>
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-300px * 5));
    }
  }
  .slider {
    background: white;
    height: fit-content;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100%;
    margin: 0px 80px;
  }

  .slider .slide-track {
    animation: scroll 30s linear infinite;
    width: calc(300px * 5);
  }
  .slider .slide {
    height: fit-content;
    width: 300px;
  }
  @media (max-width: 768px) {
    .slider .slide {
      width: 210px;
    }
  }

  .slide-animation {
    animation: slide 3s ease-in-out;
  }

  .transition-transform {
    transition-property: transform;
  }
  .desc{
    color: #FFF;
    font-family: "Bai Jamjuree";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 41.6px */
  }
  .bt{
    display: flex;
    width: 220px;
    height: 60px;
    padding: 14px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid var(--Foundation-Primary-Color-primary-color-900, #041947);
    background: var(--Foundation-white-Text-white-text-500, #FFF);
    box-shadow: 0px 15px 25px 0px rgba(9, 59, 170, 0.10);
  }
  /* .main{
    fill: url('/background.png');
      mix-blend-mode: overlay;
  } */

   .title{
    color: var(--Foundation-primary-Black-primary-black-500, #33444F);
font-family: Rubik;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 64px */
   }
</style>
