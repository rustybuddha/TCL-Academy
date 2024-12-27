<script>
  import { initializeCalendlyPopup } from "../../utils";
  import Button from "../button.svelte";
  import ArrowCorner from "../icons/arrow-corner.svelte";
  import { onMount } from 'svelte';
  import Person from "./person.svelte";
  import { goto } from "$app/navigation";
  let showButton = false;
  let y;

    const redirectTo = (url) => {
      goto(url);  
    };

  // Subscribe to window scroll
  onMount(() => {
    return window.addEventListener('scroll', () => {
      y = window.scrollY;
      showButton = y > 300; // Show button after scrolling 300px
    });
  });

  // Smooth scroll to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
</script>

<div class="flex justify-center">
  <!-- Desktop Footer -->
  <footer class="hidden relative md:block w-full bg-[#FFFFFF] pt-[120px] text-[#33444F] px-[32px] laptop:px-[80px] pb-[110px]">
   
    <div class="max-w-7xl mx-auto">
      {#if showButton}
        <div class=" absolute top-12 right-12">
          <button
            on:click={scrollToTop}
            class="flex items-center gap-2 px-4 py-2 text-[#333333] hover:text-[#093BAA] transition-colors duration-300"
          >
            <h1 class="text-base text-[24px] font-[600]">BACK TO TOP</h1>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>
      {/if}
      <!-- Top Section -->
      <div class="flex w-full items-start desktop:gap-x-[200px] gap-x-[100px] mb-[60px]">
        <div class="w-1/3 flex-2">
          <img src="/academy/academy-logo.svg" alt="Timechain Academy" class="h-12 mb-4" />
          <p class="text-[18px] font-[300] text-[#33444F] pr-18">
            We make innovation safe and easy for you. We work on building the applications of the present with the help of the technology of the future.
          </p>
          <img src="/email.png" class="mt-[10px] h-[20px]" alt="" />
            <p class=" text-blue-gray text-[16px] font-[400]">
              academy@timechainlabs.io
            </p>
            <img src="/contact.png" alt="" class="h-[20px] mt-[10px]" />
            <p class=" text-blue-gray text-[16px] font-[400]">
              +91-8999351806
            </p>

          
        </div>

        <!-- Company Section -->
        <div class="flex-1 w-1/3 text-[#333333]">
          <h3 class="text-[20px] text-[#151D21] font-medium mb-[16px]">COMPANY</h3>
          <div class="">
            <div class="text-[16px] gap-y-[16px] font-[300]">
              <!-- <a href="https://bigblockers.in/" class="block text-[#333333] hover:text-[#33444F] mb-[16px]">Community</a> -->
              <a href="https://academy.timechainlabs.io/#curriculum" class="block text-[#333333] hover:text-[#33444F] mb-[16px]">Curriculum</a>
              <a href="https://academy.timechainlabs.io/#testimonials" class="block text-[#333333] hover:text-[#33444F] mb-[16px]">Testimonials</a>
              <a href="/blogs?section=all-posts" class="block text-[#333333] hover:text-[#33444F] mb-[16px]">Blog</a>
              <!-- <a href="/academy/hire" class="block text-[#333333] hover:text-[#33444F]">Hire from us</a> -->
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="w-1/3">
          <div class="">
            <Person/>
          </div>
          <p class="text-[16px] font-[300] text-[#33444F] mb-4">Join 400+ students like you in developing a career with in-demand skills today.</p>
          <button 
            class="bg-[#093BAA] font-['Rubik'] text-[#FFFFFF] px-8 py-3 rounded-lg border border-[#111] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500 shiny-glow"
            on:click={()=>{redirectTo('/registration')}}
          >
            Register Now
          </button>
        </div>
      </div>

      <!-- Bottom Section -->
      <!-- <div class="pt-8"> -->
        <div class="flex w-full items-start desktop:gap-x-[120px] gap-x-[10px]">
          <!-- Legal Links -->
          <div class="text-[14px] font-[400] text-[#33444F] w-2/3">
            <a href="/terms-and-condition" class="hover:text-[#33444F] mr-1">Terms</a> |
            <a href="/privacy-policy" class="hover:text-[#33444F] mx-1">Privacy</a>
            <!-- <a href="/ccpa" class="hover:text-[#33444F] mx-1">CCPA</a> |
            <a href="/cookie-policy" class="hover:text-[#33444F] mx-1">Cookie Policy</a> |
            <a href="/cookie-settings" class="hover:text-[#33444F] mx-1">Cookie Settings</a> |
            <a href="/legal" class="hover:text-[#33444F]">Legal and Compliance</a> -->
          </div>

          <!-- Social Links -->
          <div class="flex text-[14px] items-center space-x-6 w-1/3">
            <h1 class="text-[14px] font-[300] text-[#33444F]">CONNECT WITH US</h1>
            <a href="https://twitter.com/timechainlabs?s=08" class="text-[#33444F] hover:text-[#33444F]">
              <img src="/academy/x.svg" alt="Twitter" class="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/timechainlabs" class="text-[#33444F] hover:text-[#33444F]">
              <img src="/academy/linkedin.svg" alt="LinkedIn" class="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/timechainlabs" class="text-[#33444F] hover:text-[#33444F]">
              <img src="/academy/insta.png" alt="Instagram" class="h-5 w-5" />
            </a>
            <a href="https://discord.com/invite/vJ6TWDJzgz" class="text-[#33444F] hover:text-[#33444F]">
              <img src="/academy/discord.svg" alt="Discord" class="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@timechainlabs" class="text-[#33444F] hover:text-[#33444F]">
              <img src="/academy/utube.svg" alt="YouTube" class="h-5 w-5" />
            </a>
          </div>
        </div>
      <!-- </div> -->
    </div>
  </footer>

    <!-- Mobile Footer -->
    <footer class="md:hidden block w-full bg-[#FFFFFF] pt-[64px] text-[#33444F] px-[32px] pb-[80px]">
        <div class="space-y-[32px]">
          <!-- Logo and Description -->
          <div>
            <img src="/academy/academy-logo.svg" alt="Timechain Academy" class="h-[50px] w-[115px] my-[24px]" />
            <p class="text-[16px] font-[300] text-[#33444F]">
              We make innovation safe and easy for you. We work on building the applications of the present with the help of the technology of the future.
            </p>
            <img src="/email.png" class="mt-[10px] h-[20px]" alt="" />
            <p class=" text-blue-gray text-[16px] font-[400]">
              academy@timechainlabs.io
            </p>
            <img src="/contact.png" alt="" class="h-[20px] mt-[10px]" />
            <p class=" text-blue-gray text-[16px] font-[400]">
              +91-8999351806
            </p>
              
          </div>
          <!-- Navigation Links -->
          <div class="">
            <h3 class="text-[16px] font-bai text-[#151D21] font-[600] mb-[12px]">COMPANY</h3>
            <div class="grid grid-cols-3 gap-y-1 text-[14px] font-[300]">
              <!-- <div> -->
                <!-- <a href="https://bigblockers.in/" class="block text-[#33444F] hover:text-[#33444F] mb-2">Community</a> -->
                <a href="https://academy.timechainlabs.io/#curriculum" class="block text-[#33444F] hover:text-[#33444F] mb-2">Curriculum</a>
                <a href="https://academy.timechainlabs.io/#testimonials" class="block text-[#33444F] hover:text-[#33444F] mb-2">Testimonials</a>
              
                <a href="/blogs" class="block text-[#33444F] hover:text-[#33444F] mb-2">Blog</a>
                <!-- <a href="/hire" class="block text-[#33444F] hover:text-[#33444F]">Hire from us</a> -->
              <!-- </div> -->
            </div>
          </div>
          <div class="border border-[#33444F] opacity-50 my-[12px]"></div>
          <!-- Student Profiles and CTA -->
          <div class="">
            <div class="">
              <Person/>
            </div>
            <p class="font-rubik text-[14px] font-[300] text-[#33444F] mt-[12px] mb-[24px]">Join 400+ students like you in developing a career with in-demand skills today.</p>
            <button 
              class="font-rubik w-full bg-[#093baa] text-[#FFFFFF] py-3 rounded-lg border border-[#111] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500 shiny-glow"
              on:click={()=>{redirectTo('/registration')}}
            >
              Register Now
            </button>
          </div>

          <!-- Social Links -->
          <div class="pt-[32px] flex border-t border-[#33444F]">
            <p class="text-[16px] font-[500] mb-4 mr-[20px]">CONNECT WITH US</p>
            <div class="flex space-x-4">
              <a href="https://twitter.com/timechainlabs?s=08" class="text-[#33444F] hover:text-[#33444F]">
                <img src="/academy/x.svg" alt="Twitter" class="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/timechainlabs" class="text-[#33444F] hover:text-[#33444F]">
                <img src="/academy/linkedin.svg" alt="LinkedIn" class="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/timechainlabs" class="text-[#33444F] hover:text-[#33444F]">
                <img src="/academy/insta.png" alt="Instagram" class="h-5 w-5" />
              </a>
              <a href="https://discord.com/invite/vJ6TWDJzgz" class="text-[#33444F] hover:text-[#33444F]">
                <img src="/academy/discord.svg" alt="Discord" class="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@timechainlabs" class="text-[#33444F] hover:text-[#33444F]">
                <img src="/academy/utube.svg" alt="YouTube" class="h-5 w-5" />
              </a>
            </div>
          </div>

          <!-- Legal Links -->
        </div>
        <div class="text-[14px] mt-[20px] font-[400] text-[#33444F] pb-[60px]">
          <a href="/terms-and-condition" class="hover:text-[#33444F]">Terms</a> |
          <a href="/privacy-policy" class="hover:text-[#33444F]">Privacy</a>
          <!-- <a href="/ccpa" class="hover:text-[#33444F]">CCPA</a> |
          <a href="/cookie-policy" class="hover:text-[#33444F]">Cookie Policy</a> |
          <a href="/cookie-settings" class="hover:text-[#33444F]">Cookie Settings</a> |
          <a href="/legal" class="hover:text-[#33444F]">Legal and Compliance</a> -->
        </div>
    </footer>
</div>


<style>
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
</style>