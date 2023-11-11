import axios from 'axios';

export const analyzeImage = async (imageUrl) => {
    const endpoint = 'https://westcentralus.api.cognitive.microsoft.com/vision/v4.0/analyze';
    const params = {
        'visualFeatures': 'Categories,Description,Color',
        'details': '',
        'language': 'en',
    };

    const headers = {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': 'your-subscription-key',
    };

    const body = {
        'url': imageUrl,
    };

    const response = await axios.post(endpoint, body, { params, headers });
    return response.data;
};