<script>
  export let webmSrc;
  export let mp4Src;
  export let poster;
  export let className;

  import { onMount } from "svelte";

  let loaded = false;
  let thisVideo;

  function playVideo() {
    thisVideo
      .play()
      .then(() => {
        console.log("animation started");
      })
      .catch((error) => {
        console.error("Failed to play video:", error);
      });
  }

  onMount(() => {
    thisVideo.oncanplay = () => {
      loaded = true;
      playVideo();
    };
  });
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={playVideo}>
  <video
    class={className}
    autoplay={true}
    loop={true}
    controls={false}
    playsinline={true}
    muted
    {poster}
    bind:this={thisVideo}
  >
    <source src={webmSrc} type="video/webm" loading="lazy" />
    <source src={mp4Src} type="video/webm" loading="lazy" />
  </video>
</div>
