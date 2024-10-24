<script>
  export let description;
  export let small;
</script>

<div
  class="{small
    ? 'mbl-lg:min-h-[242px] min-h-[170px] max-w-full laptop:max-w-[735px]'
    : 'mbl-lg:min-h-[384px] min-h-[170px] '} py-20 px-10 mbl-lg:p-10 box flex flex-col items-center justify-center w-full relative bg-white"
>
  <img
    src="/quotation.svg"
    class="absolute h-[75px] w-[75px] {small?'mbl-lg:w-[170px] mbl-lg:h-[170px]':'mbl-lg:w-[200px] mbl-lg:h-[200px]'}"
    alt=""
    srcset=""
  />
  <div class="">
    <p
      class="{small
        ? 'w-full h-inherit text-[12px] mbl-lg:text-[14px] desktop:text-[16px]'
        : 'tablet:max-w-[500px] laptop:max-w-[695px] mbl-lg:text-[14px] tablet:text-[16px] laptop:text-[18px]'} text-[12px]  font-[300] text-blue-gray text-center relative"
    >
      <!-- <img
      src="/avatars/avatar1.svg"
      class="absolute h-[20px] tablet:h-[30px] laptop:h-[45px] w-auto tablet:top-[-50px] left-[-20px] -top-[20px] tablet:left-[-70px]"
      alt=""
      srcset=""
    /> -->
      <!-- <img
      src="/avatars/avatar2.svg"
      class="absolute h-[20px] tablet:h-[30px] laptop:h-[45px] w-auto tablet:top-[50px] left-[-20px] -top-[-80px] tablet:left-[-70px]"
      alt=""
      srcset=""
    /> -->
      {description}
      <!-- <img
        src="/avatars/avatar3.svg"
        class="absolute h-[20px] tablet:h-[30px] laptop:h-[45px] w-auto tablet:top-[-10px] right-[-20px] -top-[20px] tablet:right-[-70px]"
        alt=""
        srcset=""
      /> -->
      <!-- <img
        src="/avatars/avatar4.svg"
        class="absolute h-[20px] tablet:h-[30px] laptop:h-[45px] w-auto tablet:top-[-110px] right-[-20px] -top-[-80px] tablet:right-[-50px]"
        alt=""
        srcset=""
      /> -->
      <!-- <img
        src="/avatars/avatar5.svg"
        class="absolute h-[20px] tablet:h-[30px] laptop:h-[45px] w-auto tablet:top-[100px] right-[-20px] -top-[-30px] tablet:right-[-50px]"
        alt=""
        srcset=""
      /> -->
    </p>
  </div>
</div>

<style>
  .box {
    border-radius: 10px;
    border: 0.75px solid #e8e8e8;
    background: #fff;
    box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.05);
  }
</style>
