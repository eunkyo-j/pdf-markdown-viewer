// frontend/src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [markdown, setMarkdown] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : "");
  };

  const handleUpload = async () => {
    if (!file) return alert("PDF 파일을 선택해주세요!");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:8000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMarkdown(response.data.markdown);
    } catch (error) {
      console.error(error);
      
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">📄 PDF Markdown Viewer</h1>
      
      <div className="upload-section">
        <input
          type="file"
          id="file-input"
          accept="application/pdf"
          onChange={handleFileChange}
          className="file-input"
        />
        <label htmlFor="file-input" className="file-input-label">
          {fileName || "PDF 파일 선택"}
        </label>
        <button onClick={handleUpload} className="upload-button">
          업로드 및 변환
        </button>
      </div>

      {markdown && (
        <div className="preview-section">
          <h2 className="preview-title">📥 변환된 Markdown</h2>
          <div className="markdown-content">{markdown}</div>
        </div>
      )}
    </div>
  );
}

export default App;
