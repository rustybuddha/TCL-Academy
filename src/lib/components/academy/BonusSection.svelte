 <script>
  import { goto } from "$app/navigation";
  const redirectTo = (url) => {
    goto(url);  
  };
 </script>

  <div class="sm:hidden mx-auto flex flex-col bg-cover bg-center justify-center p-8" style="background-image: url('/academy/bonus-mobile-1.svg');">
  <div>
    <div class="flex flex-col items-center bg-white text-center  max-w-lg mx-auto rounded-lg">
      <h2 class="text-3xl !font-[500] mb-4 leading-snug">
        Unlock bonuses <br />
        <p class="flex">
        Worth <img src="/academy/15999.svg" alt="">
        </p>
      </h2>
    
      <p class=" text-sm leading-relaxed text-[#5C5C5C] font-['Rubik']">
        Join now and unlock bonuses worth ₹15,999, including expert webinars, project templates, and personalized career support.
        These exclusive resources will accelerate your blockchain journey—don’t miss out!
      </p>
    </div>
   </div>  
    <div class="mx-auto pb-2 pt-4"><img class="mx-auto" src="/academy/newbonusmobile.svg" alt=""></div>
    <div class="pt-[2%] pb-[2%] mx-auto mt-4"><button on:click={() => redirectTo('/registration')} class="cursor-pointer px-[24px] py-[8px] text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500">Unlock Bonuses</button></div>
  </div>
  
<div class="hidden sm:flex max-w-[1440px] mx-auto bg-cover bg-center justify-center px-16 pt-16 pb-8"
  style="background-image: url('/academy/bonus-section-1.svg');">
  <div class="w-2/5 flex flex-col justify-center">
    <div class="pb-10 pr-6">
      <div class="flex -mt-[40px] flex-col items-start bg-white text-left  max-w-lg mx-auto rounded-lg">
        <div class="text-2xl md:text-3xl lg:text-5xl !font-bold mb-4 leading-snug">
          Unlock bonuses <br />
          <p class="flex">
          Worth <img src="/academy/15999.svg" alt="">
          </p>
        </div>
        <p class=" text-sm leading-relaxed lg:text-lg text-[#5C5C5C]">
          Join now and unlock bonuses worth ₹15,999, including expert webinars, project templates, and personalized career support.
          These exclusive resources will accelerate your blockchain journey—don’t miss out!
        </p>
      </div>
    </div>
    <div class="pt-[2%] pb-[2%] mt-2"><button on:click={() => redirectTo('/registration')} class="cursor-pointer font-['Rubik'] px-[2%] py-[1%] text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500">Unlock Bonuses</button></div>
  </div>
  <div class="w-3/5">
    <img src="/academy/newbonus.svg" alt=""></div>
  </div>