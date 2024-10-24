<script>
  import DescBox from "$lib/components/desc-box.svelte";
  import { superForm } from "sveltekit-superforms/client";
  import { popup, togglePopup , src_id } from "$lib/stores/resource";
  import toast, { Toaster } from "svelte-french-toast";

  export let title = "Sound Money Principles: A Historical Perspective";
  export let description =
    "Explore the historical context and evolution of sound money principles throughout the centuries.";

  export let data;
  const { form, enhance, errors, message, delayed , formId } = superForm( data.form, {id: "resource"} ); 

  function PopCloseOnSubmit(message) {
    if (message?.status && message.content) {
      popup.update((value) => !value);
    }
  }

  $: if ($message?.status == "success" && $message.content) {
    // Pop up timeout 
    toast.success($message.content, {
      position: "top-right",
    });

    setTimeout( () => {
      popup.update((value) =>!value);
    }, 3000 ) ; 

  } else if ($message?.status == "failed" && $message.content) {
    toast.error("Error occuured while submitting form! Try again.", {
      position: "top-right",
    });

    setTimeout( () => {
      popup.update((value) =>!value);
    }, 3000 ) ; 
  }
</script>

<Toaster />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<section
  class="z-[13] w-[1920px] flex gap-5 content-center items-center w-full h-full max-tablet:flex-col fixed transition-transform duration-300 -translate-x-[-100%] top-0 left-0 bg-primary h-screen w-screen {$popup
    ? 'translate-x-0'
    : ''}"
>
  <div
    class="w-[50%] max-desktop:w-[70%] max-tablet:w-full max-tablet:h-[35%]"
  >
    <img src="/download_profile.png" class="relative" alt="" />
  </div>

  <div class="z-[14] flex items-center justify-center">
    <div
      class="px-[20px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[800px]:px-[15px] max-[360px]:px-[15px] w-[70%] max-[1000px]:w-[100%]"
    >
      <!-- leading-[41px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] max-[900px]:text-[26px] max-[360px]:text-[20px]-->
      <h1 class="font-semibold text-white text-3xl max-laptop:text-2xl">
        Dive into {title}
      </h1>
      <p
        class="font-normal text-white text-xl max-laptop:text-base my-[15px] max-[360px]:mb-[10px] max-[900px]:text-[16px] max-[360px]:text-[12px]"
      >
        {description}
      </p>

      <form
        action="?/resourceRequest"
        method="POST"
        use:enhance
        novalidate
        class="w-full flex flex-col"
      >
        <div class="flex-1 flex flex-col mb-5">
          <input
            name="senderName"
            placeholder="Full name"
            id="senderName"
            class="bg-transparent text-white border border-white py-3 px-2 rounded-lg placeholder-white"
            type="text"
            bind:value={$form.senderName}
            required
          />
          {#if $errors.senderName != null}
            <span class="text-red-600 text-xs font-medium z-[13]"
              >{$errors.senderName[0]}</span
            >
          {/if}
        </div>

        <div class="flex-1 flex flex-col mb-5">
          <input
            name="senderEmail"
            placeholder="Email address"
            id="senderEmail"
            class="bg-transparent text-white border border-white py-3 px-2 rounded-lg placeholder-white"
            type="email"
            bind:value={$form.senderEmail}
            required
          />
          {#if $errors.senderEmail != null}
            <span class="text-red-600 text-xs font-medium z-[14]"
              >{$errors.senderEmail[0]}</span
            >
          {/if}
        </div>

        
        <div class="hidden flex-1 flex flex-col mb-5">
          <input
            name="ebookId"
            placeholder="ebook id "
            id="ebookId"
            class="bg-transparent text-white border border-white py-3 px-2 rounded-lg placeholder-white"
            type="hidden"
            bind:value={$src_id} 
            required
          />
          <!-- {#if $errors.senderEmail != null}
            <span class="text-red-600 text-xs font-medium z-[14]"
              >{$errors.senderEmail[0]}</span
            >
          {/if} -->
        </div>

        <div class="flex items-center">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-sm max-[640px]:text-xs font-medium text-white dark:text-gray-300"
            >I have read and agreed to TCL Privacy Policy
          </label>
        </div>

        <button
          on:click={() => PopCloseOnSubmit({ $message })}
          class="bg-secondary px-[10px] py-[8px] my-[10px] w-[185px] rounded-lg text-primary text-[15px] font-[400] border-1 hover:text-secondary hover:bg-white hover:border-secondary"
        >
          <i class="fa-regular fa-circle-down" /> Download Now
        </button>
      </form>
    </div>
  </div>

  <div
    type="submit"
    class="absolute p-2 cursor-pointer fixed top-[15px] right-[40px] max-tablet:right-[15px]"
    on:click={() => popup.update((value) => !value)}
  >
    <i class="fa-solid fa-xmark text-4xl text-white" />
  </div>
</section>
