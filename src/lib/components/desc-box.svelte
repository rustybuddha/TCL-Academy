<script>
  export let tag = "";
  export let title = "";
  export let desc = "";
  export let link;
  export let w = "70";
  export let textColor = "";
  export let btnText = "";
  export let btnIcon = "";
  export let showButton = false;
</script>

<div
  class="px-[78px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[800px]:px-[30px] max-[360px]:px-[10px] w-[70%] max-[1000px]:w-[100%]"
>
  <h1
    class="text-2xl text-[#457DC0] font-bold max-[900px]:text-1xl max-[360px]:text-xl"
  >
    {tag}
  </h1>
  <h1
    class="{textColor} text-[32px] font-[500] leading-[41px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] max-[900px]:text-[26px] max-[360px]:text-[20px]"
  >
    {@html title}
  </h1>
  <p
    class="{textColor} text-[20px] my-[15px] max-[360px]:mb-[10px] max-[900px]:text-[16px] max-[360px]:text-[12px] font-[300]"
  >
    {@html desc}
  </p>

  {#if showButton}
    <a href={link} target="_blank">
      <button
        class="bg-white my-[5px] px-[10px] py-[8px] rounded-lg text-primary text-[15px] font-[400] border-2 hover:text-white hover:bg-secondary hover:border-secondary"
      >
        <i class="mr-2 {btnIcon}" /> {btnText}
      </button>
    </a>
  {/if}
</div>

