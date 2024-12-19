"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: "Acoustic Guitars",
      description:
        "Explore the soulful tones of our premium acoustic guitars. Perfect for beginners and professionals alike, these instruments bring warmth and depth to every note. Start your musical journey today with our wide selection.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Acoustic Guitars
        </div>
      ),
    },
    {
      title: "Electric Guitars",
      description:
        "Ignite your performance with our electric guitars. Designed for versatility and power, they let you rock out with clarity and precision. Whether you play blues, rock, or jazz, we have the perfect match for you.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--red-500))] flex items-center justify-center text-white">
          Electric Guitars
        </div>
      ),
    },
    {
      title: "Drums & Percussion",
      description:
        "Feel the rhythm with our extensive collection of drums and percussion instruments. Crafted for durability and rich sound, these instruments are a drummer's dream. Perfect for live gigs, practice, or studio sessions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Drums & Percussion
        </div>
      ),
    },
    {
      title: "Accessories & Gear",
      description:
        "Enhance your music experience with our range of accessories and gear. From strings to stands, we've got everything you need to take care of your instruments and play your best.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Accessories & Gear
        </div>
      ),
    },
  ];

  
function WhyChooseUs() {
  return <div><StickyScroll content={musicSchoolContent} /></div>;
}

export default WhyChooseUs;
