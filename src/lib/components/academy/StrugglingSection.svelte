<script>
  const cards = [
    {
      img: "/academy/qmark.svg",
      content: "You want to get hired at a good and reputable firm?",
    },
    {
      img: "/academy/qmark.svg",
      content: "You want to refine your resume and outshine from the crowd?",
    },
    {
      img: "/academy/qmark.svg",
      content: "You want a clear roadmap to advance your career by 5 years?",
    },
    {
      img: "/academy/qmark.svg",
      content: "You want to get certified as a full-stack blockchain developer?",
    },
  ];
</script>

<!-- Struggling Section -->
<div class="hidden md:flex w-full struggling-section mt-10">

  <!-- Desktop View -->
  <div class="sm:flex flex-col items-center max-w-6xl mx-auto">
    <div class="text-center mb-8">
      <p class="text-2xl font-medium text-[#767676]">Are you struggling to</p>
      <div class="text-5xl font-[400] flex mt-3">
        Find the best tech <p class="text-[#05A987] font-[400] ml-2">courses</p>?
      </div>
    </div>

    <!-- Cards Section -->
    <div class="flex justify-center  !max-w-[1300px]">
      {#each cards as card}
      <div
      class="flex flex-row border-r-2 card bg-white p-6 text-center w-1/4 transform transition-transform duration-300 hover:scale-105 rounded-none"
    >
          <img src={card.img} alt="Question Mark" class="w-10 mx-auto mb-4  -mt-8">
          <p class=" text-gray-700 text-left ml-3">{card.content}</p>
        </div>
      {/each}
    </div>
    
  </div>
</div>


<div class="md:hidden w-full struggling-section mt-10">
  <!-- Mobile View -->
  <div class="sm:flex flex-col items-center !max-w-[500px] mx-auto">
    <div class="text-center mb-8 ">
      <p class="text-xl sm:text-2xl font-medium text-[#767676]">Are you struggling to</p>
      <div class="text-2xl sm:text-3xl font-[400] flex mt-2 justify-center">
        Find the best tech <p class="text-[#05A987] font-[400] ml-2">courses</p>?
      </div>
    </div>
  
    <div class="grid  grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  justify-center !max-w-[500px] mx-auto">
      {#each cards as card}
      <div
        class="flex  flex-col card bg-white p-6 text-center w-full transform transition-transform duration-300 hover:scale-105 rounded-none"
      >
        <img src={card.img} alt="Question Mark" class="w-10 mx-auto mb-4 -mt-8 text-center">
        <p class="text-gray-700 text-center ml-3">{card.content}</p>
      </div>
      {/each}
    </div>
  </div>
</div>
<style>
  .card:last-child{
    border: none !important;;
  }
</style>
