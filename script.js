document.addEventListener('DOMContentLoaded', () => {
    // Elements ko select karna
    const tabButtons = document.querySelectorAll('.tab-btn');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const darkModeToggle = document.querySelector('.darkmode-toggle');
    const searchBtn = document.querySelector('.search-btn');

    // 1. Game Category Tab Functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const selectedCategory = button.getAttribute('data-category');
            console.log(`Loading games for category: ${selectedCategory}`);
            // (Real-world: API call to load games based on category)
        });
    });

    // 2. Hamburger Menu Toggle Functionality
    const toggleMenu = () => {
        navMenu.classList.toggle('open');
        
        // Icon Change Logic
        if (navMenu.classList.contains('open')) {
             menuToggle.textContent = '✕'; // Close symbol
        } else {
             menuToggle.textContent = '☰'; // Hamburger symbol
        }
    };
    
    menuToggle.addEventListener('click', toggleMenu);

    // 3. FIX: Menu ko bahar click karne par band karna (Outside Click)
    document.addEventListener('click', (event) => {
        // Check karte hain ki click menu ya menu button par toh nahi hua
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggleButton = menuToggle.contains(event.target);
        
        // Agar menu khula hai AUR click menu ya button ke bahar hua hai
        if (navMenu.classList.contains('open') && !isClickInsideMenu && !isClickOnToggleButton) {
            toggleMenu(); // toggleMenu function ko call karein, jisse woh band ho jaayega
        }
    });

    // 4. Dark Mode Toggle Functionality
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme'); 
        
        // Change icon based on current theme
        if (document.body.classList.contains('light-theme')) {
            darkModeToggle.textContent = '🌙'; // Moon icon for light mode
        } else {
            darkModeToggle.textContent = '☀️'; // Sun icon for dark mode
        }
    });

    // 5. Search button functionality
    searchBtn.addEventListener('click', () => {
        alert('Search feature coming soon!');
    });
});