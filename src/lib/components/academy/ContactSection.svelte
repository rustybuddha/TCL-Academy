<script>
    import { z } from "zod";
    import {toast,Toaster} from "svelte-french-toast";
  
    let showModal = false;
  
    const formSchema = z.object({
      fullName: z.string().min(1, "Full Name is required"),
      email: z.string().email("Invalid email address"),
      phone: z.string().min(1,"Phone Number is Required"),
      message: z.string().optional(),
      agreement: z.boolean().refine(val => val === true, "You must accept the agreement"),
    });

    const handleSubmit = (event) => {
      event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
        fullName: formData.get("full-name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
        agreement: formData.get("agreement") === "on",
      };
  
      const result = formSchema.safeParse(data);

      if (!result.success) {
        result.error.errors.forEach(err => toast.error(err.message));
      } else {
        toast.success("Form submitted successfully!");
        showModal = true;
      }
    };
  
    const closeModal = () => {
      showModal = false;
    };
  </script>

<Toaster/>
  <!-- Mobile View -->
  <div class="sm:hidden mx-auto bg-cover bg-center justify-center p-8 flex flex-col" style="background-image: url('/academy/contact-mobile-1.svg');">
    <div class="mx-auto mt-12">
      <img class="mx-auto" src="/academy/contact-mobile-2.svg" alt="">
    </div>
    <div>
      <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md mb-12 mt-6 mx-auto">
        <form on:submit={handleSubmit}>
          <!-- Full Name Input -->
          <div class="mb-4">
            <input type="text" id="full-name" name="full-name" placeholder="Full Name" class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>
          <!-- Email Address Input -->
          <div class="mb-4">
            <input type="email" id="email" name="email" placeholder="Email Address" class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>
          <!-- Phone Number Input -->
          <div class="mb-4">
            <div class="flex">
              <select class="px-2 py-2 bg-gray-100 border border-gray-300 rounded-l-md focus:outline-none">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input type="tel" id="phone" name="phone" placeholder="000-000-0000" class="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
          </div>
          <!-- Message Textarea -->
          <div class="mb-4">
            <textarea id="message" name="message" rows="4" placeholder="Message" class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <!-- Checkbox Agreement -->
          <div class="flex items-start mb-4">
            <input type="checkbox" id="agreement" name="agreement" class="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required>
            <label for="agreement" class="ml-2 text-sm text-gray-600">
              I have read and agreed to Timechain <a href="/" class="text-blue-600 underline">Privacy Policy</a> and agree to receive communications
            </label>
          </div>
          <!-- Submit Button -->
          <button type="submit" class="w-full px-4 py-2 text-white bg-[#093baa] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  
  <!-- Desktop View -->
  <div class="hidden sm:flex max-w-[1440px] mx-auto bg-cover bg-center justify-center p-16" style="background-image: url('/academy/contact-section-1.svg');">
    <div class="w-1/2 mx-auto pr-6 pt-8 pl-8">
      <h1 class="text-3xl font-bold text-gray-800">Let’s have a Conversation!<br>We’re here to help.</h1>
      <p class="mt-4 text-lg text-gray-600">
        Tell us more about what you’re looking for. Our team is dedicated to finding the best way to support your needs, 
        and one of our experts will be in touch with you shortly to discuss how we can assist.
      </p>
    </div>
    <div class="w-1/2 pl-6 pt-6">
      <div class="w-full max-w-lg p-6 bg-white rounded-lg shadow-md mb-12 mt-4 mx-auto border border-grey-400">
        <form on:submit={handleSubmit}>
          <!-- Full Name Input -->
          <div class="mb-4">
            <input type="text" id="full-name" name="full-name" placeholder="Full Name" class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>
          <!-- Email Address Input -->
          <div class="mb-4">
            <input type="email" id="email" name="email" placeholder="Email Address" class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>
          <!-- Phone Number Input -->
          <div class="mb-4">
            <div class="flex">
              <select class="px-2 py-2 bg-gray-100 border border-gray-300 rounded-l-md focus:outline-none">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input type="tel" id="phone" name="phone" placeholder="000-000-0000" class="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
          </div>
          <!-- Message Textarea -->
          <div class="mb-4">
            <textarea id="message" name="message" rows="4" placeholder="Message" class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <!-- Checkbox Agreement -->
          <div class="flex items-start mb-4">
            <input type="checkbox" id="agreement" name="agreement" class="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required>
            <label for="agreement" class="ml-2 text-sm text-gray-600">
              I have read and agreed to Timechain <a href="/" class="text-blue-600 underline">Privacy Policy</a> and agree to receive communications
            </label>
          </div>
          <!-- Submit Button -->
          <button type="submit" class="w-full px-4 py-2 text-white bg-[#093baa] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  
  <!-- Success Modal -->
  {#if showModal}
  <div class="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 px-4 sm:px-8">
    <div class="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-md">
      <button class="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none" on:click={closeModal}>&times;</button>
      <h2 class="text-xl font-bold mb-4 text-center">Thank You for Reaching Out!</h2>
      <p class="text-gray-600 mb-6 text-center">Your message has been received, a member of the team will be in touch with you shortly. </p>
      <button
      on:click={closeModal}
      class="w-full px-4 py-3 text-white bg-[#093baa] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#111] hover:bg-[#1f3569] shadow-[3px_6px_0px_#000000] transition-all ease-in duration-500"
  >
      Done
  </button>    </div>
  </div>
  {/if}
  