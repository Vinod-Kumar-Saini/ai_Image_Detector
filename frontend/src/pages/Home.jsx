import React, { useState } from "react";
import UploadForm from "../components/UploadForm";
import ResultCard from "../components/ResultCard";
import './Home.css';

export default function Home() {
  const [result, setResult] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileSelect = (file) => {
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="home">
      <h1 className="title">AI Image Detector</h1>

      <UploadForm onResult={setResult} onFileSelect={handleFileSelect} />

      {/* Tiny Preview */}
      {preview && (
        <div className="preview-box">
          <img src={preview} alt="Uploaded Preview" />
        </div>
      )}

      {result && <ResultCard result={result} />}
    </div>
  );
}
