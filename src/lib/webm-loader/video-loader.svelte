<script>
	export let webmSrc;
	export let mp4Src;
	export let poster;
	export let className;

	import IntersectionObserver from './intersection-observer.svelte';
	import VideoPlayer from './video-player.svelte';

	let nativeLoading = false;
</script>

<IntersectionObserver once={true} let:intersecting>
	{#if intersecting || nativeLoading}
		<VideoPlayer {poster} {webmSrc} {mp4Src} {className} />
	{/if}
</IntersectionObserver>
