<script>
    import { z } from "zod";
    import {toast,Toaster} from "svelte-french-toast";
    import countryCodes from "$lib/assets/countries-flag.json";
  
    let showModal = false;
    let phone = "";
    let disable = true;
  
    const formSchema = z.object({
      fullName: z.string().min(1, "Full Name is required"),
      email: z.string().email("Invalid email address"),
      phone: z.string().min(1,"Phone Number is Required"),
      message: z.string().optional(),
      agreement: z.boolean().refine(val => val === true, "You must accept the agreement"),
    });

    const handleSubmit = (event) => {
      
      event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
        fullName: formData.get("full-name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
        agreement: formData.get("agreement") === "on",
        
      };
  
      const result = formSchema.safeParse(data);

      if (!result.success) {
        result.error.errors.forEach(err => toast.error(err.message));
      } else {
        toast.success("Form submitted successfully!");
        showModal = true;
      }
    };

  let selectedCountry = {
    countryname: "India",
    countrycode: "91",
    flagurl: "https://flaglog.com/codes/official-ratio-120px/IN.png",
  };
  
  let dropdownOpen = false;
    const closeModal = () => {
      showModal = false;
    };
  
    let isAgreementChecked = false;


    $: isButtonDisabled = !isAgreementChecked;
  </script>

