<script>
  export let title = "Discovery";
  export let list = [
    "Case studies",
    "Blogs",
    "Ebooks",
    "Media assets",
    "Reports",
  ];
</script>

<div class="bg-[#F5F5F5] h-[290px] w-[240px] max-[400px]:max-w-[150px] mx-3 py-8 px-5 text-center rounded-lg">
  <h1 class="font-bold text-2xl max-[400px]:text-xl text-blue-gray mb-3">{title}</h1>
  <ul class="text-base max-[400px]:text-sm text-gray-500">
    {#each list as item}
      <li class="mb-2">{item}</li>
    {/each}
  </ul>
</div>

<!-- <div class="bg-[#F5F5F5] h-[290px] w-[240px] py-8 px-5 rounded-lg">
  <h1 class="font-bold text-2xl text-blue-gray mb-3">Discovery</h1>
  <ul class="text-lg text-gray-500">
    <li class="mb-3">Case studies</li>
    <li class="mb-3">Blogs</li>
    <li class="mb-3">Ebooks</li>
    <li class="mb-3">Media assets</li>
    <li>Reports</li>
  </ul>
</div> -->
