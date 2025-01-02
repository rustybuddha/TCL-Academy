<script>
  import Founder from "./founder.svelte";

  const recruiters = [
    { name: 'Rohan Sharan', title: 'CEO & Founder, Timechain Labs', image: '/academy/newrohansliderimg.svg' },
    { name: 'Rohan Sharan', title: 'CEO & Founder, Timechain Labs', image: '/car-1.svg' },
    { name: 'Rohan Sharan', title: 'CEO & Founder, Timechain Labs', image: '/car-3.svg' },
    { name: 'Rohan Sharan', title: 'CEO & Founder, Timechain Labs', image: '/car-4.svg' },
    { name: 'Rohan Sharan', title: 'CEO & Founder, Timechain Labs', image: '/car-5.svg' }
  ];

  import { onMount, onDestroy } from 'svelte';

  let currentIndex = 0;
  let cardWidth = 0;
  let carouselWrapper;
  let autoSlideInterval;

  const updateCarousel = () => {
    const translateX = -currentIndex * cardWidth;
    carouselWrapper.style.transform = `translateX(${translateX}px)`;
    if (currentIndex === recruiters.length) {
      setTimeout(() => {
        currentIndex = 0;
        carouselWrapper.style.transition = 'none';
        updateCarousel();
        setTimeout(() => carouselWrapper.style.transition = 'transform 0.5s ease-in-out', 0);
      }, 500);
    }
  };

  const prev = () => {
    clearInterval(autoSlideInterval);
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = recruiters.length - 1;
    }
    updateCarousel();
    startAutoSlide();
  };

  const next = () => {
    clearInterval(autoSlideInterval);
    if (currentIndex < recruiters.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
    startAutoSlide();
  };

  const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % recruiters.length;
      updateCarousel();
    }, 3000);
  };

  onMount(() => {
    const firstCard = document.querySelector('.carousel-card');
    cardWidth = firstCard.offsetWidth;
    updateCarousel();
    startAutoSlide();
  });

  onDestroy(() => {
    clearInterval(autoSlideInterval);
  });
</script>

<div class="sm:hidden mt-6 items-center flex flex-col lg:flex-row max-w-[1440px] mx-auto bg-cover bg-center p-5 md:p-16"
  style="background-image: url('/academy/founder-section-1.svg');">

  <div class="w-full relative md:w-1/3 lg:w-1/2 flex flex-col justify-center items-center rounded-xl mb-8 lg:mb-0">
    <p class="text-3xl text-heading font-[500] font-[bai jamjuree] text-gray-900 mb-6 custom-underline text-center lg:text-left">
      Words from the
      Founder <br> and Mentor
    </p>
    <div class="overflow-hidden mt-4 coro w-[340px] mbl-lg:w-[428px] h-fit relative border border-[#0000001A] rounded-tl-[8px] rounded-tr-[8px]">
      <div
        bind:this={carouselWrapper}
        class="flex items-center transition-transform duration-500 ease-in-out"
        style="transform: translateX(0);"
      >
        {#each recruiters as recruiter}
          <div class="carousel-card coro2 max-w-[340px] flex-shrink-0 relative">
            <div class="relative">
              <img src={recruiter.image} alt={recruiter.name} class="w-full h-auto">
            </div>
          </div>
        {/each}
      </div>
      <button class="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer z-10" aria-label="Previous" on:click={prev}>
        <img src="/arrow-white.png" alt="Previous" class="w-[40px] h-[40px] rotate-180">
      </button>
      <button class="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer z-10" aria-label="Next" on:click={next}>
        <img src="/arrow-white.png" alt="Next" class="w-[40px] h-[40px]">
      </button>
    </div>
  </div>

  <div class="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center lg:justify-start">
    <div class="pb-4 w-full text-center lg:text-left">
      <Founder />
    </div>
  </div>

</div>

<style>
  .custom-underline {
    text-decoration: underline;
    text-decoration-color: #059E93;
    text-decoration-thickness: 5px;
    text-underline-offset: 1.2px; 
  }

  @media (max-width:370px){
    .text-heading{
      font-size: 24px !important;
    }
  }

  @media (max-width:350px){
    .coro{
      width: 318px !important;
    }
    .coro2{
      max-width: 318px !important;
    }
  }
</style>
