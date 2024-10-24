<script>
  import { onMount } from "svelte";

  let activeItem = 1;
  export let accordionItems;

  function addIdToItems(items) {
    return items.map((item, index) => {
      return { ...item, id: index + 1 };
    });
  }

  onMount(() => {
    accordionItems = addIdToItems(accordionItems);
  });

  function toggleItem(item) {
    if (activeItem === item) {
      activeItem = null;
    } else {
      activeItem = item;
    }
  }
</script>

<div class="">
  {#each accordionItems as item}
    <div
      class=" bg-white border border-x-0 border-b-0 p-[20px] transition-all duration-200 {activeItem ===
      item.id
        ? 'active-item relative z-[99]'
        : ''} {activeItem && item.id == activeItem + 1
        ? 'border-t-0'
        : '!border-t-[#e8e8e8]'}"
    >
      <div class="flex gap-[8px]">
        <div
          class="{activeItem === item.id
            ? 'bg-primary'
            : 'bg-[#C0C5C8]'} rounded-full h-[8px] w-[8px] mt-[8px] pt-[8px]"
        >
          &nbsp;&nbsp;
        </div>
        <div class="flex-1">
          <h2 class="mb-0" id={item.id}>
            <button
              class="group font-[500] text-[18px] max-[360px]:text-[16px] relative flex w-full items-center border-0 bg-white text-left text-base text-blue-gray focus:outline-none justify-between"
              type="button"
              on:click={() => toggleItem(item.id)}
              aria-expanded={activeItem === item.id ? "true" : "false"}
              aria-controls={item.id}
            >
              {item?.question}
              <span
                class="ml-auto transition-transform duration-200 transform {activeItem ==
                item.id
                  ? '-rotate-[180deg]'
                  : ''}"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id={item.id}
            class="transition-height duration-200"
            style={activeItem === item.id
              ? "max-height: fit-content; opacity: 1;"
              : "max-height: 0; opacity: 0;"}
            aria-labelledby={item.id}
          >
            <div
              class="mt-[10px] font-[300] text-[14px] max-[360px]:text-[12px]"
            >
              {item?.answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .active-item {
    margin: 15px 0;
    border-radius: 10px;
    border: 0.75px solid #e8e8e8;
    background: #fff;
    box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.05);
  }
</style>
