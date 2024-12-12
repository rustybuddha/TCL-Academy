<script>
  import Navbar from "../../lib/components/academy/navbar.svelte";
  import Footer from "../../lib/components/academy/footer.svelte";
  export let data;
</script>

<svelte:head>
  <title>{data.title || "Timechain Academy"}</title>
  <meta name="description" content="{data.description || 'Welcome to Timechain Academy'}" />

   <!-- Open Graph Metadata -->
   <meta property="og:title" content="{data.title || 'Timechain Academy - Blockchain Mastery'}" />
   <meta property="og:description" content="{data.description || 'Explore resources and courses at Timechain Academy to upskill yourself!'}" />
   <meta property="og:url" content="https://timechainlabs.io/academy" /> <!-- Replace with your actual URL -->
   <meta property="og:type" content="website" />
   <meta property="og:image" content="/academy/BlockchainMasteryProgramBanner-TimechainLabs.jpg" /> 
 
</svelte:head>

<Navbar/>
<div class="pt-[40px]">
  <slot />
</div>
<Footer />


<!-- {#if !isPageLoaded}
  <div class="loader-wrapper">
    <Loader />
  </div>
{:else}
  {#if showPopup && $page.url.pathname === "/academy"}
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
          class="bg-[#093BAA] md:w-1/2 rounded-lg px-2 lg:px-4 xl:p-6 bg-cover bg-no-repeat space-y-2 lg:space-y-5 relative"
          style="background-image: url(/academy/pop-up-bg.png);"
        >
          <button
            on:click={() => (showPopup = false)}
            class="absolute top-3 right-3 text-white hover:text-gray-400 md:hidden"
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
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="Full Name"
              class="w-full border p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              class="w-full border p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <div class="">
              <div class="flex">
                <div class="dropdown relative">
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

            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Message"
              class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

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
  <Navbar />
  <div class="pt-[40px]">
    <slot />
  </div>
  <Footer />
{/if} -->

