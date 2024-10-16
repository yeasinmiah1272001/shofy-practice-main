import React from "react";

const ChairGallery = () => {
  const chairImages = [
    {
      src: "https://i.ibb.co/K9pvhvn/1-1.jpg",
      alt: "Discount 50%",
    },
    {
      src: "https://i.ibb.co/py3Lmzd/1-2.jpg",
      alt: "Discount 30%",
    },
  ];

  return (
    <section className="py-10 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-6">
          Popular Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {chairImages.map((image, index) => (
            <div
              key={index}
              className="h-72 rounded-lg shadow-lg bg-cover bg-center transition-transform duration-300 transform hover:scale-105"
              style={{ backgroundImage: `url(${image.src})` }}
              aria-label={image.alt}
            >
              <div className="flex items-center justify-center h-full bg-gray-200 bg-opacity-30 rounded-lg">
                <p className="text-black text-3xl animate-bounce font-semibold">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChairGallery;
