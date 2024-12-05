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
  <div class="flex flex-col-reverse md:flex-row h-fit items-center justify-between px-4 py-2 md:px-5 md:py-2 lg:px-10">
    <div class="flex items-center gap-x-[20px]">
      <img 
        src={courseImage} 
        alt="Course Preview" 
        class="w-auto h-10 md:h-14 rounded-md object-cover"
      />
      <div>
        <h3 class="text-base lg:text-2xl">{courseTitle}</h3>
        <p class="text-xs lg:text-sm text-gray-300">
          Price: <span class="line-through">{originalPrice}</span> ({discountPercentage})
        </p>
      </div>
    </div>
    
    <div class="flex items-center justify-around w-full sm:w-1/2 lg:w-fit lg:gap-8">
      <span class="text-sm md:text-lg line-through text-gray-300">{originalPrice}</span>
      <span class="text-lg md:text-2xl font-bold">{discountedPrice}</span>
      <button on:click={() => redirectTo('/academy/registration')} class="bg-white text-black p-2 text-xs md:text-base lg:px-6 lg:py-2 rounded-md border border-black hover:bg-gray-50 transition-colors" style="box-shadow: 0.2rem 0.3rem 0px 0px;">
        Get it Now
      </button>
    </div>
  </div>

</footer>