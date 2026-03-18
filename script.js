
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: '#ff4d4d',
                        darkBg: '#050505',
                        lightBg: '#f8fafc',
                    },
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                        mono: ['Fira Code', 'monospace'],
                    }
                }
            }
        }
 
        // --- Custom Cursor ---
        const dot = document.getElementById('cursor-dot');
        const outline = document.getElementById('cursor-outline');
        window.addEventListener('mousemove', (e) => {
            gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(outline, { x: e.clientX, y: e.clientY, duration: 0.3 });
        });

        // --- GSAP Scroll Reveal (Veshe othar effect) ---
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.reveal').forEach((el) => {
            gsap.to(el, {
                opacity: 1, y: 0, duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
            });
        });

        // --- Magnetic Buttons ---
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
            });
        });

        new Typed('#typed-text', {
            strings: [
                'Scale Your Brand with <span class="bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">Arifine Dev</span>',
            ],
            typeSpeed: 60,
            backSpeed: 0,
            showCursor: true,
            loop: false,
            contentType: 'html'
        });

        // --- Three.js Particles ---
        let scene, camera, renderer, particles;
        function init3D() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('canvas-container').appendChild(renderer.domElement);
            const pGeometry = new THREE.BufferGeometry();
            const pVertices = [];
            for (let i = 0; i < 1500; i++) {
                pVertices.push(THREE.MathUtils.randFloatSpread(50), THREE.MathUtils.randFloatSpread(50), THREE.MathUtils.randFloatSpread(50));
            }
            pGeometry.setAttribute('position', new THREE.Float32BufferAttribute(pVertices, 3));
            particles = new THREE.Points(pGeometry, new THREE.PointsMaterial({ color: 0xff4d4d, size: 0.1, transparent: true, opacity: 0.4 }));
            scene.add(particles);
            camera.position.z = 15;
        }
        function animate() {
            requestAnimationFrame(animate);
            particles.rotation.y += 0.001;
            renderer.render(scene, camera);
        }
        init3D(); animate();

        document.getElementById('theme-toggle').addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });
 
        document.addEventListener('DOMContentLoaded', function () {
            new Swiper(".testimonial-swiper", {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                },
            });
        });
    
        document.addEventListener('DOMContentLoaded', function () {
            new Swiper(".certificate-swiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 4000, // সার্টিফিকেটের জন্য সময় একটু বেশি দেওয়া হয়েছে
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, // মাউস রাখলে স্লাইডার থেমে যাবে
                },
                navigation: {
                    nextEl: ".cert-next",
                    prevEl: ".cert-prev",
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                },
            });
        });

        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        // Toggle Function
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            menuBtn.innerText = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
        });

        // Close menu when a link is clicked
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                menuBtn.innerText = '☰';
            });
        });

 