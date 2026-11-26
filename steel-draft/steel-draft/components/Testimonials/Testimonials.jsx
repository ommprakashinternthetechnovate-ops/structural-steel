'use client';

import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Harsimran Singh',
    role: 'Customer',
    avatarUrl: '',
    initials: 'HS',
    avatarBg: '#374151',
    rating: 5,
    review:
      "Very happy with Harry's customer service and great steel quality and highly recommended.",
  },
  {
    id: 2,
    name: 'Milan Jindia',
    role: 'Customer',
    avatarUrl: '',
    initials: 'M',
    avatarBg: '#8e44ad',
    rating: 5,
    review: 'Great service and competitive pricing',
  },
  {
    id: 3,
    name: 'singh singh',
    role: 'Customer',
    avatarUrl: '',
    initials: 'S',
    avatarBg: '#4a453f',
    rating: 5,
    review:
      'Very professional and helpful staff. I am getting the steel for my builds from them and they have always provided exceptional quality and support. Never had any issues the installation of the steel and their price is unbeatable.',
  },
  {
    id: 4,
    name: 'Rajesh Sharma',
    role: 'Customer',
    avatarUrl: '',
    initials: 'RS',
    avatarBg: '#1e3a5f',
    rating: 5,
    review:
      'Accurate steel detailing and on-time delivery for our commercial build. Very reliable team to work with.',
  },
];

const StarIcon = ({ filled = true, partial = false }) => {
  return (
    <svg className="star-icon" viewBox="0 0 24 24" aria-hidden="true">
      {partial ? (
        <>
          <defs>
            <linearGradient id="halfStarGrad">
              <stop offset="50%" stopColor="#f5b400" />
              <stop offset="50%" stopColor="#d4d4d8" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfStarGrad)"
            d="M12 2l2.92 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.08-1.01L12 2z"
          />
        </>
      ) : (
        <path
          fill={filled ? '#f5b400' : '#d4d4d8'}
          d="M12 2l2.92 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.08-1.01L12 2z"
        />
      )}
    </svg>
  );
};

const GoogleLogoText = () => (
  <span className="google-wordmark" aria-label="Google">
    <span className="g-blue">G</span>
    <span className="g-red">o</span>
    <span className="g-yellow">o</span>
    <span className="g-blue">g</span>
    <span className="g-green">l</span>
    <span className="g-red">e</span>
  </span>
);

const GoogleGMark = () => (
  <svg className="google-g-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.5-1.14 2.77-2.4 3.62v3.01h3.88c2.27-2.09 3.54-5.17 3.54-8.88z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.01c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.26v3.11C3.23 21.3 7.29 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.28c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.61H1.26C.46 8.21 0 10.04 0 12s.46 3.79 1.26 5.39l4.02-3.11z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.29 0 3.23 2.7 1.26 6.61l4.02 3.11c.95-2.85 3.6-4.97 6.72-4.97z"
    />
  </svg>
);

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const visibleCards = Array.from({ length: 3 }, (_, offset) => {
    const idx = (startIndex + offset) % testimonialsData.length;
    return testimonialsData[idx];
  });

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-heading">
            What Our Clients Say{' '}
            <span className="testimonials-highlight">About Us</span>
          </h2>
          <p className="testimonials-subtitle">
            Our clients&apos; feedback reflects our commitment to quality,
            precision, and reliable project delivery. We value every partnership
            and
            <br />
            strive to build lasting relationships through exceptional service and
            engineering excellence.
          </p>

          {/* Google Rating Summary */}
          <div className="google-summary">
            <GoogleLogoText />
            <div className="summary-stars">
              <StarIcon filled />
              <StarIcon filled />
              <StarIcon filled />
              <StarIcon filled />
              <StarIcon partial />
            </div>
            <span className="rating-score">4.5</span>
            <span className="rating-count">13 Google reviews</span>
          </div>
        </div>

        {/* Carousel Wrapper with Arrow Spacing */}
        <div className="carousel-wrapper">
          <button
            type="button"
            className="carousel-arrow prev-arrow"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="testimonials-grid">
            {visibleCards.map((item) => (
              <article key={`${item.id}-${startIndex}`} className="testimonial-card">
                <div className="card-top">
                  <div className="client-meta">
                    {item.avatarUrl ? (
                      <img
                        src={item.avatarUrl}
                        alt={item.name}
                        className="client-avatar-img"
                      />
                    ) : (
                      <div
                        className="client-avatar-fallback"
                        style={{ backgroundColor: item.avatarBg }}
                      >
                        {item.initials}
                      </div>
                    )}
                    <div>
                      <h3 className="client-name">{item.name}</h3>
                      <p className="client-role">{item.role}</p>
                    </div>
                  </div>
                  <GoogleGMark />
                </div>

                <div className="card-stars" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, starIdx) => (
                    <StarIcon key={starIdx} filled={starIdx < item.rating} />
                  ))}
                </div>

                <p className="card-review">{item.review}</p>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="carousel-arrow next-arrow"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;