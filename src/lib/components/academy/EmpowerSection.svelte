<script>
  import { goto } from "$app/navigation"; 
  const redirectTo = (url) => {
      goto(url);  
    }
    import AutoCounter from "./autoCounter.svelte";
</script>
<!-- Empower Section  -->
  <div class="hidden max-w-full md:flex  mx-auto bg-cover bg-center py-4"
  style="background-image: url('/academy/empower-section-1.svg');">
  <div class="max-w-[1440px] md:flex  mx-auto">
  <div class="w-1/2"><img src="/academy/empowerDesknew.svg" alt=""></div>
  <div class="w-1/2 flex flex-col justify-center pr-[5%]">
    <div class="pb-2 pt-6">
      <p class="text-desk sm:text-3xl md:text-4xl lg:text-5xl !font-[500] text-[#333333] text-left bai-jamjuree-font -tracking-[0.8px] relative z-10">
        Empowering Next Generation of Blockchain Developers
      </p>
 
      <hr class="border-0 hrmanipulatedesk1 h-[4.2px] bg-[#099d9b] w-[348px] sm:w-[250px] md:w-[340px] lg:w-[515px] mx-auto -mt-14 ml-1 z-0">
      <hr class="border-0 hrmanipulatedesk2 h-[4.2px] bg-[#099d9b] w-[288px] sm:w-[300px] md:w-[330px] lg:w-[515px] mx-auto mt-11 ml-1 z-0">


        <p class="mt-10 text-[#5C5C5C] !font-[300] text-lg text-left rubik-font ">
          We are transforming careers in blockchain technology through comprehensive programs. Our partnerships with colleges worldwide foster a global community of skilled professionals ready to make an impact.
        </p>
        <div class="-mt-10">
          <AutoCounter/>
        </div>
        <!-- <img class="" src="/academy/empower-section-3.svg" alt=""> -->
      </div>
      <div class="pt-[2%] pb-[2%]"><button class="font-['Rubik'] px-[2%] py-[1%] text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"  on:click={()=>{redirectTo('/registration')}}>Register Now</button></div>
      <!-- <div class="hidden pt-4 pb-4"><a href="/"><button class="px-8 py-2 text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500">Register Now</button></a></div> -->
  </div>
</div>
</div>
<div class="md:hidden py-4 mx-auto bg-cover bg-center flex flex-col justify-center pb-6" style="background-image: url('/academy/empower-mobile-1.svg');">

  <div class="mx-auto pt-8 pb-2 px-5 relative">
    <p class="text-3xl text-size !font-[500] text-[#333333] text-center bai-jamjuree-font -tracking-[1px] relative z-10">
      Empowering Next Generation  <br> of Blockchain Developers
    </p>
    <hr class="border-0 hrmanipulate1 h-[3.8px] bg-[#099d9b] w-[348px] -mt-11 ml-4 absolute left-1/2 transform z-0 -translate-x-1/2">
    <hr class="border-0 hrmanipulate2 h-[3.8px] bg-[#099d9b] w-[288px] -mt-2 ml-5 absolute left-1/2 transform z-0 -translate-x-1/2">

      <p class="mt-4 text-sm text-size-2 text-gray-600 text-center sm:text-2xl">
        We are transforming careers in blockchain technology through comprehensive programs. Our partnerships with colleges worldwide foster a global community of skilled professionals ready to make an impact.
      </p>
      <img src="/academy/newEmpower.svg" alt="" class="m-auto">
      <div class="-mt-10 flex justify-between items-center">
      <div class="mx-auto max-w-7xl py-10 px-3 text-center">
        <div class="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <!-- Counter 1 -->
          <div class="flex flex-col items-start  text-gray-800">
            <p class="text-3xl sm:text-4xl !font-[600] text-[#093BAA] bai-jamjuree-font">4139</p>
            <p class="mt-2 text-sm !font-[300] text-[#5C5C5C] text-left">Students Registered in the past 2 years</p>
          </div>
      
          <!-- Counter 2 -->
          <div class="flex flex-col items-start  text-gray-800">
            <p class="text-3xl sm:text-4xl !font-[600] text-[#093BAA] bai-jamjuree-font">526</p>
            <p class="mt-2 text-sm !font-[300] text-[#5C5C5C] text-left">Institutions have students in our program</p>
          </div>
      
          <!-- Counter 3 -->
          <div class="flex flex-col items-start  text-gray-800">
            <p class="text-3xl sm:text-4xl !font-[600] text-[#093BAA] bai-jamjuree-font">350</p>
            <p class="mt-2 text-sm !font-[300] text-[#5C5C5C] text-left">Certified Developers</p>
          </div>
      
          <!-- Counter 4 -->
          <div class="flex flex-col items-start  text-gray-800">
            <p class="text-3xl sm:text-4xl !font-[600] text-[#093BAA] bai-jamjuree-font">10</p>
            <p class="mt-2 text-sm !font-[300] text-[#5C5C5C] text-left">Total Countries Reached</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  <div class="pt-[2%] pb-[2%] mx-auto w-full flex justify-center items-center"><button class=" w-[80%] px-[24px] py-[8px] text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"  on:click={()=>{redirectTo('/registration')}}>Register Now</button></div>
</div>

<style>
  
  .bai-jamjuree-font {
  font-family: 'Bai Jamjuree', sans-serif !important;
}
.rubik-font {
  font-family: 'Rubik', sans-serif !important;
}
@media (max-width:420px){
    .hrmanipulate1{
      width: 275px !important;
      margin-left: 10px !important;
    }
    .hrmanipulate2{
      width: 220px !important;
    }
    .text-size{
      font-size: 24px !important;
    }
    .text-size-2{
      font-size: 12px !important;
    }
}

@media (max-width:350px){
  .hrmanipulate1{
      width: 225px !important;
      margin-left: 10px !important;
    }
    .hrmanipulate2{
      width: 185px !important;
      margin-left: 15px !important;
    }
    .text-size{
      font-size: 20px !important;
    }
}

@media (max-width:1400px){
 .text-desk{
  font-size: 40px !important;
 }
 .hrmanipulatedesk1{
   width: 430px !important;
   margin-top: -46px !important;
 }
 .hrmanipulatedesk2{
  width: 340px !important;
  margin-top: 35px !important;
 }
}

@media (max-width:1155px){
 .text-desk{
  font-size: 36px !important;
 }
 .hrmanipulatedesk1{
   width: 390px !important;
   margin-top: -42px !important;
 }
 .hrmanipulatedesk2{
  width: 340px !important;
  margin-top: 32px !important;
 }
}
@media (max-width:1035px){
 .text-desk{
  font-size: 32px !important;
 }
 .hrmanipulatedesk1{
   width: 360px !important;
   margin-top: -38px !important;
 }
 .hrmanipulatedesk2{
  width: 290px !important;
  margin-top: 28px !important;
 }
}
@media (max-width:1025px){
 .hrmanipulatedesk1{
   width: 340px !important;
   margin-top: -49px !important;
 }
 .hrmanipulatedesk2{
  width: 280px !important;
  margin-top: 35px !important;
 }
}
@media (max-width:915px){
 .text-desk{
  font-size: 24px !important;
 }
 .hrmanipulatedesk1{
   width: 270px !important;
   margin-top: -52px !important;
 }
 .hrmanipulatedesk2{
  width: 190px !important;
  margin-top: 35px !important;
 }
}
</style>