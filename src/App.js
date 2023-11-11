import React, { useState } from 'react';
import { analyzeImage } from './azure-image-analysis';

function App() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalysis = async () => {
    setLoading(true);
    const analysisResult = await analyzeImage(url);
    setResult(analysisResult);
    setLoading(false);
  };

  const handleGeneration = () => {
    // Image generation logic goes here
  };

  const DisplayResults = () => {
    if (!result) return null;
    return (
      <div>
        <h2>Results</h2>
        <p>{JSON.stringify(result, null, 2)}</p>
        <img src={url} alt="Analyzed" />
      </div>
    );
  };

  return (
    <div>
      <h1>Image Analyzer and Generator</h1>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter image URL" />
      <button onClick={handleAnalysis} disabled={loading}>Analyze Image</button>
      <button onClick={handleGeneration}>Generate Image</button>
      {loading && <p>Processing...</p>}
      <DisplayResults />
    </div>
  );
}

export default App;