<script>
  import { superForm } from "sveltekit-superforms/client";
  import toast, { Toaster } from "svelte-french-toast";
  import ArrowRight from "$lib/components/icons/arrow-right.svelte";
  import Button from "../../lib/components/button.svelte";
  import SelectDropdown from "$lib/components/select-dropdown.svelte";
  export let data;
  const { form, enhance, errors, message, delayed } = superForm(data.form);

  let servicesList = [
    { value: "Blockchain Consultation", label: "Blockchain Consultation" },
    {
      value: "Custom Software Development",
      label: "Custom Software Development",
    },
    { value: "Assetyzer", label: "Assetyzer" },
    { value: "Neucron Pay", label: "Neucron Pay" },
    { value: "Neucron API", label: "Neucron API" },
    { value: "Neo AI", label: "Neo AI" },
    {
      value: "Enterprise AI Consultation",
      label: "Enterprise AI Consultation",
    },
    {
      value: "Corporate Blockchain Workshop",
      label: "Corporate Blockchain Workshop",
    },
    {
      value: "Technology Strategy Consultation",
      label: "Technology Strategy Consultation",
    },
    {
      value: "Enquiry for Shared Ledger Consortium",
      label: "Enquiry for Shared Ledger Consortium",
    },
    { value: "Ganak", label: "Ganak" },
    { value: "Timechain Capital", label: "Timechain Capital" },
  ];

  let selectedServices;

  $: if ($message?.status == "success" && $message.content) {
    toast.success($message.content, {
      position: "top-right",
    });
  } else if ($message?.status == "failed" && $message.content) {
    toast.error("Error occuured while submitting form! Try again.", {
      position: "top-right",
    });
  }

  const budget = [
    { value: "25K-50K", label: "25K - 50K" },
    { value: "50K-100K", label: "50K - 100K" },
    { value: "100K-500K", label: "100K - 500K" },
    { value: "500K+", label: "500K+" },
  ];

  let selectedBudget = budget[1].value;

  const projectStart = [
    { label: "Immediately", value: "Immediately" },
    { label: "After a Week", value: "After a Week" },
    { label: "After a Month", value: "After a Month" },
  ];
  let selectedStart = projectStart[0].value;
</script>

<Toaster />

