<script>
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  let prevScrollPos = 0;
  let isScrolling = true;
  let isActive = false;
  let isScrollingDown = false; 
  const navLinks = [
    { label: "Blogs", href: "/blogs" },
    { label: "News and Media", href: "/news-and-media" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Solutions", href: "/solutions" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    // { label: "Resources", href: "/resources" },
  ];

  const products = [
    { label: "neucron", link: "https://neucron.io" },
    { label: "ganak", link: "https://ganak.vercel.app" },
    { label: "assetyzer", link: "https://www.assetyzer.io" },
    { label: "manthan", link: "https://www.manthan.exchange" },
    { label: "smartpool", link: "/smartpool" },
    { label: "dhara", link: "#" },
    { label: "Tsoc", link: "/tsoc.dev" },
    { label: "Academy", link: "https://timechainlabs.io/academy" },
  ];

  const programs = [
    { label: "Timechain Summer of Code", link: "https://tsoc.dev/" },
    { label: "Timechain Academy", link: "https://timechainlabs.io/academy" },
  ];

  function handleScroll() {
    if (browser) {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos <= 0) {
        isScrolling = true;
      } else if (prevScrollPos > currentScrollPos) {
        isScrollingDown = false;
      } else {
        isScrollingDown = true;
      }
      prevScrollPos = currentScrollPos;
    }
  }

  onMount(() => {
    if (browser) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (browser) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  });
  const navItems = [
    // { label: 'Community', href: '/community' },
    { label: 'Curriculum', href: '/#curriculum' },
    { label: 'Testimonials', href: 'https://academy.timechainlabs.io/#testimonials' },
    { label: 'Blog', href: '/blogs?section=all-posts' }
  ];
  const redirectTo = (url) => {
    goto(url);  
  };
</script>

<div class="flex justify-center">
  <nav
  class="w-full fixed top-0 left-0 z-[20] transition-all duration-[0.3s] ease-[ease-in-out] border-x-0 border-[.0625rem] border-b-[rgba(0,0,0,0.05)]"
  style="background-color: white; border-bottom: solid .0625rem rgba(0, 0, 0, 0.05);"
  class:translate-y-[-100%]={isScrollingDown}
  class:translate-y-0="{!isScrollingDown}"
