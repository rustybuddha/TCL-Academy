<script>
  import { onMount } from "svelte";
  import Navbar from "$lib/components/academy/navbar.svelte";
  import Footer from "../lib/components/academy/footer.svelte";
  import "../app.css";
  import Analytics from "../lib/analytics.svelte";
  import { metaInfo } from "$lib/stores/metaDataStore";
  import { page } from "$app/stores";
  
  $: if (
    $page.url.pathname !== "/news/*" &&
    $page.url.pathname !== "/article/*" &&
    $page.url.pathname !== "/blog/*"
  ) {
    metaInfo.set({
      title:
        "Blockchain Certification Courses - Become a Blockchain Expert",
      description:
        "Master blockchain with online certification courses.  Launch your tech career in 6 weeks!",
      ogImage: "/academy/newogbanner.jpg",
    });
  }
</script>

<svelte:head>
  <script
    src="https://cdn.zipy.ai/sdk/v1.0/zipy.min.umd.js"
    crossorigin="anonymous"
  ></script>
  <script>
    window.zipy && window.zipy.init("16881064");
  </script>

  <!-- {#if !$popup} -->
  <link
    href="https://assets.calendly.com/assets/external/widget.css"
    rel="stylesheet"
  />
  <script
    src="https://assets.calendly.com/assets/external/widget.js"
    type="text/javascript"
    async
  ></script>

  <!-- <script type="text/javascript">
		window.onload = function () {
		  Calendly.initBadgeWidget({
			url: "https://calendly.com/timechainlabs",
			text: "Schedule time with us",
			textColor: "#ffffff",
			branding: false,
		  });
		};
	  </script> -->
  <!-- {/if} -->
  <!-- {/if} -->
  <!-- {/if} -->
  <!-- {/if} -->
  <!-- {/if} -->

  <!-- Primary Meta Tags -->
  <title>{$metaInfo.title}</title>
  <meta name="title" content={$metaInfo.title} />
  <meta name="description" content={$metaInfo.description} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://timechainlabs.io/" />
  <meta property="og:title" content={$metaInfo.title} />
  <meta property="og:description" content={$metaInfo.description} />
  <meta property="og:image" content={$metaInfo.ogImage} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://timechainlabs.io/" />
  <meta property="twitter:title" content={$metaInfo.title} />
  <meta property="twitter:description" content={$metaInfo.description} />
  <meta property="twitter:image" content={$metaInfo.ogImage} />
</svelte:head>

<Navbar />
<div class=" pt-[60px] mbl-sm:pt-20 tablet:pt-28">
  <slot />
</div>
<Footer />
<Analytics />

<!-- </SmoothPageScroll> -->
<style>
  :global(.calendly-badge-widget) {
    background-color: #093baa;
    border-radius: 30px;
  }
</style>
