'use client'
import { useRef, useEffect, useState } from 'react';


const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [windows, setWindows] = useState({
        innerWidth: 1600,
        innerHeight: 600
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];

        const numParticles = 150;      // Increase particle count for density
        const maxDistance = 150;       // Increase distance threshold to make connections denser

        // Initialize particles with random positions and velocities
        const createParticles = () => {
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 1,   // Slower speed for more stable movement
                    vy: (Math.random() - 0.5) * 1,
                    size: Math.random() * 2 + 1,     // Smaller particles
                });
            }
        };

        // Draw lines between close particles to create a "network" effect
        const connectParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        if (ctx) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`; // Dynamic opacity
                            ctx.lineWidth = 0.5;
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }
        };

        // Animation function to move particles and redraw connections
        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                // Update particle positions
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Boundary bounce logic
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = "#ffffff";
                ctx.fill();
            });

            // Draw connections between particles
            connectParticles();

            requestAnimationFrame(animate);
        };

        createParticles();
        animate();

        // 
        setWindows({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
        });
    }, []);


    const { innerWidth, innerHeight } = windows;

    return <canvas ref={canvasRef} width={innerWidth} height={innerHeight} />;
};

export default ParticleBackground;
