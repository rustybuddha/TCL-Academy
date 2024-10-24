<script>
  import DescBox from "$lib/components/desc-box.svelte";
  import FormBlock from "$lib/components/form-block.svelte";
  import PrimaryButton from "$lib/components/primary-button.svelte";
  import Button from "../../lib/components/button.svelte";
  import { superForm } from "sveltekit-superforms/client";
  import ResBlock from "$lib/components/res-block.svelte";
  import ResPopup from "$lib/components/res-popup.svelte";
  import { popup , togglePopup } from "$lib/stores/resource";
  import toast, { Toaster } from "svelte-french-toast";

  export let data;
  const { form, enhance, errors, message, delayed , formId } = superForm( data.form, {id: "community"} ); 

  $: if ($message?.status == "success" && $message.content) {
    toast.success($message.content, {
      position: "top-right",
    });
  } else if ($message?.status == "failed" && $message.content) {
    toast.error("Error occured while submitting form! Try again.", {
      position: "top-right",
    });
  }

  function changeTabColor(index) {
    const tabs = document.querySelectorAll(".tabs .tab");

    tabs.forEach((tab) => {
      tab.classList.remove("text-primary");
    });

    tabs[index].classList.add("text-primary");
  }


  function hidePopup() {
    popup.update((pop) => false );
  }
</script>


<Toaster/>

{#if popup }
  <ResPopup data={data} />
{/if}


<div class="flex justify-center overflow-hidden">
  <div class="w-[1440px] max-[1440px]:w-screen">
    <!-- HERO SECTION -->
    <section
      class="flex gap-10 items-center w-full max-[1000px]:flex-col px-[100px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[800px]:px-[30px] max-[360px]:px-[16px] my-[75px] max-[800px]:my-[50px] max-[360px]:my-[24px]"
    >
      <div class="max-w-[536px] text-blue-gray">
        <h1 class="text-5xl max-[768px]:text-4xl max-[425px]:text-3xl">
          Timechain Labs Resources
        </h1>
        <p
          class="text-blue-gray font-[300] my-[22px] max-[800px]:my-[15px] max-[360px]:my-[10px] text-[20px] max-[360px]:text-[12px]"
        >
          A data bank that stores workers' sensitive information privately and
          securely while granting organizations temporary access with the worker
          maintaining complete control and ownership of it.
        </p>
      </div>

      <div class="overflow-hidden">
        <img
          src="/idendefi.png"
          class="rounded-lg max-w-[600px] max-[1300px]:max-w-[500px] max-[600px]:max-w-full"
          alt=""
        />
      </div>
    </section>

    <!-- RESOURCES SECTION -->
    <section
      class="flex flex-center flex-col justify-center text-center items-center gap-10 w-full max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[800px]:px-[30px] max-[360px]:px-[10px] my-[75px] max-[800px]:my-[50px] max-[360px]:my-[24px]"
    >
      <div class="max-w-[600px] text-blue-gray">
        <h1
          class="text-2xl text-[#457DC0] font-bold max-[900px]:text-1xl max-[360px]:text-xl"
        >
          OUR RESOURCES
        </h1>
        <h1 class="text-3xl max-[768px]:text-2xl max-[425px]:text-base">
          Expand your knowledge about Timechain Labs and blockchain technology
        </h1>
      </div>

      <!-- STEP SECTION -->
      <div
        role="tablist"
        class="text-center tabs tabs-bordered border-gray-200 dark:border-gray-700 font-medium dark:text-gray-400"
        id="myTabs"
      >

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          class="tab text-primary text-lg font-light justify-center"
          aria-label="All"
          checked
          on:click={() => changeTabColor(0)}
        />
        <div role="tabpanel" class="tab-content w-[100%]">

          <ResBlock resources={data?.resources} />

        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          class="tab text-lg font-light w-[100px] max-mbl-sm:w-[100px]"
          aria-label="E-books"
          on:click={() => changeTabColor(1)}
        />
        <div role="tabpanel" class="tab-content w-[100%]">

          <ResBlock cat="E-book" resources={data?.resources} />

        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          class="tab text-lg font-light"
          aria-label="Reports"
          on:click={() => changeTabColor(2)}
        />
        <div role="tabpanel" class="tab-content w-[100%]">

          <ResBlock cat="Report" resources={data?.resources} />

        </div>
      </div>
    </section>

    <!-- BRANDING MATERIALS  -->
    <section
      class="bg-cover bg-right flex items-center align-middle w-full h-[50vh] laptop:px-[30px] tablet:px-[20px] mbl-lg:px-[16px] max-mbl-lg:h-[7%] max-mbl-sm:h[5%] my-[75px] max-[800px]:my-[50px] mbl-sm:my-[24px] bg-local"
      style="background-image:url('/branding_bg.png')"
    >
      <DescBox
        title="Branding Materials"
        desc="Find our complete package of branding materials for your business needs."
        textColor="text-white"
        showButton="true"
        btnText="Download package"
        btnIcon="fa-regular fa-circle-down"
      />
    </section>

    <!-- FORM BLOCK -->
    <section
      class="flex justify-between w-full max-[1000px]:flex-col max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[800px]:px-[30px] max-[360px]:px-[16px] my-[75px] max-[800px]:my-[50px] max-[360px]:my-[24px]"
    >
      <div class="flex flex-col w-[60%] max-[1000px]:w-[100%] my-[10px]">
        <img
          class="relative w-[50px] left-[5vw] my-[7px]"
          src="/com_icon.png"
          alt=""
        />
        <DescBox
          title="Join Our Community."
          desc="Keep yourself informed about the latest news and events from Timechain Labs. Sign up for our weekly newsletter to stay in the loop."
          link=""
          textColor="text-black"
          showButton="true"
          btnText="Join our Community "
          btnIcon="fa fa-whatsapp"
          w="3"
        />
      </div>

      <!-- FORM -->
      <div class="max-w-[626px] max-[1050px]:max-w-full flex-1">
        <div class="p-[20px] bg-[#E6EBF7] rounded-[24px]">
          <form
            action="?/joinCommunity"
            method="POST"
            use:enhance
            novalidate
            class="w-full flex flex-col px-5 py-8 rounded-[16px] bg-white"
          >
            <div class="flex-1 flex flex-col mb-5">
              <input
                name="senderName"
                placeholder="Your name"
                id="senderName"
                class="border border-gray-300 py-3 px-2 rounded-lg"
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
              <!-- <label for="" class="mb-3">Email</label> -->
              <input
                name="senderEmail"
                placeholder="Yout email"
                id="senderEmail"
                class="border border-gray-300 py-3 px-2 rounded-lg"
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
              <!-- <label for="" class="mb-3">Description</label> -->
              <textarea
                name="senderDescription"
                bind:value={$form.senderDescription}
                placeholder="Tell us more..."
                id="senderDescription"
                class=" border border-gray-300 p-2 h-32 resize-none rounded-lg"
                required
              />
              {#if $errors.senderDescription != null}
                <span class="text-red-600 text-xs font-medium"
                  >{$errors.senderDescription[0]}</span
                >
              {/if}
            </div>

            <div class="flex items-center mb-3">
              <input
                checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              <label
                for="checked-checkbox"
                class="ms-2 text-sm max-[640px]:text-xs font-medium text-gray-600"
                >I have read and agreed to TCL Privacy Policy and agree to
                receive communications</label
              >
            </div>

            <Button text="Send request" htmlType="submit" />
          </form>
        </div>
      </div>

    </section>
  </div>
</div>
