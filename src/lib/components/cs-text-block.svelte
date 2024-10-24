<script>
    export let type ;
    export let industry ;
    export let geography ;
    export let year ;
    export let companySize ;
    export let segment ;
    export let techStack ;
  </script>
  <div class="">
  
      <div class="flex flex-col max-[1000px]:flex-row">
  
          <div class="mb-[20px] mr-3" >
              <p class="text-lg">
                  <strong>Type</strong>
              </p>
              <p class="text-base">
                  {type}
              </p>
          </div>
      
          <div class="mb-[20px] mr-3">
              <p class="text-lg">
                  <strong>Industry</strong>
              </p>
              <p class="text-base">
                  {industry}
              </p>
          </div>
      
          <div class="mb-[20px] mr-3">
              <p class="text-lg">
                  <strong>Geography</strong>
              </p>
              <p class="text-base">
                  {geography}
              </p>
          </div>
  
      </div>
  
  
      <div class="flex flex-col max-[1000px]:flex-row">
          <div class="mb-[20px] mr-3">
              <p class="text-lg">
                  <strong>Year</strong>
              </p>
              <p class="text-base">
                  {year}
              </p>
          </div>
      
          <div class="mb-[20px] mr-3">
              <p class="text-lg">
                  <strong>Company Size</strong>
              </p>
              <p class="text-base">
                  {companySize}
              </p>
          </div>
      
          <div class="mb-[20px] mr-3">
              <p class="text-lg">
                  <strong>Segment</strong>
              </p>
              <p class="text-base">
                  {segment}
              </p>
          </div>  
      </div>
  
  
      <div class="mb-[20px]">
          <p class="text-lg">
              <strong>Tech Stack</strong>
          </p>
          {#each techStack as tech, index}
              <p class="text-base">
                  {tech} {#if index !== techStack.length - 1}, {/if}
              </p>
          {/each}
      </div>
  
  </div>
  