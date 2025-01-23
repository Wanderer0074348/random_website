'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const MatrixRain = ({ isHovered }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン".split("");
    const columns = canvas.width / 20;
    const drops = new Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = `rgba(0, 0, 0, ${isHovered ? 0.1 : 0.3})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = isHovered ? '#E95420' : 'rgba(32,84,233,0.6)'; // rgba(32,84,233,0.6)
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isHovered]);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-50"
    />
  );
};

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex justify-center px-4 mt-4 mb-16">
      <div 
        className="w-full max-w-7xl backdrop-blur-sm bg-black/30 rounded-lg border border-ubuntu relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(true)}
      >

        <MatrixRain isHovered={isHovered} />
        <MatrixRain />
        <div className="p-8 relative z-10">
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