>
    <div
      class="relative laptop:hidden block bg-white desktop:px-[6.25rem] laptop:px-[3.75rem] mbl-lg:px-[2.5rem] mbl-sm:px-[1.5625rem] px-[1rem]"
      style=" border-bottom: solid .0625rem rgba(0, 0, 0, 0.05);
      "
    >
      <div
        class="py-[1.5625rem] max-[31.25rem]:py-[.75rem] max-[50rem]:py-[1.25rem] flex items-center justify-between"
      >
        <div class="">
          <a href="/">
            <img
              src="/academy/academy-logo.svg"
              class="cursor-pointer tablet:h-[3.125rem] mbl-sm:h-[2.5rem] h-[1.875rem] w-auto"
              alt="TCL logo"
            /></a
          >
        </div>
        <div class="flex justify-center items-center gap-[2.5rem]">
          <!-- <select
            id="country-code"
            name="country-Code"
            class=" bg-white w-16 max-[37.5rem]:hidden"
          >
            <option value="Eng">ENG</option>
          </select>

          <div class="max-[37.5rem]:hidden">
            <Button text="Let's Build" onClick={initializeCalendlyPopup} />
          </div> -->
          <div
            class="relative z-10 cursor-pointer"
            on:click={() => (isActive = !isActive)}
          >
            <img src="/menu.svg" alt="" srcset="" />
          </div>
        </div>
      </div>

      <div
        id="menu"
        class="fixed overflow-y-scroll pb-12 z-[11] transition-transform duration-300 -translate-x-[-100%] top-0 left-0 bg-[#ffffff] h-screen w-screen {isActive
          ? 'translate-x-0'
          : ''}"
      >
        <div class="flex justify-center relative">
          <div
            class="w-[87.5rem] max-[87.5rem]:w-screen desktop:px-[6.25rem] laptop:px-[3.75rem] mbl-lg:px-[2.5rem] mbl-sm:px-[1.5625rem] px-[1rem]"
          >
            <!-- HEADER OF POPUP -->
            <div
              class="py-[1.5625rem] max-[31.25rem]:py-[.75rem] max-[50rem]:py-[1.25rem] flex items-center justify-between"
            >
              <div class="text-gray-600 text-xl font-semibold">
                <a href="/" on:click={() => (isActive = false)}>
                  <img
                    src="/academy/academy-logo.svg"
                    class="cursor-pointer tablet:h-[3.125rem] mbl-sm:h-[2.5rem] h-[1.875rem] w-auto"
                    alt="TCL logo"
                  /></a
                >
              </div>
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div class="flex items-center justify-between gap-[2.5rem]">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                  class="relative z-[12] cursor-pointer"
                  on:click={() => (isActive = !isActive)}
                >
                  <img src="/academy/close-black.svg" alt="" srcset="" />
                </div>
              </div>
            </div>

            <div
              class="flex justify-between max-[25rem]:gap-[1.5rem] text-white mt-[1rem] max-[25rem]:mt-[1.5rem] max-[50rem]:mt-[1.875rem] max-[62.5rem]:mt-[2.375rem] max-[62.5rem]:flex-col max-[62.5rem]:gap-[2.5rem]"
            >
         
              <div class="max-w-[18.75rem] w-[18.75rem] max-[50rem]:w-[75%] flex flex-col justify-center items-center m-auto">
                <!-- svelte-ignore a11y-missing-attribute -->
                {#each navItems as program}
                  <a
                    href={program.href}
                    on:click={() => (isActive = false)}
                    class="text-[1rem] mb-3 text-[#333333] max-[56.25rem]:text-[1rem] max-[25rem]:text-[.75rem] mt-[1rem] max-[56.25rem]:mt-[1.875rem] max-[25rem]:my-[.625rem] cursor-pointer flex items-center gap-[.625rem]"
                  >
                    {program.label}
                  </a>
                {/each}
                <div class="w-full mt-5">
                  <button
                  on:click={() => { redirectTo("/registration"); isActive = !isActive; }}
                  class="w-full font-['Rubik'] bg-white text-black px-6 py-2 rounded-[.25rem] border border-black hover:bg-gray-50 transition-colors duration-200 shadow-[.1875rem_.375rem_0rem_#000000] shiny-glow"
                >
                  Register Now
                </button>          
                </div>
              </div>
 
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>

<!-- Desktop Navbar -->
      <div
        class="relative hidden laptop:block bg-white"
        style="border-bottom: solid .0625rem rgba(0, 0, 0, 0.05);"
      >
        <div
          class="py-[1.5625rem] max-[31.25rem]:py-[.75rem] max-[50rem]:py-[1.25rem] desktop:px-[6.25rem] laptop:px-[3.75rem] mbl-lg:px-[2.5rem] mbl-sm:px-[1.5625rem] px-[1rem] flex items-center justify-between"
        >
          <div>
            <a href="/">
              <img
                src="/academy/academy-logo.svg"
                class="cursor-pointer tablet:h-[3.125rem] mbl-sm:h-[2.5rem] h-[1.875rem] w-auto"
                alt="TCL logo"
              />
            </a>
          </div>

          <div class="flex justify-center items-center gap-[2.5rem]">
            {#each navItems as item}
              <a
                href={item.href}
                class="font-[300] font-rubik hover:text-blue-800 transition-colors duration-200 {$page.url.pathname === item.href ? 'text-blue-800 font-normal' : 'text-[#333333]'}"
              >
                {item.label}
              </a>
            {/each}
          </div>

          <div>
            <button
            on:click={() => redirectTo("/registration")}
            class="shiny-glow font-['Rubik'] bg-white text-black px-6 py-2 rounded-[.25rem] border border-black hover:bg-gray-50 transition-colors duration-200 shadow-[.1875rem_.375rem_0rem_#000000] shiny-glow"
          >
            Register Now
          </button>
          
          </div>
        </div>
      </div>


    </div>
  </nav>
</div>

<style>
  nav {
    transition: transform 0.3s ease-in-out;
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
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.182), rgb(174, 174, 174), rgba(255, 255, 255, 0.084));
  z-index: -1;
  transition: all 0.5s ease-in-out;
  transform: rotate(5deg);
  opacity: 0.6;
  filter: blur(15px); 
}

.shiny-glow:hover::before {
  left: 110%;
}

</style>
