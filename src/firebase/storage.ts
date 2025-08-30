import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from './config';

// Get a single image URL from Firebase Storage
export const getImageUrl = async (imagePath: string) => {
  try {
    const storageRef = ref(storage, imagePath);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error(`Error fetching image ${imagePath}:`, error);
    return null;
  }
};

// Get multiple image URLs at once
export const getProjectImages = async (imagePaths: string[]) => {
  try {
    const urls = await Promise.all(
      imagePaths.map(async (path) => {
        const url = await getImageUrl(path);
        return {
          path,
          url
        };
      })
    );
    return urls.filter(item => item.url !== null);
  } catch (error) {
    console.error('Error fetching project images:', error);
    throw error;
  }
};
