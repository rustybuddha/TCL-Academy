<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment'; 
    let loading = true;

    const hideLoader = () => {
      loading = false;
    };
   
    onMount(() => {
      if (browser) {
        setTimeout(() => {
          hideLoader(); 
        }, 3000); 
      }
    });
  </script>
  
  {#if loading}
    <div class="loader-wrapper w-[100vw] h-[90vh] flex justify-center items-center">
      <div class="loader border "></div>
    </div>
  {:else}
    <slot />
  {/if}
  
<style>
    .loader-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(255, 255, 255, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999; /* Ensure it sits above the rest of the content */
    }
  
    .loader {
      border: 5px solid #f3f3f3;
      border-top: 5px solid #3498db;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
    }
  
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
  