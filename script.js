// Scroll ke bagian produk saat tombol CTA diklik
document.getElementById('cta-button').addEventListener('click', function() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// Tampilkan pesan ketika tombol "Beli Sekarang" diklik
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Terima kasih telah membeli produk kami! Produk ini akan segera dikirimkan kepada Anda.');
    });
});

// Tampilkan pesan saat form kontak disubmit
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan anda telah dikirim! Kami akan segera menghubungi anda.');
});

// Menu hamburger untuk navigasi mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });
}

// Menambahkan active class berdasarkan scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70;  // Mengurangi offset agar lebih akurat
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href') === `#${current}`) {
            li.classList.add('active');
        }
    });
});

// Mendapatkan semua link di navbar
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Mendapatkan ID dari elemen tujuan
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Mendapatkan tinggi navbar
        const navbarHeight = document.querySelector('header').offsetHeight;

        // Melakukan scroll ke elemen tujuan dengan efek halus
        window.scrollTo({
            top: targetSection.offsetTop - navbarHeight,
            behavior: 'smooth'
        });

        // Tutup menu hamburger jika dibuka
        if (navLinks.classList.contains('open')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        }
    });
});
