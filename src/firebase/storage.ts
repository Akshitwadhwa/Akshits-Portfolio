import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '@/firebase/config';

export interface ProjectImage {
  path: string;
  url: string;
}

// Upload a single image to Firebase Storage
export const uploadProjectImage = async (file: File, projectName: string): Promise<string> => {
  try {
    const timestamp = Date.now();
    const fileName = `${projectName}-${timestamp}.${file.name.split('.').pop()}`;
    const storageRef = ref(storage, `projects/${fileName}`);
    
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// Get download URLs for multiple project images
export const getProjectImages = async (imagePaths: string[]): Promise<ProjectImage[]> => {
  try {
    const imagePromises = imagePaths.map(async (path) => {
      try {
        // If it's already a full URL, return as is
        if (path.startsWith('http')) {
          console.log('Using direct URL:', path);
          return { path, url: path };
        }
        
        // If it's a placeholder, return as is
        if (path.startsWith('/api/placeholder')) {
          console.log('Using placeholder:', path);
          return { path, url: path };
        }
        
        // If it's a Firebase Storage path, get the download URL
        console.log('Fetching from Firebase:', path);
        const storageRef = ref(storage, path);
        const downloadUrl = await getDownloadURL(storageRef);
        console.log('Successfully fetched URL for:', path);
        return { path, url: downloadUrl };
      } catch (error) {
        console.error(`Error getting image for path ${path}:`, error);
        console.error('Full error details:', JSON.stringify(error, null, 2));
        // Return a placeholder or empty URL if image doesn't exist
        return { path, url: '' };
      }
    });

    return await Promise.all(imagePromises);
  } catch (error) {
    console.error('Error getting project images:', error);
    return [];
  }
};

// Get all images from the projects folder
export const getAllProjectImages = async (): Promise<ProjectImage[]> => {
  try {
    const projectsRef = ref(storage, 'My Projects/');
    const result = await listAll(projectsRef);
    
    const imagePromises = result.items.map(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      return { path: itemRef.name, url };
    });

    return await Promise.all(imagePromises);
  } catch (error) {
    console.error('Error getting all project images:', error);
    return [];
  }
};