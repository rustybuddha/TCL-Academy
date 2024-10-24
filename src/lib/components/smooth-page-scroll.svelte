<script>
  import { onMount } from "svelte";
  import { TweenLite } from "gsap";

  let scroller = {
    target: null,
    ease: 0.05,
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
  };

  let requestId = null;

  let updateScroller = () => {
    let resized = scroller.resizeRequest > 0;

    if (resized) {
      let height = scroller.target.clientHeight;
      document.body.style.height = height + "px";
      scroller.resizeRequest = 0;
    }

    let scrollY =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    scroller.endY = scrollY;
    scroller.y += (scrollY - scroller.y) * scroller.ease;

    if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
      scroller.y = scrollY;
      scroller.scrollRequest = 0;
    }

    scroller.target.style.transform = `translate3d(0, ${-scroller.y}px, 0)`;

    requestId =
      scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
  };

  let onScroll = () => {
    scroller.scrollRequest++;
    if (!requestId) {
      requestId = requestAnimationFrame(updateScroller);
    }
  };

  let onResize = () => {
    scroller.resizeRequest++;
    if (!requestId) {
      requestId = requestAnimationFrame(updateScroller);
    }
  };

  onMount(() => {
    scroller.target = document.querySelector("#scroll-container");
    TweenLite.set(scroller.target, {
      rotation: 0.01,
      force3D: true,
    });
    updateScroller();
    window.focus();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);
  });
</script>

<div class="viewport">
  <div id="scroll-container" class="scroll-container">
    <slot />
  </div>
</div>

<style>
  .viewport {
    overflow: hidden;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .scroll-container {
    position: absolute;
    overflow: hidden;
    z-index: 10;

    backface-visibility: hidden;
    transform-style: preserve-3d;
  }
</style>
