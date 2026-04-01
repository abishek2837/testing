"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 });
  const [isEscaping, setIsEscaping] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; left: string; animDuration: string }[]>([]);

  useEffect(() => {
    // Generate floating hearts
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animDuration: `${5 + Math.random() * 10}s`
    }));
    setHearts(newHearts);
  }, []);

  const handleNoHover = (e?: React.MouseEvent | React.TouchEvent | any) => {
    if (e && e.preventDefault) e.preventDefault();
    if (typeof window === "undefined") return;

    // Enable escaping mode
    if (!isEscaping) setIsEscaping(true);

    const maxWidth = window.innerWidth - 120; // 120px is roughly button width
    const maxHeight = window.innerHeight - 60; // 60px is roughly button height

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    setNoPosition({
      left: randomX,
      top: randomY,
    });
  };

  return (
    <main className="container">
      {/* Background Hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: heart.left,
            animationDuration: heart.animDuration,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      <div className="photo-container">
        {/* User can replace this image */}
        <img src="/her-photo.jpeg" alt="My Beautiful Girlfriend" />
      </div>

      <h1 className="title">Will you be my forever? 🥺</h1>

      <div className="funny-text">
        <p>Before you answer, please remember:</p>
        <ul style={{ textAlign: "left", display: "inline-block" }}>
          <li>✔ you will never talk to any other boys.</li>
          <li>✔ You will not be allowed to go anywhere without me.</li>
          <li>✔ Clicking "Yes" grants you infinite cuddles and foot rubs (terms and conditions apply).</li>
        </ul>
      </div>

      <div className="gif-container">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHU3NzNxaXNpbHczZzhsdDN4ZHI3M253cHN3bncwczhwbnEwNndwbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26FLdmIp6wJr91JAI/giphy.gif"
          alt="Cute please gif"
          style={{ width: "300px", borderRadius: "10px" }}
        />
      </div>

      <div className="buttons-container">
        <Link href="/success" className="btn btn-yes" style={{ textDecoration: "none" }}>
          YES! ❤️
        </Link>
        <button
          className={`btn ${isEscaping ? "btn-no-running" : "btn-no"}`}
          style={
            isEscaping
              ? { left: `${noPosition.left}px`, top: `${noPosition.top}px` }
              : {}
          }
          onMouseEnter={handleNoHover}
          onClick={handleNoHover}
          onTouchStart={handleNoHover}
        >
          No way
        </button>
      </div>
    </main>
  );
}
