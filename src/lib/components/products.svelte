<script>
  import Prod from "./prod.svelte";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { register } from "swiper/element/bundle";
  register();
  const params = {
    injectStyles: [
      `
        .swiper-pagination-bullets.swiper-pagination-horizontal{                    
            position: initial !important;
            margin-top: 40px;
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
    swiperEl = document.querySelector(`swiper-container.myProducts`);
    Object.assign(swiperEl, params);

    swiperEl.initialize();
  });
  let products = [
    {
      title: "Mintelium",
      subtitle: "The IdenDeFi Platform",
      description:
        "A data bank that stores workers' sensitive information privately and securely while granting organizations temporary access with the worker maintaining complete control and ownership of it.",
      imageUrl: "ideni.png",
      type: 1,
      headingColor: "#FFFFFF",
      textColor: "#EBECED",
    },
    {
      title: "LMON",
      subtitle: "Helping Others Live & Travel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel molestie felis. Cras convallis ultrices mi. Morbi quis ultrices arcu. In sed libero vitae neque accumsan",
      imageUrl: "leom.png",
      type: 2,
      headingColor: "#33444F",
      textColor: "#33444F",
    },
    {
      title: "TRUEWORLD",
      subtitle: "Start your journey to Net Zero Measure, manage & change",
      description:
        "Empowering your decarbonisation journey with a range of smart sustainability solutions",
      imageUrl: "trueworld.png",
      type: 3,
      headingColor: "#FFFFFF",
      textColor: "#EBECED",
    },
  ];
</script>

<div>
  <div class="laptop:block hidden">
    {#if browser}
      <swiper-container
        pagination="true"
        loop="true"
        slides-per-view="auto"
        init="false"
        autoplay-delay="3000"
        class="myProducts"
      >
        {#each products as product (product.type)}
          <swiper-slide class="w-fit">
            <Prod
              title={product.title}
              subtitle={product.subtitle}
              description={product.description}
              imageUrl={product.imageUrl}
              type={product.type}
              headingColor={product.headingColor}
              textColor={product.textColor}
            />
          </swiper-slide>
        {/each}
      </swiper-container>
    {/if}
  </div>
  <div class="laptop:hidden block">
    <div class="flex flex-col gap-6">
      {#each products as product (product.type)}
        <Prod
          title={product.title}
          subtitle={product.subtitle}
          description={product.description}
          imageUrl={product.imageUrl}
          type={product.type}
          headingColor={product.headingColor}
          textColor={product.textColor}
        />
      {/each}
    </div>
  </div>
</div>
