import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Import any additional styles if needed

const AutoReviewSlider= () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const reviews = [
        {
            id: 1,
            name: 'Alice Johnson',
            initials: 'A',
            color: 'bg-blue-500',
            review: '“This place was absolutely amazing! I loved every part of the experience and will definitely visit again.”',
            rating: 5
        },
        {
            id: 2,
            name: 'Bob Smith',
            initials: 'B',
            color: 'bg-green-500',
            review: '“Great place to visit with family! Loved the attractions and the scenery. Highly recommend.”',
            rating: 4
        },
        {
            id: 3,
            name: 'Charlie Davis',
            initials: 'C',
            color: 'bg-red-500',
            review: '“The tour was fantastic! Everything was organized perfectly. A must-visit!”',
            rating: 5
        }
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 3000);

        return () => clearInterval(slideInterval);
    }, [reviews.length]);

    useEffect(() => {
        const updateSlider = () => {
            const slider = sliderRef.current;
            const slideWidth = slider.children[0].offsetWidth;
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        };

        updateSlider();
        window.addEventListener('resize', updateSlider);
        return () => window.removeEventListener('resize', updateSlider);
    }, [currentIndex]);

    return (
        <div className="w-full max-w-lg mx-auto relative">
            <div className="absolute inset-0 background-image opacity-30"></div> 
            <div className="relative z-10 overflow-hidden bg-white rounded-lg shadow-lg">
                <div id="slider" ref={sliderRef} className="flex transition-transform duration-500">
                    {reviews.map((review) => (
                        <div key={review.id} className="p-6 w-full flex-none">
                            <div className="flex items-center mb-3">
                                <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-semibold`}>
                                    {review.initials}
                                </div>
                                <h3 className="ml-3 text-lg font-semibold">{review.name}</h3>
                            </div>
                            <p className="text-gray-700 mb-3">{review.review}</p>
                            <div className="flex items-center text-yellow-400">
                                <span>{'⭐'.repeat(review.rating)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AutoReviewSlider;
