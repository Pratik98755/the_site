
// "use client";

// import { useEffect, useRef } from "react";

// const WIND_ANGLE = Math.PI * (195 / 180);
// const BASE_VX = Math.cos(WIND_ANGLE);
// const BASE_VY = Math.sin(WIND_ANGLE);

// type LayerDef = {
//   count: number; size: number; speed: number;
//   alpha: number; wobbleAmp: number;
// };

// class Flake {
//   x = 0; y = 0;
//   startX = 0; startY = 0;
//   dist = 0; diag = 0;
//   speed = 0; r = 0; alpha = 0;
//   wobble = 0; wobbleSpeed = 0; wobbleAmp = 0;
//   layer: LayerDef;
//   W: number; H: number;

//   constructor(layer: LayerDef, W: number, H: number) {
//     this.layer = layer; this.W = W; this.H = H;
//     this.diag = Math.sqrt(W * W + H * H) + 200;
//     this.respawn(true);
//   }

//   // REPLACE the respawn() spawn logic with this:

//   respawn(init: boolean) {
//     const l = this.layer;
//     const m = 300;

//     const edge = Math.random();
//     if (edge < 0.40) {
//       // right edge — main wind source
//       this.startX = this.W + m * Math.random();
//       this.startY = -m + Math.random() * (this.H + m * 2);
//     } else if (edge < 0.70) {
//       // top edge
//       this.startX = -m + Math.random() * (this.W + m * 2);
//       this.startY = -m * Math.random();
//     } else if (edge < 0.85) {
//       // left edge — keeps bottom-left full
//       this.startX = -m * Math.random();
//       this.startY = -m + Math.random() * (this.H + m * 2);
//     } else {
//       // bottom edge — replenishes the bottom strip
//       this.startX = -m + Math.random() * (this.W + m * 2);
//       this.startY = this.H + m * Math.random();
//     }

//     this.speed = l.speed * (0.75 + Math.random() * 0.5);
//     this.r = l.size * (0.6 + Math.random() * 0.8);
//     this.alpha = l.alpha * (0.5 + Math.random() * 0.5);
//     this.wobble = Math.random() * Math.PI * 2;
//     this.wobbleAmp = l.wobbleAmp;
//     this.wobbleSpeed = 0.012 + Math.random() * 0.018;

//     this.dist = init ? Math.random() * this.diag : 0;
//     this.x = this.startX + BASE_VX * this.dist;
//     this.y = this.startY + BASE_VY * this.dist;
//   }

//   update(gust: number) {
//     this.wobble += this.wobbleSpeed;
//     const perp = Math.sin(this.wobble) * this.wobbleAmp;
//     this.x += BASE_VX * this.speed * (1 + gust * 0.25) + (-BASE_VY * perp);
//     this.y += BASE_VY * this.speed + (BASE_VX * perp);
//     this.dist += this.speed;
//     if (this.x < -300 || this.y > this.H + 300 || this.x > this.W + 300 || this.y < -300 || this.dist > this.diag) {
//       this.respawn(false);
//     }
//   }

//   draw(ctx: CanvasRenderingContext2D) {
//     ctx.save();
//     ctx.globalAlpha = this.alpha;
//     ctx.fillStyle = "rgba(225,240,255,1)";
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.restore();
//   }
// }

// export default function SnowCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;
//     let animId: number;
//     let frame = 0;

//     const setSize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
//     setSize();

//     const layerDefs: LayerDef[] = [
//       { count: 300, size: 0.6, speed: 5.5, alpha: 0.20, wobbleAmp: 0.3 },
//       { count: 180, size: 1.2, speed: 4.2, alpha: 0.38, wobbleAmp: 0.5 },
//       { count: 80, size: 2.0, speed: 3.4, alpha: 0.58, wobbleAmp: 0.8 },
//       { count: 30, size: 3.2, speed: 2.6, alpha: 0.75, wobbleAmp: 1.2 },
//       { count: 10, size: 4.8, speed: 1.8, alpha: 0.60, wobbleAmp: 1.5 },
//     ];

//     const W = canvas.width, H = canvas.height;
//     const flakes = layerDefs.flatMap(l =>
//       Array.from({ length: l.count }, () => new Flake(l, W, H))
//     );

//     const animate = () => {
//       const W = canvas.width, H = canvas.height;

//       ctx.fillStyle = "#07090f";
//       ctx.fillRect(0, 0, W, H);

//       const gust = Math.sin(frame * 0.005) * 0.4 + Math.sin(frame * 0.013) * 0.2;

//       const hazeAlpha = 0.02 + Math.abs(Math.sin(frame * 0.007)) * 0.012;
//       const hazeGrad = ctx.createLinearGradient(W, 0, 0, H * 0.4);
//       hazeGrad.addColorStop(0, `rgba(150,175,215,${hazeAlpha})`);
//       hazeGrad.addColorStop(1, "rgba(100,130,180,0)");
//       ctx.fillStyle = hazeGrad;
//       ctx.fillRect(0, 0, W, H);

//       flakes.forEach(f => { f.update(gust); f.draw(ctx); });

//       ctx.fillStyle = `rgba(40,60,100,${0.035 + Math.abs(Math.sin(frame * 0.009)) * 0.015})`;
//       ctx.fillRect(0, 0, W, H);





//       // COMMENT vig and ground TO REMOVE DAMP, FADE EFFECT OF PARTICLES NEAR EDGES: 

