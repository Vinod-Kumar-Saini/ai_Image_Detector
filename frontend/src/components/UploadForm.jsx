import React, { useState } from "react";
import axios from "axios";

export default function UploadForm({ onResult, onFileSelect }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (onFileSelect) onFileSelect(selectedFile); // notify parent
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/detect", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onResult(res.data);
    } catch (err) {
      console.error(err);
      onResult({ error: "Failed to detect image" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleUpload} className="upload-form">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Checking..." : "Check Image"}
      </button>
    </form>
  );
}
