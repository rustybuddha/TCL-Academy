<script>
  import { goto } from "$app/navigation";

const redirectTo = (url) => {
  goto(url);  
};
  let courseImage = "/academy/course-image.jpg"; // Update with actual image path
  
  // You might want to make these props
  let originalPrice = "₹36,000.00";
  let discountedPrice = "₹8999.00";
  let courseTitle = "Blockchain Pro Course";
  let discountPercentage = "75% off";
</script>

<footer class="fixed z-[12] bottom-0 w-full bg-blue-800 text-white">
  <div class="flex md:flex-row h-fit w-full items-center justify-between px-4 py-2 md:px-5 md:py-2 lg:px-10">
    <div class="flex w-fit items-center gap-x-[20px]">
      <!-- <img 
        src={courseImage} 
        alt="Course Preview" 
        class="w-auto h-10 md:h-14 rounded-md object-cover"
      /> -->
      <div>
        <h3 class="text-base lg:text-2xl text1">{courseTitle}</h3>
        <p class="text-xs lg:text-sm text-gray-300 !font-[Rubik] text2">
          Price: <span class="line-through text-sm text2">{originalPrice}</span> ({discountPercentage})
        </p>
      </div>
    </div>

    <p class="block sm:hidden"><span class="text-2xl !font-[500] font-[Rubik] text3 px-2">{discountedPrice}</span></p>
    
    <div class="flex items-center justify-start w-fit sm:w-1/2 lg:w-fit lg:gap-8">
      <span class="hidden sm:block text-sm md:text-xl line-through text-gray-300 font-['Rubik']">{originalPrice}</span>
      <span class="hidden sm:block text-lg md:text-3xl font-[500] font-[Rubik] ">{discountedPrice}</span>
      <button on:click={() => redirectTo('/registration')} class="bg-white ml-5 text-black p-2 text-xs md:text-base lg:px-6 lg:py-2 rounded-md border border-black hover:bg-gray-50 transition-colors" style="box-shadow: 0.2rem 0.3rem 0px 0px;">
        Get it Now
      </button>
    </div>
  </div>

</footer>


<style>
  @media(max-width:430px){
    .text1{
      font-size: 10px !important;
    }
    .text2{
      font-size: 8px !important;
      margin-top: -6px !important;
    }
  }

  @media(max-width:360px){
    .text1{
      font-size: 8.5px !important;
    }
    .text2{
      font-size: 7px !important;
      margin-top: -7px !important;
    }
    .text3{
      font-size: 18px !important;
    }
  }
</style>