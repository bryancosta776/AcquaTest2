import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

export default function WebcamCapture({ onCapture }) {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [error, setError] = useState('');

  const videoConstraints = {
    facingMode: { ideal: 'environment' }
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    onCapture(imageSrc);
  };

  return (
    <div className="webcam-container">
      {error && <div className="erro">{error}</div>}
      {!imgSrc ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="webcam-video"
            videoConstraints={videoConstraints}
            style={{ borderRadius: 10, width: '100%', maxWidth: 320 }}
            onUserMediaError={() => setError('Não foi possível acessar a câmera. Verifique as permissões do navegador.')}
          />
          <div className="webcam-actions">
            <button type="button" className="webcam-btn" onClick={capture}>Tirar Foto</button>
          </div>
        </>
      ) : (
        <>
          <div className="webcam-actions">
            <img src={imgSrc} alt="capturada" className="webcam-img" />
            <button type="button" className="webcam-btn" onClick={() => { setImgSrc(null); onCapture(null); }}>Refazer</button>
          </div>
        </>
      )}
    </div>
  );
} 