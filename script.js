/* ============================================================
   FITUR 1: DARK MODE TOGGLE + LOCALSTORAGE
   ============================================================ */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Inisialisasi tema berdasarkan preferensi tersimpan
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    
    themeToggle.textContent = isDark ? '☀️' : '⭐';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


/* ============================================================
   FITUR 2: HAMBURGER MENU MOBILE
   ============================================================ */
const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav = document.getElementById('main-nav');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    mainNav.classList.toggle('show');
});

// Tutup menu otomatis saat link navigasi diklik
mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        mainNav.classList.remove('show');
    });
});


/* ============================================================
   FITUR 3: TYPING EFFECT DI HERO SECTION
   ============================================================ */
const typingText = document.getElementById('typing-text');
const words = ['Web Developer', 'UI Designer', 'Street Photographer', 'Problem Solver'];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Atur kecepatan ketik vs hapus
    let typeSpeed = isDeleting ? 150 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Jeda setelah selesai mengetik
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Jeda sebelum kata baru
    }

    setTimeout(typeEffect, typeSpeed);
}

// Jalankan efek ketik saat halaman dimuat
typeEffect();


/* ============================================================
   FITUR 4: SCROLL REVEAL ANIMATION
   ============================================================ */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));


/* ============================================================
   FITUR 5: FORM KONTAK INTERAKTIF
   ============================================================ */
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    
    // Set state loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Mengirim...';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    try {
        // Simulasi pengiriman data (ganti dengan API sungguhan nanti)
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        formStatus.textContent = '✅ Pesan berhasil dikirim! Terima kasih.';
        formStatus.classList.add('success');
        contactForm.reset();
        
    } catch (error) {
        formStatus.textContent = '❌ Gagal mengirim pesan. Coba lagi.';
        formStatus.classList.add('error');
        
    } finally {
        // Kembalikan tombol ke kondisi semula
        submitBtn.disabled = false;
        submitBtn.textContent = 'Kirim Pesan';
    }
});
function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);