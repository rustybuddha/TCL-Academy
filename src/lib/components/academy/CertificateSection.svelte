<script>
  import { goto } from "$app/navigation";

  const redirectTo = (url) => {
    goto(url);  
  };
</script>

<!-- Mobile View -->
<div class="sm:hidden bg-cover bg-center" style="background-image: url('/academy/certificate-mobile-1.svg'); height: 623px; width: 100%;">
  <div class="flex justify-between items-center h-full px-4">
    <!-- Left Container -->
    <div class="w-1/2">
      <!-- Content for the left container -->
      <p class="text-black">Left Content</p>
    </div>
    <!-- Right Container -->
    <div class="w-1/2">
      <!-- Content for the right container -->
       <img src="/academy/TimechainAcademyCertificateGold1.svg" alt="">
    </div>
  </div>
</div>

<!-- Desktop View -->
<div class="hidden sm:flex justify-center max-w-[1440px] mx-auto bg-cover bg-center" style="background-image: url('/academy/certificate-section-1.svg'); height: 623px; width: 100%;">
  <div class="flex justify-between items-center gap-3 h-full w-[90%] px-4 ">
    <!-- Left Container -->
    <div class="w-1/2 flex flex-col gap-3 justify-start ">
      <!-- Content for the left container -->
       <div class="">
         <p class="text-[#333333] font-bold sm:text-2xl md:text-3xl lg:text-5xl">Get certified from <br>
          Timechain Labs</p>
        </div>
        <div class="mt-7 w-fit flex sm:text-lg md:text-xl text-[#333333] border-b-2 border-[#e1e1e1]">
          <img src="/academy/certiImg1.svg" alt="">
          <p class="ml-3 font-[300]">Become a certified Full Stack Blockchain Developer</p>
        </div>
        <div class="flex w-fit mt-4 sm:text-lg md:text-xl text-[#333333] border-b-2 border-[#e1e1e1]">
          <img src="/academy/certiImg2.svg" alt="">
          <p class="ml-3 font-[300]">Share your verified certificate across socials</p>
        </div>
        <div class="flex w-fit mt-4 sm:text-lg md:text-xl text-[#333333] border-b-2 border-[#e1e1e1]">
          <img src="/academy/certiImg3.svg" alt="">
          <p class="ml-3 font-[300]">Add the certificate to your Linkedin and in your Resume</p>
        </div>
        <div class="mt-[70px]">
          <div class="pt-[2%] pb-[2%]"><button class="px-[2%] py-[1%] text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"  on:click={()=>{redirectTo('/registration')}}>Register Now</button></div>
        </div>
    </div>
    <!-- Right Container -->
    <div class="w-1/2 flex justify-end ">
      <!-- Content for the right container -->
      <img src="/academy/TimechainAcademyCertificateGold1.svg" alt="">
    </div>
  </div>
</div>
