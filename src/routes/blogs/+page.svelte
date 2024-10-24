<script>
  import BlogCard from "../../lib/components/blog-card.svelte";
  import Button from "../../lib/components/button.svelte";
  import { urlFor } from "$lib/image";
  import { superForm } from "sveltekit-superforms/client";
  import toast, { Toaster } from "svelte-french-toast";
  import { onMount } from "svelte";
  export let data;
  const { form, enhance, errors, message, delayed } = superForm(data.form);
  const { featuredBlog, blogs, popularBlogs } = data;
  // console.log("first: ",  popularBlogs);
  // import {blogsList} from '$lib/store.js'
  // blogsList.set(popularBlogs);
  // blogsList.subscribe(value => {
  //   console.log("third: ", value);
  // });
  
  // blogsList.subscribe(value => {
  //     console.log("blogsList2.", value);
  // });
  // console.log("blogsList...", blogsList);

  $: if ($message?.status == "success" && $message.content) {
    toast.success($message.content, {
      position: "top-right",
    });
  } else if ($message?.status == "failed" && $message.content) {
    toast.error("Error occuured while joining newletter! Try again.", {
      position: "top-right",
    });
  }
</script>

<Toaster />
<div class=" flex justify-center">
  <main class="w-[1440px] max-[1440px]:w-screen">
    <section
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] pt-[60px] max-[800px]:pt-[40px] max-[360px]:pt-[24px] pb-[100px] max-[360px]:pb-[64px]"
    >
      <div
        class="max-w-[661px] max-[1200px]:max-w-[500px] max-[1050px]:max-w-full mb-[40px] max-[360px]:mb-[24px]"
      >
        <h2
          class="text-[48px] leading-[53px] max-[1100px]:leading-[45px] max-[500px]:leading-[35px] max-[360px]:leading-[28px] max-[1150px]:text-[36px] max-[500px]:text-[30px] max-[360px]:text-[20px] font-[500] text-blue-gray"
        >
          Latest News and Resources
        </h2>
        <p
          class="font-rubik text-[20px] max-[500px]:text-[16px] max-[360px]:text-[12px] text-blue-gray font-[300]"
        >
          Discover Compassionate Updates and Empowering Resources – Nurturing
          Knowledge for a Better Tomorrow.
        </p>
      </div>
      <div
        class="flex max-[1050px]:flex-col justify-between gap-[60px] max-[1050px]:gap-[45px] max-[400px]:gap-[32px]"
      >
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <div
          class="max-w-[661px] max-[1200px]:max-w-[500px] max-[1050px]:max-w-full"
        >
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <a href={`/${featuredBlog?.doc_type}/${featuredBlog?.slug?.current}`}>
            <img
              src={featuredBlog?.cover
                ? urlFor(featuredBlog?.cover)
                : ""}
              alt=""
              class="cursor-pointer max-[1050px]:w-screen h-auto"
              srcset=""
            />
          </a>
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <div class="my-[20px] max-[400px]:my-[12px]">
            <!-- <p
              class="textblue-gray leading-[32px] text[20px] max-[500px]:text-[16px] max-[360px]:text-[12px] font-[400] mb-[10px]"
            >
              Automation
            </p> -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <a
              href={`/${featuredBlog?.doc_type}/${featuredBlog?.slug?.current}`}
            >
              <h2
                class="cursor-pointer text-[32px] max-[1150px]:text-[28px] max-[500px]:text-[22px] max-[360px]:text-[16px] leading-[32px] max-[360px]:leading-[20px] text-blue-gray font-[400] mb-[10px] max-[400px]:mb-[8px]"
              >
                {featuredBlog?.title}
              </h2>
            </a>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <a
              href={`/${featuredBlog?.doc_type}/${featuredBlog?.slug?.current}`}
            >
              <p
                class="font-rubik cursor-pointer textblue-gray text-[20px] max-[500px]:text-[16px] max-[360px]:text-[12px] font-[300] line-clamp-3 max-[500px]:line-clamp-2"
              >
                {featuredBlog?.summary}
              </p>
            </a>
          </div>
          <div class="inline-flex gap-[8px] items-center">
            <!-- <p
              class="textblue-gray text-[16px] max-[400px]:text-[12px] font-[300] flex items-center gap-[6px] ml-[5px]"
            >
              <img
                src='../../../TCL_Favicon.png'
                class="max-w-[16px]"
                alt=""
                srcset=""
              />TimechainLabs Team - 
            </p> -->
            <p
              class="textblue-gray text-[16px] max-[400px]:text-[12px] font-[400]"
            >
              {featuredBlog?.formattedDate}
            </p>
            <p
              class="textblue-gray text-[16px] max-[400px]:text-[12px] font-[300] flex items-center gap-[6px] mx-[5px]"
            >
              <img
                src="../../../clock.svg"
                class="max-w-[16px] max-[450px]:w-[12px]"
                alt=""
                srcset=""
              />
              {featuredBlog?.minsRead} mins
            </p>
          </div>
        </div>
        <div class="flex-1 flex flex-col gap-[16px]">
          <div
            class="py-[39px] max-[360px]:py-[12px] px-[20px] max-[360px]:px-[12px] rounded-[10px]"
            style="border: 0.5px solid rgba(0, 0, 0, 0.10);
          "
          >
            <h2
              class="font-[500] text-[24px] max-[360px]:text-[20px] text-blue-gray"
            >
              Subscribe to our newsletter
            </h2>
            <p
              class="font-rubik font-[300] text-[16px] max-[360px]:text-[12px] text-blue-gray mb-[20px] max-[400px]:mb-[12px]"
            >
              Be the first to hear about translation best practices and guides
            </p>
            <form
              class="flex items-center gap-[20px]"
              action="?/subscribeNewletter"
              method="POST"
              use:enhance
              novalidate
            >
              <div class="flex-1">
                <input
                  type="email"
                  placeholder="Email"
                  bind:value={$form.emailID}
                  name="emailID"
                  aria-invalid={$errors.emailID ? "true" : undefined}
                  class="font-[300] font-rubik text-[16px] px-[16px] py-[8px] w-full rounded-[4px]"
                  style="border: 0.5px solid rgba(0, 0, 0, 0.10);"
                />
                {#if $errors.emailID != null}
                  <span class="text-red-600 text-xs font-medium"
                    >{$errors.emailID[0]}</span
                  >
                {/if}
              </div>
              <Button text="Subscribe" htmlType="submit" />
            </form>
          </div>
          <div
            class="p-[20px] max-[360px]:px-[12px] rounded-[10px]"
            style="border: 0.5px solid rgba(0, 0, 0, 0.10);
          "
          >
            <h2 class="text-blue-gray text-[24px] font-[500] mb-[8px]">
              Most Popular
            </h2>
            {#each popularBlogs as blog}
              <div
                class="py-[20px] max-[360px]:py-[12px] flex justify-between"
                style="border-top: 0.5px solid rgba(0, 0, 0, 0.10)"
              >
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <a href={`/${blog?.doc_type}/${blog?.slug?.current}`}>
                  <p
                    class="font-rubik font-[400] cursor-pointer text-[14px] font-[400] text-[#4B445C] max-w-[249px] line-clamp-2"
                  >
                    {blog?.title}
                  </p>
                </a>
                <a href={`/${blog?.doc_type}/${blog?.slug?.current}`}>
                  <img
                    src="../../../arrow-svg.svg"
                    alt=""
                    class="cursor-pointer"
                    srcset=""
                  />
                </a>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <div>
        <h2
          class="text-[48px] leading-[53px] max-[1100px]:leading-[45px] max-[500px]:leading-[41.6px] max-[360px]:leading-[28px] max-[1150px]:text-[36px] max-[500px]:text-[30px] max-[360px]:text-[20px] font-[400] text-blue-gray mt-[100px] max-[500px]:mt-[84px] mb-[40px] max-[500px]:mb-[20px]"
        >
          All Blog Posts
        </h2>
        <div
          class="grid grid-cols-3 max-[1150px]:grid-cols-2 max-[700px]:grid-cols-1 place-items-center gap-[40px] max-[800px]:gap-[30px]"
        >
          {#each blogs as blog}
            <BlogCard {blog} />
          {/each}
        </div>
      </div>
    </section>
  </main>
</div>
