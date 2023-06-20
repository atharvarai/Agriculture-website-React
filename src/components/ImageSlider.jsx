import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {
  const slides = [
    {
      url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/two-blue-customer-testimonial-feedback-review-design-template-6d041a002a741c0f1e8835f4d2a1c618_screen.jpg?ts=1617977288',
      title: 'Review1',
    },
    {
      url: 'https://t4.ftcdn.net/jpg/04/37/67/15/360_F_437671532_4zOYp2UhNtZoZVyXf3TazFQS84o5wtaq.jpg',
      title: 'Review2',
    },
    {
      url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-customer-testimonial-feedback-review-g-design-template-0dab5371bd9fece8527b96a2b2143ddc_screen.jpg?ts=1617977121',
      title: 'Review3',
    },
    {
      url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-client-testimonial-review-design-template-7cef8b3ae9aebeb92cb86c70d21c8c32_screen.jpg?ts=1646740772',
      title: 'Review4',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[800px] w-[780px] m-auto py-16 px-4 relative group'>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            className='text-2xl cursor-pointer'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