//       const vig = ctx.createRadialGradient(W * 0.5, H * 0.4, H * 0.1, W * 0.5, H * 0.4, H * 0.9);
//       vig.addColorStop(0, "rgba(0,0,0,0)");
//       vig.addColorStop(0.6, "rgba(0,0,5,0.2)");
//       vig.addColorStop(1, "rgba(0,0,5,0.85)");
//       ctx.fillStyle = vig;
//       ctx.fillRect(0, 0, W, H);

//       const ground = ctx.createLinearGradient(0, H * 0.72, 0, H);
//       ground.addColorStop(0, "rgba(4,6,12,0)");
//       ground.addColorStop(1, "rgba(4,6,12,0.88)");
//       ctx.fillStyle = ground;
//       ctx.fillRect(0, 0, W, H);





//       frame++;
//       animId = requestAnimationFrame(animate);
//     };

//     animate();
//     window.addEventListener("resize", setSize);
//     return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", setSize); };
//   }, []);

//   return (
//     <canvas ref={canvasRef} style={{
//       position: "fixed", top: 0, left: 0,
//       width: "100%", height: "100%",
//       pointerEvents: "none", zIndex: -1,
//       background: "#07090f",
//     }} />
//   );
// }














"use client";

import { useEffect, useRef } from "react";

const WIND_ANGLE = Math.PI * (195 / 180);
const BASE_VX = Math.cos(WIND_ANGLE);
const BASE_VY = Math.sin(WIND_ANGLE);

type LayerDef = {
  count: number;
  size: number;
  speed: number;
  alpha: number;
  wobbleAmp: number;
};

class Flake {
  x = 0;
  y = 0;
  startX = 0;
  startY = 0;
  dist = 0;
  diag = 0;
  speed = 0;
  r = 0;
  alpha = 0;
  wobble = 0;
  wobbleSpeed = 0;
  wobbleAmp = 0;

  layer: LayerDef;
  W: number;
  H: number;

  constructor(layer: LayerDef, W: number, H: number) {
    this.layer = layer;
    this.W = W;
    this.H = H;
    this.diag = Math.sqrt(W * W + H * H) + 200;

    this.respawn(true);
  }

  respawn(init: boolean) {
    const l = this.layer;
    const m = 300;
    const edge = Math.random();

    if (edge < 0.4) {
      this.startX = this.W + m * Math.random();
      this.startY = -m + Math.random() * (this.H + m * 2);
    } else if (edge < 0.7) {
      this.startX = -m + Math.random() * (this.W + m * 2);
      this.startY = -m * Math.random();
    } else if (edge < 0.85) {
      this.startX = -m * Math.random();
      this.startY = -m + Math.random() * (this.H + m * 2);
    } else {
      this.startX = -m + Math.random() * (this.W + m * 2);
      this.startY = this.H + m * Math.random();
    }

    this.speed = l.speed * (0.75 + Math.random() * 0.5);
    this.r = l.size * (0.6 + Math.random() * 0.8);
    this.alpha = l.alpha * (0.5 + Math.random() * 0.5);

    this.wobble = Math.random() * Math.PI * 2;
    this.wobbleAmp = l.wobbleAmp;
    this.wobbleSpeed = 0.012 + Math.random() * 0.018;

    this.dist = init ? Math.random() * this.diag : 0;

    this.x = this.startX + BASE_VX * this.dist;
    this.y = this.startY + BASE_VY * this.dist;
  }

  update(gust: number) {
    this.wobble += this.wobbleSpeed;

    const perp = Math.sin(this.wobble) * this.wobbleAmp;

    this.x +=
      BASE_VX * this.speed * (1 + gust * 0.25) +
      -BASE_VY * perp;

    this.y += BASE_VY * this.speed + BASE_VX * perp;

    this.dist += this.speed;

    if (
      this.x < -300 ||
      this.y > this.H + 300 ||
      this.x > this.W + 300 ||
      this.y < -300 ||
      this.dist > this.diag
    ) {
      this.respawn(false);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = "rgba(225, 240, 255, 1)";

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

export default function SnowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animId: number;
    let frame = 0;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setSize();

    const layerDefs: LayerDef[] = [
      {
        count: 300,
        size: 0.6,
        speed: 5.5,
        alpha: 0.2,
        wobbleAmp: 0.3,
      },
      {
        count: 180,
        size: 1.2,
        speed: 4.2,
        alpha: 0.38,
        wobbleAmp: 0.5,
      },
      {
        count: 80,
        size: 2.0,
        speed: 3.4,
        alpha: 0.58,
        wobbleAmp: 0.8,
      },
      {
        count: 30,
        size: 3.2,
        speed: 2.6,
        alpha: 0.75,
        wobbleAmp: 1.2,
      },
      {
        count: 10,
        size: 4.8,
        speed: 1.8,
        alpha: 0.6,
        wobbleAmp: 1.5,
      },
    ];

    const W = canvas.width;
    const H = canvas.height;

    const flakes = layerDefs.flatMap((layer) =>
      Array.from(
        { length: layer.count },
        () => new Flake(layer, W, H)
      )
    );

    const animate = () => {
      const W = canvas.width;
      const H = canvas.height;

      // Clear previous frame.
      // IMPORTANT: this keeps the canvas transparent.
      ctx.clearRect(0, 0, W, H);

      const gust =
        Math.sin(frame * 0.005) * 0.4 +
        Math.sin(frame * 0.013) * 0.2;

      // Draw snowflakes only.
      flakes.forEach((flake) => {
        flake.update(gust);
        flake.draw(ctx);
      });

      frame++;

      animId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", setSize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}