document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) {
                menuToggle.textContent = '✕';
            } else {
                menuToggle.textContent = '☰';
            }
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });
    }

    const changeContentBtn = document.getElementById('change-content-btn');
    const infoText = document.getElementById('info-text');

    if (changeContentBtn && infoText) {
        let isChanged = false;
        changeContentBtn.addEventListener('click', () => {
            if (!isChanged) {
                infoText.textContent = 'Успіх! Цей текст було динамічно змінено за допомогою JavaScript без перезавантаження сторінки.';
                changeContentBtn.textContent = 'Повернути назад';
            } else {
                infoText.textContent = 'Вітаю! Я Тамірян Віктор, студент 2-го курсу факультету Computer Science. Захоплююсь програмуванням, алгоритмами та веб-розробкою. Мрію створювати корисні програмні продукти та розвиватися у сфері Software Engineering.';
                changeContentBtn.textContent = 'Змінити текст';
            }
            isChanged = !isChanged;
        });
    }

    const themeToggle = document.getElementById('theme-toggle');
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeToggle) themeToggle.textContent = '☀️ Світла тема';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            if (document.body.classList.contains('dark-theme')) {
                themeToggle.textContent = '☀️ Світла тема';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = '🌙 Тема';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    const form = document.getElementById('feedback-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    if (form) {
        form.addEventListener('submit', (event) => {
            let isValid = true;

            nameError.textContent = '';
            emailError.textContent = '';
            if (messageError) messageError.textContent = '';

            if (nameInput.value.trim() === '') {
                nameError.textContent = "Будь ласка, введіть своє ім'я.";
                isValid = false;
            }

            const emailValue = emailInput.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailValue === '') {
                emailError.textContent = "Будь ласка, введіть електронну пошту.";
                isValid = false;
            } else if (!emailPattern.test(emailValue)) {
                emailError.textContent = "Введено некоректний формат email.";
                isValid = false;
            }

            if (messageInput && messageInput.value.trim() === '') {
                messageError.textContent = "Будь ласка, введіть повідомлення.";
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
            }
        });
    }
});