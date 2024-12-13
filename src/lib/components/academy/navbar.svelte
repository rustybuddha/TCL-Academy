<script>
  import Button from "../button.svelte";
  import { initializeCalendlyPopup } from "../../utils";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  let prevScrollPos = 0;
  let isScrolling = true;
  let isActive = false;

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
        isScrolling = true;
      } else {
        isScrolling = false;
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
        { label: 'Curriculum', href: 'https://academy.timechainlabs.io/#curriculum' },
        { label: 'Testimonials', href: 'https://academy.timechainlabs.io/#testimonials' },
        { label: 'Blog', href: '/blogs?section=all-posts' }
      ];
    const redirectTo = (url) => {
      goto(url);  
    };
    </script>



<div class="flex justify-center">
  <nav
    class="w-full fixed top-0 left-0 z-[20] transition-all duration-[0.3s] ease-[ease-in-out] border-x-0 border-[1px] border-b-[rgba(0,0,0,0.05)]"
    style="background-color: white; border-bottom: solid 1px rgba(0, 0, 0, 0.05);"
  >
    <div
      class="relative laptop:hidden block bg-white desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px]"
      style=" border-bottom: solid 1px rgba(0, 0, 0, 0.05);
      "
    >
      <div
        class="py-[25px] max-[500px]:py-[12px] max-[800px]:py-[20px] flex items-center justify-between"
      >
        <div class="">
          <a href="/">
            <img
              src="../../tcl.svg"
              class="cursor-pointer tablet:h-[50px] mbl-sm:h-[40px] h-[30px] w-auto"
              alt="TCL logo"
            /></a
          >
        </div>
        <div class="flex justify-center items-center gap-[40px]">
          <!-- <select
            id="country-code"
            name="country-Code"
            class=" bg-white w-16 max-[600px]:hidden"
          >
            <option value="Eng">ENG</option>
          </select>

          <div class="max-[600px]:hidden">
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
            class="w-[1400px] max-[1400px]:w-screen desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px]"
          >
            <!-- HEADER OF POPUP -->
            <div
              class="py-[25px] max-[500px]:py-[12px] max-[800px]:py-[20px] flex items-center justify-between"
            >
              <div class="text-gray-600 text-xl font-semibold">
                <a href="/" on:click={() => (isActive = false)}>
                  <img
                    src="/academy/academy-logo.svg"
                    class="cursor-pointer tablet:h-[50px] mbl-sm:h-[40px] h-[30px] w-auto"
                    alt="TCL logo"
                  /></a
                >
              </div>
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div class="flex items-center justify-between gap-[40px]">
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
              class="flex justify-between max-[400px]:gap-[24px] text-white mt-[60px] max-[400px]:mt-[24px] max-[800px]:mt-[30px] max-[1000px]:mt-[38px] max-[1000px]:flex-col max-[1000px]:gap-[40px]"
            >
         
              <div class="max-w-[300px] w-[300px] max-[800px]:w-[75%] flex flex-col justify-center items-center m-auto">
                <!-- svelte-ignore a11y-missing-attribute -->
                {#each navItems as program}
                  <a
                    href={program.href}
                    on:click={() => (isActive = false)}
                    class="text-[16px] mb-5 text-[#333333] max-[900px]:text-[16px] max-[400px]:text-[12px] mt-[40px] max-[900px]:mt-[30px] max-[400px]:my-[10px] cursor-pointer flex items-center gap-[10px]"
                  >
                    {program.label}
                  </a>
                {/each}
                <div class="w-full mt-5">
                  <button
                  on:click={() => redirectTo("/registration")}
                  class=" w-full font-['Rubik'] bg-white text-black px-6 py-2 rounded-[4px] border border-black hover:bg-gray-50 transition-colors duration-200 shadow-[3px_6px_0px_#000000]"
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
        style="border-bottom: solid 1px rgba(0, 0, 0, 0.05);"
      >
        <div
          class="py-[25px] max-[500px]:py-[12px] max-[800px]:py-[20px] desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] flex items-center justify-between"
        >
          <div>
            <a href="/">
              <img
                src="/tcl.svg"
                class="cursor-pointer tablet:h-[50px] mbl-sm:h-[40px] h-[30px] w-auto"
                alt="TCL logo"
              />
            </a>
          </div>

          <div class="flex justify-center items-center gap-[40px]">
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
            class=" font-['Rubik'] bg-white text-black px-6 py-2 rounded-[4px] border border-black hover:bg-gray-50 transition-colors duration-200 shadow-[3px_6px_0px_#000000]"
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
</style>
