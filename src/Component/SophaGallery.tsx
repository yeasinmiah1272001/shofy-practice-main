import React from "react";

const SophaGallery = () => {
  const sophaImages = [
    {
      src: "https://i.ibb.co/Ssbpbs7/01.jpg",
      alt: "Sofa 1",
      title: "Modern Sofa",
      description:
        "A stylish and comfortable modern sopha perfect for any living room.",
    },
    {
      src: "https://i.ibb.co/YWWzZQL/02.jpg",
      alt: "Sofa 2",
      title: "Classic Sofa",
      description: "An elegant classic sopha that adds charm to your space.",
    },
    {
      src: "https://i.ibb.co/jGMRW33/03.jpg",
      alt: "Sofa 3",
      title: "Luxurious Sofa",
      description:
        "A luxurious sopha designed for relaxation and sophistication.",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-6">
          Sofa Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sophaImages.map((image, index) => (
            <div
              key={index}
              className="h-72 rounded-lg shadow-lg bg-cover bg-center transition-transform duration-300 transform hover:scale-105"
              style={{ backgroundImage: `url(${image.src})` }}
              aria-label={image.alt}
            >
              <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-40 rounded-lg p-4">
                <h3 className="text-white text-lg font-semibold mb-2">
                  {image.title}
                </h3>
                <p className="text-white text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SophaGallery;
