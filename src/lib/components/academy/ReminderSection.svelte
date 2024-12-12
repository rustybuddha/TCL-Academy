  <!-- Reminder Section  -->
<script>
    import Timer from "./Timer.svelte";
</script>
  <div class="flex items-center justify-center py-24 max-w-[1440px] mx-auto bg-cover bg-center"
  style="background-image: url('/academy/reminder-section-1.svg');">

  <!-- Inner Content Container -->
  <div class="w-full max-w-[1200px] p-6 lg:p-8 text-center">

      <div class="flex flex-col justify-center">
          <div class="mx-auto max-w-[617px] px-[10%] mb-8"><p class="md:text-4xl sm:text-3xl text-2xl">Our Next Cohort Time</p></div>
          <div class="mx-auto max-w-[617px] lg:px-[10%] mb-8 w-full"><Timer/></div>
      </div>


      <!-- Notification Form -->
      <p class="text-center text-gray-700 mb-4 text-xs lg:text-base">Notify me by email when it’s time for the event</p>
      <div class="flex justify-center max-w-[617px] mx-auto">
          <input type="email" placeholder="Email Address"
              class=" mr-2 py-2 px-2 rounded-lg border border-gray-300 w-[19rem]">
          <button
              class="font-['Rubik'] font-[400] bg-[#093baa] border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500 text-white px-4 py-2 rounded-lg text-sm">Submit</button>
      </div>
  </div>
</div>