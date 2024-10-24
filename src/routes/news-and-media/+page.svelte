<script>
  import FeaturedArticle from "$lib/components/featured-article.svelte";
  import FeaturedNews from "$lib/components/featured-news.svelte";
  import { urlFor } from "$lib/image";
  import Pagination from "$lib/components/pagination.svelte";
  import BlogCard from "$lib/components/news-media.svelte";

  let active_tab = "news";

  export let data;
  const { medias, featuredArticle, featuredNews, news } = data;
  let trimmedNews;
</script>

<div class="flex justify-center overflow-hidden">
  <div class="w-[1440px] max-[1440px]:w-screen">
    <main
      class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] my-[50px] max-[800px]:my-[40px]"
    >
      <section>
        <h1
          class="text-[48px] max-[1100px]:text-[38px] max-[360px]:text-[20px] font-[500] leading-[53px] max-[1100px]:leading-[45px] max-[500px]:leading-[41.6px] max-[360px]:leading-[28px]"
        >
          News and Media
        </h1>
        <p
          class="font-rubik text-[20px] max-[900px]:text-[18px] max-[360px]:text-[14px] text-blue-gray font-[300] max-w-[568px] mt-[12px] mb-[40px]"
        >
          Discover Compassionate Updates and Empowering Resources – Nurturing
          Knowledge for a Better Tomorrow.
        </p>
        <FeaturedNews post={featuredNews} />
      </section>
      <section class="my-[100px]">
        <div class="w-full flex items-center justify-between">
          <div>
            <button
              on:click={() => (active_tab = "news")}
              type="button"
              class="text-[20px] font-[400] px-[50px] py-[13px] {active_tab ===
              'news'
                ? 'border-b-2 border-primary'
                : ''}">News</button
            >
            <button
              on:click={() => (active_tab = "media")}
              type="button"
              class="text-[20px] font-[400] px-[50px] py-[13px] {active_tab ===
              'media'
                ? 'border-b-2 border-primary'
                : ''}">Media</button
            >
          </div>
          <div>
            Sort
          </div>
        </div>
        <div class="my-[40px]">
          {#if active_tab === "news"}
            <div
              class="grid grid-cols-2 w-full gap-[40px] max-[800px]:gap-[30px]"
            >
              {#if trimmedNews}
                {#each trimmedNews as post}
                  <BlogCard blog={post} />
                {/each}
              {/if}
            </div>
            <div class="mbl-lg:mt-[40px] mt-[20px]">
              <Pagination
                rows={news}
                perPage={3}
                bind:trimmedRows={trimmedNews}
              />
            </div>
            <!-- <div class="my-[100px]">
              <FeaturedArticle post={featuredArticle} />
            </div> -->
          {:else if active_tab === "media"}
            <div class="flex flex-col gap-[64px] laptop:gap-[100px]">
              {#each medias as { title, description, image_1, image_2, image_3, image_4 }, index}
                <div
                  class="grid grid-cols-1 tablet:grid-cols-2 gap-[10px] tablet:gap-[24px]"
                >
                  <div
                    class="flex flex-col gap-[10px] tablet:gap-[24px] {index %
                      2 ===
                      0 && 'order-1 tablet:order-2'}"
                  >
                    <div>
                      <h1
                        class="laptop:text-[32px] mbl-lg:text-[24px] text-[18px] font-[500] text-blue-gray"
                      >
                        {title}
                      </h1>
                      <p
                        class="laptop:text-[20px] mbl-sm:text-[16px] text-[12px] text-blue-gray font-[300]"
                      >
                        {description}
                      </p>
                    </div>
                    <img
                      src={urlFor(image_1) ?? ""}
                      class="object-cover rounded-[10px] tablet:max-h-[260px]"
                      alt=""
                      srcset=""
                    />
                    <img
                      src={urlFor(image_2) ?? ""}
                      class="object-cover rounded-[10px] tablet:max-h-[260px]"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div
                    class="grid grid-rows-2 gap-[10px] tablet:gap-[24px] {index %
                      2 ===
                      0 && 'order-2 tablet:order-1'}"
                  >
                    <img
                      src={urlFor(image_3) ?? ""}
                      class="h-full object-cover rounded-[10px]"
                      alt=""
                      srcset=""
                    />
                    <img
                      src={urlFor(image_4) ?? ""}
                      class="h-full object-cover rounded-[10px]"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      </section>
    </main>
  </div>
</div>
