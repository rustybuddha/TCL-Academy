<script>
  import ArrowCorner from "./arrow-corner.svelte";

  export let text;
  export let onClick;
  export let htmlType = "";
  export let iconPath;
  export let href;
  export let className = "";
  export let width = "";
  export let outlined = false;
  export let icon = false;
</script>

{#if htmlType === "submit"}
  <button
    class="{outlined
      ? className
      : 'text-white bg-primary hover:bg-secondary '} cursor-pointer transition-all duration-200 h-fit {width ||
      'w-fit'} rounded-[6px] px-[12px] py-[6px] md:py-[12px] md:px-[18px] sm:text-[10px] mb-lg:text-[16px] text-[18px] font-[500] flex items-center gap-[6px] group"
    type="submit"
  >
    {text}
    {#if iconPath}
      <img src={iconPath} alt="" srcset="" />
    {/if}
    {#if icon}
      <p class="block group-hover:hidden">
        <svelte:component this={ArrowCorner} active={false} />
      </p>
      <p class="hidden group-hover:block">
        <svelte:component this={ArrowCorner} active={true} />
      </p>
    {/if}
  </button>
{:else if href}
  <a
    {href}
    class="{outlined
      ? className
      : 'text-white bg-primary hover:bg-secondary '} cursor-pointer transition-all duration-200 h-fit {width ||
      'w-fit'} rounded-[6px] px-[12px] py-[6px] md:py-[12px] md:px-[18px] mbl-lg:text-[16px] text-[18px] font-[500] flex items-center gap-[6px] group"
  >
    {text}
    {#if iconPath}
      <img src={iconPath} alt="" srcset="" />
    {/if}
    {#if icon}
      <p class="block group-hover:hidden">
        <svelte:component this={ArrowCorner} active={false} />
      </p>
      <p class="hidden group-hover:block">
        <svelte:component this={ArrowCorner} active={true} />
      </p>
    {/if}
  </a>
{:else}
  <button
    class="{outlined
      ? className
      : 'text-white bg-primary hover:bg-secondary '} cursor-pointer transition-all duration-200 h-fit {width ||
      'w-fit'} rounded-[6px] px-[12px] py-[6px] md:py-[12px] md:px-[18px] mbl-lg:text-[16px] text-[18px] font-[500] flex items-center gap-[6px] group"
    on:click={onClick}
  >
    {text}
    {#if iconPath}
      <img src={iconPath} alt="" srcset="" />
    {/if}
    {#if icon}
      <p class="block group-hover:hidden">
        <svelte:component this={ArrowCorner} active={false} />
      </p>
      <p class="hidden group-hover:block">
        <svelte:component this={ArrowCorner} active={true} />
      </p>
    {/if}
  </button>
{/if}
