<script>
  import DescBox from "$lib/components/desc-box.svelte";
  import { superForm } from "sveltekit-superforms/client";
  import PrimaryButton from "$lib/components/primary-button.svelte";
  import Button from "$lib/components/button.svelte";

  export let data;
  const { form, enhance, errors, message, delayed } = superForm(data.form);
</script>

<div
  class="bg-primary px-[100px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[800px]:px-[30px] max-[360px]:px-[16px] bg-image mb-[60px] py-[60px] max-[900px]:py-[40px] max-[360px]:py-[19px]"
>
  <img src="/comm_icon.png" alt="" />

  <!-- FORM -->
  <div class="max-w-[626px] max-[1050px]:max-w-full flex-1">
    <div class="p-[20px] bg-[#B4F4EA] rounded-[24px]">
      <form
        action="?/consultRequest"
        method="POST"
        use:enhance
        novalidate
        class="w-full flex flex-col px-5 py-8 rounded-[16px] bg-white"
      >
        <div class="flex-1 flex flex-col mb-5">
          <label for="" class="mb-3">Name</label>
          <input
            name="senderName"
            id="senderName"
            class="border border-gray-300 py-3 px-2"
            type="text"
            bind:value={$form.senderName}
            required
          />
          {#if $errors.senderName != null}
            <span class="text-red-600 text-xs font-medium"
              >{$errors.senderName[0]}</span
            >
          {/if}
        </div>

        <div class="flex-1 flex flex-col mb-5">
          <label for="" class="mb-3">Email</label>
          <input
            name="senderEmail"
            id="senderEmail"
            class="border border-gray-300 py-3 px-2"
            type="email"
            bind:value={$form.senderEmail}
            required
          />
          {#if $errors.senderEmail != null}
            <span class="text-red-600 text-xs font-medium"
              >{$errors.senderEmail[0]}</span
            >
          {/if}
        </div>

        <div class="flex-1 flex flex-col mb-5">
          <label for="" class="mb-3">Description</label>
          <textarea
            name="senderDescription"
            bind:value={$form.senderDescription}
            placeholder="Tell us more..."
            id="senderDescription"
            class=" border border-gray-300 p-2 h-32 resize-none"
            required
          />
          {#if $errors.senderDescription != null}
            <span class="text-red-600 text-xs font-medium"
              >{$errors.senderDescription[0]}</span
            >
          {/if}
        </div>

        <Button text="Submit" htmlType="submit" />
      </form>
    </div>
  </div>

  
</div>
