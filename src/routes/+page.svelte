<!-- Hero Section  -->
<div class="sm:hidden flex flex-col justify-center mt-[5%]">
  <div class="mx-auto"><img src="/images/hero-mobile-1.svg" alt=""></div>
  <div class="mx-auto pt-4 pb-2"><a href="/"><button class="px-8 py-2 text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500">Register Now</button></a></div>
</div>

<div class="hidden sm:flex max-w-[1440px] mx-auto">
  <div class="w-1/2">
      <div class="ml-[10%] mt-[15%] mr-[5%]">
          <div><img class="max-w-full h-auto" src="/images/hero-section-1.svg" alt=""></div>
          <div class="my-[5%]"><img class="max-w-full h-auto" src="/images/hero-section-2.svg" alt=""></div>
          <div class="flex">
              <div class="sm:size  w-1/4 mr-[3%] items-center"><a href="/"><button
                          class="sm:text-[0.5rem]  md:text-[0.7rem] lg:text-base xl:text-lg sm:px-4 sm:py-2 text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500">Register
                          Now</button></a></div>
              <div class="w-3/4 ml-[4.3%]"><img class="max-w-full h-auto" src="/images/hero-section-3.svg" alt="">
              </div>
          </div>
      </div>
  </div>
  <div class="w-1/2 mt-[5%] mb-[10%] mr-[2.5%]"><img class="mr-[5%] max-w-full h-auto"
          src="/images/hero-section-4.svg" alt=""></div>
</div>

<!-- Struggling Section  -->
<div class="sm:hidden flex justify-center">
  <div class="mx-auto"><img src="/images/struggling-mobile.svg" alt=""></div>
</div>

<div class="hidden sm:flex max-w-[1440px] justify-center mx-auto">
  <div><img src="/images/struggling-section.svg" alt=""></div>
</div>

<!-- Video Player Section  -->
<div>
  <div class="sm:hidden mt-20 mb-6">
      <img class="mx-auto px-[10%]" src="/images/video-mobile-1.svg" alt="">
  </div>
  <div class="hidden sm:block mt-20 mb-10 max-w-[1440px] mx-auto px-[10%]"><img src="/images/video-section-3.svg"
          alt=""></div>
  <div>
      <div class="w-full max-w-[1440px] mx-auto"><img class="w-full px-[10%]" src="/images/video-section-2.svg"
              alt=""></div>
      <div class="relative w-full max-w-[1440px] mx-auto">
          <!-- Video Element -->
          <video id="videoPlayer" class="w-full h-auto object-cover rounded-b-lg px-[10%]"
              poster="images/video-section-1.jpg">
              <source src="path/to/your-video.mp4" type="video/mp4">
              Your browser does not support the video tag.
          </video>

          <!-- Play Button Overlay -->
          <button id="playButton" class="absolute inset-0 flex items-center justify-center rounded-lg">
              <div class="flex items-center justify-center w-16 h-16 bg-white bg-opacity-75 rounded-full">
                  <svg class="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7L8 5z" />
                  </svg>
              </div>
          </button>
      </div>
  </div>
</div>

<!-- Video Player Section JavaScript  -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
      const videoPlayer = document.getElementById('videoPlayer');
      const playButton = document.getElementById('playButton');

      playButton.addEventListener('click', () => {
          if (videoPlayer.paused) {
              videoPlayer.play();
              playButton.classList.add('hidden');
          } else {
              videoPlayer.pause();
              playButton.classList.remove('hidden');
          }
      });

      videoPlayer.addEventListener('ended', () => {
          playButton.classList.remove('hidden');
      });
  });
</script>

<!-- Experience Section  -->
<div class="sm:hidden mt-[20%] mb-[5%]">
  <div class="mb-6"><img class="mx-auto px-[10%]" src="/images/experience-mobile-2.svg" alt=""></div>
  <div>
      <div>
          <div class="mb-4 px-[10%]"><a class="flex justify-center mx-auto cursor-pointer" href="/">
                  <div><img src="/images/experience-mobile-1-1.svg" alt=""></div>
                  <div><img src="/images/experience-mobile-1-2.svg" alt=""></div>
              </a></div>
          <div class="px-[10%]"><a class="flex justify-center mx-auto cursor-pointer" href="/">
                  <div><img src="/images/experience-mobile-3-1.svg" alt=""></div>
                  <div><img src="/images/experience-mobile-3-2.svg" alt=""></div>
              </a></div>
      </div>
  </div>
</div>

<div class="hidden sm:flex flex-col justify-center mt-32">
  <div class="mx-auto max-w-[748px] px-[10%]"><img src="/images/experience-section-1.svg" alt=""></div>
  <div class="flex mx-auto my-8 px-[10%]">
      <div class="mr-5"><a class="cursor-pointer" href="/"><img src="/images/experience-section-2.svg" alt=""></a>
      </div>
      <div><a class="cursor-pointer" href="/"><img src="/images/experience-section-3.svg" alt=""></a></div>
  </div>
</div>

