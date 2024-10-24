<script>
  import PrimaryButton from "../../../lib/components/primary-button.svelte";
  import BlogCard from "../../../lib/components/blog-card.svelte";
  import Button from "../../../lib/components/button.svelte";
  import { onMount, afterUpdate, beforeUpdate } from "svelte";
  import { page } from "$app/stores";
  import { superForm } from "sveltekit-superforms/client";
  import toast, { Toaster } from "svelte-french-toast";
  import { metaInfo } from "$lib/stores/metaDataStore";
  import { urlFor } from "$lib/image";
  export let data;
  const { blog, recommended } = data;
  console.log("recommended: ", recommended);
  const { form, enhance, errors, message, delayed } = superForm(data.form);

  $: if ($message?.status == "success" && $message.content) {
    toast.success($message.content, {
      position: "top-right",
    });
  } else if ($message?.status == "failed" && $message.content) {
    toast.error("Error occuured while joining newletter! Try again.", {
      position: "top-right",
    });
  }
  onMount(() => {
    updateMetaInfo();
  });

  beforeUpdate(() => {
    updateMetaInfo();
  });

  function updateMetaInfo() {
    metaInfo.set({
      title: `${blog?.title} - Timechain Labs`,
      description: `${blog?.summary} - Timechain Labs`,
      ogImage: urlFor(blog?.cover) ?? "",
    });
  }

  const iconsData = [
    {
      path: "/whatsapp.svg",
      shareLink: `https://api.whatsapp.com/send?text=Check out this ${
        blog?.doc_type
      } by Timechain Labs: ${blog?.title} - ${encodeURIComponent(
        `${$page.url.origin}/${blog?.doc_type}/${blog?.slug?.current}`
      )}`,
    },
    {
      path: "/fb.svg",
      shareLink: `https://www.facebook.com/sharer/sharer.php?u=${$page.url.origin}/${blog?.doc_type}/${blog?.slug?.current}`,
    },
    {
      path: "/x.svg",
      shareLink: `https://twitter.com/intent/tweet?text=Check out this ${blog?.doc_type} by Timechain Labs&url=${$page.url.origin}/${blog?.doc_type}/${blog?.slug?.current}`,
    },
    {
      path: "/linkedin.svg",
      shareLink: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        `${$page.url.origin}/${blog?.doc_type}/${blog?.slug?.current}`
      )}`,
    },
    {
      path: "/mail.svg",
      shareLink: `mailto:?subject=${blog?.title} - Timechian Labs&body=Hey, Check out this ${blog?.doc_type} titled "${blog?.title}" by Timechain Labs at ${$page.url.origin}/${blog?.doc_type}/${blog?.slug?.current}`,
    },
  ];
</script>

<svelte:head>
  <title>{$metaInfo.title}</title>
  <meta name="title" content={$metaInfo.title} />
  <meta name="description" content={$metaInfo.description} />

  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content={`${$page.url.origin}/${blog?.doc_type}/${blog?.slug?.current}`}
  />
  <meta property="og:title" content={$metaInfo.title} />
  <meta property="og:description" content={$metaInfo.description} />
  <meta property="og:image" content={$metaInfo.ogImage} />

  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:url"
    content={`${$page.url.origin}/${blog?.doc_type}/${blog?.slug?.current}`}
  />
  <meta property="twitter:title" content={$metaInfo.title} />
  <meta property="twitter:description" content={$metaInfo.description} />
  <meta property="twitter:image" content={$metaInfo.ogImage} />
</svelte:head>

<Toaster />
<div class=" flex justify-center">
  <main class="w-[1440px] max-[1440px]:w-screen">
    <section
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] pt-[60px] max-[800px]:pt-[40px] max-[360px]:pt-[24px] pb-[100px] max-[360px]:pb-[64px]"
    >
      <!-- <p
        class="{blog?.doc_type === 'blog' &&
          'uppercase'} text-primary mb-[10px] text-[20px] max-[900px]:text-[16px] max-[360px]:text-[14px]"
      >
        {#if blog?.doc_type === "blog"}
          featured
        {:else}
          {blog?.subtitle}
        {/if}
      </p> -->
      <h2
        class="max-w-[880px] text-[48px] leading-[53px] max-[1100px]:leading-[45px] max-[500px]:leading-[35px] max-[360px]:leading-[28px] max-[1150px]:text-[36px] max-[500px]:text-[30px] max-[360px]:text-[20px] font-[500] text-blue-gray"
      >
        {blog?.title}
      </h2>
      <p
        class="font-rubik mt-[20px] text-[16px] text-[#8C8C8C] font-[400] max-[400px]:text-[12px]"
      >
        <span>{data?.blog?.formattedDate} </span> .
        <span>{data?.blog?.minsRead} Mins Read</span>
      </p>
      <img
        src={urlFor(blog?.cover) ?? ""}
        class="w-screen max-h-[620px] object-cover mt-[40px] max-[800px]:mt-[22px] max-[400px]:mt-[12px] mb-[100px] max-[900px]:mb-[70px] max-[600px]:mb-[50px] max-[400px]:mb-[24px]"
        alt=""
        srcset=""
      />
      <div
        class="flex gap-[60px] justify-between max-[900px]:gap-[40px] max-[700px]:flex-col max-[700px]:gap-[25px]"
      >
        <div
          class="flex flex-col gap-[11px] max-[700px]:flex-row max-[700px]:gap-[8px] items-center"
        >
          <h4
            class="font-rubik font-[400] text uppercase text-[14px] text-blue-gray font-[400] leading-[22.4px] flex"
          >
            Share <p class="max-[700px]:block hidden">&nbsp; :</p>
          </h4>
          {#each iconsData as icon}
            <a
              target="_blank"
              href={icon.shareLink}
              class="font-rubik rounded-full p-[7px] max-[400px]:p-[5px] max-[400px]:h-[40px] h-[50px] max-[400px]:w-[40px] w-[50px] flex items-center justify-center"
              style="background: rgba(255, 255, 255, 0);
          box-shadow: 1px 3px 5px -1px rgba(0, 0, 0, 0.18),
            -1px -1px 2px 0px rgba(0, 0, 0, 0.05);"
            >
              <img
                src={icon.path}
                alt={icon.path}
                class="h-6 w-6 max-[400px]:h-4 max-[400px]:w-4"
              />
            </a>
          {/each}
        </div>
        <div class="font-rubik flex-1 text-blue-gray sanity-blog-content">
          {@html data?.blog?.content}
        </div>
      </div>
    </section>
    <section
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] py-[44px] bg-[#E6EBF7]"
    >
      <div class="flex justify-between gap-[26px] max-[1020px]:flex-col">
        <div class="text-[16px] text-blue-gray max-w-[496px]">
          Enjoyed this article? Don't miss out on our weekly newsletter –
          subscribe now for more insightful content!
        </div>
        <form
          class="gap-[26px] flex justify-between flex-1"
          action="?/subscribeNewletter"
          method="POST"
          use:enhance
          novalidate
        >
          <div class="flex-1">
            <input
              type="email"
              placeholder="Your email"
              bind:value={$form.emailID}
              name="emailID"
              aria-invalid={$errors.emailID ? "true" : undefined}
              class="font-rubik w-full h-fit rounded-[6px] py-[12px] px-[20px]"
              style="border: 0.5px solid rgba(0, 0, 0, 0.10);"
            />
            {#if $errors.emailID != null}
              <span class="font-rubik text-red-600 text-xs font-medium"
                >{$errors.emailID[0]}</span
              >
            {/if}
          </div>
          <Button text="Subscribe" htmlType="submit" />
        </form>
      </div>
    </section>
    {#if recommended?.length > 0}
      <section
        class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] pb-[100px] max-[360px]:pb-[64px] mt-[100px] max-[800px]:mt-[80px] max-[400px]:mt-[64px]"
      >
        <h2
          class="max-w-[880px] text-[48px] leading-[53px] max-[1100px]:leading-[45px] max-[500px]:leading-[35px] max-[360px]:leading-[28px] max-[1150px]:text-[36px] max-[500px]:text-[30px] max-[360px]:text-[20px] font-[500] text-blue-gray mb-[40px] max-[800px]:mb-[30px] max-[400px]:mb-[20px]"
        >
          Recommended for you
        </h2>
        <div
          class="font-rubik grid grid-cols-3 max-[1150px]:grid-cols-2 max-[700px]:grid-cols-1 place-items-center gap-[40px] max-[800px]:gap-[30px]"
        >
          {#each recommended as blog}
            <BlogCard {blog} />
          {/each}
        </div>
      </section>
    {/if}
  </main>
</div>