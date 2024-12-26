<script>
  let openIndex = 0;

  function toggleFAQ(index) {
    openIndex = openIndex === index ? null : index;
  }
  const faqs = [
    { question: "What is Blockchain Mastery Program?", answer: "Blockchain Mastery program is designed to take beginners and non-technical students from zero experience to blockchain mastery in just six weeks. Led by blockchain expert Rohan Sharan, the program offers hands-on learning, real-world projects, and a pathway to build a strong blockchain development portfolio." },
    { question: "What are the prerequisites for enrolling in the Program?", answer: "No, there is no selection criteria. Since this is a beginner-friendly program, you need no prior knowledge. Even if you don’t know any development, the fullstack development lectures are covered in this program. The mentor will train you in the fundamentals of blockchain and help you navigate the hands-on coding sessions. Many resources will be shared to fortify your basic development skills. A good internet connection and a computer system are a plus for a smooth journey throughout this program." },
    { question: "Where will the classes be hosted?", answer: "Yes, the program is fully virtual. All the lectures will be scheduled. During the live class, the mentor will be available full-time on chat, and after the class, there will be separate doubt clearing sessions to solve students' doubts and queries. Assignments and projects would have to be done within the stipulated time to complete the program as a cohort." },
    { question: "What is the Program’s Validity?", answer: "The program will run for 3 months including LIVE classes and project completion. You will complete all the workshops and projects during this time." },
    { question: "What projects will I be working on during the program?", answer: "We have a wide range of projects from beginner, intermediate, to advanced level. These projects are designed to hone your development skills and build a portfolio of projects that you can showcase as your own, with mastery." },
    { question: "How much time in a day do I need to give?", answer: "The LIVE classes will be scheduled at a fixed time of 3 hours on Saturdays & Sundays. There isn’t any fixed time schedule to work on the projects. You can dedicate as much time to solving bugs, adding new features, and developing the projects." },
    { question: "How can I buy the Blockchain Mastery Program?", answer: "Click on the REGISTER button. You will be redirected to the checkout page, then complete the payment. After successful payment, you will be redirected to the confirmation page where you have to click on the confirm payment button." },
    { question: "What if I need help?", answer: "With the program, you will also get access to a members-only community server where you will collaborate with your fellow participants and join teams to work on the many projects. If you get stuck or don't understand a specific part of a lesson, you can share your problem to get help." },
    { question: "What is the refund policy?", answer: "The payment made is refundable until before your cohort begins. We are committed to providing a great experience. Reach out to our customer support if you have any queries." },
    { question: "Will I receive a certificate of completion for successfully completing the program?", answer: "Yes, you will receive a certificate of completion, that you can showcase in your resume or add to your LinkedIn profile. After the final submission of the project, you will be granted a Skilled Blockchain Developer certificate by Timechain Labs and offered opportunities to pursue your career with various companies in the ecosystem." },
    { question: "Who is the instructor and does the program fulfill internship requirements?", answer: "There are 6 instructors for the Blockchain Mastery Program with the chief instructor being Rohan Sharan, Founder & CEO Timechain Labs. Through the program, you will receive full internship training for working on real-world projects. A certificate of internship will be provided for successfully completing the program." }
  ];

  let showMore = false;

  let displayedFaqs = showMore ? faqs : faqs.slice(0, 6);

  function toggleShowMore() {
    showMore = !showMore;
    displayedFaqs = showMore ? faqs : faqs.slice(0, 6);
  }
</script>

<div class="max-w-[1200px] mx-auto mt-12 mb-16 px-2 sm:p-4">
  <h2 class="text-3xl max-[360px]:text-xl max-[425px]:text-2xl md:text-5xl font-[500] text-center mb-2 font-['Bai Jamjuree']">
    Frequently Asked Questions
  </h2>
  <p class="text-center text-sm md:text-[20px] font-[300] font-['Rubik'] text-[#5C5C5C] mb-6" style="margin-top: 20px;">
    Have other questions? Get in touch with our team via
    <a href="mailto:support@timechainlabs.io" class="text-[#333333] underline">support@timechainlabs.io</a>
  </p>

  <div class="p-6 pt-4">
    {#each displayedFaqs as faq, index}
      <div on:click={() => toggleFAQ(index)} class="faq-item py-2 {openIndex === index ? 'mb-4' : ''}" style="margin-top:20px">
        <button class="flex justify-between items-center w-full px-3 py-4 text-left focus:outline-none">
          <span class="text-lg lg:text-xl font-[500] font-['Bai Jamjuree'] text-[#292929] pr-5" style="line-height: 20px;">
            <h3>{faq.question}</h3>
          </span>
          <span class="transform transition-transform duration-300" class:rotate-45={openIndex === index}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </button>
        {#if openIndex === index}
          <div class="px-3 py-4 text-[#5C5C5C] text-sm md:text-[16px] !font-['Rubik'] font-[400]" style="line-height: 26px;">
            {faq.answer}
          </div>
        {/if}
      </div>
    {/each}

    <div class="w-full flex justify-center items-center mt-5">
      <button on:click={toggleShowMore}
        class="w-[128px] font-['Rubik'] bg-white text-black px-6 py-2 rounded-[.25rem] border border-black hover:bg-gray-50 transition-colors duration-200 shadow-[.1875rem_.375rem_0rem_#000000] shiny-glow">
        {showMore ? 'View less' : 'View more'}
      </button>
    </div>
  </div>
</div>

<style>
  .faq-item {
    margin-bottom: 0;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    margin-top: 10px;
    max-width: 848px !important;
    margin: auto;
  }
  
  nav {
    transition: transform 0.3s ease-in-out;
  }

  .shiny-glow {
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.shiny-glow::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 25px; 
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.182), rgb(174, 174, 174), rgba(255, 255, 255, 0.084));
  z-index: -1;
  transition: all 0.5s ease-in-out;
  transform: rotate(5deg);
  opacity: 0.6;
  filter: blur(15px); 
}

.shiny-glow:hover::before {
  left: 110%;
}

</style>
