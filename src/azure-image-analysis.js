import axios from 'axios';
 

export const analyzeImage = async (imageUrl) => {
    const endpoint = 'https://analysis-image-vision.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01-preview';
    const params = {
        'features': 'tags,read,caption,denseCaptions,smartCrops,objects,people',
    };

    const headers = {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '16963c76cc6e4c46b73aee14a1ea4cd3',
    };

    const body = {
        'url': imageUrl,
    };

    try {
        const response = await axios.post(endpoint, body, { params, headers });
        return response.data;
    } catch (error) {
        console.error('Error analyzing image:', error);
        // Handle error appropriately
    }
};