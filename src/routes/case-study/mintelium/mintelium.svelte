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
  <div class="w-[1920px] max-[1440px]:w-screen">
    <section
      class="flex gap-10 items-center w-full max-[1000px]:flex-col px-[100px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[800px]:px-[30px] max-[360px]:px-[16px] my-[75px] max-[800px]:my-[50px] max-[360px]:my-[24px]"
    >
      <div class="max-w-[536px] text-blue-gray ">
        <!-- <IconButton iconSrc="/mint_logo.png" buttonText="Mintelium" />  -->
        <LogoBox src="/mint_logo.png" text="Mintelium" />

        <h1 class="text-3xl max-[425px]:text-2xl">The IdenDeFi Platform</h1>
        <p
          class="text-blue-gray font-[300] my-[22px] max-[800px]:my-[15px] max-[360px]:my-[10px] text-[20px] max-[360px]:text-[12px]"
        >
          A data bank that stores workers' sensitive information privately and
          securely while granting organizations temporary access with the worker
          maintaining complete control and ownership of it.
        </p>
      </div>

      <!-- h-[400px] w-full object-cover -->
      <div class="overflow-hidden">
        <img
          src="/idendefi.png"
          class="rounded-lg max-w-[600px] max-[1300px]:max-w-[500px] max-[600px]:max-w-full"
          alt=""
        />
      </div>
    </section>

    <!-- IMAGE -->
    <div class="">
        <img src="/mint_hero.png" class="mt-6 w-screen max-[1920px]:h-[550px] max-laptop:h-full" alt="" />
    </div>

    <!-- BRIEF PAGE -->
    <section
      class="flex gap-10 justify-between items-center w-full max-[1000px]:flex-col-reverse px-[100px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[800px]:px-[30px] max-[360px]:px-[16px] my-[75px] max-[800px]:my-[50px] max-[360px]:my-[24px]"
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
          Empowering Data Ownership: Secure Worker Information Access Solution
        </h1>
        <p
          class="text-[20px] mt-[20px] mb-[40px] max-[360px]:mb-[10px] max-[900px]:text-[16px] max-[360px]:text-[12px] font-[300]"
        >
          In a world where data privacy and ownership are paramount, TimeChain
          Labs presents a revolutionary solution that transforms the way
          organizations access and manage workers' sensitive information. This
          case study delves into how our innovative data bank ensures privacy,
          security, and complete control while enabling organizations to access
          vital information when needed.
        </p>

        <p
          class="text-[20px] mt-[20px] mb-[40px] max-[360px]:mb-[10px] max-[900px]:text-[16px] max-[360px]:text-[12px] font-[300]"
        >
          Our cutting-edge data bank employs state-of-the-art encryption and
          authentication protocols, fortifying the fortress around sensitive
          information. This guarantees that only authorized personnel can access
          the data, safeguarding it against any potential breaches.
        </p>

        <p
          class="text-[20px] mt-[20px] mb-[40px] max-[360px]:mb-[10px] max-[900px]:text-[16px] max-[360px]:text-[12px] font-[300]"
        >
          Furthermore, our solution empowers individuals by putting them in
          control of their own data. Through TimeChain Labs, workers have the
          ability to grant or revoke access to their sensitive information,
          ensuring that their privacy is always maintained, and their rights are
          respected.
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
          src="/ps.png"
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
        title="Empowering Data Ownership: Secure Worker Information Access Solution"
        desc="To address the intricate interplay between data privacy and
      organizational needs, TimeChain Labs developed an innovative solution
      that redefines the paradigm of data access. Our groundbreaking
      platform not only preserves the sovereignty of workers sensitive
      information but also introduces a seamless mechanism for organizations
      to obtain the necessary data. By putting data ownership back into the
      hands of the workers and establishing a secure, controlled pathway for
      temporary access, we provide a novel resolution to the data privacy
      and access conundrum that Mintelium and similar organizations grapple
      with."
      />

      <div class="overflow-hidden">
        <img
          src="/brief.png"
          class="rounded-lg max-w-[500px] max-[1300px]:max-w-[400px] max-[600px]:max-w-full"
          alt=""
        />
      </div>
    </section>


  </div>
</div>
