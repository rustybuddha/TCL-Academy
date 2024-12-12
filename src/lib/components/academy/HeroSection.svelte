<script>
  import { goto } from "$app/navigation";
  import { onMount } from 'svelte';
  import Navbar from "$lib/components/academy/navbar.svelte";
  import Footer from "$lib/components/academy/footer.svelte";
  import Loader from "$lib/components/academy/loader.svelte";
  import countryCodes from "$lib/assets/countries-flag.json";
  import { browser } from "$app/environment";
  import toast from "svelte-french-toast";
  import { z } from "zod";
  import { page } from "$app/stores";

  let fwcrm;

  onMount(() => {
    // Inject the Freshworks script dynamically
    const script = document.createElement('script');
    script.src = 'https://in.fw-cdn.com/32126368/1134713.js';
    script.setAttribute('chat', 'true');
    script.onload = () => {
      fwcrm = window.fwcrm;
    };
    document.body.appendChild(script);

    return () => {
      script.remove(); // Cleanup script when component is unmounted
    };
  });

  const redirectTo = (url) => {
    goto(url);
  };

  const modules = [
    {
      image: '/academy/hero1.svg',
      text: 'Modules to upskill frontend, backend & blockchain basics'
    },
    {
      image: '/academy/hero2.svg',
      text: 'Get certified as a Full Stack Blockchain Developer'
    },
    {
      image: '/academy/hero3.svg',
      text: 'Learn industry level development skills'
    }
  ];

  let isPageLoaded = false;
  let showPopup = true;
  let successPopup = false;
  let dropdownOpen = false;

  // Default country code and dropdown state
  let selectedCountry = {
    countryname: "India",
    countrycode: "91",
    flagurl: "https://flaglog.com/codes/official-ratio-120px/IN.png",
  }; // Default to India

  const closeDropdown = (event) => {
    if (!event.target.closest(".dropdown")) {
      dropdownOpen = false;
    }
  };

  const formSchema = z.object({
    fullName: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone Number is Required"),
    message: z.string().optional(),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      fullName: formData.get("full-name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    const result = formSchema.safeParse(data);

    if (!result.success) {
      result.error.errors.forEach((err) => toast.error(err.message));
    } else {
      toast.success("Form submitted successfully!");
      showPopup = false;
      successPopup = true;

      // CRM Integration
      if (fwcrm) {
        const newContact = {
          "First name": data.fullName.split(" ")[0],
          "Last name": data.fullName.split(" ").slice(1).join(" ") || "",
          "Email": data.email,
          "Mobile": data.phone,
          "Message": data.message,
        };

        const identifier = data.email;

        fwcrm.identify(identifier, newContact);
        toast.success("Data successfully added to CRM!");
      } else {
        console.error("Freshworks CRM is not initialized.");
        toast.error("Unable to connect to CRM. Please try again later.");
      }
    }
  };

  onMount(() => {
    if (browser) {
      setTimeout(() => {
        isPageLoaded = true;
      }, 1000);
    }
  });
</script>

{#if !isPageLoaded}
  <div class="loader-wrapper">
    <Loader />
  </div>
{:else}
  {#if showPopup && $page.url.pathname !== "/registration"}
    <div
      class="w-screen h-screen bg-black/50 backdrop-blur-sm flex justify-center items-center fixed top-0 left-0 z-50"
    >
      <div
        class="bg-white mx-4 p-2 rounded-xl shadow-xl lg:w-3/5 flex flex-col md:flex-row relative md:gap-4"
      >
        <button
          on:click={() => (showPopup = false)}
          class="absolute top-3 right-3 text-white hover:text-gray-400 hidden md:block"
        >
          <img src="/academy/pop-up-close.png" class="w-5 h-5" alt="close" />
        </button>
        <div
          class="bg-[#093BAA] md:w-1/2 rounded-lg px-4 lg:px-4 xl:p-6 bg-cover bg-no-repeat space-y-2 lg:space-y-5 relative"
          style="background-image: url(/academy/pop-up-bg.png);"
        >
          <button
            on:click={() => (showPopup = false)}
            class="absolute top-3 right-1 text-white hover:text-gray-400 md:hidden"
          >
            <img
              src="/academy/pop-up-close-mob.png"
              class="w-5 h-5"
              alt="close"
            />
          </button>
          <h1 class="text-lg md:text-xl xl:text-2xl text-white">
            Are you ready to skyrocket your blockchain skills?
          </h1>
          <p class="text-wrap text-xs text-[#EBEBEB] font-thin">
            Don’t wait, we have a crazy offer just for you. Become a part of our
            expanding community & gain instant access to our learning resources.
          </p>
          <div class="flex justify-center w-full">
            <img src="/academy/pop-up-grp.png" alt="Grp" />
          </div>
        </div>
        <div
          class="md:w-1/2 md:ml-4 md:mt-8 md:p-4 rounded-xl md:shadow-2xl md:border md:border-[#0000000D]"
        >
          <form
            on:submit={handleSubmit}
            class="flex flex-col justify-between h-full py-2 md:px-0 space-y-3 xl:space-y-0"
          >
            <!-- Full Name Input -->
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="Full Name"
              class="w-full border p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <!-- Email Address Input -->
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              class="w-full border p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <!-- Phone Number Input -->
            <div class="">
              <div class="flex">
                <!-- Country Code Dropdown -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="dropdown relative">
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <div
                    class="p-2 lg:px-2 lg:py-2 w-20 gap-1 bg-gray-100 border border-gray-300 flex justify-around items-center rounded-l-md cursor-pointer focus:outline-none"
                    on:click={() => (dropdownOpen = !dropdownOpen)}
                  >
                    <img
                      src={selectedCountry.flagurl}
                      class="w-5 h-5 rounded-full"
                      alt="flag"
                    />
                    +{selectedCountry.countrycode.toString()}
                    <span class="text-gray-500 font-bold">
                      {#if dropdownOpen}
                        <img
                          src="/academy/downarrow-a.svg"
                          style="transform: rotate(180deg);"
                          alt="img"
                        />
                      {:else}
                        <img src="/academy/downarrow-a.svg" alt="img" />
                      {/if}
                    </span>
                  </div>
                  {#if dropdownOpen}
                    <div
                      class="dropdown-menu h-40 w-24 py-2 rounded-lg bg-white shadow-xl absolute overflow-scroll"
                    >
                      {#each countryCodes as country}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div
                          class="dropdown-item flex justify-around"
                          on:click={() => {
                            selectedCountry = country;
                            dropdownOpen = false;
                          }}
                        >
                          <img
                            src={country.flagurl}
                            alt="flag"
                            class="w-5 h-5 rounded-full"
                          />
                          +{country.countrycode}
                        </div>
                      {/each}
                    </div>
                  {/if}
                </div>

                <!-- Phone Number Input -->
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="000-000-0000"
                  class="w-full p-2 lg:px-4 lg:py-2 border border-gray-300 rounded-r-md outline-none"
                  required
                />
              </div>
            </div>
            <!-- Message Textarea -->

            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Message"
              class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full font-['Rubik'] px-4 py-2 text-white bg-[#093baa] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  {/if}
  {#if successPopup}
    <div
      class="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 px-4 sm:px-8"
    >
      <div
        class="bg-white w-full !max-w-[550px] p-8 rounded-lg shadow-lg relative"
      >
        <button
          class="absolute text-3xl top-3 right-5 text-gray-500 hover:text-black focus:outline-none"
          on:click={() => (successPopup = false)}
        >
          &times;
        </button>

        <div class="flex flex-col items-center ">
          <img
            class="w-32 md:w-auto rounded-full"
            src="/academy/success.gif"
            alt="checkmark"
          />
          <h2 class="text-lg md:text-2xl md:mb-4 font-bold">
            Registration Successful!
          </h2>
          <p class="text-gray-600 mb-6 text-xs md:text-base text-center font-thin">
            Thank you for signing up! You're all set to join our next cohort.
            Our team will reach out soon with more details to help you get
            started. We're excited to have you on board!
          </p>

          <button
            on:click={() => (successPopup = false)}
            class="w-full py-1 md:py-2 text-white bg-[#093baa] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  {/if}
 
{/if}
<div class="sm:hidden flex flex-col justify-center mt-[5%]">
  <div class="mx-auto">
    <div class="w-full m-auto">
      <div class="flex items-center justify-center m-auto relative px-5">
        <span class="text-2xl md:text-[24px] text-center !font-[500]">
          Build Future-Proof Skills <br>
          to Boost Your Career<br>
          <p class="flex justify-center">
            in just  
            <img class="w-20" src="/academy/hero-pin.svg" alt="img">
          </p>
        </span>
      </div>
    </div>

    <div class="w-full flex justify-center items-center mt-[5%] mb-[10%] mr-[2.5%] px-4">
      <img class="mr-[5%] max-w-full h-52" src="/academy/herosection-Rohan.svg" alt="img" loading="lazy">
    </div>
    
    <div class="w-full flex justify-center items-center">
      <img class="max-w-full h-auto" src="/academy/hero-section-3.svg" alt="img">
    </div>
    
    <div class="w-full flex justify-center items-center flex-col px-4">
      <div class="mt-4 mb-3 justify-center">
        {#each modules as module}
        <div class="flex items-center  mt-5 w-full max-w-screen-lg px-4 sm:px-6 md:px-8">
          <img 
          class="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-auto transition-all duration-300 ease-in-out" 
          src={module.image} 
          alt={module.text} 
          />
          <p class="font-[400] text-[16px] sm:text-[18px] ml-4">{module.text}</p>
        </div>
        {/each}
      </div>
    </div>

  </div>
  <div class="mx-auto pt-4 pb-2">
    <button 
      class="px-8 py-2 text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"
      on:click={() => redirectTo('/registration')}> 
      Register Now
    </button>
  </div>
</div>

<div class="hidden sm:flex max-w-[1440px] mx-auto">
  <div class="w-1/2">
    <div class="ml-[10%] mt-[15%] mr-[5%]">
      <div class="w-full">
        <div class=" flex w-full">
          <span class="text-2xl lg:text-4xl xl:text-5xl !font-[500]">
            Build Future-Proof Skills <br>
            to Boost Your Career in <br>
            <p class="flex">
              just  
              <img class="w-1/3 xl:w-1/4" src="/academy/hero-pin.svg" alt="img">
            </p>
          </span>
        </div>
      </div>
      <div class="my-[5%]">
        {#each modules as module}
          <div class="flex mt-5">
            <img class="max-w-full h-auto" src={module.image} alt={module.text}>
            <p class="font-[400] text-xs lg:text-sm ml-2">{module.text}</p>
          </div>
        {/each}
      </div>
      <div class="flex gap-8 items-center">
        <div class="sm:size w-1/4 items-center">
          <button
            class="font-['Rubik'] sm:text-[0.5rem] md:text-[0.7rem] lg:text-base xl:text-lg sm:px-4 sm:py-2 text-white bg-[#093baa] rounded whitespace-nowrap border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"
            on:click={() => redirectTo('/registration')}>
            Register Now
          </button>
        </div>
        <div class="w-3/4 ml-[4.3%]">
          <img class="max-w-full h-auto" src="/academy/hero-section-3.svg" alt="img">
        </div>
      </div>
    </div>
  </div>
  <div class="w-1/2 mt-[4%] mb-[10%] mr-[2.5%]">
    <img class="mr-[5%] max-w-full h-auto" src="/academy/herosection-Rohan.svg" alt="img" loading="lazy">
  </div>
</div>