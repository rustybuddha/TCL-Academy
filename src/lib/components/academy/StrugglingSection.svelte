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
<div class="hidden sm:flex w-full struggling-section ">

  <!-- Desktop View -->
  <div class="sm:flex flex-col items-center max-w-6xl mx-auto mt-10">
    <div class="text-center mb-8">
      <p class="sm:text-xl lg:text-2xl font-medium text-[#767676]">Are you struggling to</p>
      <div class="sm:text-3xl lg:text-5xl font-[400] flex mt-3">
        Find the best tech <p class="text-[#05A987] font-[400] ml-2">courses</p>?
      </div>
    </div>

    <!-- Cards Section -->
    <div class="flex justify-center !max-w-[1300px]">
      {#each cards as card}
      <div
      class="flex sm:flex-col lg:flex-row border-r-2 card bg-white p-6 text-center w-1/4 transform transition-transform duration-300 hover:scale-105 rounded-none"
    >
          <img src={card.img} alt="Question Mark" class="w-10 mx-auto mb-4  -mt-8">
          <p class=" text-[#333333] font-['Rubik'] sm:text-center md:text-left ml-3">{card.content}</p>
        </div>
      {/each}
    </div>
    
  </div>
</div>


<div class="sm:hidden w-full struggling-section mt-10">
  <!-- Mobile View -->
  <div class="sm:flex flex-col items-center !max-w-[500px] mx-auto">
    <div class="text-center mb-8 ">
      <p class="text-[1rem]  font-[400] text-[#767676]">Are you struggling to</p>
      <div class="text-[1.3rem] font-[400] flex mt-2 justify-center">
        Find the best tech <p class="text-[#05A987] font-[400] ml-2">courses</p>?
      </div>
    </div>
  
    <div class="grid grid-cols-2 justify-items-center place-content-center gap-4 mx-auto max-w-screen-lg px-2">
      {#each cards as card}
        <div
          class="flex flex-col bg-white  text-center max-w-[10.5rem] transform transition-transform duration-300 hover:scale-105 rounded-lg "
        >
          <img src={card.img} alt="Question Mark" class="w-10 mx-auto mb-4  text-center">
          <p class="text-[#333333] font-[400] text-sm w-full px-1">{card.content}</p>
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
