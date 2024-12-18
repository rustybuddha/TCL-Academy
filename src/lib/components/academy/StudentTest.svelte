<script>
  const testimonials = [
  {
    name: "Amisha Akhtar Mulani",
    role: "Participant, TSoC 2024",
    img: "/academy/amisha.svg",
    linkedin: "https://www.linkedin.com/in/amisha-mulani-30b485298",
    x: "https://x.com/AmishaMulani",
    description:
      `Joining TSoC, I was eager to learn—and my expectations were greatly exceeded.<span class="!font-[500]"> I completed this program by Timechain Labs with not only a deeper understanding of blockchain but also with the confidence and skill set to take future challenges in my career.</span>`
  },
  {
    name: "Meet Jain",
    role: "Participant, TSoC 2024",
    img: "/academy/meet.svg",
    linkedin: "https://linkedin.com/in/meet-jain-413015265/",
    x: "https://x.com/Meetjain_100",
    description:
      "My experience with Timechain Labs has been incredibly enriching. Before the Timechain Summer of Code (TSoC), I knew the MERN stack and had a basic understanding of blockchain. Thanks to TSoC,<span class='!font-[500]'> I’ve advanced to an intermediate level in blockchain,</span> learning frameworks like Svelte and NestJS. I'm grateful to the Timechain Labs team for this growth opportunity."
  },
  {
    name: "Rick Chaudhuri",
    role: "Participant, TSoC 2024",
    img: "/academy/rick.svg",
    linkedin: "https://www.linkedin.com/in/rickc29",
    x: "https://x.com/chaudhuririck",
    description:
      "<span class='!font-[500]'>I enhanced my blockchain knowledge and technical skills through hands-on experience with Node.js, SvelteKit, and NestJS.</span> Participating in this Blockchain Program with BSV and Timechain Labs was a pivotal step in my growth as a developer."
  },
  {
    name: "Shivamani Yamana",
    role: "Participant, TSoC 2024",
    img: "/academy/shivamani.svg",
    linkedin: "https://www.linkedin.com/in/shivamaniyamana/",
    x: "https://x.com/nemo_3d",
    description:
      "<span class='!font-[500]'>This was my first blockchain course, and I gained great value from Timechain Labs, covering blockchain program to advanced development.</span> Initially struggling with React, I found SvelteKit and NestJS more approachable. I also gained experience with sCrypt for smart contracts and explored both frontend and backend development."
  },
  {
    name: "Nidhi Bhagat",
    role: "Participant, TSoC 2024",
    img: "/academy/nidhi.svg",
    linkedin: "https://www.linkedin.com/in/nidhi-bhagat01/",
    x: "https://x.com/NidhiBhagat0112",
    description:
      "During TSoC, I delved into blockchain technology and smart contracts. <span class='!font-[500]'>The mentorship and real-world projects were particularly valuable, allowing me to apply theoretical knowledge to practical scenarios.</span>"
  },
  {
    name: "Sudip Mondal",
    role: "Participant, TSoC 2024",
    img: "/academy/sudip.svg",
    linkedin: "https://www.linkedin.com/in/sudip-mondal-455019222/",
    x: "https://x.com/MondalSudip22",
    description:
      "During TSoC, I explored blockchain principles, using satoshis in transactions and deploying contracts. I gained insights into tokens and advanced my skills with NestJS for backend, and SvelteKit for frontend development.<span class='!font-[500]'> This hands-on experience helped me build scalable and responsive applications and enhance my full stack development skills.</span>"
  }
];

    
    const columns = [
      [testimonials[0], testimonials[3]], 
      [testimonials[1], testimonials[4]], 
      [testimonials[2], testimonials[5]], 
    ];
  </script>
 
 <div class="py-20 bg-gray-50 mt-10" style="width: 100vw; height: full; background-image: url('/academy/newbgTesti.svg'); background-repeat: no-repeat; background-size: cover; background-position: center;">
    <div class="flex justify-between h-15 mb-5 ">
        <img src="/academy/greatAchievments.svg" alt="img" style="margin-top:-80px !important">
               <p class="text-center text-4xl lg:text-5xl !font-[500] mb-8 bai-jamjuree-font">
                   Here's what our Students have to say
                </p>
                <img src="/academy/aspiringDevelopers.svg" alt="img" style="margin-top:-20px !important" class="-ml-2">
            </div>
    <div class="max-w-[1440px] m-auto">
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto card-care">
      {#each columns as column}
        <div class="flex flex-col gap-6 w-1/1 ">
          {#each column as testimonial}
            <div class="bg-white p-6 rounded-lg shadow-md border border-gray-300" dangerouslySetInnerHTML={{ __html: testimonial.description }}>
              <p class="text-[#292929] mb-4 text-sm !font-[400] rubik-font">{@html testimonial.description}</p>
              <div class="flex gap-4 mt-4 justify-between items-center">
                <div class="flex items-center mt-4 info-care">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    class="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h3 class="font-semibold text-[16px]">{testimonial.name}</h3>
                    <p class="text-gray-500 text-[12px]">{testimonial.role}</p>
                  </div>
                </div>
                <div class="flex justify-between items-center mt-4 w-[60px]">
                <a
                  href={testimonial.linkedin}
                  class="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/academy/Vector-linkedin.svg"
                    alt="LinkedIn"
                    class="w-6 h-6"
                  />
                </a>
                <a
                  href={testimonial.x}
                  class="text-black hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/academy/x-social.svg" alt="X" class="w-6 h-6" />
                </a>
            </div>  
            </div>
            </div>
          {/each}
        </div>
      {/each}
    </div>
</div>
<div class="flex justify-between h-15 mb-2 mt-5">
    <img src="/academy/impactfulresults.svg" alt="img">
    <img src="/academy/transformation.svg" alt="img">
        </div>
  </div>
  

  <style>
  .card-care > div:nth-child(2) .info-care,
    .card-care > div:nth-child(3) .info-care {
    margin-top: 27px;
    }
    .bai-jamjuree-font {
  font-family: 'Bai Jamjuree', sans-serif !important;
}
.rubik-font {
  font-family: 'Rubik', sans-serif !important;
}
  </style>
  