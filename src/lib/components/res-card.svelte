<script>
  import ResPopup from "./res-popup.svelte";
  import { createEventDispatcher } from "svelte";
  import { popup, togglePopup, src_id } from "$lib/stores/resource";

  export let id;
  export let title = "";
  export let description = "";
  export let tag = "";
  export let downloads; // or "", depending on the data type you want
  export let coverUrl = "";
  export let category = "";

  //   const dispatch = createEventDispatcher();

  //   function handleClick() {
  //     dispatch("popup", {
  //       Boolean: true,
  //     });
  //   }

  function showPopup() {
    popup.update((pop) => true);
  }

  function handleClick() {
    popup.update((value) => !value);
    src_id.update( () => (id) );
    console.log( "Src id is : ", $src_id ) ; 
  }

</script>

<!-- <div class="card card-compact card-side bg-base-100 shadow-xl w-96 bg-base-100">
  <figure>
    <img src={coverUrl} alt="book-image" class="object-fill w-full h-full" />
  </figure>

  <div class="card-body">
    <p class="card-title text-left font-normal">{title}</p>
    <p class="align-left text-left font-light justify-start">{description}</p>

    <div class="flex items-center">
      <div class="bg-[#e1e1e1] text-primary rounded-sm text-sm px-2 py-1">
        {tag}
      </div>
      <span class="ml-2 text-sm">
        <i class="fa-solid fa-download text-xs" />
        {downloads} Downloads
      </span>
    </div>

    <div class="card-actions justify-start">
      <button
        on:click={() => showPopup()}
        class="bg-white my-[5px] px-[10px] py-[8px] rounded-lg text-[15px] font-[400] border-2 border-gray-300 hover:text-white hover:bg-secondary hover:border-secondary"
      >
        <i class="fa-regular fa-circle-down mr-2" /> Get this {category}
      </button>
    </div>
  </div>
</div> -->

<div
  class="rounded-lg flex bg-base-100 w-[550px] h-[250px] max-[1360px]:w-[450px] max-mbl-lg:w-[350px] max-[390px]:w-[300px] max-mbl-lg:h-[220px]"
>
  <div class="rounded-lg w-[70%] max-mbl-lg:w-3/4">
    <img
      src={coverUrl}
      alt="book-image"
      class="object-cover w-full h-full rounded-lg max-mbl-lg:object-cover max-mbl-lg:h-3/5"
    />
  </div>

  <div>
    <div class=" ">
      <div class="px-[10px] py-[1px]">
        <p class="text-left font-medium text-lg max-mbl-lg:text-base text-gray-800">
          {title}
        </p>
        <p
          class="align-left text-left font-normal justify-start text-sm max-mbl-lg:text-xs text-gray-500"
        >
          {description}
        </p>

        <div class="flex items-center mt-[8px]">
          <div class="bg-[#e1e1e1] text-primary rounded-sm text-xs px-2 py-1">
            {tag}
          </div>
          <span class="ml-2 text-xs text-[#33444F]">
            <i class="fa-solid fa-download" />
            {downloads} Downloads
          </span>
        </div>
      </div>

      <div class="card-actions justify-start mx-[8px] my-[20px]">
        <button
          on:click={() => handleClick()}
          class="bg-white my-[5px] px-[10px] py-[8px] rounded-lg text-[15px] font-[400] border-2 border-gray-800 hover:text-white hover:bg-secondary hover:border-secondary text-gray-800"
        >
          <i class="fa-regular fa-circle-down mr-2" /> Get this {category}
        </button>
      </div>
    </div>
  </div>
</div>
