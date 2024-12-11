<script>
  const termsAndConditionsContent = [
    {
      id: "description",
      content: `These Terms and Conditions, along with privacy policy or other terms (“Terms”) constitute a binding agreement by and between TIMECHAIN LABS PRIVATE LIMITED, ( “Website Owner” or “we” or “us” or “our”) and you (“you” or “your”) and relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, “Services”).`,
    },
    {
      id: "description",
      content: `By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time and without assigning any reason. It is your responsibility to periodically review these Terms to stay informed of updates.`,
    },

    {
      heading: "Account Registration and Information Accuracy",
      content:
        "To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account.",
      id: "AccountRegistrationandInformationAccuracy",
    },
    {
      heading: "Disclaimer of Warranty and Liability",
      content:
        "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.",
      id: "DisclaimerofWarrantyandLiability",
    },
    {
      heading: "User Responsibility and Risk",
      content:
        "Your use of our Services and the websiteis solely at your own risk and discretion.. You are required to independently assess and ensure that the Services meet your requirements.",
      id: "UserResponsibilityandRisk",
    },
    {
      heading: "Proprietary Content",
      content:
        "The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents.",
      id: "ProprietaryContent",
    },
    {
      heading: "Unauthorized Use Consequences",
      content:
        "You acknowledge that unauthorized use of the Website or the Services may lead to action against you as per these Terms or applicable laws.",
      id: "UnauthorizedUseConsequences",
    },
    {
      heading: "Payment Obligations",
      content:
        "You agree to pay us the charges associated with availing the Services.",
      id: "PaymentObligations",
    },
    {
      heading: "Compliance with Laws and Terms",
      content:
        "You agree not to use the website and/ or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.",
      id: "CompliancewithLawsandTerms",
    },
    {
      heading: "Third-Party Links",
      content:
        "You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites.",
      id: "Third-PartyLinks",
    },
    {
      heading: "Contractual Agreement",
      content:
        "You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with the us for the Services.",
      id: "ContractualAgreement",
    },
    {
      heading: "Refund Policy",
      content:
        "Services Not Rendered: If you wish to cancel a service before we begin, you may cancel at no charge by notifying us within 24 hours of placing the order. You can expect the refunded amount to be credited to your original mode of payment within 7-10 days.  In case you do not raise a refund claim within the stipulated time, than this would make you ineligible for a refund.",
    },
    {
      heading: "Force Majeure Clause",
      content:
        "Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.",
      id: "ForceMajeureClause",
    },
    {
      heading: "Governing Law",
      content:
        "These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.",
      id: "GoverningLaw",
    },
    {
      heading: "Jurisdiction",
      content:
        "All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Raigarh, Maharashtra",
      id: "Jurisdiction",
    },
    {
      heading: "Communication and Contact",
      content:
        "All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website.",
      id: "CommunicationandContact",
    },
  ];
</script>

<div class="w-[1440px] max-[1440px]:w-screen bg-[#FCFCFC]">
  <section
    class="px-[100px] max-[1200px]:px-[40px] max-[1150px]:px-[30px] max-[800px]:px-[30px] laptop:py-[60px] tablet:py-[40px] py-[20px] grid grid-cols-1 laptop:grid-cols-4 place-content-start gap-[70px] w-full"
  >
    <div class="hidden laptop:flex flex-col gap-[9px] h-full bg-[#FFFFFF]">
      <h2
        class="font-[600] leading-[22.4px] mbl-lg:leading-[33.3px] text-[16px] mbl-lg:text-[24px] text-blue-gray mb-[12px]"
      >
        Table of Content
      </h2>
      {#each termsAndConditionsContent as { heading, id }, index}
        {#if heading}
          <a
            href="#{id}"
            class="text-[18px] leading-[28.8px] font-[300] text-blue-gray flex gap-1"
          >
            <span>{index - 1}.</span>
            {heading}
          </a>
        {/if}
      {/each}
    </div>
    <div
      class="flex flex-col gap-[20px] tablet:gap-[40px] col-span-1 laptop:col-span-3"
    >
      <div>
        <h1
          class="font-[600] text-[24px] tablet:text-[48px] laptop:text-[64px]"
        >
          Terms and Condition
        </h1>
        <p
          class="text-[14px] tablet:text-[20px] font-[400] leading-[22.4px] tablet:leading-[32px] text-blue-gray"
        >
          Last Updated : <span class="text-primary">04-04-2024 10:50:30</span>
        </p>
      </div>

      {#each termsAndConditionsContent as { heading, id, content }, index}
        <div {id}>
          {#if heading}
            <h2
              class="font-[600] leading-[22.4px] mbl-lg:leading-[33.3px] text-[16px] mbl-lg:text-[24px] text-blue-gray mb-[12px]"
            >
              {index - 1}. {heading}
            </h2>
          {/if}
          <p
            class="text-[12px] mbl-lg:text-[20px] leading-[19.2px] mbl-lg:leading-[32px] font-[300]"
          >
            {content}
          </p>
        </div>
      {/each}
    </div>
  </section>
</div>
