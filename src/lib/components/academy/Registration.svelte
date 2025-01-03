<script>
  import toast, { Toaster } from "svelte-french-toast";
  import { z } from "zod";
    import { onMount, onDestroy } from "svelte";
  import { goto } from "$app/navigation";
  import axios from "axios";
  import countryCodes from "$lib/assets/countries-flag.json";

  let fullName = "";
  let email = "";
  let phone = "";
  let mailing = "";
  let profession = "";
  let source = "";
  let educationalBackground = "";
  let companyName = "";
  let otherSource = "";
  let userLinkedURL = "";
  let showModal = false;
  let professionOpen = false;
  let sourceOpen = false;
  let isLoading = false;

  const formSchema = z.object({
    fullName: z.string().min(1, "Full Name is required"),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    phone: z.string().min(1, "Phone number is required"),
    mailing: z.string().min(1, " Address is required"),
    profession: z.string().min(1, "Profession is required").optional(),
    source: z.string().min(1, "Source is required").optional(),
    educationalBackground: z
      .string()
      .min(1, "University is required")
      .optional(),
    companyName: z.string().min(1, "Company Name is required").optional(),
    otherSource: z.string().min(1, "Please specify the source").optional(),
  });

  const isFormValid = () => {
    return (
      fullName &&
      email &&
      phone &&
      mailing &&
      profession &&
      (source !== "other" ? source : otherSource) && 
      (educationalBackground || companyName )

    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isFormValid()) {
      const payload = {
        fullName: fullName,
        email: email,
        phone: phone,
        countryCode: selectedCountry,
        profession: profession,
        organization:
          profession === "Student" ? educationalBackground : companyName,
        linkedIn: userLinkedURL,
        mailing: mailing,
        referedBy: source === "other" ? otherSource : source,
      };

      try {
        isLoading = true;
        const response = await axios.post(
          "https://academy.timechainlabs.io/api/student",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // console.log(response);
        if (response.status === 200) {
          const result = response.data;
          isLoading = false;
          const redirectUrl = result.URL;
          if(result?.id){
            localStorage.setItem("phonepe-user_id", result.id)
          }

          if (redirectUrl) {
            // console.log("redirect url", redirectUrl);
            window.location.href = redirectUrl;
            // window.open(redirectUrl);
          }

          showModal = true;
        } else {
          toast.error("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("Error during API call:", error);
        // console.log(""Error in inititaing payment please try again."", error.response)
        toast.error("Error in initiating payment please try again.");
        isLoading = false;
      }
    } else {
      toast.error("Please fill in all the required fields.");
    }
  };

  const closeDropdowns = (event) => {
    if (!event.target.closest(".dropdown")) {
      professionOpen = false;
      sourceOpen = false;
    }
  };



  onMount(() => {
    if (typeof document !== "undefined") {
      document.addEventListener("click", closeDropdowns);
    }
  });

  onDestroy(() => {
    if (typeof document !== "undefined") {
      document.removeEventListener("click", closeDropdowns);
    }
  });


  // Default country code and dropdown state
  let selectedCountry = {
    countryname: "India",
    countrycode: "91",
    flagurl: "https://flaglog.com/codes/official-ratio-120px/IN.png",
  }; // Default to India

  let dropdownOpen = false;

  // function toggleDropdown() {
  //   dropdownOpen = !dropdownOpen;
  // }

  const closeDropdown = (event) => {
    if (!event.target.closest(".dropdown")) {
      dropdownOpen = false;
    }
  };

  onMount(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  });

  const closeModal = () => {
    showModal = false;
  };
</script>

<Toaster />
<!--Mobile View-->
<div class="sm:hidden mx-auto w-full mt-0">
  <div class="mx-auto mt-0 text-center px-4">


    <div class="flex w-full justify-between items-center">
      <img src="/academy/register2.svg" alt="">
     </div>

    <p class="text text-3xl sm:text-4xl font-[500] leading-tight text-[#333333]">
      You are one step away from mastering blockchain development – <span class="text-[#093BAA] !font-[600]">  
        Register Now!</span>
    </p>

    


    <p class="text-para mt-4 text-[#5C5C5C] max-w-[400px] text-sm font-['Rubik'] sm:text-lg leading-relaxed mx-auto">
      Complete the form to secure your place in our upcoming cohort and advance your tech career. Limited spaces—register now! Our team will guide you through each step toward success.    </p>
      <div class="flex w-full justify-end items-end">
        <img src="/academy/register1.svg" alt="">
       </div>
  
    </div>
</div>
<div
  class="sm:hidden mx-auto bg-cover bg-center opacity-80 justify-center p-4 flex flex-col"
  style="background-image: url('/academy/rear-img.jpg');  background-size: cover; background-position: center; background-repeat: no-repeat;"
>
  <div>
    <div
      class="w-full max-w-sm p-4 bg-white rounded-lg shadow-md mb-12 mt-6 mx-auto"
    >
      <form class="space-y-4">
        <div class="">
          <input
            type="text"
            id="full-name"
            name="full-name"
            placeholder="Full Name"
            class="w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            bind:value={fullName}
            required
          />
        </div>

        <div class="">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            class="w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            bind:value={email}
            required
          />
        </div>

        <!-- Phone Number Input with Country Code -->
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
                <div class="dropdown-menu bg-white shadow-lg">
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
              bind:value={phone}
              required
            />
          </div>
        </div>

        <div class="">
          <input
            type="text"
            id="Mailing-Address"
            name="Mailing-Address"
            placeholder="Address"
            class="w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            bind:value={mailing}
            required
          />
        </div>

        <div class=" relative dropdown w-full">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            class="flex justify-between items-center w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#05A987] cursor-pointer"
            on:click={() => {
              professionOpen = !professionOpen;
              sourceOpen = false;
            }}
          >
            <p
              id="profession"
              class="block text-[16px] {profession
                ? 'text-black'
                : 'text-[#767676b5]'}"
            >
              {profession || "Select Profession"}
            </p>
            <span class="text-gray-500 font-bold">
              {#if professionOpen}
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
          {#if professionOpen}
            <div
              class="absolute top-16 right-0 w-1/2 bg-white shadow-md rounded-md z-10"
            >
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#333333] border-b border-gray-200"
                on:click={() => {
                  profession = "Student";
                  professionOpen = false;
                }}
              >
                Student
              </div>
              <div
                class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#333333] border-b border-gray-200"
                on:click={() => {
                  profession = "Working-professional";
                  professionOpen = false;
                }}
              >
                Working Professional
              </div>
            </div>
          {/if}
        </div>

        {#if profession === "Student"}
          <div class="">
            <input
              type="text"
              id="educational-background"
              name="educational-background"
              placeholder="University Name"
              class="w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              bind:value={educationalBackground}
              required
            />
          </div>
        {/if}

        {#if profession === "Working-professional"}
          <div class="">
            <input
              type="text"
              id="company-name"
              name="company-name"
              placeholder="Company Name"
              class="w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              bind:value={companyName}
              required
            />
          </div>
        {/if}

        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class=" relative dropdown w-full">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class="flex justify-between w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#05A987] cursor-pointer"
            on:click={() => {
              sourceOpen = !sourceOpen;
              professionOpen = false;
            }}
          >
            <p
              id="source"
              class="block text-[16px] {source
                ? 'text-black'
                : 'text-[#767676b5]'}"
            >
              {source || "How did you know about us?"}
            </p>
            <span class="text-gray-500 mt-2">
              {#if sourceOpen}
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
          {#if sourceOpen}
            <div
              class="absolute top-16 right-0 w-1/2 bg-white shadow-md rounded-md z-10"
            >
              <div
                class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#333333] border-b border-gray-200"
                on:click={() => {
                  source = "LinkedIn";
                  sourceOpen = false;
                }}
              >
                LinkedIn
              </div>
              <div
                class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#333333] border-b border-gray-200"
                on:click={() => {
                  source = "Friend";
                  sourceOpen = false;
                }}
              >
                Friend
              </div>
              <div
                class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#333333] border-b border-gray-200"
                on:click={() => {
                  source = "Advertisement";
                  sourceOpen = false;
                }}
              >
                Advertisement
              </div>
              <div
                class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#333333] border-b border-gray-200"
                on:click={() => {
                  source = "other";
                  sourceOpen = false;
                }}
              >
                Other
              </div>
            </div>
          {/if}
        </div>

        {#if source === "other"}
          <div class="">
            <input
              type="text"
              id="other-source"
              name="other-source"
              placeholder="Please specify"
              class="w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              bind:value={otherSource}
              required
            />
          </div>
        {/if}

        <div class="">
          <input
            type="text"
            id="LinkedIn URL"
            name="LinkedIn-URL"
            placeholder="LinkedIn URL"
            class="w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            bind:value={userLinkedURL}
            required
          />
        </div>

        <button
          type="submit"
          on:click={handleSubmit}
          class="w-full flex justify-center items-center p-1 lg:px-4 lg:py-3 text-white bg-[#093baa] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#111] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500 shiny-glow"
        >
          {#if isLoading}
            <div class="loader" />
          {:else}
          <p>Enroll now for ₹8999<br />
            <span style="font-size: 0.8em; display: block;">Click here for Registration!</span></p>
          {/if}
        </button>
      </form>
      <p class="mt-3 text-sm text-center">Stuck Somewhere ? We’d love to help <a href="https://wa.link/rbygpd" class="text-[#093baa]">click here</a>.</p>
    </div>
  </div>
</div>
<div class="sm:hidden mx-auto w-full flex justify-between items-center">
  <img src="/academy/register2.svg" alt="Image2" >
  <img src="/academy/regiter1.svg" alt="Image1" >
</div>


<!--Desktop View-->
<div
  class="hidden -mt-8 sm:flex mx-auto bg-cover bg-center justify-between p-4 md:p-4 xl:p-10"
  style="background-image: url('/academy/register-section-1.jpg');"
>
  <div class="w-1/2">
    <div class="mx-auto pr-6 pt-8 pl-8">
      <h1 class="text-xl md:text-2xl lg:text-4xl font-[600] text-gray-800">
        You are one step away from mastering blockchain development –
        
        <span class="!font-bold text-[#093BAA]">Register Now!</span>
      </h1>
      <p class="mt-4 text-xs md:text-xs lg:text-base w-3/4 text-gray-600">
        Complete the form to secure your place in our upcoming cohort and
        advance your tech career. Limited spaces—register now! Our team will
        guide you through each step toward success.
      </p>
    </div>
    <div class="w-auto mx-auto pr-6 pt-8 pl-8">
      <img src="/academy/registerback.svg" alt="registerback" />
    </div>
  </div>
  <div class="w-1/2 md:px-5 xl:px-24">
    <div
      class="w-full p-4 lg:p-6 bg-white rounded-lg shadow-md mb-12 mt-4 mx-auto border border-grey-400"
    >
      <form class="space-y-4 lg:space-y-6">
        <div class="">
          <input
            type="text"
            id="full-name"
            name="full-name"
            placeholder="Full Name"
            class="w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            bind:value={fullName}
            required
          />
        </div>

        <div class="">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            class="w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            bind:value={email}
            required
          />
        </div>

        <!-- Phone Number Input with Country Code -->
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
                <!-- <span class="text-gray-500 font-bold"> -->
                  <div type="menu" on:click={() => (dropdownOpen = !dropdownOpen)}>
                  {#if dropdownOpen}
                      <img
                        src="/academy/downarrow-a.svg"
                        style="transform: rotate(180deg);"
                        alt="img"
                      />
                  {:else}
                      <img src="/academy/downarrow-a.svg" alt="img" />
                  {/if}
              </div>
                <!-- </span> -->
              </div>
              {#if dropdownOpen}
                <div class="dropdown-menu bg-white shadow-lg">
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
              bind:value={phone}
              required
            />
          </div>
        </div>

        <div class="">
          <input
            type="text"
            id="Mailing-Address"
            name="Mailing-Address"
            placeholder="Address"
            class="w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            bind:value={mailing}
            required
          />
        </div>

        <div class=" relative dropdown w-full">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            class="flex justify-between items-center w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#05A987] cursor-pointer"
            on:click={() => {
              professionOpen = !professionOpen;
              sourceOpen = false;
            }}
          >
            <p
              id="profession"
              class="block text-[16px] {profession
                ? 'text-black'
                : 'text-[#767676b5]'}"
            >
              {profession || "Select Profession"}
            </p>
            <span class="text-gray-500 font-bold">
              {#if professionOpen}
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
          {#if professionOpen}
            <div
              class="absolute top-16 right-0 w-1/2 bg-white shadow-md rounded-md z-10"
            >
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#333333] border-b border-gray-200"
                on:click={() => {
                  profession = "Student";
                  professionOpen = false;
                }}
              >
                Student
              </div>
              <div
                class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#333333] border-b border-gray-200"
                on:click={() => {
                  profession = "Working-professional";
                  professionOpen = false;
                }}
              >
                Working Professional
              </div>
            </div>
          {/if}
        </div>

        {#if profession === "Student"}
          <div class="">
            <input
              type="text"
              id="educational-background"
              name="educational-background"
              placeholder="University Name"
              class="w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              bind:value={educationalBackground}
              required
            />
          </div>
        {/if}

        {#if profession === "Working-professional"}
          <div class="">
            <input
              type="text"
              id="company-name"
              name="company-name"
              placeholder="Company Name"
              class="w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              bind:value={companyName}
              required
            />
          </div>
        {/if}

        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class=" relative dropdown w-full">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class="flex justify-between w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#05A987] cursor-pointer"
            on:click={() => {
              sourceOpen = !sourceOpen;
              professionOpen = false;
            }}
          >
            <p
              id="source"
              class="block text-[16px] {source
                ? 'text-black'
                : 'text-[#767676b5]'}"
            >
              {source || "How did you know about us?"}
            </p>
            <span class="text-gray-500 mt-2">
              {#if sourceOpen}
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
          {#if sourceOpen}
            <div
              class="absolute top-16 right-0 w-1/2 bg-white shadow-md rounded-md z-10"
            >
              <div
                class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#333333] border-b border-gray-200"
                on:click={() => {
                  source = "LinkedIn";
                  sourceOpen = false;
                }}
              >
                LinkedIn
              </div>
              <div
                class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#333333] border-b border-gray-200"
                on:click={() => {
                  source = "Friend";
                  sourceOpen = false;
                }}
              >
                Friend
              </div>
              <div
                class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#333333] border-b border-gray-200"
                on:click={() => {
                  source = "Advertisement";
                  sourceOpen = false;
                }}
              >
                Advertisement
              </div>
              <div
                class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#333333] border-b border-gray-200"
                on:click={() => {
                  source = "other";
                  sourceOpen = false;
                }}
              >
                Other
              </div>
            </div>
          {/if}
        </div>

        {#if source === "other"}
          <div class="">
            <input
              type="text"
              id="other-source"
              name="other-source"
              placeholder="Please specify"
              class="w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              bind:value={otherSource}
              required
            />
          </div>
        {/if}

        <div class="">
          <input
            type="text"
            id="LinkedIn URL"
            name="LinkedIn-URL"
            placeholder="LinkedIn URL"
            class="w-full p-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            bind:value={userLinkedURL}
            required
          />
        </div>

        <button
          type="submit"
          on:click={handleSubmit}
          class="w-full flex justify-center items-center p-1 lg:px-4 lg:py-3 text-white bg-[#093baa] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#111] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500 shiny-glow"
        >
          {#if isLoading}
            <div class="loader" />
          {:else}
          <p>Enroll now for ₹8999<br />
  <span style="font-size: 0.8em; display: block;">Click here for Registration!</span></p>
          {/if}
        </button>
      </form>
      <p class="mt-4 text-sm text-center text-[#333333]">Stuck Somewhere ? We’d love to help <a href="https://wa.link/rbygpd" class="text-[#093baa]">click here</a>.</p>
    </div>
  </div>
</div>

<!-- {#if showModal}
    <div
        class="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 px-4 sm:px-8"
    >
        <div
            class="bg-white w-full !max-w-[550px] sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl p-8 rounded-lg shadow-lg relative"
        >
            <button
                class="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none"
                on:click={closeModal}
            >
                &times;
            </button>

            <div class="text-center">
                <h2 class="text-xl sm:text-2xl font-bold ">
                    Registration Successful!
                </h2>
                <p class="text-gray-600 mb-6">
                    Thank you for signing up! You're all set to join our next
                    cohort. Our team will reach out soon with more details to
                    help you get started. We're excited to have you on board!
                </p>

                <button
                    on:click={closeModal}
                    class="w-full px-4 py-3 text-white bg-[#093baa] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"
                >
                    Done
                </button>
            </div>
        </div>
    </div>
{/if} -->
<style>

  .dropdown {
    position: relative;
  }
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 130%;
    max-height: 150px;
    overflow-y: auto;
    background-color: #ffffff;
    border: 1px solid #e5e7eb; 
    border-radius: 6px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    z-index: 10;
  }

  .dropdown-item {
    padding: 12px;
    font-size: 14px; 
    color: #374151; 
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  .dropdown-item:hover {
    background-color: #f9fafb; 
    color: #111827; 
  }
  .loader {
    border: 4px solid #e5e7eb; 
    border-top: 4px solid #4f46e5; 
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1.5s linear infinite;
  }

  .shiny-glow {
  position: relative;
  overflow: hidden;
  z-index: 0; 
}

.shiny-glow::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 25px;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.182), rgb(219, 219, 219), rgba(255, 255, 255, 0.084));
  z-index: -1;
  transition: all 0.5s ease-in-out;
  transform: rotate(5deg); 
  filter: blur(15px); 
}

.shiny-glow:hover::before {
  left: 110%;
}

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 360px) {
  .text {
    font-size: 24px !important;
  }
}

</style>
