"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-confetti to prevent SSR issues
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function SuccessPage() {
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Set initial size
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="success-container">
      {windowDimension.width > 0 && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={true}
          numberOfPieces={500}
        />
      )}

      <h1 className="success-title">YAAAY!!! 🎉🥳</h1>

      <p style={{ fontSize: "1.5rem", marginBottom: "2rem", fontWeight: "bold" }}>
        Operation: "Aapko patawo" Successful! 🚀
      </p>

      <div className="success-gifs">
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnZzaXJ3dDFxczhkczMyaHFhOXJ1YTI0eHJ2aG5vMGl5YXI3cDRyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VzQ9PUdifClRm/giphy.gif"
          alt="Happy dance"
          style={{ width: "300px", borderRadius: "10px", boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
        />
      </div>

      <div className="funny-text" style={{ background: "rgba(255,255,255,0.9)", color: "#c9184a", marginTop: "2rem" }}>
        <h2>Official Contract Bindings:</h2>
        <ul style={{ textAlign: "left", fontSize: "1.2rem", lineHeight: "1.8" }}>
          <li>📜 Rule 1: प्लेटको अन्तिम मोमो मा सधैं पहिलो अधिकार हजुरको रहनेछ।</li>
          <li>🍔 Rule 2: रिसाएको बेला फकाउनको लागि 'पानीपुरी' वा 'मोमो' वा 'लुगा' मध्ये जे को नि मांग राख्दा पुरा गर्नेछु।</li>
          <li>🎬 Rule 3: दशैं-तिहारमा आफन्तहरूले सोध्ने "खुसीको खबर कहिले सुन्ने?" भन्ने झ्याउ लाग्दो प्रश्नको उत्तर दिने जिम्मा मेरो हुनेछ।</li>
        </ul>
        <h3 style={{ marginTop: "1rem" }}>I love you infinity! ❤️</h3>
      </div>
    </div>
  );
}
