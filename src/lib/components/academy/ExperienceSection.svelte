<script>
  let modal = false; 
  let currentVideoUrl = '';  
  function closeModal() {
    modal = false;
    currentVideoUrl = ''; 
  }


  import Loader from "$lib/components/academy/loader.svelte";
  import countryCodes from "$lib/assets/countries-flag.json";

  import { onMount, onDestroy } from "svelte";
  import toast from "svelte-french-toast";
  import { z } from "zod";
  import { page } from "$app/stores";
  import axios from "axios";
    import VideotestimoniDesk from "./videotestimoniDesk.svelte";
    import VideotestimoniMob from "./videotestimoniMob.svelte";



  let isPageLoaded = false;
  let showPopup = false;
  let successPopup = false;
  let dropdownOpen = false;
  let isLoading = false;
  
    const formSchema = z.object({
      fullName: z.string().min(1, "Full Name is required"),
      email: z.string().email("Invalid email address"),
      phone: z.string().min(1, "Phone Number is Required"),
      // message: z.string().optional(),
    });
    
    let hasModalBeenShown = false;
    let scrollPosition = 0;
    
    const checkScrollPosition = () => {
      if (typeof window !== 'undefined') { 
        scrollPosition = window.scrollY;
        if (scrollPosition >= 900 && !hasModalBeenShown) { 
          showPopup = true;
          hasModalBeenShown = true;
        }
      }
    };
    
    onMount(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', checkScrollPosition);
      }
    });
    onDestroy(() => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', checkScrollPosition);
      }
    });

  
  // Default country code and dropdown state
  let selectedCountry = {
    countryname: "India",
    countrycode: "91",
    flagurl: "https://flaglog.com/codes/official-ratio-120px/IN.png",
  }; // Default to India

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      fullName: formData.get("full-name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      countryCode: selectedCountry,
    };

    const result = formSchema.safeParse(data);

    if (!result.success) {
      result.error.errors.forEach((err) => toast.error(err.message));
      return; 
    }

    const payload = {
      fullName: result.data.fullName,
      email: result.data.email,
      phone: result.data.phone,
      linkedIn: "",
      mailingAddress: "",
      referredBy: result.data.message,
      countryCode: selectedCountry,
      organization: "",
      profession: "",
    };


    try {
      isLoading = true;
      const response = await axios.post(
        "https://academy.timechainlabs.io/api/popup",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        isLoading = false;

        toast.success("Thanks for your interest.");
        showPopup = false;
        successPopup = true;
      } else {
        toast.error("Please try again!");
      }
    } catch (error) {
      console.error("Error during API call:", error);
      toast.error(error.response?.data?.message || "An error occurred");
      isLoading = false;
    }
  };

  
  let element0InViewport = false;
  let element1InViewport = false;

  function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target.id === 'videotesti-0') {
          element0InViewport = entry.isIntersecting;
        } else if (entry.target.id === 'videotesti-1') {
          element1InViewport = entry.isIntersecting;
        }
      });
    }, { threshold: 0.5 });

    observer.observe(document.getElementById('videotesti-0'));
    observer.observe(document.getElementById('videotesti-1'));

    return () => {
      observer.disconnect();
    };
  }

  let cleanupObserver;

  onMount(() => {
    cleanupObserver = setupIntersectionObserver();
  });

  onDestroy(() => {
    if (cleanupObserver) {
      cleanupObserver();
    }
  });
</script>


{#if !isPageLoaded}
  <div class="loader-wrapper">
    <Loader />
  </div>
  {/if}

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

            <!-- <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Message"
              class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            /> -->

            <!-- Submit Button -->
            <button
            type="submit"
            class="w-full flex justify-center items-center px-4 py-2 text-white bg-[#093baa] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"
          >
            {#if isLoading}
              <div class="loader" />
            {:else}
              Submit
            {/if}
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
            Thankyou for your interest!
          </h2>
          <!-- <p class="text-gray-600 mb-6 text-xs md:text-base text-center font-thin">
            Thank you for signing up! You're all set to join our next cohort.
            Our team will reach out soon with more details to help you get
            started. We're excited to have you on board!
          </p> -->

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
 



 <div class="px-4 sm:px-2" id="testimonials">
<div class="flex flex-col items-center max-w-6xl mx-auto mt-[3rem] sm:mt-[100px]" >
  <div class="text-center mb-8">
    <div class="!max-w-[650px] flex justify-center mt-2 mb-2">
      <p class="bg-[#E6EBF4] w-[150px] sm:w-[170px] rounded-full text-[#093BAA] bai-jamjuree-font font-[500] text-[12px] sm:text-base md:text-[1rem] p-1"> FEATURED STORIES </p>
    </div>
    <div class="text-center !max-w-[1050px] m-auto">
      <p class="text-2xl sm:text-3xl md:text-4xl bai-jamjuree-font !font-[500] text-[#333333] text-size">
        <span class="!font-[500] text-size text-2xl sm:text-2xl md:text-4xl mr-1">Over</span>
        <span class="text-size text-[#093BAA] !font-[600] mr-1 text-2xl sm:text-2xl md:text-4xl">4000 Students</span>
        <span class=" text-size hidden sm:inline-block !font-[500] text-2xl sm:text-2xl md:text-4xl">
          have benefited
        </span>
        <span class="text-size sm:hidden !font-[500] text-2xl sm:text-2xl md:text-4xl">have</span>
      </p>
      <p class="text-size text-2xl sm:text-3xl md:text-4xl bai-jamjuree-font !font-[500] text-[#333333]">
        <span class="text-size sm:hidden text-[#333333] !font-[500] text-2xl sm:text-3xl md:text-4xl">
          benefited
        </span>
        <span class="text-size text-[#333333] !font-[500] text-2xl sm:text-3xl md:text-4xl"> from Timechain Labs.</span>
      </p>
    </div>
        
  </div>
</div>

<!-- Testimonial Cards -->
<div class=" !-mt-4 md:pt-10 flex container-care sm:flex-col md:flex-row gap-6 justify-center items-start max-w-[1300px] m-auto" style="margin-top: 30px;">
      <!--Desktop-->
      <div class="hidden md:flex">
          <VideotestimoniDesk/>
      </div>
      <div class="md:hidden">
        <VideotestimoniMob/>
    </div>
</div>
</div>

<style>
  @media (max-width: 400px) {
    .text-size {
      font-size: 20px !important; 
    }
  }

  @media (max-width: 360px) {
    .text-size {
      font-size: 18px !important; 
    }
  }


.bai-jamjuree-font {
  font-family: 'Bai Jamjuree', sans-serif !important;
}

  @media (max-width: 640px) {
    .container-care {
      flex-direction: column !important;
    }
  }
  
  @media (max-width: 1144px) {
    .text-lg {
      font-size: 1.25rem !important; 
    }

  }

  @media (max-width: 940px) {
    .container-care{
      flex-direction: column !important;
      justify-items: center;
      align-items: center;
      padding: 0px !important;
    }

  }

  

  @media (min-width: 1024px) {
    .container-care {
      flex-direction: row;
    }
  }


.loader {
    border: 4px solid #e5e7eb; 
    border-top: 4px solid #4f46e5; 
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1.5s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>