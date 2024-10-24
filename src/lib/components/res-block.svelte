<script>
  import ResCard from "./res-card.svelte";


  export let cat = ""; 
  export let resources = [] ; 
  // const resources = [
  //   {
  //     title: "Introduction to Blockchain Technology",
  //     description:
  //       "Explore the fundamentals of blockchain and its impact on various industries.",
  //     tag: "Blockchain",
  //     downloads: 120,
  //     cover_url:
  //       "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
  //     category: "E-book",
  //   },
  //   {
  //     title: "Blockchain in Financial Reports",
  //     description:
  //       "Discover how blockchain is revolutionizing financial reporting and analysis.",
  //     tag: "Blockchain",
  //     downloads: 75,
  //     cover_url:
  //       "https://img.freepik.com/free-psd/tablet-mockup-top-angle-view_7838-365.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702512000&semt=ais",
  //     category: "Report",
  //   },
  //   {
  //     title: "Smart Contracts: A Comprehensive Guide",
  //     description:
  //       "Dive into the world of smart contracts and their applications in various industries.",
  //     tag: "Blockchain",
  //     downloads: 90,
  //     cover_url:
  //       "https://mockupden.com/wp-content/uploads/2021/05/Design-Free-eBook-Cover-Mockup-PSD-Template-1.jpg",
  //     category: "E-book",
  //   },
  //   {
  //     title: "Blockchain Security Report 2023",
  //     description:
  //       "An in-depth analysis of the current state of blockchain security and potential vulnerabilities.",
  //     tag: "Blockchain",
  //     downloads: 110,
  //     cover_url:
  //       "https://img.freepik.com/free-psd/tablet-mockup-top-angle-view_7838-365.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702512000&semt=ais",
  //     category: "Report",
  //   },
  //   {
  //     title: "Sound Money Principles: A Historical Perspective",
  //     description:
  //       "Explore the historical context and evolution of sound money principles throughout the centuries.",
  //     tag: "Blockchain",
  //     downloads: 85,
  //     cover_url:
  //       "https://mockupden.com/wp-content/uploads/2021/05/Design-Free-eBook-Cover-Mockup-PSD-Template-1.jpg",
  //     category: "E-book",
  //   },
  //   {
  //     title: "Sound Money Principles in Modern Economics",
  //     description:
  //       "An in-depth examination of how sound money principles can be applied in the context of modern economic theories.",
  //     tag: "Blockchain",
  //     downloads: 95,
  //     cover_url:
  //       "https://img.freepik.com/free-psd/tablet-mockup-top-angle-view_7838-365.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702512000&semt=ais",
  //     category: "Report",
  //   },
  //   {
  //     title: "Smart Banking Infrastructure: The Future of Financial Services",
  //     description:
  //       "An exploration of how smart technologies are reshaping the banking sector and enhancing financial services.",
  //     tag: "Blockchain",
  //     downloads: 120,
  //     cover_url:
  //       "https://mockupden.com/wp-content/uploads/2021/05/Design-Free-eBook-Cover-Mockup-PSD-Template-1.jpg",
  //     category: "E-book",
  //   },
  //   {
  //     title: "Report on Implementing Smart Banking Infrastructure",
  //     description:
  //       "A comprehensive report on the challenges, benefits, and strategies for implementing smart banking infrastructure in financial institutions.",
  //     tag: "Blockchain",
  //     downloads: 80,
  //     cover_url:
  //       "https://img.freepik.com/free-psd/tablet-mockup-top-angle-view_7838-365.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702512000&semt=ais",
  //     category: "Report",
  //   },
  // ];

</script>

<div class="grid grid-cols-2 max-laptop:grid-cols-1 gap-x-10 gap-y-10 my-[45px]  " >
  {#each resources as resource}
    {#if cat === ""  }
        <ResCard
            id={resource.id}
            title={resource.title}
            description={resource.description}
            tag={resource.tag}
            downloads={resource.downloads}
            coverUrl={resource.cover_url}
            category={resource.category}
        />
    {:else if cat === resource.category}
        <ResCard
            id={resource.id}
            title={resource.title}
            description={resource.description}
            tag={resource.tag}
            downloads={resource.downloads}
            coverUrl={resource.cover_url}
            category={resource.category}
        />
    {/if} 
  {/each}
</div>
