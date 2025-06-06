document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const dropdownParents = document.querySelectorAll('.dropdown-parent');
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Desktop dropdowns (hover)
    dropdownParents.forEach(parent => {
        parent.addEventListener('mouseenter', () => {
            const dropdown = parent.querySelector('.dropdown');
            dropdown.classList.remove('hidden');
        });

        parent.addEventListener('mouseleave', () => {
            const dropdown = parent.querySelector('.dropdown');
            dropdown.classList.add('hidden');
        });
    });

    // Mobile dropdowns (click)
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = toggle.nextElementSibling;
            dropdown.classList.toggle('hidden');
        });
    });
});
