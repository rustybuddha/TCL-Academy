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
  style="transform: translateY({Math.max(-1 * ($scrollY), 0)}px);"
  class="!w-full py-20 lg:flex m-auto px-5 max-w-[1320px]"
>
    <div class="!w-full lg:flex  lg:w-1/2">
      <!-- Left Content -->
        <div class="lg:mb-[1px] mb-[32px] lg:w-[90%]">
          <div class="sticky top-32">
            <div class="transform transition-all duration-500 ease-out">
              <div class="relative mb-4">
                <p class="text-[#292929] bai-jamjuree-font text-3xl text-center sm:text-left sm:text-5xl font-[500]">
                  What you'll <span class="text-[#059E93] !font-[500]"> learn?</span>
                </p>
                <!-- Image always below the "learn" text on small screens -->
                <img class="absolute custom-margin left-1/4 transform ml-[150px]  sm:ml-[260px] -translate-x-1/2 sm:relative sm:mt-2 sm:left-auto sm:right-0 sm:translate-x-0 w-[80px] sm:w-[115px]" src="/learn.svg" alt="">
              </div>
              
              <p class="text-[#5C5C5C] font-[300] text-sm text-center sm:text-left sm:text-lg rubik-font mt-5 md:pr-[50px]">
                Through our Blockchain Pro course specifically tailored for students and developers
                even without any prior experience in development, you will explore the following modules in detail:
              </p>
            </div>
          </div>
        </div>
    </div>
    <!-- desktop -->
    <div class="lg:w-1/1 block sm:hidden">
      {#each cards as card, i}
      <div 
      class="mb-8 {i === cards.length - 1 ? '' : 'mb-32'} sticky"
      style="top: calc(120px + {i} * 50px);"
  >
        <div
          class="transform transition-all duration-500 ease-out {card.bgColor} rounded-xl shadow-lg "
        >
        <div class="flex justify-start items-center {card.headColor} rounded-t-[8px] h-[3.5rem] sm:h-[5rem]">
          <p class="text-[12px] ml-6 flex justify-center items-center !font-[500] text-center rounded-full w-[5rem] sm:w-[6rem] h-6 sm:h-8 {card.moduleColor} rubik-font bg-[#FFFFFF]" style="font-weight: 300;">{card.module}</p>
          
          <p class=" text-lg sm:text-2xl ml-5 font-[500] text-[#FFFFFF] bai-jamjuree-font">{card.title}</p>
        </div>
          
          <!-- Flex container with wrapping for items -->
          <div class="flex flex-col p-6 gap-2">
       
            {#if card.module === 'Module 2'}
            <div class="grid grid-cols-1 md:w-[500px] lg:grid-cols-2 lg:gap-4">
              <!-- Display subHeading at the top if it exists -->
              {#if card?.subHeading}
                <div class="col-span-2 mt-4 text-lg font-semibold">{card?.subHeading}</div>
              {/if}
          
              <!-- Mobile View (only visible on small screens) -->
              <div class="sm:hidden">
                {#each card.items as item}
                  <div class="flex items-center mb-2">
                    <img src="/academy/learntick.svg" alt="">
                    <p class="text-[#333333] text-sm !font-[400] rubik-font ml-2">{item}</p>
                  </div>
                {/each}
              </div>
          
              <!-- Desktop View (hidden on small screens) -->
              
                <!-- First 7 items in one column -->
                <div class="hidden sm:flex sm:flex-col">
                  {#each card.items.slice(0, 7) as item}
                    <div class="flex items-center mb-2">
                      <img src="/academy/learntick.svg" alt="">
                      <p class="text-[#333333] text-sm sm:text-xl !font-[400] rubik-font ml-2">{item}</p>
                    </div>
                  {/each}
                </div>
          
                <!-- Remaining items in another column -->
                <div class="hidden sm:flex sm:flex-col">
                  {#each card.items.slice(7) as item}
                    <div class="flex items-center mb-2">
                      <img src="/academy/learntick.svg" alt="">
                      <p class="text-[#333333] text-sm sm:text-xl !font-[400] rubik-font ml-2">{item}</p>
                    </div>
                  {/each}
                </div>
           
            </div>
          {:else}
            <!-- Default layout for other modules -->
            {#if card?.subHeading}
              <div class="col-span-2 mt-3 mb-2 sm:mt-6 sm:mb-5 text-sm sm:text-xl rubik-font font-[400]">{card?.subHeading}</div>
            {/if}
            {#each card.items as item}
              <div class="flex items-center mb-2">
                <img src="/academy/learntick.svg" alt="">
                <p class="text-[#333333] text-sm sm:text-xl !font-[400] rubik-font ml-2">{item}</p>
              </div>
            {/each}
          {/if}
          
          
          </div>
        </div>
      </div>
    {/each}
    
    </div>
    <!-- Desktop -->
    <div class="lg:w-1/1 hidden sm:block">
      {#each cards as card, i}
      <div 
      class="mb-8 {i === cards.length - 1 ? '' : 'mb-32'} sticky"
      style="top: calc(120px + {i} * 68px);"
  >
        <div
          class="transform transition-all duration-500 ease-out {card.bgColor} rounded-xl shadow-lg "
        >
        <div class="flex justify-start items-center {card.headColor} rounded-t-[8px] h-[3.5rem] sm:h-[5rem]">
          <p class="text-[12px] ml-6 flex justify-center items-center !font-[500] text-center rounded-full w-[5rem] sm:w-[6rem] h-6 sm:h-8 {card.moduleColor} rubik-font bg-[#FFFFFF]" style="font-weight: 300;">{card.module}</p>
          
          <p class=" text-lg sm:text-2xl ml-5 font-[500] text-[#FFFFFF] bai-jamjuree-font">{card.title}</p>
        </div>
          
          <!-- Flex container with wrapping for items -->
          <div class="flex flex-col p-6 gap-2">
       
            {#if card.module === 'Module 2'}
            <div class="grid grid-cols-1 md:w-[500px] lg:grid-cols-2 lg:gap-4">
              <!-- Display subHeading at the top if it exists -->
              {#if card?.subHeading}
                <div class="col-span-2 mt-4 text-lg font-semibold">{card?.subHeading}</div>
              {/if}
          
              <!-- Mobile View (only visible on small screens) -->
              <div class="sm:hidden">
                {#each card.items as item}
                  <div class="flex items-center mb-2">
                    <img src="/academy/learntick.svg" alt="">
                    <p class="text-[#333333] text-sm !font-[400] rubik-font ml-2">{item}</p>
                  </div>
                {/each}
              </div>
          
              <!-- Desktop View (hidden on small screens) -->
              
                <!-- First 7 items in one column -->
                <div class="hidden sm:flex sm:flex-col">
                  {#each card.items.slice(0, 7) as item}
                    <div class="flex items-center mb-2">
                      <img src="/academy/learntick.svg" alt="">
                      <p class="text-[#333333] text-sm sm:text-xl !font-[400] rubik-font ml-2">{item}</p>
                    </div>
                  {/each}
                </div>
          
                <!-- Remaining items in another column -->
                <div class="hidden sm:flex sm:flex-col">
                  {#each card.items.slice(7) as item}
                    <div class="flex items-center mb-2">
                      <img src="/academy/learntick.svg" alt="">
                      <p class="text-[#333333] text-sm sm:text-xl !font-[400] rubik-font ml-2">{item}</p>
                    </div>
                  {/each}
                </div>
           
            </div>
          {:else}
            <!-- Default layout for other modules -->
            {#if card?.subHeading}
              <div class="col-span-2 mt-3 mb-2 sm:mt-6 sm:mb-5 text-sm sm:text-xl rubik-font font-[400]">{card?.subHeading}</div>
            {/if}
            {#each card.items as item}
              <div class="flex items-center mb-2">
                <img src="/academy/learntick.svg" alt="">
                <p class="text-[#333333] text-sm sm:text-xl !font-[400] rubik-font ml-2">{item}</p>
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

@media (max-width: 1034px) and (min-width: 1024px) {
  .custom-margin {
    margin-left: 0px !important;
  }
}

@media (max-width: 640px) and (min-width: 90px) {
  .custom-margin {
    margin-left: calc(50% - 70px) !important;
  }
}


 @media (max-width: 600px) and (min-width: 550px) {
  .custom-margin {
    margin-left: calc(50% - 60px) !important;
  }
} 


@media (max-width: 550px) and (min-width: 450px) {
  .custom-margin {
    margin-left: calc(50% - 45px) !important;
  }
} 

@media (max-width: 480px) and (min-width: 430px) {
  .custom-margin {
    margin-left: calc(50% - 30px) !important;
  }
} 

@media (max-width: 430px) and (min-width: 380px) {
  .custom-margin {
    margin-left: calc(50% - 20px) !important;
  }
} 

@media (max-width: 380px) and (min-width: 340px) {
  .custom-margin {
    margin-left: calc(50% - 5px) !important;
  }
} 

@media (max-width: 340px) {
  .custom-margin {
    margin-left: calc(50% - 0px) !important;
  }
} 



</style>