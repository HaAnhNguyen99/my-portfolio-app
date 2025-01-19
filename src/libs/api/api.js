import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
// Function to get all projects
export const getProjects = async () => {
  try {
    const response = await axios.get('api/projects?populate[0]=pj_preview_img&populate[1]=categories');
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return null;
  }
};

// Function to get my profile
export const getProfile = async () => {
  try {
    const response = await axios.get(`api/profiles/${import.meta.env.VITE_PROFILE_ID}?populate[0]=profile_pic&populate[1]=cv`);
    return {
      name: response.data.data.name,
      short_name: response.data.data.short_name,
      role: response.data.data.Role,
      profile_pic: `${response.data.data.profile_pic.url}`,
      description: response.data.data.description,
      cv: response.data.data.cv.url,
      linkedin: response.data.data.linkedin,
      github: response.data.data.github,
      email: response.data.data.email,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Function to get categories
export const getCategories = async () => {
  try {
    const response = await axios.get('api/categories');

    return response.data.data.map((category) => ({
      name: category.category_name,
    }));
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Function to get experience
export const getExperience = async () => {
  try {
    const response = await axios.get('/api/experiences?populate=*');
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Function to get experience
export const getSkills = async () => {
  try {
    const response = await axios.get('/api/skills');
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
