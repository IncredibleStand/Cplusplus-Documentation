const navList = document.getElementById('nav-list');
const navbar = document.getElementById('navbar');

// Toggle navbar and make it sticky
        document.getElementById('nav-toggle').addEventListener('click', function() {
            navList.classList.toggle('show');
            navbar.classList.toggle('sticky');
        });

        // Hide navbar when a link is clicked on small screens
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 815) {
                    navList.classList.remove('show');
                    navbar.classList.remove('sticky');
                }
            });
        });