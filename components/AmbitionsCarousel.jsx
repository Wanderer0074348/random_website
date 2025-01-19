'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const carouselData = [
  {
    title: "Open Source Philosophy",
    description: "We believe in the power of collaborative development and free software. Our commitment to open source drives innovation and creates a more inclusive digital world."
  },
  {
    title: "Community & Learning",
    description: "Building a vibrant community where knowledge flows freely, enabling members to learn, grow, and contribute to the ever-evolving landscape of Linux and open source."
  },
  {
    title: "Technical Excellence",
    description: "Striving for mastery in Linux systems, development practices, and open source technologies while fostering a culture of continuous improvement and innovation."
  }
];

const AmbitionsCarousel = () => {
  return (
    <div className="w-full flex justify-center px-4 mt-4 mb-16">
      <div className="w-full max-w-7xl backdrop-blur-sm bg-black/30 rounded-lg border border-ubuntu">
        <div className="p-8">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active bg-ubuntu',
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full h-[300px] md:h-[400px]"
          >
            {carouselData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center h-full px-4 md:px-20">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ubuntu mb-6 font-mono">
                    {slide.title}
                  </h2>
                  <p className="text-white/80 text-center text-base md:text-xl font-mono leading-relaxed max-w-3xl">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
            
            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev after:!text-ubuntu hover:after:!text-ubuntu/80 transition-colors"></div>
            <div className="swiper-button-next after:!text-ubuntu hover:after:!text-ubuntu/80 transition-colors"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AmbitionsCarousel;
