<script>
  export let text;
  export let onClick;
  export let htmlType = "";
  export let href;
  export let className = "";
  export let addClasses = "";
  export let outlined = false;
  export let icon;
  export let iconColor = "";
  export let iconHoverColor = "";
  export let openInNewTab = false;
</script>

<div
  class={!outlined &&
    "font-rubik p-[1.2px] w-fit border-primary border-[1.5px] bg-gradient-to-b from-[#D8E4FF] via-primary-2 active:via-primary via-30% to-primary-2 rounded-[6px]"}
>
  {#if htmlType === "submit"}
    <button
      class="{outlined
        ? className
        : 'font-rubik text-white bg-primary hover:bg-primary-2 '} cursor-pointer transition-all duration-200 h-fit {addClasses ||
        'w-fit'} rounded-[6px] py-[10px] px-[18px] mbl-sm:text-[1px] tablet:text-[16px] laptop:text-[18px] font-[500] flex items-center gap-[6px] group"
      type="submit"
    >
      {text}
      {#if icon}
        <p class="block group-hover:hidden">
          <svelte:component this={icon} {iconColor} />
        </p>
        <p class="hidden group-hover:block">
          <svelte:component this={icon} iconColor={iconHoverColor} />
        </p>
      {/if}
    </button>
  {:else if href}
    <a
      {href}
      target={openInNewTab ? "_blank" : "_parent"}
      class="{outlined
        ? className
        : 'font-rubik text-[300] text-white bg-primary hover:bg-primary-2 '} cursor-pointer transition-all duration-200 h-fit {addClasses ||
        'w-fit'} rounded-[6px] py-[10px] px-[18px] mbl-sm:text-[1px] tablet:text-[14px] laptop:text-[14px] font-[500] flex items-center gap-[6px] group"
    >
      {text}
      {#if icon}
        <p class="block group-hover:hidden">
          <svelte:component this={icon} {iconColor} />
        </p>
        <p class="hidden group-hover:block">
          <svelte:component this={icon} iconColor={iconHoverColor} />
        </p>
      {/if}
    </a>
  {:else}
    <button
      class="{outlined
        ? className
        : 'font-rubik text-white bg-primary hover:bg-primary-2 '} cursor-pointer transition-all duration-200 h-fit {addClasses ||
        'w-fit'} rounded-[6px] py-[10px] px-[18px] mbl-sm:text-[1px] tablet:text-[16px] laptop:text-[18px] font-[500] flex items-center gap-[6px] group"
      on:click={onClick}
    >
      {text}
      {#if icon}
        <p class="block group-hover:hidden">
          <svelte:component this={icon} {iconColor} />
        </p>
        <p class="hidden group-hover:block">
          <svelte:component this={icon} iconColor={iconHoverColor} />
        </p>
      {/if}
    </button>
  {/if}
</div>
