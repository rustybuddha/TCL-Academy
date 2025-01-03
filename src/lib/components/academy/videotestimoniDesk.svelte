<script>
    let currentIndex = 0;

    const testimonials = [
        {
            img: "/academy/DivyanshuPrasad.svg",
            header: "I was not a developer previously",
            name: "Divyanshu Prasad",
            role: "ex-SDE Intern at Timechain Labs",
            description: "Working with Timechainlabs, I got to know what real development looks like.",
            videoUrl: "https://youtube.com/embed/1YYd34lWRH0"
        },
        {
            img: "/academy/RiteekRakesh.svg",
            header: "Got opportunity to work on real projects.",
            name: "Riteek Rakesh",
            role: "Software Developer at Timechain labs",
            description: "I basically learnt how to write backend APIs for any fullstack applications.",
            videoUrl: "https://youtube.com/embed/0VPPR1PNuXY"
        },
        {
            img: "/academy/RohitRaj-IntroSlideBW.svg",
            header: "I gained valuable knowledge in blockchain development.",
            name: "Rohit Raj",
            role: "Contributor at TSoC 2024",
            description: "In this program, I have gained invaluable knowledge about blockchain development",
            videoUrl: "https://www.youtube.com/embed/ZvNImiHJe2I"
        },
        {
            img: "/academy/AditiRaj-IntroSlide.svg",
            header: "Got opportunity to work on real projects.",
            name: "Aditi Raj",
            role: "Contributor at TSoC 2024",
            description: "The program has helped me to learn about blockchain technology and also to grow personally",
            videoUrl: "https://www.youtube.com/embed/-AwWuS-hor0"
        },
    ];

    function next() {
        if (currentIndex < testimonials.length - 2) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
    }

    function prev() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = testimonials.length - 2;
        }
    }

    const getVideoUrl = (url) => {
        if (url.includes('youtube.com') || url.includes('youtube')) {
            return `${url}?autoplay=1&mute=1`;
        }
        return url;
    };

    let hoveredIndex = -1;
</script>

<div class="flex w-full justify-center items-center">
    <div class="carousel relative">
        <div class="carousel-box flex transition-transform ease-in-out duration-300"
            style="transform: translateX(-{currentIndex * 50}%)">
            {#each testimonials as testimonial, index}
                <div class="carousel-item sm:w-1/2 flex-shrink-0 relative justify-center items-center">
                    <div style="max-width:630px;" class="bg-white hidden sm:flex border rounded-lg flex-col card-care sm:flex-row gap-4 sm:gap-6 text-sm sm:text-base cursor-pointer">
                        <div class="text-white overflow-hidden w-full text-[#3A62BB] h-[400px] rounded-t-[8px] sm:!rounded-l-[8px] sm:!rounded-t-[0px] relative"
                            on:mouseover={() => hoveredIndex = index}
                            on:mouseout={() => hoveredIndex = -1}>
                            {#if hoveredIndex === index}
                                <iframe class="w-full h-[400px] sm:block md:h-[300px] lg:h-[320px] xl:h-[410px] sm:rounded-l-[8px] vid-care"
                                    src={getVideoUrl(testimonial.videoUrl)} title="Video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            {:else}
                                <img src={testimonial.img} alt={testimonial.name} class="h-[400px] sm:block md:h-[300px] lg:h-[320px] xl:h-[410px] sm:rounded-l-[8px] img-care">
                                <img src="/academy/play-circle-02.svg" alt="Play"
                                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style="width:50px; height:50px;">
                            {/if}
                        </div>
                        <div class="flex flex-col justify-between px-2">
                            <p class="text-green-500 text-2xl font-bold quote mt-5">
                                <img src="/academy/card-quote.svg" alt="quote" style="height: 50px; width:50px;">
                            </p>
                            <p class="text-[#333333] mt-2 text-xl sm:text-2xl text lg:text-3xl !font-[400] rubik-font italic">
                                {testimonial.description}
                            </p>
                            <div class="mt-4 mb-6 flex justify-between items-center">
                                <div>
                                    <p class="font-[400] rubik-font">{testimonial.name}</p>
                                    <p class="text-xs font-[400] text-[#5C5C5C] rubik-font">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <button class="text-[#3A62BB] button prev absolute -left-[0px] top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50  px-4 py-2"
            on:click={prev}>
            ❮
        </button>

        <button class="text-[#3A62BB] button next absolute -right-[0px] top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50  px-4 py-2"
            on:click={next} >
            ❯
        </button>
        
    </div>
</div>

<style>
.carousel {
    position: relative;
    width: 100%;
    max-width: 1340px;
    margin: auto;
    overflow: hidden;
    z-index: 9;
}

.carousel-box {
    display: flex;
    transition: transform 0.3s ease;
}

.carousel-item {
    width: 50%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: filter 0.3s ease;
}

.carousel-item img, .carousel-item iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
}

.button {
    background: rgb(255, 255, 255);
    border: 1px solid #B7BDC6;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
}


@media (max-width: 640px) {
    .carousel-item {
        width: 100%;
    }

    .prev, .next {
        left: 10px;
        right: 10px;
    }
}
</style>
