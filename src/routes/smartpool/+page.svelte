<script>
  import PrimaryButton from "$lib/components/primary-button.svelte";
  import Button from "../../lib/components/button.svelte";
  let activetab = "finance_ledger";

  const tabs = [
    {
      id: "finance_ledger",
      title: "Finance Ledger",
      imgSrc: "../../../book.svg",
      description: [
        {
          heading: "Reduced Risk of Fraud",
          content:
            "The decentralized nature of blockchain makes it difficult to commit fraud on the finance subledger.",
          icon: "../../../smartpool/reduced.svg",
        },
        {
          heading: "Improved Security",
          content:
            "The data on the finance subledger is protected by cryptography, making it tamper-proof and secure.",
          icon: "../../../smartpool/security.svg",
        },
        {
          heading: "Increased Efficiency",
          content:
            "The finance subledger can automate many of the manual tasks involved in financial transactions.",
          icon: "../../../smartpool/efficinecy.svg",
        },
        {
          heading: "Increased transparency and traceability",
          content:
            "All transactions on the finance subledger are recorded in a transparent and immutable way.",
          icon: "../../../smartpool/trace.svg",
        },
      ],
    },
    {
      id: "permission_subledger",
      title: "Permissioned Subledger",
      imgSrc: "../../../security-safe.svg",
      description: [
        {
          heading: "Security",
          content:
            "Permissioned subledgers can be more secure than permissionless blockchains because only authorized participants can access the data.",
          icon: "../../../smartpool/shield.svg",
        },
        {
          heading: "Scalability",
          content:
            "Permissioned subledgers can be more scalable than permissionless blockchains because they do not require all participants to download the entire blockchain ledger.",
          icon: "../../../smartpool/scalability.svg",
        },
        {
          heading: "Performance",
          content:
            "Permissioned subledgers can be more performant than because they do not need to use a consensus mechanism to validate transactions.",
          icon: "../../../smartpool/performance.svg",
        },
      ],
    },
    {
      id: "shared_subledger",
      title: "Shared Subledger",
      imgSrc: "../../../profile-2user.svg",
      description: [
        {
          heading: "Efficiency",
          content:
            "Shared subledgers can help to improve the efficiency of cross-organizational processes by eliminating the need for manual data entry and reconciliation.",
          icon: "../../../smartpool/efficinecy.svg",
        },
        {
          heading: "Security",
          content:
            "Shared subledgers can be more secure than traditional methods of data sharing because the data is encrypted and distributed across multiple nodes.",
          icon: "../../../smartpool/shield.svg",
        },
        {
          heading: "Transparency",
          content:
            "Shared subledgers can help to improve the transparency of cross-organizational processes by making it easy to track the flow of data.",
          icon: "../../../smartpool/transperency.svg",
        },
        {
          heading: "Scalability",
          content:
            "Shared subledgers can be scalable to accommodate a large number of participants.",
          icon: "../../../smartpool/scalability.svg",
        },
      ],
    },
  ];
</script>


