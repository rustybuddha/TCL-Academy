<script>
  import { onMount } from 'svelte';
  import Button from './components/button.svelte';
  export let data;
  // const { blogs } = data;
  // const { form, enhance, errors, message, delayed } = superForm(data.form);

  let showPopup = true;
  import { superForm } from "sveltekit-superforms/client";
  onMount(() => {
    setTimeout(() => {
      showPopup = false;
    }, 500000);
  });
</script>

{#if showPopup}
  <div class="bg-blue-600 text-white">
      <div
      class="grid grid-cols-1 laptop:grid-cols-2 gap-[90px] max-[1200px]:gap-[70px] max-[700px]:gap-[45px] max-[360px]:gap-[24px]"
      id="consultation"
    >
      <!-- FORM INFO -->
      <div class="">
        <h1
          class="text-secondary text-[20px] max-[900px]:text-[18px] max-[360px]:text-[14px]"
        >
          CONSULTATION SOLUTIONS
        </h1>
        <h1
          class="text-[32px] text-white my-[8px] font-[500] leading-[41px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] max-[900px]:text-[26px] max-[360px]:text-[20px]"
        >
          Not sure what to do? Get in touch with our experts today.
        </h1>
        <p
          class="text-white text-[20px] mb-[20px] max-[360px]:mb-[10px] max-[900px]:text-[16px] max-[360px]:text-[12px] font-[300]"
        >
          At Timechain Labs we value your time and money, our experts are here
          to consult you on making the right decisions for your business and
          provide a step-by-step guide on implementing blockchain services. We
          provide you with the following services like:
        </p>

        <div
          class="grid grid-cols-2 gap-[20px] max-[550px]:grid-cols-1 max-[550px]:gap-[10px]"
        >
          <div
            class="flex items-center gap-[10px] pb-[20px] border-[#116FF5] border-b max-[550px]:border-none max-[550px]:pb-0"
          >
            <div><img src="../../research.svg" alt="" class="" /></div>
            <div class="text-white max-[360px]:text-[14px] font-[300]">
              Research and Strategy
            </div>
          </div>

          <div
            class="flex items-center gap-[10px] pb-[20px] border-[#116FF5] border-b max-[550px]:border-none max-[550px]:pb-0"
          >
            <div>
              <img src="../../blockchain.svg" alt="" class="" />
            </div>
            <div class="text-white max-[360px]:text-[14px] font-[300]">
              Blockchain Architecture
            </div>
          </div>

          <div
            class="flex items-center gap-[10px] pb-[20px] border-[#116FF5] border-b max-[550px]:border-none max-[550px]:pb-0"
          >
            <div><img src="../../product.svg" alt="" class="" /></div>
            <div class="text-white max-[360px]:text-[14px] font-[300]">
              Product Design
            </div>
          </div>

          <div
            class="flex items-center gap-[10px] pb-[20px] border-[#116FF5] border-b max-[550px]:border-none max-[550px]:pb-0"
          >
            <div>
              <img src="../../innovation.svg" alt="" class="" />
            </div>
            <div class="text-white max-[360px]:text-[14px] font-[300]">
              Innovation Sprint
            </div>
          </div>
        </div>
      </div>

      <!-- FORM -->
      <div class="">
        <div class="p-[20px] bg-[#E6EBF7] rounded-[24px]">
          <form
            action="?/consultRequest"
            method="POST"
            novalidate
            class="w-full flex flex-col px-5 py-8 rounded-[16px] bg-white"
          >
            <div class="flex-1 flex flex-col mb-5">
              <input
                name="senderName"
                id="senderName"
                placeholder="Full Name"
                class="rounded-[6px] py-3 px-2"

                required
                style="border: 1px solid rgba(0, 0, 0, 0.1);"
              />
             
            </div>

            <div class="flex-1 flex flex-col mb-5">
              <input
                name="senderEmail"
                id="senderEmail"
                placeholder="Email Address"
                class="rounded-[6px] py-3 px-2"
                type="email"
                required
                style="border: 1px solid rgba(0, 0, 0, 0.1);"
              />
            
            </div>
            <div class="flex-1 flex flex-col mb-5">
              <input
                name="senderCompanyName"
                id="senderCompanyName"
                placeholder="Company’s Name"
                class="rounded-[6px] py-3 px-2"
                type="text"
                required
                style="border: 1px solid rgba(0, 0, 0, 0.1);"
              />
            
            </div>

            <div class="flex-1 flex flex-col mb-5">
              <textarea
                name="senderDescription"
                placeholder="Tell us more..."
                id="senderDescription"
                class=" rounded-[6px] p-2 h-32 resize-none"
                required
                style="border: 1px solid rgba(0, 0, 0, 0.1);"
              />
             
            </div>

            <Button text="Send Request" htmlType="submit" />
          </form>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 laptop:grid-cols-2 gap-[90px] max-[1200px]:gap-[70px] max-[700px]:gap-[45px] max-[360px]:gap-[24px]"
      id="development"
    >
      <div class="laptop:order-1 order-2">
        <img src="../../code-screen.png " alt="" />
      </div>
      <div class=" text-white laptop:order-2 order-1">
        <h1
          class="text-secondary text-[20px] max-[900px]:text-[18px] max-[360px]:text-[14px]"
        >
          DEVELOPMENT SOLUTION
        </h1>

        <h1
          class="text-[32px] font-[500] text-white my-[8px] leading-[41px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] max-[900px]:text-[26px] max-[360px]:text-[20px]"
        >
          Get the rocket fuel you need to implement ideas in your business
        </h1>
        <p
          class="text-white font-[300] text-[20px] mb-[20px] max-[360px]:mb-[10px] max-[900px]:text-[16px] max-[360px]:text-[12px]"
        >
          We provide you with a dedicated team of developers who can help you
          use blockchain technology to fuel your business. We will work with
          you to understand your needs and develop a solution that is right
          for you. We provide you with following development services:
        </p>
        <div
          class="grid grid-cols-2 gap-[20px] max-[550px]:grid-cols-1 max-[550px]:gap-[10px] mb-[20px] tablet:mb-[40px]"
        >
          <div
            class="flex items-center gap-[10px] pb-[20px] border-[#116FF5] border-b max-[550px]:border-none max-[550px]:pb-0"
          >
            <div><img src="../../ui.svg" alt="" class="" /></div>
            <div class="text-white max-[360px]:text-[14px] font-[300]">
              UI Development
            </div>
          </div>

          <div
            class="flex items-center gap-[10px] pb-[20px] border-[#116FF5] border-b max-[550px]:border-none max-[550px]:pb-0"
          >
            <div><img src="../../api.svg" alt="" class="" /></div>
            <div class="text-white max-[360px]:text-[14px] font-[300]">
              API Development
            </div>
          </div>

          <div
            class="flex items-center gap-[10px] pb-[20px] border-[#116FF5] border-b max-[550px]:border-none max-[550px]:pb-0"
          >
            <div>
              <img src="../../system.svg" alt="" class="" />
            </div>
            <div class="text-white max-[360px]:text-[14px] font-[300]">
              System Integration
            </div>
          </div>
        </div>
        <Button
          href="/contact"
          iconColor="#0EDDBA"
          iconHoverColor="#093BAA"
          className=" text-secondary border-secondary border-2 hover:text-primary hover:bg-secondary"
          text="Contact Us"
          outlined={true}
        />
      </div>
    </div>
  </div>
{/if}