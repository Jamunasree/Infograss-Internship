import React, { useState } from 'react';
function App() {
  const images = [
    'https://plus.unsplash.com/premium_photo-1661883809211-eb59f508b3d9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXJmYWxsfGVufDB8fDB8fHww',
    'https://www.aparisguide.com/eiffeltower/eiffel-tower003.jpg',
    'https://leonardo.ai/wp-content/uploads/2024/07/ai-graphic-design-vector-art.webp',
  ];
  const [index, setIndex] = useState(0);
  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <img src={images[index]} alt="carousel" width="300" height="200" />
      <div style={{ marginTop: '20px' }}>
        <button onClick={prevImage}>⏮ Prev</button>
        <button onClick={nextImage} style={{ marginLeft: '10px' }}>Next ⏭</button>
      </div>
    </div>
  );
}
export default App;
