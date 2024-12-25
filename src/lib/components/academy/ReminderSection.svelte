  <!-- Reminder Section  -->
<script>
    import Timer from "./Timer.svelte";
</script>
  <div class="flex items-center justify-center mt-[100px] sm:py-20 max-w-full  mx-auto bg-cover bg-center"
  style="background-image: url('/academy/reminder-section-1.svg');">

  <!-- Inner Content Container -->
  <div class="w-full max-w-[1200px] p-6 lg:p-8 text-center">

      <div class="flex flex-col justify-center">
          <div class="mx-auto w-full px-[10%] mb-8"><p class="text text-3xl md:text-5xl">Our Next Cohort Time</p></div>
          <div class="mx-auto w-full lg:px-[10%] mb-8"><Timer/></div>
      </div>


      <!-- Notification Form -->
      <p class="desc text-center text-[10px] text-[#333333] mb-4 sm:text-lg sm:mt-10">
        Hurry Up! Only <span class="curved-underline !font-[400]">limited seats</span> are available for the next cohort.
      </p>
      
      <!-- 
      <div class="flex justify-center max-w-[617px] mx-auto">
          <input type="email" placeholder="Email Address"
              class=" mr-3 py-2 px-2 rounded-lg border border-gray-300 w-full">
          <button
              class="w-[110px] font-['Rubik'] font-[400] bg-[#093baa] border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500 text-white px-4 py-2 rounded-lg text-sm">Submit</button>
      </div> -->
  </div>
</div>

<style>
@media (max-width: 425px) {
  .text {
    font-size: 24px !important;
  }
  .desc{
    font-size: 10px !important;
    font-weight:400 !important ;
  }
}
@media (max-width: 356px) {
  .text {
    font-size: 21px !important;
  }
  .desc{
    font-size: 8px !important;
  }
}
.curved-underline {
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
}

.curved-underline::after {
  content: '';
  position: absolute;
  bottom: -5px; 
  left: 0;
  width: 100%;
  border-top: 3px solid #39E5D9 ;
  height: 10px; 
  background-color: transparent;
  border-radius: 48%; 
  transform: rotate(3deg); 
  transform-origin: center;
}
</style>