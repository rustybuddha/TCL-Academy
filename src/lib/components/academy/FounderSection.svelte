<script>
  import Founder from "./founder.svelte";

  const recruiters = [
    {
      name: 'Rohan Sharan',
      title: 'CEO & Founder, Timechain Labs',
      image: '/car-2.svg',
    },
    {
      name: 'Rohan Sharan',
      title: 'CEO & Founder, Timechain Labs',
      image: '/car-1.svg',
    },
    {
      name: 'Rohan Sharan',
      title: 'CEO & Founder, Timechain Labs',
      image: '/car-3.svg',
    },
    {
      name: 'Rohan Sharan',
      title: 'CEO & Founder, Timechain Labs',
      image: '/car-4.svg',
    },
    {
      name: 'Rohan Sharan',
      title: 'CEO & Founder, Timechain Labs',
      image: '/car-5.svg',
    }
  ];

  import { onMount } from 'svelte';

  let currentIndex = 0;
  let cardWidth = 0;
  let carouselWrapper;

  const updateCarousel = () => {
    const translateX = -currentIndex * cardWidth;
    carouselWrapper.style.transform = `translateX(${translateX}px)`;
    if (currentIndex === recruiters.length) {
      setTimeout(() => {
        currentIndex = 0;
        carouselWrapper.style.transition = 'none';
        updateCarousel();
        setTimeout(() => carouselWrapper.style.transition = 'transform 0.5s ease-in-out', 0);
      }, 500); // Matches transition duration
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = recruiters.length - 1; // Loop back to the last frame
    }
    updateCarousel();
  };

  const next = () => {
    if (currentIndex < recruiters.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to the first frame
    }
    updateCarousel();
  };

  onMount(() => {
    const firstCard = document.querySelector('.carousel-card');
    cardWidth = firstCard.offsetWidth; // Ensure card width is calculated dynamically
    updateCarousel();
  });
</script>

<div class="items-center flex flex-col lg:flex-row max-w-[1440px] mx-auto bg-cover bg-center p-4 md:p-16"
  style="background-image: url('/academy/founder-section-1.svg');">

  <!-- Carousel Section -->
  <div class="w-full relative md:w-1/3 lg:w-1/2 flex flex-col justify-center items-center rounded-xl mb-8 lg:mb-0">
    <div class="overflow-hidden w-[320px] mbl-lg:w-[428px] h-[623px] relative border border-[#0000001A]">
      <!-- Carousel Wrapper -->
      <div
        bind:this={carouselWrapper}
        class="flex items-center transition-transform duration-500 ease-in-out"
        style="transform: translateX(0);"
      >
        {#each recruiters as recruiter}
          <div class="carousel-card flex-shrink-0 relative">
            <!-- Image with Arrows -->
            <div class="relative">
              <img src={recruiter.image} alt={recruiter.name} class="">
              <!-- Left Arrow -->
              <img
                on:click={prev}
                src="/arrow-white.png"
                alt="Previous"
                class="absolute rotate-180 top-1/2 mbl-lg:left-2 left-2 w-[40px] h-[40px] cursor-pointer transform -translate-y-1/2"
              >
              <!-- Right Arrow -->
              <img
                on:click={next}
                src="/arrow-white.png"
                alt="Next"
                class="absolute top-1/2 mbl-lg:right-4 right-28 w-[40px] h-[40px] cursor-pointer transform -translate-y-1/2"
              >
            </div>
            <!-- Card Content For Multiple Instructors -->
            <!-- <div class="flex justify-between p-[19px]">
              <div>
                <h3 class="text-lg md:text-xl font-rubik font-[500] text-[#333333]">{recruiter.name}</h3>
                <p class="text-sm md:text-base text-[#333333]">{recruiter.title}</p>
              </div>
              <div class="justify-end">
                <img src="/academy/linkedin.svg" alt="LinkedIn" class="w-[40px] md:w-[50px]">
              </div>
            </div> -->
          </div>
        {/each}
      </div>
    <!-- For Single Instructor -->
      <div class="flex justify-between p-[19px] cursor-pointer" onclick="window.open('https://www.linkedin.com/in/rohan-sharan/', '_blank');">
        <div>
          <h3 class="text-lg md:text-xl font-rubik font-[500] text-[#333333]">Rohan Sharan</h3>
          <p class="text-sm md:text-base text-[#333333]">CEO & Founder, Timechain Labs</p>
        </div>
        <div class="justify-end">
          <img src="/academy/linkedin.svg" alt="LinkedIn" class="w-[40px] md:w-[50px]">
        </div>
      </div>
    </div>
  </div>

  <!-- Founder Section -->
  <div class="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center lg:justify-start">
    <div class="pb-4 w-full text-center lg:text-left">
      <Founder />
    </div>
  </div>

</div>

