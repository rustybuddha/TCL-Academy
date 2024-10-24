<script>
  import Button from "./button.svelte";
  import iconsMap from "$lib/utils/sectorsIconsMap.js";

  export let sector;
</script>

<div class="max-w-[386px] max-[360px]:max-w-[328px]">
  <a href={`/solutions/${sector?.name}`}>
    <img
      src={sector?.cover}
      alt=""
      class="cursor-pointer h-[236px] max-[500px]:h-[200px] w-full rounded-[12px] object-fill"
      srcset=""
    />
  </a>
  <div class="my-[20px]">
    <a href={`/solutions/${sector?.name}`}>
      <h3
        class="cursor-pointer text-[18px] tablet:text-[24px] leading-[1.6] max-[360px]:text-[16px] font-[500] text-primary flex gap-[8px] items-center uppercase mb-[12px]"
      >
        <span class="block tablet:hidden">
          <svelte:component
            this={iconsMap[sector?.name]}
            color="#093BAA"
            size="28px"
          />
        </span>
        <span class="hidden tablet:block">
          <svelte:component
            this={iconsMap[sector?.name]}
            color="#093BAA"
            size="24px"
          />
        </span>
        {sector?.name}
      </h3>
    </a>
    <p
      class="cursor-pointer text-[16px] max-[360px]:text-[12px] font-[300] text-blue-gray line-clamp-3"
    >
      {sector?.description}
    </p>
  </div>
  <Button text="Learn more" href={`/solutions/${sector?.name}`} />
</div>
