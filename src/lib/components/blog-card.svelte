<script>
  import Button from "./button.svelte";
  import { urlFor } from "../image";

  export let blog;
</script>

<div class="max-w-[386px] max-[360px]:max-w-[328px]">
  <a href={`/${blog?.doc_type}/${blog?.slug?.current}`}>
    <img
      src={blog?.cover ? urlFor(blog?.cover) : ""}
      alt=""
      class="cursor-pointer h-[236px] max-[500px]:h-[200px] w-full rounded-[4px] object-fill"
      srcset=""
    />
  </a>
  <div class="my-[20px]">
    <a href={`/${blog?.doc_type}/${blog?.slug?.current}`}>
      <h3
        class="cursor-pointer text-[20px] max-[360px]:text-[16px] font-[500] text-blue-gray line-clamp-1"
      >
        {blog?.title}
      </h3>
    </a>
    <p
      class="font-rubik cursor-pointer text-[16px] max-[360px]:text-[12px] font-[300] text-blue-gray line-clamp-3"
    >
      {blog?.summary}
    </p>
  </div>
  <div class="flex gap-[8px] font-rubik">
    <Button
      text="Continue reading"
      href={`/${blog?.doc_type}/${blog?.slug?.current}`}
    />
    <p
      class="font-rubik cursor-pointer textblue-gray text-[16px] max-[360px]:text-[12px] font-[300] flex items-center gap-[6px] mx-[5px]"
    >
      <img src="../../../clock.svg" class="max-w-[12px]" alt="" srcset="" />
      {blog?.minsRead} min read
    </p>
  </div>
</div>
