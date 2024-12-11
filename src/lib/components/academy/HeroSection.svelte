<script>
import { goto } from "$app/navigation";

    const redirectTo = (url) => {
      goto(url);  
    };
    const modules = [
    {
      image: '/academy/hero1.svg',
      text: 'Modules to upskill frontend, backend & blockchain basics'
    },
    {
      image: '/academy/hero2.svg',
      text: 'Get certified as a Full Stack Blockchain Developer'
    },
    {
      image: '/academy/hero3.svg',
      text: 'Learn industry level development skills'
    }
  ];
</script>
<div class="sm:hidden flex flex-col justify-center mt-[5%]">
  <div class="mx-auto">
    <div class="w-full m-auto">
      <div class="flex items-center justify-center m-auto relative px-5">
        <span class="text-2xl md:text-[24px] text-center !font-[500]">
          Build Future-Proof Skills <br>
          to Boost Your Career<br>
          <p class="flex justify-center">
            in just  
            <img class="w-20" src="/academy/hero-pin.svg" alt="img">
          </p>
        </span>
      </div>
    </div>

    <div class="w-full flex justify-center items-center mt-[5%] mb-[10%] mr-[2.5%] px-4">
      <img class="mr-[5%] max-w-full h-52" src="/academy/hero-section-4.svg" alt="img" loading="lazy">
    </div>
    
    <div class="w-full flex justify-center items-center">
      <img class="max-w-full h-auto" src="/academy/hero-section-3.svg" alt="img">
    </div>
    
    <div class="w-full flex justify-center items-center flex-col px-4">
      <div class="mt-4 mb-3 justify-center">
        {#each modules as module}
        <div class="flex items-center  mt-5 w-full max-w-screen-lg px-4 sm:px-6 md:px-8">
          <img 
          class="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-auto transition-all duration-300 ease-in-out" 
          src={module.image} 
          alt={module.text} 
          />
          <p class="font-[400] text-[16px] sm:text-[18px] ml-4">{module.text}</p>
        </div>
        {/each}
      </div>
    </div>

  </div>
  <div class="mx-auto pt-4 pb-2">
    <button 
      class="px-8 py-2 text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"
      on:click={() => redirectTo('/registration')}> 
      Register Now
    </button>
  </div>
</div>

<div class="hidden sm:flex max-w-[1440px] mx-auto">
  <div class="w-1/2">
    <div class="ml-[10%] mt-[15%] mr-[5%]">
      <div class="w-full">
        <div class=" flex w-full">
          <span class="text-2xl lg:text-4xl xl:text-5xl !font-[500]">
            Build Future-Proof Skills <br>
            to Boost Your Career in <br>
            <p class="flex">
              just  
              <img class="w-1/3 xl:w-1/4" src="/academy/hero-pin.svg" alt="img">
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
            class="sm:text-[0.5rem] md:text-[0.7rem] lg:text-base xl:text-lg sm:px-4 sm:py-2 text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"
            on:click={() => redirectTo('/registration')}>
            Register Now
          </button>
        </div>
        <div class="w-3/4 ml-[4.3%]">
          <img class="max-w-full h-auto" src="/academy/hero-section-3.svg" alt="img">
        </div>
      </div>
    </div>
  </div>
  <div class="w-1/2 mt-[4%] mb-[10%] mr-[2.5%]">
    <img class="mr-[5%] max-w-full h-auto" src="/academy/hero-section-4.svg" alt="img" loading="lazy">
  </div>
</div>