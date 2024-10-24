<script>
  import { urlFor } from "../image";
  export let post = {};
</script>

<div
  class="p-[12px] w-fit shadow-[0px_15px_25px_0px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-pointer rounded-[10px] border-[0.5px] border-solid border-[rgba(0,0,0,0.1)] hover:shadow-[5px_20px_30px_5px_rgba(0,0,0,0.1)] bg-white"
>
  <a href={`/${post?.doc_type}/${post?.slug?.current}`}>
    <img
      src={urlFor(post?.cover) ?? ''}
      class="h-[236px] max-[500px]:h-[200px] w-full rounded-[6px] object-fill"
      alt=""
      srcset=""
    />
  </a>
  <div class="mt-[20px]">
    <a href={`/${post?.doc_type}/${post?.slug?.current}`}>
      <p
        class="font-[300] text-[12px] mbl-lg:leading-[22.4px] leading-[19.2px] mbl-lg:text-[16px] text-primary"
      >
        {post?.date}
      </p>
    </a>
    <a href={`/${post?.doc_type}/${post?.slug?.current}`}>
      <h3
        class="my-[8px] tetx-[16px] leading-[20.8px] mbl-lg:text-[20px] font-[600] mbl-lg:leading-[26px]"
      >
        {post?.title}
      </h3>
    </a>
    <a href={`/${post?.doc_type}/${post?.slug?.current}`}>
      <p
        class="line-clamp-3 text-blue-gray text-[12px] mbl-lg:text-[14px] font-[300] leading-[19.2px] mbl-lg:leading-[22.4px]"
      >
        {post?.summary}
      </p>
    </a>
  </div>
</div>
