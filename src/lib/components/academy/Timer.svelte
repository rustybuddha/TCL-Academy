<script>
    import { onMount } from "svelte";
  
    // Set your target date here
    let targetDate = new Date("2025-01-01T23:59:59"); // Update with your desired target date
    let days = 0, hours = 0, minutes = 0, seconds = 0;
  
    const calculateTime = () => {
      const now = new Date();
      const difference = targetDate - now;
  
      if (difference > 0) {
        days = Math.floor(difference / (1000 * 60 * 60 * 24));
        hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        minutes = Math.floor((difference / (1000 * 60)) % 60);
        seconds = Math.floor((difference / 1000) % 60);
      } else {
        // Countdown complete
        days = hours = minutes = seconds = 0;
      }
    };
  
    onMount(() => {
      calculateTime();
      const interval = setInterval(calculateTime, 1000);
      return () => clearInterval(interval); // Cleanup interval
    });
  </script>
  

  
  <div class="flex items-center justify-center p gap-1 md:gap-2 lg:gap-4">
    <!-- Days Container -->
    <div class="flex flex-col  items-center justify-center w-20 h-16 sm:w-[110px] sm:h-[110px] bg-white rounded-md border border-[1.6px] border-[#151515] shadow-custom">
      <span class="text-2xl sm:text-5xl !font-[500] bai-jamjuree-font">{days}</span>
      <span class="text-[1rem] -mt-1 text-[#5C5C5C] font-[400] rubik-font text">Days</span>
    </div>
  
    <!-- Separator -->
    <span class="text-3xl mx-1 sm:text-5xl !font-[500] text-[#333333]">:</span>
  
    <!-- Hours Container -->
    <div class="flex flex-col items-center justify-center w-20 h-16 sm:w-[110px] sm:h-[110px] bg-white rounded-md border border-[1.6px] border-[#151515] shadow-custom">
      <span class="text-2xl sm:text-5xl !font-[500] bai-jamjuree-font">{hours}</span>
      <span class="text-[1rem] -mt-1 text-[#5C5C5C] font-[400] rubik-font text">Hours</span>
    </div>
  
    <!-- Separator -->
    <span class="text-3xl mx-1 sm:text-5xl !font-[500] text-[#333333]">:</span>
  
    <!-- Minutes Container -->
    <div class="flex flex-col items-center justify-center w-20 h-16 sm:w-[110px] sm:h-[110px] bg-white rounded-md border border-[1.6px] border-[#151515] shadow-custom">
      <span class="text-2xl sm:text-5xl !font-[500] bai-jamjuree-font">{minutes}</span>
      <span class="text-[1rem] -mt-1 text-[#5C5C5C] font-[400] rubik-font text">Minutes</span>
    </div>
  
    <!-- Separator -->
    <span class="text-3xl mx-1 sm:text-5xl !font-[500] text-[#333333]">:</span>
  
    <!-- Seconds Container -->
    <div class="flex flex-col items-center justify-center w-20 h-16 sm:w-[110px] sm:h-[110px] bg-white rounded-md border border-[1.6px] border-[#151515] shadow-custom">
      <span class="text-2xl sm:text-5xl !font-[500] bai-jamjuree-font">{seconds}</span>
      <span class="text-[1rem] -mt-1 text-[#5C5C5C] font-[400] rubik-font text">Seconds</span>
    </div>
  </div>
  
  <style>
    .shadow-custom {
      box-shadow: 4px 6px 0px #000000;
    }
    .bai-jamjuree-font {
      font-family: 'Bai Jamjuree', sans-serif !important;
    }
    .rubik-font {
      font-family: 'Rubik', sans-serif !important;
    }

    
@media (max-width: 429px) {
  .text {
    font-size: 16px !important;
  }
}
@media (max-width: 351px) {
  .text {
    font-size: 12px !important;
  }
}

  </style>