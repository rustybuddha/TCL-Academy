<script>
    import { onMount } from "svelte";
  
    let counters = [
      { id: 1, label: "Students Registered in the past 2 years", target: 4139 },
      { id: 2, label: "Certified Developers", target: 526 },
      { id: 3, label: "Institutions with students in our program", target: 350 },
      { id: 4, label: "Total Countries Reached", target: 10 }
    ];
  
    let hasAnimated = false;
  
    const startAnimation = () => {
      counters.forEach((counter) => {
        const element = document.getElementById(`counter-${counter.id}`);
        let current = 0;
        const target = counter.target;
        const increment = Math.ceil(target / 100); // Increment by 1% of the target value to control speed
        const interval = setInterval(() => {
          if (current >= target) {
            clearInterval(interval);
          } else {
            current += increment;
            element.textContent = current > target ? target : current;
          }
        }, 50);
      });
    };
  
    const checkScroll = () => {
      if (window.scrollY >= 2200 && !hasAnimated) {
        startAnimation();
        hasAnimated = true;
        window.removeEventListener('scroll', checkScroll);
      }
    };
  
    onMount(() => {
      window.addEventListener('scroll', checkScroll); 
    });
  </script>
  
  <div class="mx-auto max-w-5xl px-2 py-10 text-center">
    <div class="mt-10 m-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each counters as counter}
        <div class="flex flex-col  md:items-center">
          <div class="flex justify-start w-full">
            <p id={`counter-${counter.id}`} class="text-4xl font-extrabold text-[#093BAA] text-left">0</p>
            <p class="text-left text-4xl font-extrabold text-[#093BAA]"></p>
          </div>
          <p class="mt-2 text-gray-700 text-left">{counter.label}</p>
        </div>
      {/each}
    </div>
  </div>
  
  