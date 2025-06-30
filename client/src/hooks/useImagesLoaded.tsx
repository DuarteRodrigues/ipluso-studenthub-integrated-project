/**
 * @file useImagesLoaded.tsx
 * @description Custom hook to check if all images in a given array have loaded.
 *
 * @hook
 * @param {string[]} imageUrls - Array of image URLs to check.
 * @returns {boolean} - Returns true if all images have loaded, false otherwise.
 */

// Import Packages
import { useState, useEffect } from "react";

function useImagesLoaded(imageUrls: string[]) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setImagesLoaded(true);
      return;
    }
    let loadedCount = 0;
    imageUrls.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount += 1;
        if (loadedCount === imageUrls.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, [imageUrls]);

  return imagesLoaded;
}

export default useImagesLoaded;
