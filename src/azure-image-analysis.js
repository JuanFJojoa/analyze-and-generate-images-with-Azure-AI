import axios from 'axios';

export const analyzeImage = async (imageUrl) => {
  const endpoint = 'https://anayze-generate-images.cognitiveservices.azure.com/computervision/imageanalysis:analyze&api-version=2023-02-01-preview';
  const params = {
    'visualFeatures': 'Categories,Description,Color',
    'details': '',
    'language': 'en',
  };

  const headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': '12f8906d0fa2446f926148fe74fb6773',
  };

  const body = {
    'url': imageUrl,
  };

  const response = await axios.post(endpoint, body, { params, headers });
  return response.data;
};