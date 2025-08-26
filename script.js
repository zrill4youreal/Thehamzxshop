// script.js

// Efek Hover pada Tombol Tautan
const linkButtons = document.querySelectorAll('.link-button');

linkButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.2s ease-in-out';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.transition = 'transform 0.2s ease-in-out';
    });
});

// Efek Parallax pada Gambar Profil
document.addEventListener('scroll', () => {
    const profileImg = document.querySelector('.profile-img');
    const scrollPosition = window.pageYOffset;

    profileImg.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});
