<script>
    // Track the currently open FAQ item index
    let openIndex = null;
  
    // Toggle FAQ item open/closed and ensure only one is open at a time
    function toggleFAQ(index) {
      openIndex = openIndex === index ? null : index;
    }
  
    // Array of FAQ questions and answers
    const faqs = [
      {
        question: "What is the Timechain Academy?",
        answer: "Timechain Academy is a bootcamp designed to take beginners and non-technical students from zero experience to blockchain mastery in just six weeks. Led by blockchain expert Rohan Sharan, the academy offers hands-on learning, real-world projects, and a pathway to build a strong blockchain development portfolio."
      },
      {
        question: "What are the prerequisites for enrolling in Timechain Academy?",
        answer: "Since this is a beginner-friendly program, you need no prior knowledge. The mentor will train you in the fundamentals of blockchain and help you navigate the hands-on coding sessions. Many resources will be shared to fortify your basic development skills. A good internet connection and a computer system are a plus for a smooth journey throughout this bootcamp."
      },
      {
        question: "Where will the classes be hosted?",
        answer: "All the classes in the bootcamp will be scheduled Live on YouTube. During the live class, the mentor will be available full-time on chat, and after the class, he will be available to solve students' doubts and queries."
      },
      {
        question: "What is the course validity?",
        answer: "The bootcamp will run for 3 months including LIVE classes and project completion. During this time you can complete all the workshops and projects. After the final submission of the project, you will get certified as a Full Stack Developer by Timechain Labs."
      },
      {
        question: "What projects will I be working on during the bootcamp?",
        answer: "We have a wide range of projects from beginner, intermediate, to advanced level. These projects are designed to test your development skills and implement your knowledge in a real-world application."
      },
      {
        question: "How much time in a day do I need to give, for the Blockchain Pro course?",
        answer: "The LIVE classes will be scheduled at a fixed time. There isn’t any fixed time schedule to work on the projects. You can dedicate as much time to solving bugs, adding new features, and developing blockchain projects."
      },
      {
        question: "How can I buy the Blockchain Pro course?",
        answer: "Buying the course is very simple. All you have to do is click on the REGISTER button, you will be redirected to the checkout page, then complete the purchase, after the successful payment, you will be redirected to the confirmation page where you have to click on the confirm payment button."
      },
      {
        question: "What if I need help?",
        answer: "With the course, you will also get access to a members-only Discord server. If you get stuck or don't understand a specific part of a lesson, you can share your problem to get help."
      },
      {
        question: "What is the refund policy for the Blockchain Pro Course?",
        answer: "The Blockchain Pro is a non-refundable program. We are committed to providing a great experience. Reach out to our customer support if you have any queries."
      },
      {
        question: "Will I receive a certificate of completion after finishing the course?",
        answer: "Yes, you will receive a certificate of completion, that you can showcase in your resume or add to your LinkedIn profile."
      },
      // Add more FAQ items here as needed
    ];
  </script>
  
  <div class="max-w-[1200px] mx-auto mt-12 mb-16 p-4">
    <h2 class="text-2xl font-extrabold text-center mb-2">Frequently Asked Questions</h2>
    <p class="text-center text-gray-500 mb-6">
      Have other questions? Get in touch with our team via
      <a href="mailto:support@timechainlabs.io" class="text-black-500 underline">support@timechainlabs.io</a>
    </p>
  
    <div class= "p-6 pt-4 ">
      {#each faqs as faq, index}
        <div class="faq-item {openIndex === index ? 'mb-4' : ''}">
          <button
            on:click={() => toggleFAQ(index)}
            class="flex justify-between items-center w-full px-3 py-4 text-left focus:outline-none"
          >
            <span class="text-lg font-semibold text-gray-900"><h3>{faq.question}</h3></span>
            <span
              class="transform transition-transform duration-300"
              class:rotate-45={openIndex === index}
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          {#if openIndex === index}
            <div class="px-3 py-4 text-gray-500 text-base">
              {faq.answer}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .faq-item {
      /* Removes any extra margin when an FAQ is closed */
      margin-bottom: 0;
      border: 1px solid #e5e7eb;
      border-radius:8px ;
      margin-top: 10px;
    }
  
  </style>
  