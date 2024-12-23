<script>
  import { goto } from "$app/navigation";

  const redirectTo = (url) => {
    goto(url);  
  };
</script>

<!-- Mobile View -->
<div class="sm:hidden bg-cover bg-center" style="background-image: url('/academy/certificate-mobile-1.svg'); height: 680px; width: 100%;">
  <div class="flex flex-col justify-center items-center h-full px-4">
    <!-- Left Container -->
    <div class="max-w-[360px] mt-6">
      <img src="/academy/newcertificate-mobile.svg" alt="">
      <div class="w-full flex justify-start items-start mt-4">
        <p class="text-[#333333] !font-[500] text-3xl ">Get certified from <br>
         Timechain Labs</p>
       </div>
    </div>
    <!-- Right Container -->
    <div class="max-w-[360px] flex flex-col gap-2 justify-start items-start">
        <div class="flex w-fit justify-start items-start mt-6  text-sm text-[#333333] border-b-2 border-[#e1e1e1]">
          <img src="/academy/certiImg2.svg" alt="">
          <p class="ml-1 -tracking-[0.2px] font-[300] text-sm text pb-3 text-[#333333]">Share your verified certificate across socials</p>
        </div>
        <div class="mt-4 w-fit justify-start items-start flex text-sm text-[#333333] border-b-2 border-[#e1e1e1]">
          <img src="/academy/certiImg1.svg" alt="">
          <p class="ml-1 -tracking-[0.2px] font-[300] text-sm text pb-3 text-[#333333]">Become a certified Full Stack Blockchain Developer</p>
        </div>
     
        <div class="flex w-fit justify-start items-start mt-4 text-sm text-[#333333] border-b-2 border-[#e1e1e1]">
          <img src="/academy/certiImg3.svg" alt="">
          <p class="ml-1 -tracking-[0.4px] font-[300] text-sm text pb-3 text-[#333333]">Add the certificate to your Linkedin and in your Resume</p>
        </div>
        <div class="mx-auto flex justify-center items-center pt-4 pb-2 w-full">
          <button 
            class="px-8  py-2 w-[80%] text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"
            on:click={() => redirectTo('/registration')}> 
            Register Now
          </button>
        </div>
    </div>
  </div>
</div>

<!-- Desktop View -->
 <div class=" bg-cover bg-center py-10" style="background-image: url('/academy/certificate-section-1.svg'); width: 100%; background-repeat:no-repeat;" >

 
<div class="hidden m-auto sm:flex justify-center max-w-[1440px]">
  <div class="flex justify-between items-center gap-3 h-full w-[90%] px-4 ">
    <!-- Left Container -->
    <div class="w-1/2 flex flex-col gap-3 justify-start ">
       <div class="">
         <p class="text-[#333333] font-bold sm:text-2xl md:text-3xl lg:text-5xl">Get certified from <br>
          Timechain Labs</p>
        </div>
        <div class="mt-7 w-fit flex sm:text-sm md:text-lg text-[#333333] border-b-2 border-[#e1e1e1]">
          <img src="/academy/certiImg1.svg" alt="">
          <p class="ml-3 font-[300] pb-3">Become a certified Full Stack Blockchain Developer</p>
        </div>
        <div class="flex w-fit mt-4 sm:text-sm md:text-lg text-[#333333] border-b-2 border-[#e1e1e1]">
          <img src="/academy/certiImg2.svg" alt="">
          <p class="ml-3 font-[300] pb-3">Share your verified certificate across socials</p>
        </div>
        <div class="flex w-fit mt-4 sm:text-sm md:text-lg text-[#333333] border-b-2 border-[#e1e1e1]">
          <img src="/academy/certiImg3.svg" alt="">
          <p class="ml-3 font-[300] pb-3">Add the certificate to your Linkedin and in your Resume</p>
        </div>
        <div class="mt-[70px]">
          <div class="pt-[2%] pb-[2%]"><button class="px-[2%] font-['Rubik'] py-[1%] text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"  on:click={()=>{redirectTo('/registration')}}>Register Now</button></div>
        </div>
    </div>
    <!-- Right Container -->
    <div class="w-1/2 flex justify-end ">
      <img src="/academy/newcertificate.svg" alt="">
    </div>
  </div>
</div>
</div>

<style>
  @media(max-width:390px){
    .text{
      font-size: 14px !important;
    }
  }
</style>