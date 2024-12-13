  <!-- module section -->
  <script>
    import Slider from './slider.svelte';
  </script>
  
  <div class="container px-5" >

    <!-- <div class="left-content">
      <h1>What you'll learn?</h1>
      <p>
        Through our Blockchain Pro course specifically tailored for students and developers
        even without any prior experience in development, you will explore the following modules in detail:
      </p>
    </div> -->
  
    <div id="curriculum" class="">
      <Slider/>
    </div>
  </div>

<style>

 
  .container {
    /* display: flex; */
    justify-content: space-between;
    margin: 0 auto;
    /* padding: 0 1rem; */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
 
    @media (max-width: 428px) {
      .container {
        flex-direction: column; 
        /* padding: 1rem;  */
      }
     
    }
    
</style>