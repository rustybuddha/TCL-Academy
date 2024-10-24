<script>
  import PrimaryButton from "./primary-button.svelte";
  export let title;
  export let subtitle;
  export let description;
  export let imageUrl;
  export let type;
  export let headingColor = "";
  export let textColor = "";
  // export let isActive = false;
  // export let slug;

  function handleClick() {
    window.location.href = `/case-study/${slug.current}`;
  }
</script>

<div
  class={`w-full laptop:w-[860px] laptop:py-[70px] mbl-lg:py-[50px] py-[38px] laptop:pl-[40px] mbl-sm:pl-[30px] pl-[12px] rounded-[10px] ${
    type == 1 ? "bg-[#457DC0]" : type == 2 ? "bg-[#FFCC00]" : "bg-[#2F2F2F]"
  }`}
>
  <div
    class="flex items-start justify-between w-full laptop:gap-[40px] mbl-lg:gap-[25px] gap-[8px]"
  >
    <div class="max-w-[322px]">
      <h1
        class="laptop:text-[20px] tablet:text-[16px] mbl-sm:text-[14px] font-bold"
        style="color: {headingColor};"
      >
        {title}
      </h1>
      <h1
        class="laptop:text-[20px] tablet:text-[16px] mbl-sm:text-[14px] mbl-lg:my-[10px] my-1"
        style="color: {headingColor};"
      >
        {subtitle}
      </h1>
      <p
        class="tablet:text-[14px] mbl-lg:text-[12px] text-[10px] laptop:mb-[40px] mbl-lg:mb-[20px] mb-[15px] whitespace-normal"
        style="color: {textColor};"
      >
        {description}
      </p>
      <!-- /case-study/{title} -->
      <!-- <a href=""  on:click={() => handleClick()} > -->
      <PrimaryButton
        outlined={true}
        iconPath="/coming-soon.svg"
        className="bg-inherit border-2 text-white border-white !cursor-not-allowed"
        text="Coming Soon"
      />
      <!-- </a> -->
    </div>
    <!-- <div class=""> -->
    <!-- max-[700px]:w-[250px] max-[700px]:h-[125px] object-fit max-[700px]:object-cover  -->
    <img
      src={imageUrl}
      class="mbl-lg:h-[300px] h-[150px] w-[145px] mbl-lg:w-[270px] tablet:w-[400px] object-cover object-left"
      alt=""
    />
    <!-- </div> -->
  </div>
</div>
