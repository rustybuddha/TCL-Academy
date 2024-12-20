<script>
  import axios from "axios";
  let isLoading = false;
  let apiStatus = "";
  let message = "";
  let timer;
  let isCompleted = false;

  const isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

  const getUserIdFromLocalStorage = () => {
    return isBrowser ? localStorage.getItem('phonepe-user_id') : null;
  };

  const userId = getUserIdFromLocalStorage();
  console.log("userId from localStorage: ", userId);

  const dynamicIntervals = [
    { delay: 0, interval: 3000, duration: 30000 },
    { delay: 50000, interval: 6000, duration: 60000 },
    { delay: 110000, interval: 10000, duration: 60000 },
    { delay: 170000, interval: 30000, duration: 60000 },
    { delay: 230000, interval: 60000, duration: 1080000 },
  ];

  const getData = async (userId) => {
    if (isCompleted) return;

    try {
      isLoading = true;
      apiStatus = "PENDING";
      message = "Please wait, loading...";

      const response = await axios.get(
        `https://academy.timechainlabs.io/api/phonepe/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = response.data;

      if (responseData.data.state === "SUCCESS") {
        apiStatus = "SUCCESS";
        message = "Registration Successful!";
        isCompleted = true;
        clearInterval(timer);
      } else if (responseData.data.state === "FAILED") {
        apiStatus = "FAILED";
        message = "Registration Failed. Please try again.";
        isCompleted = true;
        clearInterval(timer);
      }
    } catch (error) {
      console.error("There was a problem with the axios operation:", error);
      apiStatus = "FAILED";
      message = "An error occurred. Please try again later.";
      isCompleted = true;
      clearInterval(timer);
    } finally {
      isLoading = false;
    }
  };

  const startDynamicIntervals = (userId) => {
    dynamicIntervals.forEach(({ delay, interval, duration }) => {
      setTimeout(() => {
        if (isCompleted) return;

        const intervalId = setInterval(() => {
          getData(userId);
        }, interval);

        setTimeout(() => {
          clearInterval(intervalId);
        }, duration);
      }, delay);
    });
  };

  if (userId) {
    getData(userId);
    startDynamicIntervals(userId);
  } else {
    console.log("UserId not found in localStorage");
  }
</script>


<div class="w-full flex justify-center items-center h-[60vh] md:h-[60vh]" style="background-image: url('/academy/register-section-1.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
  <div class="max-w-[700px] px-5 flex justify-center items-center flex-col">
    {#if apiStatus === "PENDING"}
      <div class="loader mb-5" />
      <p class="text-2xl sm:text-3xl font-[600] text-[#333333] text-center">{message}</p>
    {/if}

    {#if apiStatus === "SUCCESS"}
      <img
        class="w-32 md:w-auto rounded-full"
        src="/academy/success.gif"
        alt="checkmark"
      />
      <p class="text-2xl sm:text-5xl font-[600] text-[#333333] text-center">Registration Successful!</p>
      <p class="text-[#5C5C5C] text-lg md:text-xl text-center mt-10">Thank you for signing up! You're all set to join our next cohort. Our team will reach out soon with more details to help you get started. We’re excited to have you on board!</p>
    {/if}

    {#if apiStatus === "FAILED"}
      <p class="text-2xl sm:text-3xl font-[600] text-[#333333] text-center">{message}</p>
    {/if}
  </div>
</div>

<style>
  .loader {
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid #05A987;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