<div class=" flex justify-center">
  <main class="w-[1440px] max-[1440px]:w-screen">
    <section
      class="py-[60px] flex gap-10 items-center justify-between w-full max-[850px]:flex-col desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px]"
    >
      <div class="max-w-[536px]">
        <h1
          class="text-[48px] max-[1100px]:text-[38px] max-[360px]:text-[20px] font-[500] leading-[53px] max-[1100px]:leading-[45px] max-[500px]:leading-[41.6px] max-[360px]:leading-[28px] text-[#33444F]"
        >
          Timechain Labs Shared Ledger Consortium
        </h1>
        <p class="text-blue-gray font-[300] mt-[10px]">
          Put an end to your search of finding a perfect way to collaborate with
          others and share data securely and efficiently.
        </p>
        <div class="mt-[40px]">
            <Button href="/contact" text="Create your Consortium" />
        </div>
      </div>
      <div class="">
        <img
          src="../../../smartpool/smartpool-bg.png"
          class="max-w-[564px] max-[1120px]:max-w-[360px] max-[850px]:max-w-full"
          alt=""
          srcset=""
        />
      </div>
    </section>

    <section
      class="h-fit bg-primary px-20 py-28 max-[1120px]:px-10 max-[500px]:px-4 relative"
    >
      <div
        class="absolute bg-secondary max-w-[500px] max-[825px]:max-w-[300px] max-h-[288px] pl-4 pr-32 max-[825px]:pr-10 py-8 top-0 right-0 rounded-b-md rounded-r-none"
      >
        <h1 class="text-blue-gray text-md mb-5">
          Want to see additional information about each Shared Ledger?
        </h1>
        <button class="py-3 px-6 border border-primary rounded-lg text-primary">
          Learn More
        </button>
      </div>
      <div class="max-[825px]:mt-[120px]">
        <p class="text-secondary font-bold text-xl mb-3">SMART POOL</p>
        <h1
          class="text-[32px] my-[8px] font-[500] leading-[41px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] max-[900px]:text-[26px] max-[400px]:text-[20px] text-white"
        >
          Current Shared Ledger
        </h1>
      </div>

      <div class="mt-[40px]">
        <div
          class="flex justify-between gap-10 max-[600px]:flex-col max-[600px]:gap-[40px]"
        >
          {#each tabs as tab (tab.id)}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              class="text-white w-1/3 max-[600px]:w-full cursor-pointer"
              on:click={() => (activetab = tab.id)}
            >
              <img
                src={tab.imgSrc}
                alt=""
                class="{activetab === tab.id
                  ? 'border-4 border-t-0 border-l-0 border-r-0'
                  : ''} pb-3 max-[600px]:w-[30px] max-[600px]:h-auto max-[600px]:border-4 max-[600px]:border-t-0 max-[600px]:border-l-0 max-[600px]:border-r-0"
              />
              <p
                class="mt-3 text-[24px] max-[900px]:text-[20px] max-[600px]:text-[16px]"
              >
                {tab.title}
              </p>
              <div
                class="hidden max-[600px]:block mt-[20px] py-[25.5px] px-[12px] rounded-[4px] border"
              >
                <div class="flex-col flex gap-6">
                  {#each tab.description as desc}
                    <div class="flex gap-[10px] items-start justify-start">
                      <img src={desc.icon} alt="icon" srcset="" />
                      <div class="text-white">
                        <h1
                          class="text-[16px] max-[600px]:text-[14px] font-[600] mb-[9px]"
                        >
                          {desc.heading}
                        </h1>
                        <p
                          class="text-[16px] max-[600px]:text-[12px] font-[300]"
                        >
                          {desc.content}
                        </p>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          {/each}
        </div>
        <div class="mt-10 max-[600px]:hidden">
          <div
            class="grid grid-cols-2 max-[700px]:grid-cols-1 gap-6 py-[24px] px-[20px] rounded-[4px] border"
          >
            {#each tabs as tab (tab.id)}
              {#if activetab === tab.id}
                {#each tab.description as desc}
                  <div class="flex gap-[10px] items-start justify-start">
                    <img src={desc.icon} alt="icon" srcset="" />
                    <div class="text-white">
                      <h1
                        class="text-[16px] max-[600px]:text-[14px] font-[600] mb-[9px]"
                      >
                        {desc.heading}
                      </h1>
                      <p class="text-[16px] max-[600px]:text-[12px] font-[300]">
                        {desc.content}
                      </p>
                    </div>
                  </div>
                {/each}
              {/if}
            {/each}
          </div>
        </div>
      </div>
    </section>

    <section
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] my-10"
    >
      <div class="max-w-[562px]">
        <p class="text-primary font-bold text-md">WHY JOIN US?</p>
        <h1 class="text-2xl my-3">
          Timechain Consortium's Adaptive and Secure Solutions
        </h1>
        <p class="text-blue-gray">
          TImechain consortium offers solutions that are not just secure but
          also agile enough to adapt to changing business needs, giving you a
          competitive edge.
        </p>
      </div>
      <div
        class="my-10 grid grid-cols-2 max-[900px]:flex items-center max-[900px]:flex-col gap-[30px]"
      >
        <div
          class="relative max-w-[610px] max-h-[390px] overflow-hidden cursor-pointer rounded-lg"
        >
          <img
            src="../../../smart-pool-card-1.png"
            class="transition-all duration-300 hover:scale-[1.1]"
            alt=""
            srcset=""
          />
          <div
            class="absolute py-6 px-4 bottom-0 text-white w-full"
            style="background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));"
          >
            <h1 class="font-[600px] text-[20px] mb-[8px] max-[600px]:font-[500] max-[600px]:text-[14px] max-[600px]:leading-[22.4px]">Collaborative Environment</h1>
            <p class="text-[20px] font-[300] leading-[32px] max-[600px]:text-[12px] max-[600px]:leading-[19.2px]">
              Experience hassle-free collaboration from anywhere, anytime.
            </p>
          </div>
        </div>
        <div
          class="relative max-w-[610px] max-h-[390px] overflow-hidden cursor-pointer rounded-lg"
        >
          <img
            src="../../../smart-pool-card-2.png"
            class="transition-all duration-300 hover:scale-[1.1]"
            alt=""
            srcset=""
          />
          <div
            class="absolute py-6 px-4 bottom-0 text-white w-full"
            style="background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));"
          >
            <h1 class="font-[600px] text-[20px] mb-[8px] max-[600px]:font-[500] max-[600px]:text-[14px] max-[600px]:leading-[22.4px]">Trust and Transparency</h1>
            <p class="text-[20px] font-[300] leading-[32px] max-[600px]:text-[12px] max-[600px]:leading-[19.2px]">
              These are the foundation of our vision, we believe in providing
              trust and transparency to our clients.
            </p>
          </div>
        </div>
        <div
          class="relative max-w-[610px] max-h-[390px] overflow-hidden cursor-pointer rounded-lg"
        >
          <img
            src="../../../smart-pool-card-3.png"
            class="transition-all duration-300 hover:scale-[1.1]"
            alt=""
            srcset=""
          />
          <div
            class="absolute py-6 px-4 bottom-0 text-white w-full"
            style="background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));"
          >
            <h1 class="font-[600px] text-[20px] mb-[8px] max-[600px]:font-[500] max-[600px]:text-[14px] max-[600px]:leading-[22.4px]">Agile and Secure</h1>
            <p class="text-[20px] font-[300] leading-[32px] max-[600px]:text-[12px] max-[600px]:leading-[19.2px]">
              Collaborate with people to make your business Agile with
              timechain's security.
            </p>
          </div>
        </div>
        <div
          class="relative max-w-[610px] max-h-[390px] overflow-hidden cursor-pointer rounded-lg"
        >
          <img
            src="../../../smart-pool-card-4.png"
            class="transition-all duration-300 hover:scale-[1.1]"
            alt=""
            srcset=""
          />
          <div
            class="absolute py-6 px-4 bottom-0 text-white w-full"
            style="background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));"
          >
            <h1 class="font-[600px] text-[20px] mb-[8px] max-[600px]:font-[500] max-[600px]:text-[14px] max-[600px]:leading-[22.4px]">Personal Sub-Ledger</h1>
            <p class="text-[20px] font-[300] leading-[32px] max-[600px]:text-[12px] max-[600px]:leading-[19.2px]">
              Provides you with absolute control over your data and
              transactions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px]"
    >
      <div class="max-w-[562px]">
        <p class="text-primary font-bold text-md">
          HOW TO JOIN LEDGER CONSORTIUM
        </p>
        <h1 class="text-2xl my-3">
          Create your consortium within 3 easy steps
        </h1>
        <p class="text-blue-gray">
          TImechain consortium offers solutions that are not just secure but
          also agile enough to adapt to changing business needs, giving you a
          competitive edge.
        </p>
      </div>
      <div class="flex max-[800px]:flex-col my-10 gap-10">
        <div class="relative pb-4 pr-4 pl-9 pt-9">
          <p
            class="absolute -top-4 left-2 -z-9 text-[#E6EBF7] text-9xl font-bold"
            >1</p
          >
          <div class="max-w-[353px] relative z-10 max-[550px]:max-w-full">
            <h1 class="text-2xl mb-3">Create a Shared Ledger Consortium</h1>
            <p class="text-blue-gray">
              After getting your Business ID, one can create their own
              consortium and personalize it to their own business needs.
            </p>
          </div>
        </div>
        <div class="relative pb-4 pr-4 pl-9 pt-9">
          <p
            class="absolute -top-4 left-2 -z-9 text-[#E6EBF7] text-9xl font-bold"
            >2</p
          >
          <div class="max-w-[353px] relative z-10 max-[550px]:max-w-full">
            <h1 class="text-2xl mb-3">Invite your team to the consortium</h1>
            <p class="text-blue-gray">
              After setting up the consortium, finally you're all set to invite
              other fellow participants to collaborate.
            </p>
          </div>
        </div>
        <div class="relative pb-4 pr-4 pl-9 pt-9">
          <p
            class="absolute -top-4 left-2 -z-9 text-[#E6EBF7] text-9xl font-bold"
            >3</p
          >
          <div class="max-w-[353px] relative z-10 max-[550px]:max-w-full">
            <h1 class="text-2xl mb-3">Sign up to Timechain Value Network</h1>
            <p class="text-blue-gray">
              Sign up and get your Timechain Business ID. This ID is unique and
              will be generated once per business.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="py-[60px] flex gap-10 justify-between w-full max-[850px]:flex-col desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px]"
    >
      <div class="max-w-[536px]">
        <p class="text-primary font-bold text-md">WHAT ARE YOU WAITING FOR?</p>
        <h1 class=" text-2xl my-3">
          Seamless Agile Subledgers for driving the business securely
        </h1>
        <p class="text-blue-gray my-3">
          TImechain consortium offers solutions that are not just secure but
          also agile enough to adapt to changing business needs, giving you a
          competitive edge.
        </p>
        <div class="mt-5"> <Button href="/contact"  text="Join the Movement" /> 
        </div>
      </div>
      <div class="">
        <img
          src="../../../smart-pool-man.png"
          class="max-w-[564px] max-[1120px]:max-w-[360px] max-[850px]:max-w-full"
          alt=""
          srcset=""
        />
      </div>
    </section>
  </main>
</div>
