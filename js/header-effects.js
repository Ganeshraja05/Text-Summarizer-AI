document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("header-canvas");
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particleCount = 50;
    const colors = ["#6a00ff", "#8e2de2", "#ffffff"];

    canvas.width = canvas.offsetWidth;
    canvas.height = 120; // Reduced canvas height to match the new CSS height

    class Particle {
        constructor(x, y, radius, color, velocity) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
            this.alpha = 1;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        }

        update() {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.alpha -= 0.005;

            if (this.alpha <= 0) {
                this.reset();
            }
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 3 + 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.velocity = {
                x: Math.random() * 1 - 0.5,
                y: Math.random() * 1 - 0.5,
            };
            this.alpha = 1;
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const radius = Math.random() * 3 + 1;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const velocity = {
                x: Math.random() * 1 - 0.5,
                y: Math.random() * 1 - 0.5,
            };

            particles.push(new Particle(x, y, radius, color, velocity));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    window.addEventListener("resize", () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = 120; // Keep the reduced canvas height on resize
        initParticles();
    });
});
