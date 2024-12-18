<script>
  import { goto } from "$app/navigation";

  const redirectTo = (url) => {
    goto(url);  
  };
  
  // let courseImage = "/academy/course-image.jpg";
  let originalPrice = "₹36,000.00";
  let discountedPrice = "₹8999.00";
  let courseTitle = "Blockchain Mastery Program";
  let discountPercentage = "75% off";
</script>

<footer class="fixed z-[12] bottom-0 w-full bg-blue-800 text-white">
  <div class="flex md:flex-row h-fit w-full items-center justify-between px-4 py-2 md:px-5 md:py-2 lg:px-10">
    <div class="flex w-fit items-center gap-x-[20px]">
      <div>
        <p class="!text-sm course-title-sm lg:course-title-lg">{courseTitle}</p>
        <p class="price-text-sm !text-sm lg:price-text-md text-gray-300 !font-[Rubik] discount-price-text-sm">
          Price: <span class="line-through text-sm discount-price-text-sm">{originalPrice}</span> ({discountPercentage})
        </p>
      </div>
    </div>

    <p class="block sm:hidden text-center text-2xl font-[500] font-[Rubik] discounted-price-text-sm lg:discounted-price-text-lg px-2">{discountedPrice}</p>
    
    <div class="flex items-center justify-start w-fit sm:w-1/2 lg:w-fit lg:gap-8">
      <span class="hidden sm:block text-sm md:text-xl line-through text-gray-300 font-['Rubik'] original-price-text-sm">{originalPrice}</span>
      <span class="hidden sm:block text-lg md:text-3xl font-[500] font-[Rubik] discounted-price-text-sm">{discountedPrice}</span>
      <button on:click={() => redirectTo('/registration')} class="bg-white ml-5 w-[110px] sm:w-full text-black p-2 text-xs md:text-base lg:px-6 lg:py-2 rounded-md border border-black hover:bg-gray-50 transition-colors" style="box-shadow: 0.2rem 0.3rem 0px 0px;">
        Get it Now
      </button>
    </div>
  </div>
</footer>

<style>
  @media (max-width: 500px) {
  .course-title-sm {
    font-size: 10px !important;
  }
  .price-text-sm {
    font-size: 8px !important;
    margin-top: -6px !important;
  }
  .discount-price-text-sm {
    font-size: 8px !important;
  }
  .discounted-price-text-sm {
    font-size: 18px !important;
  }
  .original-price-text-sm {
    font-size: 8px !important;
  }
}



@media (max-width: 420px) {
  .course-title-sm {
    font-size: 7.5px !important;
  }
  .price-text-sm {
    font-size: 6px !important;
    margin-top: -8px !important;
  }
  .discount-price-text-sm {
    font-size: 6px !important;
  }
  .discounted-price-text-sm {
    font-size: 14px !important;
  }
  .original-price-text-sm {
    font-size: 6px !important;
  }

}

@media (max-width: 350px) {
  .course-title-sm {
    font-size: 7.5px !important;
  }
  .price-text-sm {
    font-size: 6px !important;
    margin-top: -8px !important;
  }
  .discount-price-text-sm {
    font-size: 6px !important;
  }
  .discounted-price-text-sm {
    font-size: 8.8px !important;
  }
  .original-price-text-sm {
    font-size: 6px !important;
  }

}

</style>