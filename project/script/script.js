document.addEventListener('DOMContentLoaded', () => {
    updateFooterYear();

    initMobileNav();

    initStationFinder();

    initBatteryCatalog();

    initContactForm();
});

function updateFooterYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

function initMobileNav() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
}

function initStationFinder() {
    const searchBtn = document.getElementById('search-btn');
    const locationInput = document.getElementById('location-input');
    const searchResults = document.getElementById('search-results');

    if (searchBtn && locationInput && searchResults) {
        searchBtn.addEventListener('click', () => {
            const query = locationInput.value.trim();
            if (query === '') {
                searchResults.textContent = 'Please enter a location name to search.';
                searchResults.style.color = '#d9534f';
                return;
            }

            searchResults.style.color = 'var(--primary-color)';
            searchResults.textContent = `Searching for active swap stations near "${query}"... 2 stations available with fully charged batteries!`;
        });
    }
}

function initBatteryCatalog() {
    const batteryContainer = document.getElementById('battery-container');
    if (!batteryContainer) return;

    const batteries = [
        { id: 1, name: 'Ba3-Standard Pack', capacity: '8 kWh', range: '60 km', type: 'LiFePO4', price: '₦10,000/day' },
        { id: 2, name: 'Ba3-Pro LongRange', capacity: '20 kWh', range: '90 km', type: 'Lithium-ion', price: '₦25,000/day' },
        { id: 3, name: 'Ba3-HeavyDuty Max', capacity: '30.5 kWh', range: '120 km', type: 'Lithium-ion', price: '₦50,000/day' }
    ];

    batteryContainer.innerHTML = batteries.map(battery => `
        <div class="card">
            <h3>${battery.name}</h3>
            <p><strong>Capacity:</strong> ${battery.capacity}</p>
            <p><strong>Estimated Range:</strong> ${battery.range}</p>
            <p><strong>Cell Type:</strong> ${battery.type}</p>
            <p><strong>Subscription:</strong> ${battery.price}</p>
            <button class="btn-primary select-battery" data-id="${battery.id}">Select Plan</button>
        </div>
    `).join('');

    batteryContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('select-battery')) {
            const batteryId = e.target.getAttribute('data-id');
            const chosen = batteries.find(b => b.id == batteryId);
            if (chosen) {
                localStorage.setItem('selectedBattery', JSON.stringify(chosen));
                alert(`You have selected the ${chosen.name}! Saved to your session.`);
            }
        }
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const submissionFeedback = document.getElementById('submission-feedback');

    if (contactForm && submissionFeedback) {
        const lastSubmission = localStorage.getItem('lastContactSubmission');
        if (lastSubmission) {
            const data = JSON.parse(lastSubmission);
            submissionFeedback.innerHTML = `Welcome back, <strong>${data.name}</strong>! Your previous message regarding "${data.subject}" was saved.`;
        }

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const subject = document.getElementById('form-subject').value;

            if (name === '' || email === '') {
                alert('Please fill out all required fields.');
                return;
            }

            const formData = { name, email, subject, time: new Date().toLocaleString() };
            localStorage.setItem('lastContactSubmission', JSON.stringify(formData));

            submissionFeedback.innerHTML = `Thank you, <strong>${name}</strong>! We have received your inquiry and saved your preference.`;
            contactForm.reset();
        });
    }
}