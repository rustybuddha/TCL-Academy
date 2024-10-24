<script>
  import PrimaryButton from "./primary-button.svelte";
  import { urlFor } from "../image";
  import Button from "./button.svelte";

  export let post = {};
</script>

<div class="grid grid-cols-1 tablet:grid-cols-2 gap-[30px] tablet:gap-[54px]">
  <a href={`/${post.doc_type}/${post?.slug?.current}`}>
    <img
      src={post?.cover ? urlFor(post.cover) : ""}
      class="w-full h-full object-cover rounded-[10px]"
      alt=""
      srcset=""
    />
  </a>
  <div class="">
    <a href={`/${post.doc_type}/${post?.slug?.current}`}>
      <h3
        class="font-rubik font-[400] text-primary laptop:text-[20px] mbl-lg:text-[18px] text-[14px]"
      >
        {post.subtitle}
      </h3>
    </a>
    <a href={`/${post.doc_type}/${post?.slug?.current}`}>
      <h1
        class="laptop:text-[32px] text-blue-gray font-[500] laptop:leading-[41px] leading-[28px] mbl-lg:text-[26px] text-[20px] mbl-lg:my-[12px] my-[6px]"
      >
        {post.title}
      </h1>
    </a>
    <a href={`/${post.doc_type}/${post?.slug?.current}`}>
      <p
        class="font-rubik text-blue-gray laptop:text-[20px] mbl-sm:text-[16px] text-[12px] font-[300] mbl-lg:mb-[40px] mb-[20px]"
      >
        {post.summary}
      </p>
    </a>
    <Button
      text="Read this news"
      href={`/${post.doc_type}/${post?.slug?.current}`}
    />
  </div>
</div>
