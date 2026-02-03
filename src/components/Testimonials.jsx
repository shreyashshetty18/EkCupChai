import React, { useRef, useState, useEffect } from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Samantha Johnson",
    title: "Digital Artist",
    quote: "Exceeded our expectations with innovative designs that brought our vision to life – a truly remarkable creative experience.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Isabella Rodriguez",
    title: "Music Producer",
    quote: "Their ability to capture our brand’s essence in every project is unmatched – a valuable creative collaborator.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Gabrielle Williams",
    title: "Storyteller & Podcaster",
    quote: "Creative minds who listen, understand, and deliver captivating visuals – they get what creators truly need.",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    name: "John Peter",
    title: "Developer & Blogger",
    quote: "Their artistic flair and thoughtful layout transformed my content into a professional creator brand.",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Natalie Martinez",
    title: "Fashion Creator",
    quote: "From idea to execution, their tools and support helped me grow – a total game-changer.",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    name: "Aarav Mehta",
    title: "Indie Filmmaker",
    quote: "Ek Cup Chai helped me connect directly with supporters and share exclusive behind-the-scenes stories. Love it!",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth;
      const newIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
      if (newIndex >= 0 && newIndex < testimonials.length) {
        container.scrollTo({
          left: scrollAmount * newIndex,
          behavior: "smooth",
        });
        setActiveIndex(newIndex);
      }
    }
  };

  // Adjust active index on manual scroll (in case user swipes)
  useEffect(() => {
    const container = scrollRef.current;
    const handleScroll = () => {
      if (container) {
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const newIndex = Math.round(scrollLeft / containerWidth);
        setActiveIndex(newIndex);
      }
    };
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#f5f1ee] py-16 px-6 sm:px-12 text-center relative">
      {/* Subheading */}
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-semibold">
        Love from the creators
      </p>

      <h2 className="text-3xl sm:text-5xl font-extrabold text-chaiBrown mb-4">
        What Our Users Say
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-lg mb-8 px-8">
        Thousands of creators use Ek Cup Chai to share stories, connect with fans, and build meaningful support.
      </p>

      {/* Navigation Icons */}
      <div className="flex justify-end sm:hidden gap-4 mb-4 px-2 z-10 relative">
        <button
          onClick={() => scroll("left")}
          disabled={activeIndex === 0}
          className={`p-2 rounded-full border transition ${activeIndex === 0
              ? "text-chaiBrown border border-gray-200 opacity-30 cursor-not-allowed"
              : "hover:bg-[#ffeadd] text-chaiBrown border border-gray-200"
            }`}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={activeIndex === testimonials.length - 1}
          className={`p-2 rounded-full border transition ${activeIndex === testimonials.length - 1
              ? "text-chaiBrown border border-gray-400 opacity-30 cursor-not-allowed"
              : "hover:bg-[#ffeadd] text-chaiBrown border border-gray-200"
            }`}
        >
          <FaChevronRight />
        </button>
      </div>

     
    </section>
  );
};

export default Testimonials;
