<script>
  import { goto } from "$app/navigation"; 
  const redirectTo = (url) => {
      goto(url);  
    }
    import AutoCounter from "./autoCounter.svelte";
</script>
<!-- Empower Section  -->
  <div class="hidden md:flex max-w-[1440px] mx-auto bg-cover bg-center py-4"
  style="background-image: url('/academy/empower-section-1.svg');">
  <div class="w-1/2"><img src="/academy/empower-section-2.svg" alt=""></div>
  <div class="w-1/2 flex flex-col justify-center pr-[5%]">
      <div class="pb-2 pt-6">
        <p class="text-3xl font-bold text-gray-800 text-left">
          Empowering Next Generation of Blockchain Developers
        </p>
        <p class="mt-4 text-gray-600 text-left">
          We are transforming careers in blockchain technology through comprehensive programs. Our partnerships with colleges worldwide foster a global community of skilled professionals ready to make an impact.
        </p>
        <div class="-mt-10">
          <AutoCounter/>
        </div>
        <!-- <img class="" src="/academy/empower-section-3.svg" alt=""> -->
      </div>
      <div class="pt-[2%] pb-[2%]"><button class="px-[2%] py-[1%] text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"  on:click={()=>{redirectTo('/academy/registration')}}>Register Now</button></div>
      <!-- <div class="hidden pt-4 pb-4"><a href="/"><button class="px-8 py-2 text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500">Register Now</button></a></div> -->
  </div>
</div>
<div class="md:hidden py-4 mx-auto bg-cover bg-center flex flex-col justify-center pb-6" style="background-image: url('/academy/empower-mobile-1.svg');">
  <div class="mx-auto pt-8 pb-2 px-5">
      <p class="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
        Empowering Next Generation of Blockchain Developers
      </p>
      <p class="mt-4 text-gray-600 text-center sm:text-2xl">
        We are transforming careers in blockchain technology through comprehensive programs. Our partnerships with colleges worldwide foster a global community of skilled professionals ready to make an impact.
      </p>
      <img src="/academy/empower-section-2.svg" alt="" class="m-auto">
      <div class="-mt-10 flex justify-center items-center">
      <div class="mx-auto max-w-7xl py-10 px-6 text-center">
        <div class="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <!-- Counter 1 -->
          <div class="flex flex-col items-center text-gray-800">
            <p class="text-4xl font-extrabold text-blue-600">4000+</p>
            <p class="mt-2 text-sm font-medium text-gray-500">Students Registered in the past 2 years</p>
          </div>
      
          <!-- Counter 2 -->
          <div class="flex flex-col items-center text-gray-800">
            <p class="text-4xl font-extrabold text-blue-600">250+</p>
            <p class="mt-2 text-sm font-medium text-gray-500">Institutions have students in our program</p>
          </div>
      
          <!-- Counter 3 -->
          <div class="flex flex-col items-center text-gray-800">
            <p class="text-4xl font-extrabold text-blue-600">400+</p>
            <p class="mt-2 text-sm font-medium text-gray-500">Certified Developers</p>
          </div>
      
          <!-- Counter 4 -->
          <div class="flex flex-col items-center text-gray-800">
            <p class="text-4xl font-extrabold text-blue-600">10+</p>
            <p class="mt-2 text-sm font-medium text-gray-500">Total Countries Reached</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  <div class="pt-[2%] pb-[2%] mx-auto"><button class="px-[24px] py-[8px] text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"  on:click={()=>{redirectTo('/academy/registration')}}>Register Now</button></div>
</div>