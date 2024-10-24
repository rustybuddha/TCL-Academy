<script>
  export let heading;
  export let description;
  export let Image;
</script>

<div class=" ">
  <div class="relative w-[610px] h-[390px] overflow-hidden rounded-lg">
    <img 
      src={Image}
      class="w-full  hover:scale-[1.2] transition-all duration-500"
      alt=""
    />
    <div
      class="absolute text-white bottom-0 p-5 bg-gradient-to-b from-transperent to-black"
    >
      <h1 class="text-xl font-bold mb-3">{heading}</h1>

      <p class="text-base">
        {description}
      </p>
    </div>
  </div>
</div>
