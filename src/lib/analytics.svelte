<script lang="ts">
  /* eslint-disable */
  import { page } from "$app/stores";
  import { analyticsStore } from "./stores/analyticsStore";
  $: {
    // @ts-ignore
    if (typeof gtag !== "undefined") {
      // @ts-ignore
      gtag("config", "G-QZQH029H85", {
        page_title: document.title,
        page_path: $page.url.pathname,
      });
    }
  }
  analyticsStore.subscribe((queue) => {
    let next = queue && queue.length && queue.shift();
    let retries = 3;
    let previousExecutedOperationId;
    while (next) {
      const { type, event, data, id } = next;
      if (!type || !event || !data || !id) {
        console.log("Incorrect analytics event data");
        next = queue.shift();
        continue;
      }
      if (id && id !== previousExecutedOperationId) retries = 3;
      previousExecutedOperationId = id;
      // @ts-ignore
      if (typeof gtag !== "undefined") {
        // @ts-ignore
        gtag(type, event, data);
        console.log("event created with data", next);
      } else {
        if (retries > 0) {
          retries--;
          continue;
        } else {
          console.log("Analytics event failed to reach server with: ", next);
        }
      }
      next = queue.shift();
    }
  });
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-QZQH029H85"
  ></script>
  <script>
    try {
      if (typeof window !== "undefined" && window) {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-QZQH029H85");
      }
      console.log("Google analytics setup successfull");
    } catch (err) {
      console.log("Error setting up google analytics ", err);
    }
  </script>
</svelte:head>
