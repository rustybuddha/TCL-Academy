<script>
  import { initializeCalendlyPopup } from "../utils";
  import Button from "./button.svelte";
  import ArrowCorner from "./icons/arrow-corner.svelte";
  import PrimaryButton from "./primary-button.svelte";
</script>

<div class="flex justify-center">
  <footer
    class="w-[1440px] max-[1440px]:w-screen bg-primary py-[64px] max-[900px]:py-[50px] max-[400px]:py-[39px] text-white desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px]"
  >
    <div
      class="flex justify-start gap-[40px] max-[900px]:gap-[30px] max-[600px]:gap-[20px] max-[400px]:gap-[10px] mb-[55px] max-[700px]:mb-[40px] max-[400px]:mb-[24px]"
    >
      <a href="/">
        <img src="/footer.svg" alt="" />
      </a>

      <div class="max-w-[528px]">
        <h1
          class="text-[30px] text-white my-[8px] font-[500] leading-[39px] max-[400px]:leading-[25.6px] max-[900px]:text-[22px] max-[400px]:text-[16px]"
        >
          Interested in collaboratively creating extraordinary products?
        </h1>
        <p
          class="font-rubik text-[20px] mb-[20px] max-[400px]:mb-[10px] max-[900px]:text-[16px] max-[400px]:text-[12px] font-[300] text-[#EBEBEB]"
        >
          Want to scale your business to a new level, but don’t know how?
          Connect with our team and we will help you out.
        </p>
        <div
          class={"p-[1.2px] w-fit border-[#0A9D84] border-[1.5px] bg-gradient-to-b from-[#D8E4FF] via-secondary active:via-secondary via-30% to-secondary rounded-[6px]"}
        >
          <Button
            outlined={true}
            className="bg-secondary text-primary"
            icon={ArrowCorner}
            onClick={initializeCalendlyPopup}
            text="Let's get started"
            iconColor="#093BAA"
            iconHoverColor="#093BAA"
          />
        </div>
      </div>
    </div>

    <hr />

    <div
      class="flex mt-[40px] max-[400px]:mt-[24px] justify-start max-[1500px]:flex-wrap gap-[104px] max-[1000px]:gap-[80px] max-[800px]:gap-[50px] max-[400px]:gap-[38px]"
    >
      <div class="max-w-[294px]">
        <a href="/">
          <img
            src="/Group.svg"
            class="max-[400px]:w-[108px] mb-[20px] max-[400px]:mb-[8px]"
            alt=""
          /></a
        >
        <p class="font-rubik font-[300] text-[14px] max-[400px]:text-[12px] text-[#EBEBEB]">
          We make innovation safe and easy for you. We work on building the
          applications ofthe present with the help of the technology of the
          future.
        </p>
      </div>

      <div class="">
        <h3
          class="font-[500] text-[20px] max-[400px]:text-[16px] mb-[20px] max-[400px]:mb-[12px]"
        >
          Timechain
        </h3>
        <ul
          class="font-rubik flex flex-col gap-[10px] text-[16px] max-[400px]:text-[12px] font-[300] text-[#EBEBEB]"
        >
          <li class=""><a href="/about">About Us</a></li>
          <li class=""><a href="/#testimonials">Careers</a></li>
          <li class=""><a href="https://bigblockers.in">Case Study</a></li>
          <li class=""><a href="/#whyTCL">Why Timechain?</a></li>
          <li class=""><a href="/contact">Contact us</a></li>
        </ul>
      </div>

      <div class="">
        <h3
          class="font-[500] text-[20px] max-[400px]:text-[16px] mb-[20px] max-[400px]:mb-[12px]"
        >
          Our Products
        </h3>
        <ul
          class="font-rubik flex flex-col gap-[10px] text-[16px] max-[400px]:text-[12px] font-[300] text-[#EBEBEB]"
        >
          <li class="">
            <a href="https://neucron.io" target="_blank">Neucron</a>
          </li>
          <li>
            <a href="https://neucron.io" target="_blank">Ganak</a>
          </li>
          <li class="">
            <a href="https://www.assetyzer.io/" target="_blank">Assetyzer</a>
          </li>
          <li>
            <a href="https://www.assetyzer.io/" target="_blank">Manthan Dex</a>
          </li>
          <li class="">
            <a href="https://www.bitrupi.com" target="_blank">Dhara</a>
          </li>
        </ul>
      </div>

      <div class="">
        <h3
          class="font-[500] text-[20px] max-[400px]:text-[16px] mb-[20px] max-[400px]:mb-[12px]"
        >
          Services
        </h3>
        <ul
          class="font-rubik flex flex-col gap-[10px] text-[16px] max-[400px]:text-[12px] font-[300] text-[#EBEBEB]"
        >
          <li class=""><a href="#consultation">Solution</a></li>
          <li class=""><a href="#consultation">Initiatives</a></li>
          <li class=""><a href="#consultation">Consultation</a></li>
          <li><a href="#development">Development</a></li>
        </ul>
      </div>

      <div class="">
        <h3
          class="font-[500] text-[20px] max-[400px]:text-[16px] mb-[20px] max-[400px]:mb-[12px]"
        >
          Resources
        </h3>
        
        <ul
          class="font-rubik flex flex-col gap-[10px] text-[16px] max-[400px]:text-[12px] font-[300] text-[#EBEBEB]"
        >
          <li class=""><a href="/#casestudies">Case studies</a></li>
          <li class=""><a href="/blogs">Blogs</a></li>
          <li class=""><a href="/resources">Ebooks</a></li>
          <li class=""><a href="/news-and-media">Media assets</a></li>
          <li><a href="#">Reports</a></li>
        </ul>
      </div>
    </div>
    <h1 class="text-[14px] mt-[20px] font-[500]">Recognised by</h1>
    <img
      src="/startup.svg"
      class="max-[400px]:w-[167px] mb-[20px] max-[400px]:mb-[10px]"
      alt=""
    />
    <hr />

    <p class="font-rubik font-[300] text-[20px] max-[400px]:text-[14px] mt-[20px] mb-[40px]">
      Made with ❤️ in India 🇮🇳
    </p>

    <div class="flex justify-between max-[1500px]:flex-wrap gap-5">
      <div>
        <div class="font-rubik font-[300] text-[16px] max-[400px]:text-[12px] flex gap-2 flex-wrap">
          <a href="/terms-and-condition">Terms</a> |
          <a href="/privacy-policy">Privacy</a> |
          <a href="/privacy-policy">CCPA</a> |
          <a href="/privacy-policy">Cookie Policy</a> |
          <a href="/privacy-policy">Cookie Settings</a> |
          <a href="/privacy-policy">Legal and Compliance</a>
        </div>
      </div>

      <div class="flex gap-5 items-center">
        <div>
          <h1 class="text-[16px] max-[400px]:text-[12px]">
            Join the Community
          </h1>
        </div>

        <a href="https://www.linkedin.com/company/timechainlabs/">
          <img
            src="/ln.svg"
            class="cursor-pointer w-[20px] h-auto max-[400px]:w-[16px]"
            alt=""
          />
        </a>
        <a href="https://m.facebook.com/timechainlabs">
          <img
            src="/face1.svg"
            class="cursor-pointer w-[20px] h-auto max-[400px]:w-[16px]"
            alt=""
          />
        </a>
        <a href="https://instagram.com/timechainlabs?igshid=MWZjMTM2ODFkZg==">
          <img
            src="/in.svg"
            class="cursor-pointer w-[20px] h-auto max-[400px]:w-[16px]"
            alt=""
          />
        </a>
        <a href="https://discord.gg/whh93Rxv">
          <img
            src="/Vector.svg"
            class="cursor-pointer w-[20px] h-auto max-[400px]:w-[16px]"
            alt=""
          />
        </a>
        <a href="https://youtube.com/@timechainlabs?si=HJ1bnnVPCvb1-7dR">
          <img
            src="/yout.png"
            class="cursor-pointer w-[20px] h-auto max-[400px]:w-[16px]"
            alt=""
          />
        </a>
        <a href="https://twitter.com/timechainlabs?s=08">
          <img
            src="/x1.svg"
            class="cursor-pointer w-[20px] h-auto max-[400px]:w-[16px]"
            alt=""
          /></a
        >
      </div>
    </div>
  </footer>
</div>
