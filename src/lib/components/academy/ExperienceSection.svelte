<script>
  const testimonials = [
    {
      img: "/academy/DivyanshuPrasad.svg",
      header: "I was not a developer previously",
      name: "Divyanshu Prasad",
      role: "Developer Intern, DOT Exchange",
      description: "Working with Timechainlabs, I got to know what real development looks like.",
      videoUrl: "https://youtube.com/embed/1YYd34lWRH0"
    },
    {
      img: "/academy/RiteekRakesh.svg",
      header: "Got opportunity to work on real projects.",
      name: "Riteek Rakesh",
      role: "Developer Intern, DOT Exchange",
      description: "I basically learnt how to write backend APIs for any fullstack applications.",
      videoUrl: "https://youtube.com/embed/0VPPR1PNuXY"
    },
  ];
  let modal = false; 
  let currentVideoUrl = '';  

  function openModal(videoUrl) {
    currentVideoUrl = videoUrl;
    modal = true;
  }
  
  function closeModal() {
    modal = false;
    currentVideoUrl = ''; 
  }
</script>

 <div class="px-4 sm:px-2" id="testimonials">
<div class="flex flex-col items-center max-w-6xl mx-auto mt-[100px]" >
  <div class="text-center mb-8">
    <div class="!max-w-[650px] flex justify-center mt-2 mb-2">
      <p class="bg-[#E6EBF4] w-[170px] rounded-full text-[#093BAA] text-sm sm:text-base md:text-lg"> Featured Stories </p>
    </div>
    <div class="text-center flex max-w-[650px] m-auto">
      <p class="text-2xl sm:text-3xl md:text-4xl font-[700] text-[#333333]">
        Over
      </p>
      <p class="text-[#093BAA] font-[700] ml-2 mr-2 text-xl sm:text-2xl md:text-4xl">
        400+ Students
      </p>
      <p class="text-xl sm:text-3xl md:text-4xl font-[700] text-[#333333]">
        have benefited
      </p>
    </div>
    <p class="text-xl sm:text-3xl md:text-4xl !font-[700] flex mt-0 sm:mt-3 justify-center text-xl sm:text-2xl md:text-4xl">
      from Timechain Labs.
    </p>
  </div>
</div>

<!-- Testimonial Cards -->
<div class=" flex container-care sm:flex-col md:flex-row sm:flex-row gap-6 justify-center items-start max-w-[1300px] m-auto" style="margin-top: 30px; margin-bottom:100px;">
  {#each testimonials as testimonial}
    <div class="bg-white border rounded-lg  sm:w-1/2 flex flex-col card-care  md:flex-row gap-4 sm:gap-6 text-sm sm:text-base">
      <div class=" text-white overflow-hidden  w-full">
        <img src={testimonial.img} alt={testimonial.name} class="w-full rounded-l-[8px] img-care">
      </div>
      <div class="flex flex-col justify-between px-2">
        <p class="text-green-500 text-2xl font-bold quote mt-5"><img src="/academy/card-quote.svg" alt=""></p>
        <p class="text-gray-700 mt-2 text-sm sm:text-3xl font-[400] italic dis">{testimonial.description}</p>
        <div class="mt-4 mb-6 flex justify-between items-center">
         <div>
           <p class="font-medium">{testimonial.name}</p>
           <p class="text-xs text-gray-500">{testimonial.role}</p>
          </div>
          <button on:click={() => openModal(testimonial.videoUrl)} class="mt-2 w-10 !mr-[15px] h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shadow-md hover:bg-blue-100">
          <img src="/academy/play-btn.svg" alt="">
          </button>
        </div>
      </div>
    </div>
  {/each}
</div>
</div>
{#if modal}
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50" on:click={closeModal}>
   <div class="px-4 w-full flex justify-center">
    <div class="bg-white p-8 rounded-lg max-w-lg w-full relative" on:click|stopPropagation>
      <button class="absolute top-2 right-2 text-3xl font-bold text-gray-600 hover:text-gray-900" on:click={closeModal}>&times;</button>
      <iframe 
        class="w-full h-64 sm:h-80 rounded-lg" 
        src={currentVideoUrl}
        title="Video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
  </div>
{/if}

<style>
  @media (max-width: 640px) {
    .container-care {
      flex-direction: column !important;
    }
  }
  
  @media (max-width: 1144px) {
    .text-lg {
      font-size: 1.25rem !important; 
    }
    .text-4xl {
      font-size: 2rem !important; 
    }
    .dis{
      font-size: 18px;
    }
  }

  @media (max-width: 960px) {
    .dis{
      font-size: 14px;
    }
    .quote{
      width: 30px  !important;
      height: 40px !important;
    }
  }

  @media (max-width: 940px) {
    .container-care{
      flex-direction: column !important;
      justify-items: center;
      align-items: center;
      padding: 0px !important;
    }
    .dis{
      font-size: 14px;
    }
  }

  @media (max-width: 900px) {
  .card-care {
    flex-direction: column !important;
  }
  
  .img-care {
    border-top-left-radius: 8px !important;
    border-top-right-radius: 8px !important;
    border-bottom-left-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    width: 100% !important;   
    height: auto !important;  
    object-fit: cover; 
  }
}

  @media (min-width: 1024px) {
    .container-care {
      flex-direction: row;
    }
  }
</style>