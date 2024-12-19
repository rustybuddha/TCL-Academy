<script>
  import { onMount, onDestroy } from 'svelte';
  import Founder from "./founder.svelte";

  const recruiters = [
    { name: 'Rohan Sharan', title: 'CEO & Founder, Timechain Labs', image: '/academy/newrohansliderimg.svg' },
    { name: 'Rohan Sharan', title: 'CEO & Founder, Timechain Labs', image: '/car-1.svg' },
    { name: 'Rohan Sharan', title: 'CEO & Founder, Timechain Labs', image: '/car-3.svg' },
    { name: 'Rohan Sharan', title: 'CEO & Founder, Timechain Labs', image: '/car-4.svg' },
    { name: 'Rohan Sharan', title: 'CEO & Founder, Timechain Labs', image: '/car-5.svg' }
  ];

  let currentIndex = 0;
  let cardWidth = 0;
  let carouselWrapper;
  let autoSlideInterval;

  const moveCarousel = () => {
    const translateX = -currentIndex * cardWidth;
    carouselWrapper.style.transform = `translateX(${translateX}px)`;
  };

  const goToPrevious = () => {
    clearInterval(autoSlideInterval);
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = recruiters.length - 1;
    }
    moveCarousel();
    beginAutoSlide();
  };

  const goToNext = () => {
    clearInterval(autoSlideInterval);
    if (currentIndex < recruiters.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    moveCarousel();
    beginAutoSlide();
  };

  const beginAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % recruiters.length;
      moveCarousel();
    }, 3000);
  };

  onMount(() => {
    requestAnimationFrame(() => {
      const firstCard = document.querySelector('.carousel-item');
      if (firstCard) {
        cardWidth = firstCard.offsetWidth;
        moveCarousel();
        beginAutoSlide();
      }
    });
  });

  onDestroy(() => {
    clearInterval(autoSlideInterval);
  });
</script>

<div class="hidden sm:flex mt-10 items-center flex-col lg:flex-row max-w-[1370px] mx-auto bg-cover bg-center mb-10"
  style="background-image: url('/academy/founder-section-1.svg');">

  <div class="w-full relative md:w-1/2 lg:w-1/2 flex flex-row justify-center pl-10 md:justify-start items-center rounded-xl mb-8 lg:mb-0">
    <div class="overflow-hidden mt-4 coro w-[428px] mbl-lg:w-[428px] h-[617px] relative border border-[#0000001A] rounded-tl-[8px] rounded-tr-[8px]">
      <div
        bind:this={carouselWrapper}
        class="flex items-center transition-transform duration-500 ease-in-out"
        style="transform: translateX(0);"
      >
        {#each recruiters as recruiter}
          <div class="carousel-item coro2 max-w-[428px] flex-shrink-0 relative">
            <div class="relative">
              <img src={recruiter.image} alt={recruiter.name} class="">
            </div>
          </div>
        {/each}
      </div>
      <div class="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer" on:click={goToPrevious}>
        <img src="/arrow-white.png" alt="Previous" class="w-[40px] h-[40px] rotate-180">
      </div>
      <div class="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer" on:click={goToNext}>
        <img src="/arrow-white.png" alt="Next" class="w-[40px] h-[40px]">
      </div>
      <div class="flex bg-white justify-between p-[19px] cursor-pointer" onclick="window.open('https://www.linkedin.com/in/rohan-sharan/', '_blank');">
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

  <div class="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center lg:justify-start">
    <div class="pb-4 w-full text-center lg:text-left">
      <Founder />
    </div>
  </div>

</div>
