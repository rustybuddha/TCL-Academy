<script>
  const privacyPolicyContent = [
    {
      id: "description",
      content: `This privacy policy (“Policy”) relates to the manner TIMECHAIN LABS PRIVATE LIMITED (“we”, “us”, “our”) in which we use, handle and process the data that you provide us in connection with using the products or services we offer. By using this website or by availing goods or services offered by us, you agree to the terms and conditions of this Policy, and consent to our use, storage, disclosure, and transfer of your information or data in the manner described in this Policy.`,
    },
    {
      id: "description",
      content: `We are committed to ensuring that your privacy is protected in accordance with applicable laws and regulations. We urge you to acquaint yourself with this Policy to familiarize yourself with the manner in which your data is being handled by us.`,
    },
    {
      id: "description",
      content: `TIMECHAIN LABS PRIVATE LIMITED may change this Policy periodically and we urge you to check this page for the latest version of the Policy in order to keep yourself updated.`,
    },

    {
      id: "dataCollection",
      heading: "What data is being collected?",
      content:
        "We may collect various pieces of information from you, including your name, contact details such as address and email address, demographic information, preferences, or interests, as well as any other personal data or relevant information necessary for providing goods or services to you. It's important to note that the definition of Personal Data will align with relevant Indian laws. However, it's crucial to emphasize that we will not store any credit card, debit card, or similar card data as per applicable Indian Laws. Rest assured, all data and information collected from you will strictly adhere to applicable laws and guidelines.",
    },
    {
      id: "dataUsage",
      heading: "What we do with the data we gather?",
      content:
        "We collect this data to facilitate the provision of goods or services offered by us, encompassing the following purposes: internal record keeping, product or service enhancement, updates dissemination including special offers, communication with you, as well as for internal training and quality assurance objectives.",
    },
    {
      id: "dataSharing",
      heading: "Who do we share your data with?",
      content:
        "We may share your information or data with third parties, including our service providers, to facilitate the provision of goods or services to you, fulfill your requests, respond to queries, process orders, or for other operational and business purposes. Additionally, we may share information with our group companies as deemed relevant. However, it's important to note that as per applicable Indian laws, we will not share your information with our auditors or advisors beyond what is necessary for them to perform their services. Furthermore, disclosure may be made to governmental bodies, regulatory authorities, or law enforcement agencies as required by our legal obligations or compliance requirements.",
    },
    {
      id: "cookieUsage",
      heading: "How we use cookies?",
      content:
        'We use "cookies" to collect information and to better understand customer behavior. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to avail our goods or services to the full extent. We do not control the use of cookies by third parties. The third-party service providers have their own privacy policies addressing how they use such information.',
    },
    {
      id: "dataRights",
      heading: "Your rights relating to your data",
      content:
        "You have the right to review the data provided by you and can request us to correct or amend such data to the extent feasible, as determined by us. However, it's important to note that we will not be responsible for the authenticity of the data or information provided by you. Additionally, you have the option to withdraw your consent at any time while availing our goods or services, or otherwise by providing written notice to our email ID: rohan@timechainlabs.io. If you choose not to provide or later withdraw your consent, please be aware that we may not be able to provide you with our services or goods. It's crucial to understand that these rights are subject to our compliance with applicable laws.",
    },
    {
      id: "dataRetention",
      heading: "How long will we retain your information or data?",
      content:
        "We may retain your information or data (i) for as long as we are providing goods and services to you; and (ii) as permitted under applicable law, we may also retain your data or information even after you terminate the business relationship with us. However, we will process such information or data in accordance with applicable laws and this Policy.",
    },
    {
      id: "dataSecurity",
      heading: "Data Security",
      content:
        "We will use commercially reasonable and legally required precautions to preserve the integrity and security of your information and data.",
    },
    {
      id: "queriesOfficer",
      heading: "Queries/ Grievance Officer",
      content:
        "For any queries, questions or grievances about this Policy, please contact us using the contact information provided on this website.",
    },
  ];
</script>

<div class="w-[1440px] max-[1440px]:w-screen bg-[#FCFCFC]">
  <section
    class="desktop:px-[100px] laptop:px-[60px] mbl-lg:px-[40px] mbl-sm:px-[25px] px-[16px] laptop:py-[60px] tablet:py-[40px] py-[20px] grid grid-cols-1 laptop:grid-cols-4 place-content-start gap-[70px] w-full"
  >
    <div class="hidden laptop:flex flex-col gap-[9px] h-full bg-[#FFFFFF]">
      <h2
        class="font-[600] leading-[22.4px] mbl-lg:leading-[33.3px] text-[16px] mbl-lg:text-[24px] text-blue-gray mb-[12px]"
      >
        Table of Content
      </h2>
      {#each privacyPolicyContent as { heading, id }, index}
        {#if heading}
          <a
            href="#{id}"
            class="text-[18px] leading-[28.8px] font-[300] text-blue-gray flex gap-1"
          >
            <span>{index - 2}.</span>
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
          Privacy Policy
        </h1>
        <p
          class="text-[14px] tablet:text-[20px] font-[400] leading-[22.4px] tablet:leading-[32px] text-blue-gray"
        >
          Last Updated : <span class="text-primary">04-04-2024 10:50:05</span>
        </p>
      </div>

      {#each privacyPolicyContent as { heading, id, content }, index}
        <div {id}>
          {#if heading}
            <h2
              class="font-[600] leading-[22.4px] mbl-lg:leading-[33.3px] text-[16px] mbl-lg:text-[24px] text-blue-gray mb-[12px]"
            >
              {index - 2}. {heading}
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