<!-- Reminder Section  -->
<div class="flex items-center justify-center py-24 max-w-[1440px] mx-auto bg-cover bg-center"
  style="background-image: url('/images/reminder-section-1.svg');">

  <!-- Inner Content Container -->
  <div class="w-full max-w-[1200px] p-8 ">

      <div class="flex flex-col justify-center">
          <div class="mx-auto max-w-[617px] px-[10%] mb-8"><img src="/images/reminder-section-2.svg" alt=""></div>
          <div class="mx-auto max-w-[617px] px-[10%] mb-8"><img src="/images/reminder-section-3.svg" alt=""></div>
      </div>



      <!-- Notification Form -->
      <p class="text-center text-gray-700 mb-4">Notify me by email when it’s time for the event</p>
      <div class="flex justify-center max-w-[617px] mx-auto">
          <input type="email" placeholder="Email Address"
              class=" mr-2 py-2 px-2 rounded-lg border border-gray-300 w-[19rem]">
          <button
              class="bg-[#093baa] border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500 text-white px-4 py-2 rounded-lg">Submit</button>
      </div>
  </div>

</div>

<!-- Empower Section  -->
<div class="hidden sm:flex max-w-[1440px] mx-auto bg-cover bg-center"
  style="background-image: url('/images/empower-section-1.svg');">
  <div class="w-1/2"><img src="/images/empower-section-2.svg" alt=""></div>
  <div class="w-1/2 flex flex-col justify-center pr-[5%]">
      <div class="pb-2 pt-6"><img class="" src="/images/empower-section-3.svg" alt=""></div>
      <div class="pt-[2%] pb-[2%]"><a href="/"><button class="px-[2%] py-[1%] text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500">Register Now</button></a></div>
      <!-- <div class="hidden pt-4 pb-4"><a href="/"><button class="px-8 py-2 text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500">Register Now</button></a></div> -->
  </div>
</div>
<div class="sm:hidden mx-auto bg-cover bg-center flex flex-col justify-center pb-6" style="background-image: url('/images/empower-mobile-1.svg');">
  <div class="mx-auto pt-8 pb-2"><img src="/images/empower-mobile-2.svg" alt=""></div>
  <div class="pt-[2%] pb-[2%] mx-auto"><a href="/"><button class="px-[24px] py-[8px] text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500">Register Now</button></a></div>
</div>

<!-- Skills Section  -->
<div class="sm:hidden">
  <img class="mx-auto w-full" src="/images/skills-mobile-1.svg" alt="">
</div>
<div class="hidden sm:flex justify-center max-w-[1440px] mx-auto">
  <img class="mx-auto w-full" src="/images/skills-section-1.svg" alt="">
</div>

<!-- Take This Section  -->
<div class="sm:hidden">
  <img class="mx-auto w-full" src="/images/take-this-mobile-1.svg" alt="">
</div>
<div class="hidden sm:flex justify-center max-w-[1440px] mx-auto">
  <img class="mx-auto w-full" src="/images/take-this-section-1.svg" alt="">
</div>

<!-- Bonus Section  -->
<div class="sm:hidden mx-auto flex flex-col bg-cover bg-center justify-center p-8" style="background-image: url('/images/bonus-mobile-1.svg');">
  <div class="mx-auto pb-2 pt-4"><img class="mx-auto" src="/images/bonus-mobile-2.svg" alt=""></div>
  <div class="pt-[2%] pb-[2%] mx-auto"><a href="/"><button class="px-[24px] py-[8px] text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500">Unlock Bonuses</button></a></div>
</div>
<div class="hidden sm:flex max-w-[1440px] mx-auto bg-cover bg-center justify-center px-16 pt-16 pb-8"
style="background-image: url('/images/bonus-section-1.svg');">
<div class="w-2/5 flex flex-col justify-center">
  <div><img src="/images/bonus-section-3.svg" alt=""></div>
  <div class="pt-[2%] pb-[2%] mt-2"><a href="/"><button class="px-[2%] py-[1%] text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500">Unlock Bonuses</button></a></div>
</div>
<div class="w-3/5"><img src="/images/bonus-section-2.svg" alt=""></div>
</div>

<!-- Founder Section  -->
<div class="sm:hidden mx-auto bg-cover bg-center justify-center p-8" style="background-image: url('/images/founder-mobile-1.svg');">
  <div class="mx-auto pb-2"><img class="mx-auto" src="/images/founder-mobile-2.svg" alt=""></div>
  <div class="mx-auto w-1/2 pt-2"><a href="/"><img class="mx-auto" src="/images/founder-mobile-3.svg" alt=""></a></div>
</div>
<div class="hidden sm:flex max-w-[1440px] mx-auto bg-cover bg-center justify-center p-16"
style="background-image: url('/images/founder-section-1.svg');">
  <div class="w-1/2 mx-auto justify-center"><img class="mx-auto" src="/images/founder-section-2.svg" alt=""></div>
  <div class="w-1/2 ml-4">
      <div class="pb-4"><img src="/images/founder-section-3.svg" alt=""></div>
      <div class="flex pt-4">
          <div><a href="/"><img src="/images/founder-section-6.svg" alt=""></a></div>
      </div>
  </div>
</div>

<!-- Roadmap Section  -->
<div class="sm:hidden">
  <img class="mx-auto w-full" src="/images/roadmap-mobile-1.svg" alt="">
</div>
<div class="hidden sm:flex justify-center max-w-[1440px] mx-auto">
  <img class="mx-auto w-full" src="/images/roadmap-section-1.svg" alt="">
</div>

<!-- Certificate Section  -->
<div class="sm:hidden">
  <img class="mx-auto w-full" src="/images/certificate-mobile-1.svg" alt="">
</div>
<div class="hidden sm:flex justify-center max-w-[1440px] mx-auto">
  <img class="mx-auto w-full" src="/images/certificate-section-1.svg" alt="">
</div>