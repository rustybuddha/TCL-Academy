<script>
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  // Data for the cards
  const cards = [
    {
      title: "Frontend Development",
      module: "Module 1",
      bgColor: "bg-purple-200",
      items: ["Svelte", "Login System", "Capstone Project", "Sveltekit", "SEO"]
    },
    {
      title: "Blockchain Fundamentals",
      module: "Module 2",
      bgColor: "bg-green-200",
      items: ["ABCs of Blockchain", "SPV Wallet", "sCrypt Smart Contracts", "Architecture of Scalable Blockchain Application"]
    },
    {
      title: "Professional Development Course",
      module: "Module 3",
      bgColor: "bg-cyan-200",
      items: ["Resume building", "Portfolio building", "LinkedIn Optimization", "Networking Skills", "Cracking Technical Questions", "Personal brand", "Interview guide"]
    },
    {
      title: "Backend Development",
      module: "Module 4",
      bgColor: "bg-blue-200",
      items: ["Database Design", "Code Planning", "Data Flow Diagram", "Error Handling & Logging", "Scaling Strategies", "Data Serialization", "Capstone Project", "Functional Programming", "API Design"]
    },
    {
      title: "Product Management Courses",
      module: "Module 5",
      bgColor: "bg-[#FFEAD5]",
      items: ["Customer Discovery", "Sprint Planning", "Hypothesis Testing", "Roadmapping", "Capstone Project", "Product Go to Market", "Stakeholder Management", "Persona Development", "User Testing", "Product Metrics", "Prioritization", "Data-Driven Decision Making", "PRD Writing", "Lean Product Development"]
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
  class="py-20 md:flex w-full gap-[100px] m-auto px-0"
>
    <div class="md:flex w-full md:w-1/2">
      <!-- Left Content -->
        <div class="md:mb-[1px] mb-[32px]">
          <div class="sticky top-32">
            <div class="transform transition-all duration-500 ease-out">
              <div class=" relative mb-4">
                <h1 class="text-[#292929] font-bai text-4xl font-[500]">
                  What you'll <span class="text-teal-500 font-bold"> learn?</span>
                </h1>
                <img class="justify-end absolute left-[180px]" src="/learn.svg" alt="">
              </div>
              <p class="text-[#5C5C5C] font-[300] text-lg font-rubik">
                Through our Blockchain Pro course specifically tailored for students and developers
                even without any prior experience in development, you will explore the following modules in detail:
              </p>
            </div>
          </div>
        </div>
    </div>
    <div class="md:w-1/2 cards-font">
      {#each cards as card, i}
      <div 
        class="mb-8 {i === cards.length - 1 ? '' : 'mb-32'} sticky"
        style="top: {120 + i * 20}px"
      >
        <div
          class="transform transition-all duration-500 ease-out {card.bgColor} rounded-xl shadow-lg p-6"
        >
          <p class="text-[16px] font-[200] text-[#292929] font-rubik mb-2" style="font-weight: 300;">{card.module}</p>
          <h2 class="text-2xl font-[500] mb-4 cards-font">{card.title}</h2>
          
          <!-- Flex container with wrapping for items -->
          <div class="flex flex-wrap gap-2">
            {#each card.items as item}
              <div class="flex items-center mb-2">
                <svg class="w-4 h-4 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-[#333333] !font-[400] cards-font">{item}</span>
              </div>
            {/each}
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
.cards-font {
  font-family: 'Rubik', sans-serif !important;
}
</style>