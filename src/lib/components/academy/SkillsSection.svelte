<script>
  import EssentialCards from "./essentialCards.svelte";
</script>

<!-- Skills Section  -->
<div class="bg-[#093BAA] py-10">
  <div class="flex w-full justify-center">
    <div class="md:flex hidden w-full justify-center relative mb-4">
      <h1 class="text-[#FFFFFF] font-bai text-4xl font-[500] flex">
        Essential
        <p class="text-[#39E5D9] font-[500] ml-2 mr-2">Skills</p>
         You'll Acquire
      </h1>
      <img
        class="absolute rotate-180 mt-5 ml-5"
        src="/learn.svg"
        alt="img"
        style="margin-top: 40px;
    margin-left: -60px;"
      />
    </div>

    <!--smaller screens (sm and below) -->
    <div class="sm:flex md:hidden w-full relative mb-4">
      <h1
        class="text-[#FFFFFF] font-bai text-3xl font-[500] m-auto text-center"
      >
        <div class="flex justify-center items-center relative">
          <p class="text-3xl">Essential</p>
          <p class="text-[#39E5D9] !font-bold ml-2 mr-2 w-[100px] mt-5">
            <img src="/academy/skilsss.png" alt="" />
          </p>
        </div>
        <p class="text-center mt-3">You'll Acquire</p>
      </h1>
    </div>
  </div>
  <div class="flex justify-center max-w-[1440px] mx-auto">
    <EssentialCards />
  </div>
</div>
