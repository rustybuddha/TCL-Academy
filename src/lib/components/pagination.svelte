<script>
  import ArrowIcon from "./icons/arrow-icon.svelte";
  export let rows;
  export let perPage;
  export let trimmedRows;

  $: totalRows = rows.length;
  $: currentPage = 0;
  $: totalPages = Math.ceil(totalRows / perPage);
  $: start = currentPage * perPage;
  $: end = currentPage === totalPages - 1 ? totalRows - 1 : start + perPage - 1;

  $: trimmedRows = rows.slice(start, end + 1);

  $: totalRows, (currentPage = 0);
  $: currentPage, start, end;
</script>

{#if totalRows && totalRows > perPage}
  <div class="flex justify-center items-center gap-[40px] w-full">
    <button
      on:click={() => (currentPage -= 1)}
      disabled={currentPage === 0 ? true : false}
    >
      <svelte:component
        this={ArrowIcon}
        disabled={currentPage === 0 ? true : false}
      />
    </button>
    <!-- <p>{start + 1} - {end + 1} of {totalRows}</p> -->
    <button
      on:click={() => (currentPage += 1)}
      class="rotate-180"
      disabled={currentPage === totalPages - 1 ? true : false}
    >
      <svelte:component
        this={ArrowIcon}
        disabled={currentPage === totalPages - 1 ? true : false}
      />
    </button>
  </div>
{/if}
