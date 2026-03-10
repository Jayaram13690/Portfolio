import { useEffect, useRef, useState } from "react";
import avatarImg from "../assets/avatarRev.png";
import "./Avatar.css";

const Avatar = () => {
  const wrapperRef = useRef(null);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.36;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const maxOffset = 4;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const clampedDistance = Math.min(distance, 400);
      const ratio = clampedDistance / 400;

      setPupilOffset({
        x: (dx / (distance || 1)) * maxOffset * ratio,
        y: (dy / (distance || 1)) * maxOffset * ratio,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="avatar-wrapper" ref={wrapperRef}>
      <div className="avatar-bg-glow"></div>
      <div className="avatar-image-container">
        <img src={avatarImg} alt="Avatar" className="avatar-image" />

        {/* Interactive SVG eyes overlay */}
        <svg
          className="avatar-eyes-svg"
          viewBox="0 0 96 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* White eye shading */}
            {/* <radialGradient id="eyeWhiteGrad" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#f2f4ff" />
              <stop offset="100%" stopColor="#dfe4ff" />
            </radialGradient> */}

            {/* Iris Gradient */}
            {/* <radialGradient id="irisGrad" cx="35%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#a5b4fc" />
              <stop offset="45%" stopColor="#6366f1" />
              <stop offset="75%" stopColor="#4338ca" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </radialGradient> */}

            {/* Iris outer ring */}
            {/* <radialGradient id="irisRing" cx="50%" cy="50%" r="60%">
              <stop offset="70%" stopColor="transparent" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
            </radialGradient> */}

            {/* Iris Shine */}
            <radialGradient id="irisShine" cx="20%" cy="15%" r="20%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.75)" />
              <stop offset="60%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>

            {/* Shadow under eyelid */}
            {/* <linearGradient id="lidShadow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(0,0,0,0.25)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient> */}
          </defs>

          {/* Left Eye */}
          <g>
            {/* Eye white */}
            {/* <ellipse
              cx="25"
              cy="20"
              rx="15"
              ry="10"
              fill="url(#eyeWhiteGrad)"
              stroke="#2d2660"
              strokeWidth="1.7"
            /> */}

            {/* Lid shadow */}
            <ellipse
              cx="25"
              cy="18"
              rx="13"
              ry="7"
              fill="url(#lidShadow)"
              opacity="0.4"
            />

            {/* Iris */}
            <circle
              cx={25 + pupilOffset.x * 0.8}
              cy={20 + pupilOffset.y * 0.6}
              r="6.5"
              fill="url(#irisGrad)"
            />
            <circle
              cx={25 + pupilOffset.x * 0.8}
              cy={20 + pupilOffset.y * 0.6}
              r="3.5"
              fill="url(#irisRing)"
            />
            <circle
              cx={25 + pupilOffset.x * 0.8}
              cy={20 + pupilOffset.y * 0.6}
              r="6.5"
              fill="url(#irisShine)"
            />

            {/* Pupil */}
            <circle
              cx={25 + pupilOffset.x}
              cy={20 + pupilOffset.y * 0.9}
              r="3.2"
              fill="#050514"
              className="avatar-pupil"
            />

            {/* Main highlight */}
            <circle
              cx={22.5 + pupilOffset.x * 0.6}
              cy={17 + pupilOffset.y * 0.6}
              r="2.4"
              fill="rgba(255,255,255,0.95)"
            />

            {/* Small highlight */}
            <circle
              cx={27.5 + pupilOffset.x * 0.8}
              cy={22.8 + pupilOffset.y * 0.6}
              r="1.1"
              fill="rgba(255,255,255,0.55)"
            />
          </g>

          {/* Right Eye */}
          <g>
            {/* Eye white */}
            {/* <ellipse
              cx="75"
              cy="20"
              rx="15"
              ry="10"
              fill="url(#eyeWhiteGrad)"
              stroke="#2d2660"
              strokeWidth="1.7"
            /> */}

            {/* Lid shadow */}
            <ellipse
              cx="75"
              cy="17"
              rx="13"
              ry="7"
              fill="url(#lidShadow)"
              opacity="0.4"
            />

            {/* Iris */}
            <circle
              cx={75 + pupilOffset.x * 0.8}
              cy={20 + pupilOffset.y * 0.6}
              r="6.5"
              fill="url(#irisGrad)"
            />
            <circle
              cx={75 + pupilOffset.x * 0.8}
              cy={20 + pupilOffset.y * 0.6}
              r="6.5"
              fill="url(#irisRing)"
            />
            <circle
              cx={75 + pupilOffset.x * 0.8}
              cy={20 + pupilOffset.y * 0.6}
              r="6.5"
              fill="url(#irisShine)"
            />

            {/* Pupil */}
            <circle
              cx={75 + pupilOffset.x}
              cy={20 + pupilOffset.y * 0.9}
              r="3.2"
              fill="#050514"
              className="avatar-pupil"
            />

            {/* Main highlight */}
            <circle
              cx={72.5 + pupilOffset.x * 0.6}
              cy={17 + pupilOffset.y * 0.6}
              r="2.4"
              fill="rgba(255,255,255,0.95)"
            />

            {/* Small highlight */}
            <circle
              cx={77.5 + pupilOffset.x * 0.8}
              cy={22.8 + pupilOffset.y * 0.6}
              r="1.1"
              fill="rgba(255,255,255,0.55)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Avatar;
