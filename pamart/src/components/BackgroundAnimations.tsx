import React, { useEffect, useRef } from "react";

const BackgroundAnimations: React.FC = () => {
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null);
  const balloonCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const confettiCanvas = confettiCanvasRef.current!;
    const balloonCanvas = balloonCanvasRef.current!;

    const confettiCtx = confettiCanvas.getContext("2d")!;
    const balloonCtx = balloonCanvas.getContext("2d")!;

    // Função para ajustar o tamanho do canvas
    const resizeCanvas = () => {
      confettiCanvas.width = balloonCanvas.width = window.innerWidth;
      confettiCanvas.height = balloonCanvas.height = window.innerHeight;
    };

    // Redimensiona o canvas ao carregar e ao redimensionar a janela
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Paleta de cores (rosa e bege)
    const colorPalette = ["#FF69B4", "#FFC0CB", "#EFC9B6", "#FBE9E7", "#FADADD"]; // Rosa vibrante e tons de bege

    // Configuração padrão para confetes
    let confetti: any[] = [];
    let confettiCount = window.innerWidth < 768 ? 100 : 200; // Menos confetes para telas menores

    function createConfetti() {
      confetti = [];
      for (let i = 0; i < confettiCount; i++) {
        confetti.push({
          x: Math.random() * confettiCanvas.width,
          y: Math.random() * confettiCanvas.height - confettiCanvas.height,
          r: Math.random() * 6 + 2,
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)], // Sorteia uma cor da paleta
          tilt: Math.random() * 10 - 5,
          speed: Math.random() * 2 + 1,
        });
      }
    }

    function drawConfetti() {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      confetti.forEach((c) => {
        confettiCtx.beginPath();
        confettiCtx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        confettiCtx.fillStyle = c.color;
        confettiCtx.fill();
        c.y += c.speed;
        c.tilt += Math.random() * 0.1 - 0.05;

        if (c.y > confettiCanvas.height) c.y = -c.r;
      });
    }

    // Configuração padrão para balões
    let balloons: any[] = [];
    let balloonCount = window.innerWidth < 768 ? 5 : 10; // Menos balões para telas menores

    function createBalloons() {
      balloons = [];
      for (let i = 0; i < balloonCount; i++) {
        balloons.push({
          x: Math.random() * balloonCanvas.width,
          y: balloonCanvas.height + Math.random() * 100,
          r: Math.random() * 20 + 10,
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)], // Sorteia uma cor da paleta
          vy: Math.random() * 2 + 1,
        });
      }
    }

    function drawBalloons() {
      balloonCtx.clearRect(0, 0, balloonCanvas.width, balloonCanvas.height);
      balloons.forEach((b, i) => {
        balloonCtx.beginPath();
        balloonCtx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        balloonCtx.fillStyle = b.color;
        balloonCtx.fill();
        b.y -= b.vy;
        if (b.y + b.r < 0) balloons.splice(i, 1);
      });
    }

    // Animações
    function animate() {
      drawConfetti();
      drawBalloons();
      requestAnimationFrame(animate);
    }

    // Inicialize as animações
    createConfetti();
    createBalloons();
    animate();

    // Limpeza ao desmontar o componente
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas ref={confettiCanvasRef} style={canvasStyle} />
      <canvas ref={balloonCanvasRef} style={canvasStyle} />
    </>
  );
};

const canvasStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none", // Garante que o canvas não bloqueie cliques no conteúdo
};

export default BackgroundAnimations;