<div class="flex justify-center">
  <main class="w-[1440px] max-[1440px]:w-screen">
    <div
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] my-[75px] max-[800px]:my-[50px] max-[360px]:my-[24px]"
    >
      <div class="grid laptop:grid-cols-2 gap-[50px] grid-cols-1">
        <div class="laptop:max-w-[597px] max-w-full flex flex-col gap-[50px]">
          <div>
            <h1
              class="text-[20px] mbl-sm:text-[32px] tablet:text-[48px] text-blue-gray mb-[12px] font-medium"
            >
              Connect with Timechain Labs
            </h1>
            <p
              class=" text-blue-gray text-[12px] mbl-sm:text-[16px] tablet:text-[20px] font-[300]"
            >
              Want to scale your business to a new level, but don’t know how?
              Connect with our team and we will help you out.
            </p>
          </div>

          <div>
            <h1
              class="text-[20px] mbl-sm:text-[28px] tablet:text-[32px] text-blue-gray"
            >
              Our Office
            </h1>
            <img src="/office.png" alt="" class="w-full h-auto my-[12px]" />
            <p
              class=" text-blue-gray font-[300] text-[12px] mbl-sm:text-[16px] tablet:text-[20px]"
            >
              Have a project in mind or questions about our services? Fill out
              the form given alongside and we will get back to you shortly.
            </p>
          </div>

          <div class="hidden laptop:block">
            <div
              class="grid grid-cols-1 mbl-lg:grid-cols-2 gap-[20px] mbl-lg:gap-x-[59px] mbl-lg:gap-y-[40px]"
            >
              <div>
                <img src="/email.png" class="mb-[20px] h-[20px]" alt="" />
                <p class=" text-blue-gray text-[16px] font-[400]">
                  marketing@timechainlabs.io
                </p>
                <p class=" text-blue-gray text-[16px] font-[400]">
                  Rohan.sharan@timechainlabs.io
                </p>
              </div>

              <div>
                <img src="/contact.png" alt="" class="h-[20px] mb-[20px]" />
                <p class=" text-blue-gray text-[16px] font-[400]">
                  +91 9346759484
                </p>
                <p class=" text-blue-gray text-[16px] font-[400]">
                  +91 94096 06040
                </p>
              </div>

              <div>
                <img src="/socials.png" class="h-[20px]" alt="" />
                <div class="flex cursor-pointer gap-4 mt-[20px]">
                  <a href="https://www.linkedin.com/company/timechainlabs/">
                    <img src="/linkedin.png" alt="" />
                  </a>
                  <a href="https://m.facebook.com/timechainlabs">
                    <img src="/face.png" alt="" />
                  </a>
                  <a
                    href="https://instagram.com/timechainlabs?igshid=MWZjMTM2ODFkZg=="
                  >
                    <img src="/instagram.png" alt="" />
                  </a>
                  <a href="https://discord.gg/whh93Rxv">
                    <img src="/discord2.png" alt="" />
                  </a>
                  <a
                    href="https://youtube.com/@timechainlabs?si=HJ1bnnVPCvb1-7dR"
                  >
                    <img src="/yt2.png" alt="" />
                  </a>
                  <a href="https://twitter.com/timechainlabs?s=08">
                    <img src="/X.png" alt="" />
                  </a>
                </div>
              </div>
              <div>
                <img src="/address.png" class="h-[20px]" alt="" />
                <p
                  class=" text-blue-gray text-[14px] tablet:text-[16px] font-[400] mt-[20px]"
                >
                  Timechain Labs Pvt Ltd, Level 1, Unit 2, Salarpuria Sattva
                  Knowledge City Sy. No. 83/1 Plot.2 Inorbit Mall Road Raidurg
                  Village, HITEC City, Hyderabad, Telangana 500081
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-lg my-[64px] laptop:mt-0">
          <form
            method="POST"
            action="?/contactFormSubmit"
            class="w-full h-fit flex flex-col gap-[32px] p-[20px] pb-[40px] bg-white form-styles"
            use:enhance
            novalidate
          >
            <div class="grid grid-cols-1 tablet:grid-cols-2 gap-[40px]">
              <div class="flex flex-col w-full">
                <label
                  for=""
                  class="font-[300] text-[16px] text-blue-gray mb-[12px]"
                  >First Name*</label
                >
                <input
                  class="input-style py-3 w-full px-3"
                  type="text"
                  name="firstName"
                  placeholder="Firstname"
                  bind:value={$form.firstName}
                  required
                />
                {#if $errors.firstName != null}
                  <span class="text-red-600 text-xs font-medium"
                    >{$errors.firstName[0]}</span
                  >
                {/if}
              </div>

              <div class="flex flex-col w-full">
                <label
                  for=""
                  class="font-[300] text-[16px] text-blue-gray mb-[12px]"
                  >Last Name*</label
                >
                <input
                  class="input-style py-3 px-3 w-full"
                  type="text"
                  name="lastName"
                  placeholder="Lastname"
                  bind:value={$form.lastName}
                  required
                />
                {#if $errors.lastName != null}
                  <span class="text-red-600 text-xs font-medium"
                    >{$errors.lastName[0]}</span
                  >
                {/if}
              </div>
            </div>
            <div class="flex flex-col">
              <label
                for=""
                class="font-[300] text-[16px] text-blue-gray mb-[12px]"
                >Email Address*</label
              >
              <input
                class="input-style py-3 px-3"
                type="email"
                placeholder="Email address"
                bind:value={$form.email}
                name="email"
                required
              />
              {#if $errors.email != null}
                <span class="text-red-600 text-xs font-medium"
                  >{$errors.email[0]}</span
                >
              {/if}
            </div>

            <div class="flex flex-col">
              <label
                for="country-code"
                class="font-[300] text-[16px] text-blue-gray mb-[12px]"
                >Phone Number*</label
              >
              <div class="flex">
                <select
                  id="country-code"
                  name="countryCode"
                  class="py-3 bg-white rounded-l-[4px] border h-[50x]"
                >
                  <option value="+91">India(+91)</option>
                  <!-- <option value="china(+99)">china(+99)</option> -->
                  <option value="+93">Japan(+93)</option>
                </select>
                <input
                  id="phone-number"
                  class="rounded-r-[4px] border py-2 w-full px-3"
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone number"
                  bind:value={$form.phoneNumber}
                  required
                />
              </div>
              {#if $errors.phoneNumber != null}
                <span class="text-red-600 text-xs font-medium"
                  >{$errors.phoneNumber[0]}</span
                >
              {/if}
            </div>

            <div class="">
              <label for="service" class="font-[300] text-[16px] text-blue-gray"
                >Service you're looking for*</label
              >
              <div class="mt-[12px]">
                <SelectDropdown
                  id="startDate"
                  placeholder="Select the services"
                  className="input-styles"
                  containerStyles="font-size: inherit; padding-right: 0.75rem; padding-left: 0.75rem;"
                  items={servicesList}
                  name="services"
                  bind:value={selectedServices}
                  showChevron={true}
                  searchable={false}
                  multiple={true}
                />
              </div>
            </div>

            <div class="w-full flex flex-col">
              <label
                for=""
                class="font-[300] text-[16px] text-blue-gray mb-[12px]"
                >Project Start Date*
              </label>
              <SelectDropdown
                id="startDate"
                placeholder="Select project start time"
                className="input-styles"
                containerStyles="font-size: inherit; padding-right: 0.75rem; padding-left: 0.75rem;"
                items={projectStart}
                bind:value={selectedStart}
                showChevron={true}
                searchable={false}
                name="startDate"
              />
            </div>

            <div class="w-full flex flex-col">
              <label
                for=""
                class="font-[300] text-[16px] text-blue-gray mb-[12px]"
                >Budget Range (USD)*</label
              >

              <SelectDropdown
                id="budget"
                placeholder="Select your budget range"
                className="input-styles"
                containerStyles="font-size: inherit; padding-right: 0.75rem; padding-left: 0.75rem;"
                items={budget}
                bind:value={selectedBudget}
                showChevron={true}
                searchable={false}
                name="budgetRange"
              />
            </div>

            <div class="flex flex-col">
              <label
                for=""
                class="font-[300] text-[16px] text-blue-gray mb-[12px]"
                >Project Details*</label
              >
              <textarea
                name="projectDetails"
                bind:value={$form.projectDetails}
                placeholder="Tell us more..."
                id=""
                class=" input-style p-2 h-32 resize-none"
              />
              {#if $errors.projectDetails != null}
                <span class="text-red-600 text-xs font-medium"
                  >{$errors.projectDetails[0]}</span
                >
              {/if}
            </div>

            <Button
              text="Submit Response"
              htmlType="submit"
              icon={ArrowRight}
              iconColor="white"
              iconHoverColor="white"
            />
          </form>

          <div />
        </div>

        <div class="block laptop:hidden">
          <div
            class="grid grid-cols-1 mbl-lg:grid-cols-2 gap-[20px] mbl-lg:gap-x-[59px] mbl-lg:gap-y-[40px]"
          >
            <div class="order-1">
              <img src="/email.png" class="mb-[20px] h-[20px]" alt="" />
              <p class=" text-blue-gray text-[16px] font-[400]">
                marketing@timechainlabs.io
              </p>
              <p class=" text-blue-gray text-[16px] font-[400]">
                Rohan.sharan@timechainlabs.io
              </p>
            </div>

            <div class="order-3">
              <img src="/contact.png" alt="" class="h-[20px] mb-[20px]" />
              <p class=" text-blue-gray text-[16px] font-[400]">
                +91 9346759484
              </p>
              <p class=" text-blue-gray text-[16px] font-[400]">
                +91 94096 06040
              </p>
            </div>

            <div class="order-4">
              <img src="/socials.png" class="h-[20px]" alt="" />
              <div class="flex cursor-pointer gap-4 mt-[20px]">
                <a href="https://www.linkedin.com/company/timechainlabs/">
                  <img src="/linkedin.png" alt="" />
                </a>
                <a href="https://m.facebook.com/timechainlabs">
                  <img src="/face.png" alt="" />
                </a>
                <a
                  href="https://instagram.com/timechainlabs?igshid=MWZjMTM2ODFkZg=="
                >
                  <img src="/instagram.png" alt="" />
                </a>
                <a href="https://discord.gg/whh93Rxv">
                  <img src="/discord2.png" alt="" />
                </a>
                <a
                  href="https://youtube.com/@timechainlabs?si=HJ1bnnVPCvb1-7dR"
                >
                  <img src="/yt2.png" alt="" />
                </a>
                <a href="https://twitter.com/timechainlabs?s=08">
                  <img src="/X.png" alt="" />
                </a>
              </div>
            </div>
            <div class="order-3">
              <img src="/address.png" class="h-[20px]" alt="" />
              <p
                class=" text-blue-gray text-[14px] tablet:text-[16px] font-[400] mt-[20px]"
              >
                Timechain Labs Pvt Ltd, Level 1, Unit 2, Salarpuria Sattva
                Knowledge City Sy. No. 83/1 Plot.2 Inorbit Mall Road Raidurg
                Village, HITEC City, Hyderabad, Telangana 500081
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-[562px] mt-[64px] laptop:mt-[100px]">
        <h1
          class="text-primary font-[500px] text-[12px] mbl-sm:text-[16px] tablet:text-[20px] mb-[10px]"
        >
          JOIN OUR TEAM
        </h1>
        <h1
          class="  text-[20px] mbl-sm:text-[28px] tablet:text-[32px] font-[500] text-blue-gray mb-[20px]"
        >
          Exciting Opportunities Await – We're Hiring!
        </h1>
        <p
          class=" text-blue-gray text-[12px] mbl-sm:text-[16px] tablet:text-[20px] font-[300] leading-[32px] mb-[40px]"
        >
          Discover your next career milestone at Timechain Labs. Join us in
          shaping the future of technology. Be a part of our success – Be a
          Timechainer!
        </p>

        <Button text="Check Current Openings" href="/career" />
      </div>
      <!-- main div closes -->
    </div>
  </main>
</div>

<style>
  .input-style {
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .form-styles {
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.05);
  }
</style>
