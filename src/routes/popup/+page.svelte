<script>
    import { onMount } from 'svelte';
    import Button from '$lib/components/button.svelte';
    export let data;
    // const { blogs } = data;
    // const { form, enhance, errors, message, delayed } = superForm(data.form);
  
    let showPopup = true;
    import { superForm } from "sveltekit-superforms/client";
    onMount(() => {
      setTimeout(() => {
        showPopup = false;
      }, 500000);
    });
  </script>
<div class="flex mt-20 py-[40px] items-center justify-center w-[900px]">
    {#if showPopup}
    <div class=" justify-center px-12 items-center text-white h-[520px]">
        <div
        class="px-[32px] py-[40px] rounded-xl bg-[#093BAA] h-[284px] grid grid-cols-1 laptop:grid-cols-2 gap-[90px] max-[1200px]:gap-[70px] max-[700px]:gap-[45px] max-[360px]:gap-[24px]"
        id="consultation"
        >
        <!-- FORM INFO -->
        <div class="h-[284px]">
            <h1
            class="text-[40px] text-white my-[8px] font-[500] leading-[41px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] max-[900px]:text-[26px] max-[360px]:text-[20px]"
            >
            Ready to take the <br> <span class="text-secondary">next step?</span>
            </h1>
            <p
            class="text-white text-[14px] mb-[20px] max-[360px]:mb-[10px] max-[900px]:text-[16px] max-[360px]:text-[12px] font-[300]"
            >
            Are you seeking expert guidance tailored to your specific needs? Look no further! Our seasoned consultation expert is here to offer you personalized advice and support.
            </p>
        </div>
    
        <!-- FORM -->
        <div class="">
            <div class="rounded-[20px]">
            <form
                action="?/consultRequest"
                method="POST"
                novalidate
                class="shadow-2xl p-[20px] w-full flex flex-col h-[420px] w-[400px] rounded-[10px] bg-white text-black"
            >
                <div class="flex-1 flex flex-col mb-5">
                <input
                    name="senderName"
                    id="senderName"
                    placeholder="Full Name"
                    class="rounded-[6px] py-3 px-2"
    
                    required
                    style="border: 1px solid rgba(0, 0, 0, 0.1);"
                />
                
                </div>
    
                <div class="flex-1 flex flex-col mb-5">
                <input
                    name="senderEmail"
                    id="senderEmail"
                    placeholder="Business Email"
                    class="rounded-[6px] py-3 px-2"
                    type="email"
                    required
                    style="border: 1px solid rgba(0, 0, 0, 0.1);"
                />
                
                </div>
                <div class="flex-1 flex flex-col mb-5">
                <input
                    name="senderCompanyName"
                    id="senderCompanyName"
                    placeholder="000-000-0000"
                    class="rounded-[6px] py-3 px-2"
                    type="number"
                    required
                    style="border: 1px solid rgba(0, 0, 0, 0.1);"
                />
                
                </div>
    
                <div class="flex-1 flex flex-col mb-5">
                <textarea
                    name="senderDescription"
                    placeholder="Note"
                    id="senderDescription"
                    class=" rounded-[6px] p-2 h-32 resize-none"
                    required
                    style="border: 1px solid rgba(0, 0, 0, 0.1);"
                />
                
                </div>
                 <button class="text-white h-[46px] bg-[#093BAA] w-full mx-2 rounded-md">Submit</button>   
                <!-- <Button text="Send Request" htmlType="submit" /> -->
            </form>
            </div>
        </div>
        </div>
    
        <div class="grid grid-cols-1 laptop:grid-cols-2 gap-[90px] max-[1200px]:gap-[70px] max-[700px]:gap-[45px] max-[360px]:gap-[24px]" id="development">
        <!-- <div class="laptop:order-1 order-2">
            <img src="../../code-screen.png " alt="" />
        </div> -->
        <div class=" text-[#A1A9AE] laptop:order-3 order-1">
            <h1
            class="text-[32px] font-[500] text-[#33444F] mt-[40px] mb-[20px] leading-[41px] max-[500px]:leading-[32px] max-[360px]:leading-[28px] max-[900px]:text-[26px] max-[360px]:text-[20px]"
            >
            Our Products
            </h1>
            <div
            class="grid grid-cols-3 gap-[20px] max-[550px]:grid-cols-1 max-[550px]:gap-[4px] mb-[20px] tablet:mb-[40px]"
            >
            <div
                class="flex items-center gap-[4px] pb-[20px]"
            >
                <div><img src="../../ui2.svg" alt="" class="" /></div>
                <div class="text-[#A1A9AE] max-[360px]:text-[16px] font-[500]">
                NEUCRON
                </div>
            </div>
    
            <div
                class="flex items-center gap-[4px] pb-[20px] "
            >
                <div><img src="../../api2.svg" alt="" class="" /></div>
                <div class="text-[#A1A9AE] text-[16px] font-[500]">
                assetyzer
                </div>
            </div>
            <div
                class="flex items-center gap-[4px] pb-[20px] "
            >
                <div><img src="../../api3.svg" alt="" class="" /></div>
                <div class="text-[#A1A9AE] text-[20px] font-[500]">
                Dhara
                </div>
            </div>
        
        <div
            class="flex items-center gap-[4px] pb-[20px] "
        >
            <div>
            <img src="../../system2.svg" alt="" class="h-[26px] w-[26px]" />
            </div>
            <div class="text-[#A1A9AE] text-[16px] font-[500] font-[300]">
                Manthan
            </div>
        </div>
        <div class="flex items-center gap-[4px] pb-[20px] ">
            <div>
            <img src="../../system3.svg" alt="" class="" />
            </div>
            <!-- <div class="text-[#A1A9AE] text-[16px] font-[500] font-[300]">
                Ganak
            </div> -->
        </div>
            </div>
            <!-- <Button
            href="/contact"
            iconColor="#0EDDBA"
            iconHoverColor="#093BAA"
            className=" text-secondary border-secondary border-2 hover:text-primary hover:bg-secondary"
            text="Contact Us"
            outlined={true}
            /> -->
        </div>
        <!-- <div>hkjjk</div> -->
        </div>
    </div>
    {/if}
</div>
<!-- <style>
    .buttonblue{
        display: flex;
    width: 360px;
    height: 46px;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    }
</style> -->