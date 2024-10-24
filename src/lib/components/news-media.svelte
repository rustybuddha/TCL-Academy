<script>
  import Button from "./button.svelte";
  import { urlFor } from "../image";

  export let blog;
</script>

<div class="max-w-[600px] max-[600px]:max-w-[600px] max:h-[577px]">
  <a href={`/${blog?.doc_type}/${blog?.slug?.current}`}>
    <img
      src={blog?.cover ? urlFor(blog?.cover) : ""}
      alt=""
      class="cursor-pointer h-[236px] max-[500px]:h-[200px] w-full rounded-[4px] object-fill"
      srcset=""
    />
  </a>
  <div class="my-[20px]">
    <h2 class="text-[16px] text-[#093BAA] font-light">JANUARY 04 2024</h2>
    <a href={`/${blog?.doc_type}/${blog?.slug?.current}`}>
      <h3
        class="cursor-pointer text-[20px] max-[360px]:text-[16px] font-[500] text-blue-gray line-clamp-1"
      >
        {blog?.title}
      </h3>
    </a>
    <p
      class="font-rubik cursor-pointer text-[16px] max-[360px]:text-[12px] font-[300] text-blue-gray line-clamp-3 py-[4px]"
    >
      {blog?.summary}
    </p>
  </div>
  <div class="flex gap-[8px] font-rubik justify-between">
    <p
      class="font-rubik cursor-pointer textblue-gray text-[16px] max-[360px]:text-[12px] font-[300] flex items-center gap-[6px] mx-[5px]"
    >
      <img src="../../../clock.svg" class="max-w-[12px] font-bold" alt="" srcset="" />
      {blog?.minsRead} min read
    </p>
    <a
      class="gap-1 bg-[#093BAA] text-white w-[120px] h-[38px] rounded text-center items-center justify-center flex"
      href={`/${blog?.doc_type}/${blog?.slug?.current}`}
    >Read Full <img src="/read-full.svg" alt=""> </a>
  </div>
</div>
