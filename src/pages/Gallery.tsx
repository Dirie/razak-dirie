import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from 'react';

const images = [
  {
    src: "assets/images/1.jpg",
    alt: "Code on screen"
  },
  {
    src: "assets/images/2.jpg",
    alt: "Developer workspace"
  },
  {
    src: "assets/images/3.jpg",
    alt: "Modern workspace"
  },
  {
    src: "assets/images/4.jpg",
    alt: "Technology"
  },
  {
    src: "assets/images/5.jpg",
    alt: "Digital art"
  },
  {
    src: "assets/images/6.jpg",
    alt: "Smart device"
  },
  {
    src: "assets/images/7.jpg",
    alt: "Smart device"
  },
  {
    src: "assets/images/8.jpg",
    alt: "Smart device"
  },
  {
    src: "assets/images/9.jpg",
    alt: "Smart device"
  },
  {
    src: "assets/images/10.jpg",
    alt: "Smart device"
  },
  {
    src: "assets/images/11.jpg",
    alt: "Smart device"
  },
  {
    src: "assets/images/12.jpg",
    alt: "Smart device"
  },
  {
    src: "assets/images/13.jpg",
    alt: "Smart device"
  },
  {
    src: "assets/images/14.jpg",
    alt: "Smart device"
  },
  {
    src: "assets/images/15.jpg",
    alt: "Smart device"
  },
  {
    src: "assets/images/16.jpg",
    alt: "Smart device"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl xs:text-xl font-bold text-center mb-8"
      >
        Gallery
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                {image.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0">
        <DialogTitle />
          <DialogClose className="absolute right-4 top-4 rounded-full p-2 z-50  transition-colors">
            {/* <X className="h-6 w-6 text-white" /> */}
          </DialogClose>

          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-full relative overflow-scroll"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />

            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;