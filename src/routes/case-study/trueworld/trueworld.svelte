<script>
  import LogoBox from "$lib/components/logo-box.svelte";
  import DescBox from "$lib/components/desc-box.svelte";
  import CsTextBlock from "$lib/components/cs-text-block.svelte";

  const CompanySpec = {
    type: "Web",
    industry: "Healthcare, Transport",
    geography: "California, USA",
    year: "Since 2018",
    companySize: "Up to $50M",
    segment: "Enterprise (B2B)",
    techStack: ["Svelte", "SvelteKit", "FireStore"]
  };
</script>

<div class="flex justify-center overflow-hidden">
  <!-- FIRST PAGE -->
  <div class="w-[1440px] max-[1440px]:w-screen">
    <section
      class="flex gap-10 items-center w-full max-[1000px]:flex-col px-[100px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[800px]:px-[30px] max-[360px]:px-[16px] my-[75px] max-[800px]:my-[50px] max-[360px]:my-[24px]"
    >
      <div class="max-w-[536px] text-blue-gray">
        <!-- <LogoBox src="/lmon_logo.png" /> -->
        <h1 class="text-3xl text-blue-800 font-bold">TRUEWORLD</h1>

        <h1 class="text-3xl max-[425px]:text-2xl">
          Start your journey to Net Zero Measure, manage & change
        </h1>
        <p
          class="text-blue-gray font-[300] my-[22px] max-[800px]:my-[15px] max-[360px]:my-[10px] text-[20px] max-[360px]:text-[12px]"
        >
          Empowering your decarbonisation journey with a range of smart
          sustainability solutions
        </p>
      </div>

      <!-- h-[400px] w-full object-cover -->
      <div class="overflow-hidden">
        <img
          src="/trueworld.png"
          class="rounded-lg max-w-[600px] max-[1300px]:max-w-[500px] max-[600px]:max-w-full"
          alt=""
        />
      </div>
    </section>

    <!-- IMAGE -->
    <div class="">
      <img src="/tru_hero.png" class="mt-6 w-screen max-[1920px]:h-[550px] max-laptop:h-full" alt="" />
    </div>

    <!-- BRIEF PAGE -->
    <section
      class="flex flex-row-reverse gap-10 justify-between items-center w-full max-[1000px]:flex-col-reverse px-[100px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[800px]:px-[30px] max-[360px]:px-[16px] my-[75px] max-[800px]:my-[50px] max-[360px]:my-[24px]"
    >
      <div class="w-[70%] max-[1000px]:w-[100%]">
        <h1
          class="text-2xl text-[#457DC0] font-bold mb-5 max-[900px]:text-1xl max-[360px]:text-xl"
        >
          BRIEF
        </h1>
        <h1
          class="text-blue-gray text-[32px] my-[8px] font-[500] leading-[41px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] max-[900px]:text-[26px] max-[360px]:text-[20px]"
        >
          Empowering Sustainability with "Net Zero Journey
        </h1>
        <p
          class="text-[20px] mt-[20px] mb-[40px] max-[360px]:mb-[10px] max-[900px]:text-[16px] max-[360px]:text-[12px] font-[300]"
        >
          In an era where environmental concerns have taken center stage,
          TrueWorld recognized the need for a comprehensive solution that
          empowers individuals and organizations to take meaningful steps
          towards achieving net-zero emissions. Introducing the "Net Zero
          Journey" platform – a revolutionary product designed to measure,
          manage, and drive impactful change towards a sustainable future.
        </p>

        <p
          class="text-[20px] mt-[20px] mb-[40px] max-[360px]:mb-[10px] max-[900px]:text-[16px] max-[360px]:text-[12px] font-[300]"
        >
          At TrueWorld, we understand that the road to sustainability can be
          challenging, but it's a journey that we must all embark on. Our
          platform not only calculates your carbon footprint but provides
          personalized guidance and actionable insights to help you reduce it.
          We believe that sustainability should be accessible to all, and our
          Net Zero Journey platform is your compass on this path to a greener,
          more sustainable world.
        </p>

        <p
          class="text-[20px] mt-[20px] mb-[40px] max-[360px]:mb-[10px] max-[900px]:text-[16px] max-[360px]:text-[12px] font-[300]"
        >
          Together, we can turn environmental awareness into action, one step at
          a time, and pave the way for a brighter, more sustainable future for
          generations to come.
        </p>
      </div>

      <!-- <CsTextBlock TechStack={['Svelte','SvelteKit','SupaBase']} />  -->
      <CsTextBlock {...CompanySpec} class="" />
    </section>

    <!-- PROBLEM STATEMENT -->
    <section
      class="flex justify-between items-center w-full max-[1000px]:flex-col max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[800px]:px-[30px] max-[360px]:px-[16px] my-[75px] max-[800px]:my-[50px] max-[360px]:my-[24px]"
    >
      <DescBox
        tag="PROBLEM STATEMENT"
        title="Navigating Data Privacy and Access Conundrums"
        desc="In today digital age, where sensitive information is the lifeblood
          of organizations, maintaining data privacy and ensuring secure access
          have become paramount challenges. As organizations strive to uphold
          data protection regulations and streamline their internal processes, a
          significant predicament arises: how to securely manage workers
          sensitive information while granting authorized access to propel
          business operations forward. This has become a complex puzzle that
          Mintelium faced head-on."
      />

      <div class="overflow-hidden">
        <img
          src="/tru_ps.png"
          class="rounded-lg max-w-[400px] max-[1300px]:max-w-[300px] max-[600px]:max-w-full"
          alt=""
        />
      </div>
    </section>

    <!-- SOLUTION -->
    <section
      class="flex justify-between items-center w-full max-[1000px]:flex-col max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[800px]:px-[30px] max-[360px]:px-[16px] my-[75px] max-[800px]:my-[50px] max-[360px]:my-[24px]"
    >
      <DescBox
        tag="SOLUTION"
        title="Measure, Manage, and Drive Change for a Sustainable Future"
        desc="TrueWorld responded to this challenge by developing the Net Zero Journey platform, a cutting-edge software application that facilitates the transition to a sustainable, net-zero carbon future. This platform provides users with a holistic toolkit to measure their carbon footprint, manage their progress, and drive impactful changes in their daily lives or business operations."
      />

      <div class="overflow-hidden">
        <img
          src="/tru_sol.png"
          class="rounded-lg max-w-[500px] max-[1300px]:max-w-[400px] max-[600px]:max-w-full"
          alt=""
        />
      </div>
    </section>
  </div>
</div>
