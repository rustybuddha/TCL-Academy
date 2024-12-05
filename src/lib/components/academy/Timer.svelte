<script>
    import { onMount } from "svelte";
  
    // Set your target date here
    let targetDate = new Date("2024-12-15T23:59:59"); // Update with your desired target date
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
  
  <style>
    .shadow-custom {
      box-shadow: 3px 6px 0px #000000;
    }
  </style>
  
  <div class="flex items-center justify-center gap-1 md:gap-2 lg:gap-4">
    <!-- Days Container -->
    <div class="flex flex-col items-center justify-center w-20 h-16 sm:w-16 sm:h-16 bg-white rounded-md border border-gray-300 shadow-custom">
      <span class="text-2xl sm:text-xl font-bold">{days}</span>
      <span class="text-sm text-gray-600">Days</span>
    </div>
  
    <!-- Separator -->
    <span class="text-2xl font-bold text-gray-800">:</span>
  
    <!-- Hours Container -->
    <div class="flex flex-col items-center justify-center w-20 h-16 sm:w-16 sm:h-16 bg-white rounded-md border border-gray-300 shadow-custom">
      <span class="text-2xl sm:text-xl font-bold">{hours}</span>
      <span class="text-sm text-gray-600">Hours</span>
    </div>
  
    <!-- Separator -->
    <span class="text-2xl font-bold text-gray-800">:</span>
  
    <!-- Minutes Container -->
    <div class="flex flex-col items-center justify-center w-20 h-16 sm:w-16 sm:h-16 bg-white rounded-md border border-gray-300 shadow-custom">
      <span class="text-2xl sm:text-xl font-bold">{minutes}</span>
      <span class="text-sm text-gray-600">Minutes</span>
    </div>
  
    <!-- Separator -->
    <span class="text-2xl font-bold text-gray-800">:</span>
  
    <!-- Seconds Container -->
    <div class="flex flex-col items-center justify-center w-20 h-16 sm:w-16 sm:h-16 bg-white rounded-md border border-gray-300 shadow-custom">
      <span class="text-2xl sm:text-xl font-bold">{seconds}</span>
      <span class="text-sm text-gray-600">Seconds</span>
    </div>
  </div>
  
  