document.addEventListener('DOMContentLoaded', () => {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 导航栏滚动交互
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.8)';
        }
    });
});