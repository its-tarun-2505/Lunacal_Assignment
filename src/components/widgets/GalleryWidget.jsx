import '../../App.css';
import React, { useState, useRef } from "react";
import { Plus, ArrowLeft, ArrowRight } from "lucide-react";

const GalleryWidget = () => {
  const fileInputRef = useRef(null);
  const scrollRef = useRef(null);

  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
  ]);

  const addImage = () => {
    const file = fileInputRef.current.files[0];
    if (!file) return;
    const newImg = URL.createObjectURL(file);
    setImages((prev) => [...prev, newImg]);
  };

  const scrollImageLeft = () => {
    scrollRef.current?.scrollBy({ left: -181.5, behavior: "smooth" });
  };
  const scrollImageRight = () => {
    scrollRef.current?.scrollBy({ left: 181.5, behavior: "smooth" });
  };

  return (
    <div className="bg-[#2a2d32] rounded-2xl shadow-lg w-full max-w-xl p-5 m-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button className="bg-[#1c1f23] text-white text-sm font-medium px-4 py-2 rounded-lg shadow-inner">
          Gallery
        </button>

        <div className="flex items-center gap-3">
          <label
            htmlFor="file-upload"
            style={{ boxShadow: '0 -2px 8px rgba(255, 255, 255, 0.4)' }}
            className="cursor-pointer bg-[#1c1f23] px-4 py-2 rounded-full text-gray-300 text-sm flex items-center gap-2 hover:text-white hover:shadow-md transition"
          >
            <Plus size={16} /> ADD IMAGE
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={addImage}
          />

          <button
            onClick={scrollImageLeft}
            className="cursor-pointer bg-[#1c1f23] p-2 rounded-full hover:shadow-md text-white"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={scrollImageRight}
            className="cursor-pointer bg-[#1c1f23] p-2 rounded-full hover:shadow-md text-white"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Image Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-2 scrollbar-hidden scroll-smooth relative"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 w-[170px] rounded-lg overflow-visible aspect-square
                       transform transition-all duration-300 ease-in-out
                       grayscale hover:grayscale-0 hover:scale-115 hover:-translate-y-5
                       hover:-rotate-2 hover:z-20 cursor-pointer ${idx === 1 ? "pop-out" : ""}`}
          >
            <img
              src={img}
              alt={`gallery-${idx}`}
              className="object-cover w-full h-[170px] rounded-lg shadow-lg pt-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
