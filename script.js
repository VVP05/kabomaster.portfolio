document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    let currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    if (currentPage === '' || currentPage === '/') {
        currentPage = 'index.html'; 
    }
    // Hiệu ứng gõ chữ (chỉ chạy trên trang chủ)
    const typingTextElement = document.querySelector('.typing-text');
    if (typingTextElement && (currentPage === 'index.html')) {
        const roles = ["MIS Student", "Data Analyst", "Problem Solver"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 150;
        let deleteSpeed = 100;
        let delayBetweenRoles = 2000;

        function typeEffect() {
            const currentRole = roles[roleIndex];
            const currentText = currentRole.substring(0, charIndex);
            typingTextElement.textContent = currentText;

            if (!isDeleting) {
                if (charIndex < currentRole.length) {
                    charIndex++;
                    setTimeout(typeEffect, typeSpeed);
                } else {
                    isDeleting = true;
                    setTimeout(typeEffect, delayBetweenRoles);
                }
            } else {
                if (charIndex > 0) {
                    charIndex--;
                    setTimeout(typeEffect, deleteSpeed);
                } else {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    setTimeout(typeEffect, 500);
                }
            }
        }
        typeEffect();
    }

    const navLinks = document.querySelectorAll('.navbar nav ul li a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        if (linkHref === currentPage) {
            link.classList.add('active'); 
        } else {
            link.classList.remove('active'); 
        }
    });

});
// Khởi tạo Particles.js 
document.addEventListener('DOMContentLoaded', function() {
    //  Cấu hình và khởi tạo Particles.js 
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80, // Số lượng hạt
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff" // Màu của hạt (màu trắng)
                },
                "shape": {
                    "type": "circle", // Hình dạng hạt (tròn)
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5, // Độ trong suốt của hạt
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3, // Kích thước hạt
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150, 
                    "color": "#ffffff", 
                    "opacity": 0.4, 
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6, // Tốc độ di chuyển của hạt
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab" // Hiệu ứng khi di chuột qua: nắm kéo
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push" // Hiệu ứng khi click: đẩy hạt
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
});
function animateCounter(id, target) {
  let count = 0;
  const el = document.getElementById(id);
  const interval = setInterval(() => {
    count++;
    el.innerText = count + "+";
    if (count >= target) clearInterval(interval);
  }, 50);
}

