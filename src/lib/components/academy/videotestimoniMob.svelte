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


    let showVideoIndex = -1;
    let touchStartX = 0;
    let touchEndX = 0;

    function next() {
        if (currentIndex < testimonials.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
    }

    function prev() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = testimonials.length - 1;
        }
    }

    const getVideoUrl = (url) => {
        if (url.includes('youtube.com') || url.includes('youtube')) {
            return `${url}?autoplay=1&mute=1`;
        }
        return url;
    };
    
    const toggleVideo = (index) => {
        showVideoIndex = showVideoIndex === index ? -1 : index;
        if (showVideoIndex !== -1) {
            currentIndex = index;
        }
    };

    const handleTouchStart = (e) => {
        touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            next();
        }
        if (touchStartX - touchEndX < -50) {
            prev();
        }
    };
</script>

<div class="flex w-full justify-center items-center">
    <div class="carousel relative" 
        on:touchstart={handleTouchStart} 
        on:touchend={handleTouchEnd}>
        <div class="carousel-box flex transition-transform ease-in-out duration-300"
            style="transform: translateX(-{currentIndex * 100}%)">
            {#each testimonials as testimonial, index}
                <div class={`carousel-item w-full flex-shrink-0 relative justify-center items-center ${index !== currentIndex ? 'blur' : ''}`}>
                    <div class="bg-white flex border rounded-lg w-full xl:h-[350px] flex-col card-care gap-4 text-sm sm:text-base cursor-pointer">
                        <div class="text-white overflow-hidden w-full rounded-t-[8px] relative"
                            on:click={() => toggleVideo(index)}>

                            {#if showVideoIndex === index}
                                <iframe 
                                    class="w-full h-full sm:block md:h-[350px] lg:h-[350px] xl:h-[350px] sm:rounded-l-[8px] vid-care" 
                                    src={getVideoUrl(testimonial.videoUrl)} 
                                    title="Video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen
                                ></iframe>
                            {:else}
                                <img src={testimonial.img} alt={testimonial.name} class="testimonial-img w-full h-full object-cover !rounded-t-[8px] img-care">
                                <img src="/academy/play-circle-02.svg" alt="Play" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style="height: 50px; width:50px;">
                            {/if}

                        </div>

                        <div class="flex flex-col justify-between px-2 -mt-1">
                          <div class="mb-2 flex justify-between items-center">
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

        <div class="pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {#each testimonials as _, index}
                <button class="w-2.5 h-2.5 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 focus:outline-none"
                    class:active={index === currentIndex} on:click={() => (currentIndex = index)}></button>
            {/each}
        </div>

        <button class="text-[#3A62BB] button prev absolute left-[100px] top-[100%] transform -translate-y-1/2 bg-black bg-opacity-50  px-4 py-2"
        on:click={prev}>
        ❮
    </button>

    <button class="text-[#3A62BB] button next absolute right-[100px] top-[100%] transform -translate-y-1/2 bg-black bg-opacity-50  px-4 py-2"
        on:click={next} >
        ❯
    </button>
    </div>
</div>

<style>
.carousel {
    position: relative;
    width: 100%;
    max-width: 323px; 
    margin: auto;
    overflow: visible;
    padding-bottom: 120px;
}

.carousel-box {
    display: flex;
    transition: transform 0.3s ease;
}

.carousel-item {
    width: 100%; 
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: filter 0.3s ease;
}

.carousel-item.blur {
    filter: blur(5px);
}

.carousel-item img  {
    width: 100%; 
    height: 100%; 
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
    border-top-right-radius:8px !important ;
}
.carousel-item iframe{
    width: 100%; 
    height: 570px; 
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
    scale: 10px;
}

.testimonial-img {
    width: 100%; 
    height: 100%; 
    object-fit: cover;
}

.button {
    background: rgb(255, 255, 255);
    border: 1px solid #B7BDC6;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 90%;
}

.pagination button.active {
    background-color: white;
}

@media (max-width: 640px) {
    .carousel-item {
        width: 100%; 
    }
}
</style>
