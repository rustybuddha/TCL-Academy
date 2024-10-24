<script>
  import TestimonialBox from "./testimonial-box.svelte";
  import { browser } from "$app/environment";
  import { onMount, afterUpdate } from "svelte";
  import { register } from "swiper/element/bundle";
  register();

  export let testimonials = [];
  export let small = false;
  const params = {
    injectStyles: [
      `
        .swiper-pagination-bullets.swiper-pagination-horizontal{                    
            position: absolute !important;
            bottom: 15%;
        }
        .swiper-pagination-bullet {
            border-radius: 10px;
            width: 10px;
            height: 10px;
            text-align: center;
            color: #E8E8E8;
            opacity: 1;
            background: #E8E8E8;
            transition: width 300ms linear;
        }
        .swiper-pagination-bullet-active {
            color: #093BAA;
            width: 50px;
            background: #093BAA;
        }
        @media (max-width: 768px) {
          .swiper-pagination-bullet-active {
              width: 20px;
          }
        }
        @media (max-width: 768px) {
          .swiper-pagination-bullet {
              height: 6px;
          }
        }
    `,
    ],
    pagination: {
      clickable: true,
    },
    spaceBetween: 40,
  };

  onMount(() => {
    let swiperEl;
    swiperEl = document.querySelector(`swiper-container.myTestimonials`);
    Object.assign(swiperEl, params);

    swiperEl.initialize();
  });
</script>

{#if browser}
  <swiper-container
    pagination="true"
    loop="true"
    init="false"
    autoplay-delay="3000"
    class="myTestimonials w-full"
  >
    {#each testimonials as testimonial}
      <swiper-slide class="w-fith-fit {small ? 'p-0' : 'p-4 tablet:p-7'} ">
        <TestimonialBox description={testimonial.testimonial} {small} />
      </swiper-slide>
    {/each}
  </swiper-container>
{/if}
