<script>
  import PrimaryButton from "./primary-button.svelte";
  import { urlFor } from "../image";
  import Button from "./button.svelte";
  export let post = {};
</script>

<div
  class="grid grid-cols-1 tablet:grid-cols-2 mx-auto max-w-[1140px] box overflow-hidden"
>
  <a href={`/${post?.doc_type}/${post?.slug?.current}`}>
    <img
      src={post?.cover ? urlFor(post?.cover) : ""}
      class="w-full h-full object-cover"
      alt=""
      srcset=""
    />
  </a>
  <div class="mbl-lg:px-[40px] mbl-lg:py-[60px] p-[20px]">
    <a href={`/${post?.doc_type}/${post?.slug?.current}`}>
      <h3
        class="text-primary mbl-lg:text-[20px] mbl-sm:text-[18px] text-[14px]"
      >
        {post?.subtitle}
      </h3>
    </a>
    <a href={`/${post?.doc_type}/${post?.slug?.current}`}>
      <h1
        class="mbl-lg:text-[24px] text-blue-gray font-[500] mbl-sm:text-[16px] text-[14px] line-clamp-1 my-[6px] tablet:my-[12px]"
      >
        {post?.title}
      </h1>
    </a>
    <a href={`/${post?.doc_type}/${post?.slug?.current}`}>
      <p
        class="text-blue-gray tablet:text-[18px] mbl-sm:text-[16px] text-[12px] font-[300] mb-[40px]"
      >
        {post?.summary}
      </p>
    </a>
    <Button
      text="Read this Article"
      href={`/${post?.doc_type}/${post?.slug?.current}`}
    />
  </div>
</div>

<style>
  .box {
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #fff;
    box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.05);
  }
</style>
