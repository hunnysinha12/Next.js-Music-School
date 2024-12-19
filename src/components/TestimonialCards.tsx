"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonialCards = [
  {
    quote:
      "The acoustic guitar I purchased here has an amazing tone. It's perfect for both beginners and professionals. Highly recommend it!",
    name: "John Smith",
    title: "Professional Guitarist",
  },
  {
    quote:
      "Their collection of electric guitars is top-notch. I found the perfect match for my blues gigs. The quality is unmatched!",
    name: "Emily Davis",
    title: "Blues Musician",
  },
  {
    quote:
      "The drum set I got is incredible! It’s durable and produces such a rich sound. Perfect for live performances and studio sessions.",
    name: "Michael Brown",
    title: "Drummer & Producer",
  },
  {
    quote:
      "I bought some guitar strings and a stand, and they’re excellent. This store has everything you need for your music gear.",
    name: "Sophia Wilson",
    title: "Music Enthusiast",
  },
  {
    quote:
      "The staff here helped me pick the right instrument for my needs. Their expertise and range of products are outstanding!",
    name: "Liam Martinez",
    title: "Music Teacher",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div className="text-3xl font-bold text-center mb-8 z-10">
        <h2>Hear our Harmony: Voice of Success</h2>
      </div>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonialCards}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
