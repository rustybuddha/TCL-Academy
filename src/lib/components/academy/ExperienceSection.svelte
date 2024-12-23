<script>
  const testimonials = [
    {
      img: "/academy/DivyanshuPrasad.svg",
      header: "I was not a developer previously",
      name: "Divyanshu Prasad",
      role: "ex-SDE Intern at Timechain Labs",
      description: "Working with Timechainlabs, I got to know what real development looks like.",
      videoUrl: "https://youtube.com/embed/1YYd34lWRH0"
    },
    {
      img: "/academy/RiteekRakesh.svg",
      header: "Got opportunity to work on real projects.",
      name: "Riteek Rakesh",
      role: "Software Developer at Timechain labs",
      description: "I basically learnt how to write backend APIs for any fullstack applications.",
      videoUrl: "https://youtube.com/embed/0VPPR1PNuXY"
    },
  ];
  let modal = false; 
  let currentVideoUrl = '';  
  let hoveredIndex = -1;

  function openModal(videoUrl) {
    currentVideoUrl = videoUrl;
    modal = true;
  }
  
  function closeModal() {
    modal = false;
    currentVideoUrl = ''; 
  }


  import Loader from "$lib/components/academy/loader.svelte";
  import countryCodes from "$lib/assets/countries-flag.json";

  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import toast from "svelte-french-toast";
  import { z } from "zod";
  import { page } from "$app/stores";
  import axios from "axios";


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


  let isPageLoaded = false;
  let showPopup = false;
  let successPopup = false;
  let dropdownOpen = false;
  let isLoading = false;
  
      const formSchema = z.object({
        fullName: z.string().min(1, "Full Name is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().min(1, "Phone Number is Required"),
        message: z.string().optional(),
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

  const getVideoUrl = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return `${url}?autoplay=1&mute=1`;
    }
    return url;
  };
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
  {#each testimonials as testimonial, index}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="bg-white border rounded-lg sm:w-1/2 flex flex-col card-care md:flex-row gap-4 sm:gap-6 text-sm sm:text-base cursor-pointer"
       on:click={() => openModal(testimonial.videoUrl)}>
    <div class="text-white overflow-hidden w-full relative"
         on:mouseover={() => hoveredIndex = index} 
         on:mouseout={() => hoveredIndex = -1} 
    >
      {#if hoveredIndex === index}
        <!-- Show Video when hovered -->
        <img src={testimonial.img} alt={testimonial.name} class="w-full block sm:hidden rounded-l-[8px] img-care">
        <iframe 
        class="w-full hidden sm:block md:h-[300px] lg:h-[320px] xl:h-[400px] rounded-l-[8px] vid-care" 
        src={getVideoUrl(testimonial.videoUrl)}
        title="Video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
      {:else}
        <!-- Show Image when not hovered -->
        <img src={testimonial.img} alt={testimonial.name} class="w-full rounded-l-[8px] img-care">
        <img src="/academy/play-circle-02.svg" alt="Play" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {/if}
    </div>

    <div class="flex flex-col justify-between px-2">
      <p class="text-green-500 text-2xl font-bold quote mt-5">
        <img src="/academy/card-quote.svg" alt="">
      </p>
      <p class="text-[#333333] mt-2 text-xl sm:text-2xl text lg:text-3xl !font-[400] rubik-font italic">
        {testimonial.description}
      </p>
      <div class="mt-4 mb-6 flex justify-between items-center">
        <div>
          <p class="font-[400] rubik-font">{testimonial.name}</p>
          <p class="text-xs font-[400] text-[#5C5C5C] rubik-font">{testimonial.role}</p>
        </div>
      </div>
    </div>
  </div>
{/each}
</div>
</div>
{#if modal}
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50" on:click={closeModal}>
   <div class="px-4 w-full flex justify-center">
    <div class="bg-white p-8 rounded-lg max-w-lg w-full relative" on:click|stopPropagation>
      <button class="absolute top-2 right-2 text-3xl font-bold text-gray-600 hover:text-gray-900" on:click={closeModal}>&times;</button>
      <iframe 
        class="w-full h-64 sm:h-80 rounded-lg" 
        src={currentVideoUrl}
        title="Video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
  </div>
{/if}

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
.rubik-font {
  font-family: 'Rubik', sans-serif !important;
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
    .dis{
      font-size: 18px;
    }
  }

  @media (max-width: 960px) {
    .dis{
      font-size: 14px;
    }
    .quote{
      width: 30px  !important;
      height: 40px !important;
    }
  }

  @media (max-width: 940px) {
    .container-care{
      flex-direction: column !important;
      justify-items: center;
      align-items: center;
      padding: 0px !important;
    }
    .dis{
      font-size: 14px;
    }
  }

  @media (max-width: 900px) {
  .card-care {
    flex-direction: column !important;
  }
  
  
  .img-care {
    border-top-left-radius: 8px !important;
    border-top-right-radius: 8px !important;
    border-bottom-left-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    width: 100% !important;   
    height: auto !important;  
    object-fit: cover; 
  }
}

  @media (min-width: 1024px) {
    .container-care {
      flex-direction: row;
    }
  }

  @media (max-width: 1130px) and (min-width: 890px) {
  .text {
    font-size: 18px !important;
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