<Toaster/>
  <!-- Mobile View -->
  <div class="md:hidden mx-auto bg-cover bg-center justify-center py-6 flex flex-col" style="background-image: url('/academy/contact-mobile-1.svg');">
    <div class="flex w-full justify-between items-center">
      <img src="/academy/contact4.svg" alt="">
      <img src="/academy/contact3.svg" alt="">
     </div>
   <div class="px-6">
   
    <div class="mx-auto mt-0 text-center">
      <!-- Header Section -->
      <p class="text text-3xl sm:text-4xl !font-[500] leading-tight text-[#333333]">
        Let’s have a Conversation! <br> We’re here to help.
      </p>
    
      <!-- Supporting Text -->
      <p class="text-para mt-4 text-[#5C5C5C] max-w-[400px] text-sm font-['Rubik'] sm:text-lg leading-relaxed mx-auto">
        Tell us more about what you’re looking for. Our team is dedicated to finding the best way to support your needs, and one of our experts will be in touch with you shortly to discuss how we can assist.
      </p>
    </div>
    
    <div>
      <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md mb-12 mt-6 mx-auto">
        <form on:submit={handleSubmit}>
          <!-- Full Name Input -->
          <div class="mb-4">
            <input type="text" id="full-name" name="full-name" placeholder="Full Name" class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>
          <!-- Email Address Input -->
          <div class="mb-4">
            <input type="email" id="email" name="email" placeholder="Email Address" class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>
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
          <!-- Message Textarea -->
          <div class="mb-4">
            <textarea id="message" name="message" rows="4" placeholder="Message" class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <!-- Checkbox Agreement -->
          <div class="flex items-start mb-4">
            <input  bind:checked={isAgreementChecked} type="checkbox" id="agreement" name="agreement" class="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required>
            <label for="agreement" class="ml-2 text-sm text-gray-600">
              I have read and agreed to Timechain <a href="/privacy-policy" class="text-blue-600 underline">Privacy Policy</a> and agree to receive communications
            </label>
          </div>
          <!-- Submit Button -->
          <button 
          type="submit" 
          class="w-full font-['Rubik'] px-4 py-2 text-[#FFFFFF] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"
          disabled={isButtonDisabled}
          class:text-gray-400={isButtonDisabled}  
          class:bg-[#093baa]={!isButtonDisabled}  
          class:bg-gray-400={isButtonDisabled}  
          class:cursor-not-allowed={isButtonDisabled} 
        >
          Submit
        </button>
        
        </form>
      </div>
    </div>
    <div class="flex w-full justify-between items-center">
      <img src="/academy/contact2.svg" alt="">
      <img src="/academy/contact1.svg" alt="">
     </div>
  </div>
  </div>
  
  <!-- Desktop View -->
  <div class="hidden md:flex justify-center items-center w-full bg-center bg-no-repeat bg-cover p-10" style="background-image: url('/academy/contact-section-1.svg');">

    <div class="flex max-w-[1280px] w-full mx-auto justify-between items-center gap-10">
    <div class="w-2/2  mx-auto">
      <h1 class="font-['Bai Jamjuree'] md:text-3xl lg:text-5xl font-[500] text-[#333333]">Let’s have a Conversation!<br>We’re here to help.</h1>
      <p class="mt-4 text-lg text-[#5C5C5C] font-[300] font-['Rubik']" style="line-height: 28px;">
        Tell us more about what you’re looking for. Our team is <br> dedicated to finding the best way to support your needs, 
        and <br> one of our experts will be in touch with you shortly to discuss <br> how we can assist.
      </p>
      <div class=" mt-10">
        <img src="/academy/desktopcontactimg.svg" alt="">
      </div>
    </div>
    <div class="w-2/2 mx-auto">
      <div class="w-full max-w-lg p-6 bg-white rounded-lg shadow-md mb-12 mt-4 mx-auto border border-grey-400">
        <form on:submit={handleSubmit}>
          <!-- Full Name Input -->
          <div class="mb-4">
            <input type="text" id="full-name" name="full-name" placeholder="Full Name" class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>
          <!-- Email Address Input -->
          <div class="mb-4">
            <input type="email" id="email" name="email" placeholder="Email Address" class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>
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
          <!-- Message Textarea -->
          <div class="mb-4">
            <textarea id="message" name="message" rows="4" placeholder="Message" class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <!-- Checkbox Agreement -->
          <div class="flex items-start mb-4">
            <input bind:checked={isAgreementChecked} type="checkbox" id="agreement" name="agreement" class="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required>
            <label for="agreement" class="ml-2 text-sm text-gray-600">
              I have read and agreed to Timechain <a href="/privacy-policy" class="text-blue-600 underline">Privacy Policy</a> and agree to receive communications
            </label>
          </div>
          <!-- Submit Button -->
          <button
          disabled={isButtonDisabled}
          class:text-gray-400={isButtonDisabled}  
          class:bg-[#093baa]={!isButtonDisabled}  
          class:bg-gray-400={isButtonDisabled}  
          class:cursor-not-allowed={isButtonDisabled} 
          type="submit" class="w-full font-['Rubik'] px-4 py-2 text-white bg-[#093baa] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  
  </div>
  <!-- Success Modal -->
  {#if showModal}
  <div class="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 px-4 sm:px-8">
    <div class="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-md">
      <button class="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none" on:click={closeModal}>&times;</button>
      <img
      class="w-32 md:w-auto rounded-full m-auto" 
      src="/academy/success.gif"
      alt="checkmark"
    />
      <h2 class="text-xl font-bold mb-4 text-center">Thank You for Reaching Out!</h2>
      <p class="text-gray-600 mb-6 text-center">Your message has been received, a member of the team will be in touch with you shortly. </p>
      <button
      on:click={closeModal}
      class="w-full px-4 py-3 text-white bg-[#093baa] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"
  >
      Done
  </button>    </div>
  </div>
  {/if}
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

.dropdown-menu::-webkit-scrollbar {
  width: 4px;
}

.dropdown-menu::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.dropdown-menu::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
}

.dropdown-menu::-webkit-scrollbar-thumb:hover {
  background-color: #555;
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

/* .loader {
  border: 4px solid #e5e7eb;
  border-top: 4px solid #4f46e5;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1.5s linear infinite;
} */

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: #d1d1d1;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media(max-width:420px){
  .text{
    font-size:26px !important;
  }
  .text-para{
    font-size: 10px !important;
  }
}

@media(max-width:370px){
  .text{
    font-size:22px !important;
  }
}

  </style>
  