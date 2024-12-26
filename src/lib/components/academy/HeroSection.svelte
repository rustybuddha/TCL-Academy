<script>
  import { goto } from "$app/navigation";

  const redirectTo = (url) => {
    goto(url);
  };

  const modules = [
    {
      image: '/academy/hero1.svg',
      text: 'Build 6 portfolio projects on 6 popular blockchains'
    },
    {
      image: '/academy/hero2.svg',
      text: 'Learn Full Stack development with Blockchain integration'
    },
    {
      image: '/academy/hero3.svg',
      text: 'Get an internship offer with one leading blockchain company'
    }
  ];

</script>

<div class="sm:hidden flex flex-col justify-center mt-[8%]">
  <div class="mx-auto">
    <div class="w-full m-auto">
      <div class="flex items-center justify-center m-auto relative px-5">
        <span class="text-xl text md:text-[24px] text-center !font-[500]">
          <!-- Master <span class="!font-[600]"> BLOCKCHAIN </span>  & boost your <br>  experience  with Projects -->
          Master Blockchain with portfolio <br>  projects & get job opportunities
          <p class="flex justify-center">
            in
            <img class="w-20" src="/academy/hero-pin.svg" alt="img">
          </p>
        </span>
      </div>
    </div>

    <div class="flex justify-center items-center px-1 md:px-4 mt-4 mb-4">
      <img
        class="max-w-[400px] sm:max-w-[400px] w-full h-auto" 
        src="/academy/rohannewhero.svg" 
        alt="img" 
        loading="lazy">
    </div>
    
    <div class="w-full flex justify-center items-center">
      <div class="flex items-center space-x-4">
        <!-- Avatar Group -->
        <div class="flex -space-x-2">
          <img
            src="/academy/shivamani.svg"
            alt="avatar"
            class="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="/academy/meet.svg"
            alt="avatar"
            class="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="/academy/nidhi.svg"
            alt="avatar"
            class="w-10 h-10 rounded-full border-2 border-white"
          />
          <!-- Student Count -->
          <div
            class="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold border-2 border-white"
          >
            <img src="/academy/hero-img-1.svg" alt="">
          </div>
        </div>
    
        <!-- Star Ratings and Review Count -->
        <div>
          <div class="flex items-center">
            <!-- Star Icons -->
            {#each Array(5) as _, i}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 25 25"
                class="w-6 h-6 text-yellow-500 px-1"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.547 1.6 8.147L12 18.896l-7.536 4.104 1.6-8.147L.001 9.306l8.332-1.151z"
                />
              </svg>
            {/each}
          </div>
          <p class="text-[#333333] text-[11px] text-center">
            4.8 of 5 (3.5k reviews)
          </p>
        </div>
      </div>
    </div>
    
    
    <div class="w-full flex justify-center items-center flex-col px-4">
      <div class="mt-4 mb-3 flex flex-col justify-center items-center w-[274px]">
        {#each modules as module}
          <div class="flex justify-start items-center mt-5 w-full max-w-screen-lg  sm:px-8">
            <img 
              class="w-4 sm:w-6 md:w-8" 
              src={module.image} 
              alt={module.text} 
            />
            <p class="font-[400] text-sm text-[#3333333] sm:text-[18px] ml-4 text-left sm:text-left tracking-[-0.5px]">
              {module.text}
            </p>
          </div>
        {/each}
      </div>
      
    </div>

  </div>
  <div class="mx-auto flex justify-center items-center pt-4 pb-2 w-full">
    <button
    class="px-8 py-2 w-[80%] text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500 shiny-glow"
    on:click={() => redirectTo('/registration')}>
    Register Now
  </button>
  </div>
</div>

<div class="hidden sm:flex max-w-[1440px] mx-auto">
  <div class="w-1/2">
    <div class="ml-[10%] mt-[10%] mr-[5%]">
      <div class="w-full">
        <div class=" flex w-full">
          <span class="text-2xl lg:text-3xl xl:text-4xl !font-[500]">
            Master Blockchain with <br> portfolio projects & <br> get job opportunities
            <p class="flex">
              in just  
              <img class="w-1/3 xl:w-[173px] h-[61px]" src="/academy/hero-pin.svg" alt="img">
            </p>
          </span>
        </div>
      </div>
      <div class="my-[5%]">
        {#each modules as module}
          <div class="flex mt-5">
            <img class="max-w-full h-auto" src={module.image} alt={module.text}>
            <p class="font-[400] text-xs lg:text-sm ml-2">{module.text}</p>
          </div>
        {/each}
      </div>
      <div class="flex gap-8 items-center">
        <div class="sm:size w-1/4 items-center">
          <button
          class="font-['Rubik'] sm:text-[0.5rem] md:text-[0.7rem] lg:text-base xl:text-lg sm:px-4 sm:py-2 text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500 shiny-glow"
          on:click={() => redirectTo('/registration')}>
          Register Now
        </button>
        </div>
        <div class="w-3/4 ml-[4.3%]">
          <div class="flex items-center space-x-4">
            <!-- Avatar Group -->
            <div class="flex -space-x-2 flex-shrink-0">
              <img
                src="/academy/shivamani.svg"
                alt="avatar"
                class="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="/academy/meet.svg"
                alt="avatar"
                class="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="/academy/nidhi.svg"
                alt="avatar"
                class="w-10 h-10 rounded-full border-2 border-white"
              />
              <!-- Student Count -->
              <div
                class="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold border-2 border-white"
              >
                <img src="/academy/hero-img-1.svg" alt="" />
              </div>
            </div>
        
            <!-- Star Ratings and Review Count -->
            <div class="flex flex-col flex-shrink-0 items-center space-x-2">
              <div class="flex items-center space-x-1">
                <!-- Star Icons -->
                {#each Array(5) as _, i}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                    class="w-5 h-5 text-yellow-500"
                    style="padding: 2px;"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.547 1.6 8.147L12 18.896l-7.536 4.104 1.6-8.147L.001 9.306l8.332-1.151z"
                    />
                  </svg>
                {/each}
              </div>
              <p class="text-[#333333] text-left text-[12px]">
                4.8 of 5 (3.5k reviews)
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <div class="w-1/2 mt-[2%] mr-[2.5%]">
    <img class="mr-[5%] max-w-full h-auto" src="/academy/rohannewhero.svg" alt="img" loading="lazy">
  </div>
</div>

<style>

.shiny-glow {
  position: relative;
  overflow: hidden;
  z-index: 0; 
}

.shiny-glow::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 25px;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.182), rgb(219, 219, 219), rgba(255, 255, 255, 0.084));
  z-index: -1;
  transition: all 0.5s ease-in-out;
  transform: rotate(5deg); 
  filter: blur(15px); 
}

.shiny-glow:hover::before {
  left: 110%;
}

.shiny-glow:hover {
  color: #fff;
}

  @media(max-width:360px){
    .text{
      font-size: 18px !important;
    }
  }
</style>