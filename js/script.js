document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const wasActive = item.classList.contains('active');
            document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
            if (!wasActive) item.classList.add('active');
        });
    });
});
