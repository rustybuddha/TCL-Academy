<script>
    export let buttonText = ""; 
    export let iconSrc = ""; 
    export let link = ''; 
</script>


<div class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
    <span class="relative inline-flex px-5 py-2.5 text-white transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      <img class="h-[20px] mr-[20px]" src="{ iconSrc }" alt="">
      <p class="justify-center font-semibold">{ buttonText }</p>
      <!-- <img class="h-[18px] ml-[10px]" src="/images/star.png" alt="" /> -->
    </span>
  </div>