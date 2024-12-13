<script>
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  // Data for the cards
  const cards = [
    {
      title: "Blockchain Proficiency",
      module: "Module 1",
      bgColor: "bg-[#F1EDFF]",
      headColor:'bg-[#9747FF]',
      moduleColor:'text-[#9747FF]',
      items: ["SPV Wallet", "sCrypt Smart Contract", "Fundamentals of Blockchain", "Wallet Integration with Frontend", "1 Portfolio Project"]
    },
    {
      title: "Fullstack Development",
      module: "Module 2",
      bgColor: "bg-[#F0FFF0]",
      headColor:'bg-[#1DB21D]',
      moduleColor:'text-[#1DB21D]',
      items: ["Backend - GoLang", "Figma Basics", "Devops Workshop", "Backend - Express JS","Sprint Management","Frontend : React and Next","Frontend - Svelte and Svelte kit","Backend - Java","Deployment Workshop","Backend - Nest JS","Web Fundamentals","Tailwind CSS Design"]
    },
    {
      title: "Blockchain Mastery",
      module: "Module 3",
      bgColor: "bg-[#EDFFFD]",
      headColor:'bg-[#059E93]',
      moduleColor:'text-[#059E93]',
      items: ["Comparative Analysis of Blockchain Networks", "Tokenomics", "Blockchain Integration Mastery", "Security Token Contracts", "Smart Contract Design and Audit (2 days)", "Devops pipeline for blockchain applications", "Data architecture for onchain applications"]
    },
    {
      title: "Portfolio Maximizer",
      subHeading:"6 Portfolio projects on the following: ",
      module: "Module 4",
      bgColor: "bg-[#EFF7FF]",
      headColor:'bg-[#007AFF]',
      moduleColor:'text-[#007AFF]',
      items: ["Hyperledger Development", "Ethereum Development", "Hedera Hashgraph Development", "Polygon Development", "Corda Development", "Solana Development"]
    },
    {
      title: "Placement Support",
      module: "Module 5",
      bgColor: "bg-[#FFF6ED]",
      headColor:'bg-[#F08112]',
      moduleColor:'text-[#F08112]',
      items: ["Resume Review and Guidance", "2 Mock Interviews and Feedback"]
    }
  ];

  let scrollY = tweened(0, {
    duration: 300,
    easing: cubicOut
  });

  function handleScroll() {
    scrollY.set(window.pageYOffset);
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  // $: leftContentTransform = Math.min(Math.max(-1 * $scrollY, 0), 0); // Limit the scroll
</script>

<div 
  style="transform: translateY({Math.max(-1 * ($scrollY), 0)}px); max-width:1320px!important;"
  class="py-20 lg:flex w-full gap-[100px] m-auto px-5"
>
    <div class=" lg:flex w-full lg:w-1/2">
      <!-- Left Content -->
        <div class="lg:mb-[1px]  mb-[32px]">
          <div class="sticky top-32">
            <div class="transform transition-all duration-500 ease-out">
              <div class=" relative mb-4">
                <p class="text-[#292929] bai-jamjuree-font text-5xl font-[500]">
                  What you'll <span class="text-[#059E93] !font-[500]"> learn?</span>
                </p>
                <img class="justify-end absolute left-[260px]" src="/learn.svg" alt="">
              </div>
              <p class="text-[#5C5C5C] font-[300] text-lg rubik-font mt-5">
                Through our Blockchain Pro course specifically tailored for students and developers
                even without any prior experience in development, you will explore the following modules in detail:
              </p>
            </div>
          </div>
        </div>
    </div>
    <div class="lg:w-1/2">
      {#each cards as card, i}
      <div 
        class="mb-8 {i === cards.length - 1 ? '' : 'mb-32'} sticky"
        style="top: {120 + i * 20}px"
      >
        <div
          class="transform transition-all duration-500 ease-out {card.bgColor} rounded-xl shadow-lg "
        >
        <div class="flex justify-start items-center {card.headColor} rounded-t-[8px] h-[5rem]">
          <p class="text-sm ml-6 flex justify-center items-center !font-[500] text-center rounded-full w-[6rem] h-8 {card.moduleColor} rubik-font bg-[#FFFFFF]" style="font-weight: 300;">{card.module}</p>
          
          <p class="text-2xl ml-5 font-[500] text-[#FFFFFF] bai-jamjuree-font">{card.title}</p>
        </div>
          
          <!-- Flex container with wrapping for items -->
          <div class="flex flex-col border p-6 gap-2">
       
            {#if card.module === 'Module 2'}
            <div class="grid grid-cols-2 lg:grid-cols-2 gap-4">
              <!-- Display subHeading at the top if it exists -->
              {#if card?.subHeading}
              <div class="col-span-2 mt-4 text-lg font-semibold">{card?.subHeading}</div>
            {/if}
          
              <!-- First 7 items in one column -->
              <div>
                {#each card.items.slice(0, 7) as item}
                  <div class="flex items-center mb-2">
                    <img src="/academy/learntick.svg" alt="">
                    <p class="text-[#333333] text-xl !font-[400] rubik-font ml-2">{item}</p>
                  </div>
                {/each}
              </div>
          
              <!-- Remaining items in another column -->
              <div>
                {#each card.items.slice(7) as item}
                  <div class="flex items-center mb-2">
                    <img src="/academy/learntick.svg" alt="">
                    <p class="text-[#333333] text-xl !font-[400] rubik-font ml-2">{item}</p>
                  </div>
                {/each}
              </div>
            </div>
          {:else}
            <!-- Default layout for other modules -->
              {#if card?.subHeading}
              <div class="col-span-2 mt-6 mb-5 text-xl rubik-font font-[400]">{card?.subHeading}</div>
               {/if}
            {#each card.items as item}
            
              <div class="flex items-center mb-2">
                <img src="/academy/learntick.svg" alt="">
                <p class="text-[#333333] text-xl !font-[400] rubik-font ml-2">{item}</p>
              </div>
            {/each}
          {/if}
          
          
          </div>
        </div>
      </div>
    {/each}
    
    </div>
</div>

<style>
:global(body) {
  overflow-x: hidden;
}

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500&display=swap');
.bai-jamjuree-font {
  font-family: 'Bai Jamjuree', sans-serif !important;
}
.rubik-font {
  font-family: 'Rubik', sans-serif !important;
}
</style>