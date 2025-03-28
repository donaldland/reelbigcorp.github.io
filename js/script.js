/**
 * Reel Big Corporation JavaScript
 * Adds interactive elements to the website
 */

// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile navigation
    setupMobileNav();
    
    // Initialize visitor counter
    randomizeVisitorCounter();
    
    // Initialize virtual PC/boot system
    setupVirtualPC();
    
    // Initialize dial-up connection simulator
    setupDialupSimulator();
    
    // Smooth scrolling for anchor links
    setupSmoothScrolling();
    
    // Initialize portfolio video interaction
    setupPortfolioInteraction();
    
    // Initialize contact form
    setupContactForm();
    
    // Add webring functionality
    setupWebring();
    
    // Setup footer ASCII divider dynamic width
    setupDynamicDividers();
    
    // Add retro cursor effect if not on mobile
    if (window.innerWidth > 768) {
        document.body.style.cursor = 'url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5QEJCjYkWSIJ+AAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAC/UlEQVRYw+2XT2jTUBzHv7+XpGu7rh27rrJRnHOIiGxOvAgiwkBBJuJJ0KmgIOJZ8OB/8KC418Oj4HHixMNAEJmgKANRnCAyzTZcZZar23S5udBW9KXtLKJB4XmkJe8vLzP5/f7vd9LAd8D/AupTPr9VjoFSqlP7XvJwfQs8VM/kUh8ZJh/c9JoNHO5XM5z0QqwLLujdnp6WuB5PlwsFgOdgPF4nNB1/UahUNgLBoM+n89nqx2Px30AsLS09FaSJKaVgGVZVNd1KhQK+fv7+8P5fN5vGMb8wsLCzUwmw1FKKV3X2dXVVT0ajb5bXl7+zHFc8/z8tZumSYmi+DKdTn9gWZZqNBoxSqkzgG4YVBRFdnBw0Dc6OgqapuH29jaYmprC2toa+vr6IEmSv1arMcViUexoA5qm1SmlQnNi13W/LMuQZRmRSMSxVpZl7O7uolKpWLa1lfL5PEmlZRi6rv9ZC7rb/Py8ow+NRmPixsbGoYvWZAM4bdsJjlJKTdPEw8MDNE1zvVTTNDQaDdA0DZZlAdgD6LoOVVVRq9UgCAK63S47QLFYjIfDYaYrgK2tLVxeXuLk5ASn9YFZ0+qeV1dXiMViENBEmIY9JFAUBZIkYX19Ha/2drGRbO6XJCnl+oO6rtPLy8toJpOhALCxsYFnOzuIcC/wJsnjXTKJcmgKyWSy9QcbCCnwKwJutgRUq1Vomua8CNXJ1tYWOI7D5OTkb1Xtds9R5CqLN69fobG3h0aNASV/viDx+DhGR0aQSCQwMzNjSTn8AZznHB0dYXo85iYDTWXwfDMHvV5HiB+AX+Y7K2HXPjw8RP5BBpmzrMfk2+hGfwvdaNuaTdX8PczxVQiCgIGBAQQCgY56bQFK6XHBnUQTQZ9E3FnPTQGapgH83u0L7EhigQ+JHZSQfRaywMZJRgwPDzsCUIpbQDabJUBz8RiAMcYEXoaFN3VeLHVcSYKFnigKqD55ooDUbVXbClBVdZzn+QqAB9ls1jXa8vKyvd2fiUjkrtv/2P8k3wBUY3rVs5d/2QAAAABJRU5ErkJggg==\'), auto';
    }
    
    setupProgramButtons();
    
    // Setup the desktop icons
    setupDesktopIcons();
    
    setupBootSystem();
    
    console.log('All scripts loaded successfully!');
});

/**
 * Sets up mobile navigation toggle
 */
function setupMobileNav() {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

/**
 * Generate random visitor count
 */
function randomizeVisitorCounter() {
    const visitorCount = document.getElementById('visitor-count');
    if (visitorCount) {
        // Generate number between 1000 and 9999
        const randomNum = Math.floor(Math.random() * 9000) + 1000;
        visitorCount.textContent = randomNum;
    }
}

/**
 * Sets up the virtual PC boot sequence
 */
function setupVirtualPC() {
    const bootButton = document.getElementById('boot-pc');
    const snakeButton = document.getElementById('start-snake');
    
    if (bootButton) {
        bootButton.addEventListener('click', function() {
            // Change button text
            bootButton.textContent = 'BOOTING...';
            bootButton.disabled = true;
            
            // Create boot sequence dialog
            const bootDialog = document.createElement('div');
            bootDialog.className = 'boot-dialog';
            bootDialog.innerHTML = `
                <div class="boot-dialog-content">
                    <div class="boot-dialog-header">
                        <div class="boot-dialog-title">REEL BIG OS v1.0</div>
                        <button id="close-boot-dialog">×</button>
                    </div>
                    <div class="boot-dialog-body">
                        <pre id="boot-text"></pre>
                    </div>
                </div>
            `;
            document.body.appendChild(bootDialog);
            
            // Add boot dialog styling
            addBootDialogStyle();
            
            // Simulate boot sequence
            const bootText = document.getElementById('boot-text');
            let bootIndex = 0;
            const bootLines = [
                'REEL BIG OS v1.0 - Film Production Edition',
                'Copyright (c) 2024 Reel Big Corporation',
                '',
                'Initializing system...',
                'Loading creative modules...',
                'Checking video codecs...',
                'Loading retro filters...',
                'Initializing modern rendering engine...',
                'Loading film grain simulation...',
                'Calibrating color grading...',
                'Loading Snake game engine...',
                '',
                'SYSTEM READY',
                'Welcome to Reel Big OS!'
            ];
            
            const bootInterval = setInterval(function() {
                if (bootIndex < bootLines.length) {
                    bootText.textContent += bootLines[bootIndex] + '\n';
                    bootIndex++;
                    
                    // Auto-scroll to bottom
                    bootText.scrollTop = bootText.scrollHeight;
                } else {
                    clearInterval(bootInterval);
                    
                    // Show the Snake game button
                    snakeButton.style.display = 'inline-block';
                    
                    // Reset boot button after delay
                    setTimeout(function() {
                        bootButton.textContent = 'BOOT SYSTEM';
                        bootButton.disabled = false;
                    }, 1500);
                }
            }, 400);
            
            // Close dialog button functionality
            document.getElementById('close-boot-dialog').addEventListener('click', function() {
                bootDialog.remove();
                bootButton.textContent = 'BOOT SYSTEM';
                bootButton.disabled = false;
            });
        });
    }
    
    // Set up Snake game button
    if (snakeButton) {
        snakeButton.addEventListener('click', function() {
            launchSnakeGame();
        });
    }
}

/**
 * Adds styling for the boot dialog
 */
function addBootDialogStyle() {
    // Only add if it doesn't exist yet
    if (!document.getElementById('boot-dialog-style')) {
        const style = document.createElement('style');
        style.id = 'boot-dialog-style';
        style.textContent = `
            .boot-dialog {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            }
            
            .boot-dialog-content {
                background-color: #000000;
                width: 80%;
                max-width: 600px;
                border: 2px solid #00ff00;
                box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
            }
            
            .boot-dialog-header {
                background-color: #000080;
                color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.5rem 1rem;
                font-family: 'VT323', monospace;
            }
            
            .boot-dialog-title {
                font-size: 1.2rem;
            }
            
            #close-boot-dialog {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                line-height: 1;
            }
            
            .boot-dialog-body {
                padding: 1rem;
            }
            
            #boot-text {
                font-family: monospace;
                color: #00ff00;
                background-color: #000000;
                padding: 1rem;
                height: 300px;
                overflow-y: auto;
                margin: 0;
                white-space: pre;
                line-height: 1.5;
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Sets up smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Sets up portfolio video interactions
 */
function setupPortfolioInteraction() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        // Add hover effect
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Get video iframe
        const iframe = item.querySelector('iframe');
        if (iframe) {
            // Stop video when scrolled out of view
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        // In view
                    } else {
                        // Out of view - stop video if possible
                        const src = iframe.src;
                        iframe.src = src;
                    }
                },
                { threshold: 0.3 }
            );
            
            observer.observe(item);
        }
    });
}

/**
 * Sets up contact form validation and submission
 */
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let valid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            // Reset previous error styles
            [name, email, subject, message].forEach(field => {
                field.style.borderColor = '';
            });
            
            // Check required fields
            if (!name.value.trim()) {
                name.style.borderColor = 'red';
                valid = false;
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                email.style.borderColor = 'red';
                valid = false;
            }
            
            if (!subject.value.trim()) {
                subject.style.borderColor = 'red';
                valid = false;
            }
            
            if (!message.value.trim()) {
                message.style.borderColor = 'red';
                valid = false;
            }
            
            if (valid) {
                // Simulate form submission
                const submitButton = contactForm.querySelector('.submit-button');
                const originalText = submitButton.textContent;
                
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
                
                // Forward form data to donald.hien.nguyen@gmail.com
                // In a real implementation, this would send to a server endpoint
                // that handles the email forwarding
                const formData = {
                    name: name.value,
                    email: email.value,
                    subject: subject.value,
                    message: message.value,
                    forwardTo: 'donald.hien.nguyen@gmail.com'
                };
                
                console.log('Form submission:', formData);
                
                // For demonstration, we'll simulate a successful submission
                // In production, you would use a form backend service
                setTimeout(function() {
                    // Show success message
                    showFormResponse(true, 'Message sent successfully! We will get back to you soon.');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                }, 1500);
            } else {
                showFormResponse(false, 'Please fill in all required fields correctly.');
            }
        });
    }
}

/**
 * Validates email format
 */
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Shows form response message (success or error)
 */
function showFormResponse(success, message) {
    // Remove any existing response
    const existingResponse = document.querySelector('.form-response');
    if (existingResponse) {
        existingResponse.remove();
    }
    
    // Create new response element
    const responseElement = document.createElement('div');
    responseElement.className = 'form-response ' + (success ? 'success' : 'error');
    responseElement.textContent = message;
    
    // Add styling
    responseElement.style.padding = '10px';
    responseElement.style.marginTop = '20px';
    responseElement.style.borderRadius = '4px';
    responseElement.style.backgroundColor = success ? '#4caf5033' : '#f4433633';
    responseElement.style.color = success ? '#4caf50' : '#f44336';
    responseElement.style.border = '1px solid ' + (success ? '#4caf50' : '#f44336');
    
    // Add to form
    const form = document.getElementById('contact-form');
    form.appendChild(responseElement);
    
    // Auto-remove after delay if success
    if (success) {
        setTimeout(() => {
            responseElement.style.opacity = '0';
            responseElement.style.transition = 'opacity 0.5s ease';
            setTimeout(() => responseElement.remove(), 500);
        }, 5000);
    }
}

/**
 * Sets up the dial-up connection simulator
 */
function setupDialupSimulator() {
    const dialupButton = document.getElementById('dialup-button');
    const dialupSound = document.getElementById('dialup-sound');
    const dialupStatus = document.getElementById('dialup-status');
    const dialupAnimation = document.querySelector('.dialup-animation');
    
    if (dialupButton && dialupSound && dialupStatus) {
        let isConnecting = false;
        
        dialupButton.addEventListener('click', function() {
            if (!isConnecting) {
                // Start connection
                isConnecting = true;
                dialupButton.textContent = 'Connecting...';
                dialupStatus.textContent = 'Status: Dialing...';
                
                // Add connecting animation class
                dialupAnimation.classList.add('connecting');
                
                // Add AOL dial-up animation
                let dialupArt = dialupAnimation.querySelector('.ascii-art');
                const originalArt = dialupArt.innerHTML;
                
                // Play dial-up sound
                dialupSound.play();
                
                // Simulate connection steps with changing ASCII art
                setTimeout(function() {
                    dialupStatus.textContent = 'Status: Establishing connection...';
                    dialupArt.innerHTML = `
   ___________
  /           \\
 /  O     O    \\
|    [MODEM]    |
|    .....      |
|___/\\/\\/\\/\\_____|
                    `;
                }, 4000);
                
                setTimeout(function() {
                    dialupStatus.textContent = 'Status: Authenticating...';
                    dialupArt.innerHTML = `
   ___________
  /           \\
 /  O     O    \\
|    [MODEM]    |
|    |||||      |
|____/\\/\\/\\_____|
                    `;
                }, 8000);
                
                // Complete connection
                setTimeout(function() {
                    dialupStatus.textContent = 'Status: Connected at 56Kbps!';
                    dialupButton.textContent = 'Disconnect';
                    isConnecting = false;
                    dialupAnimation.classList.remove('connecting');
                    
                    // Reset ASCII art
                    dialupArt.innerHTML = originalArt;
                    
                    // Show email signup popup
                    showEmailSignupPopup();
                }, 12000);
            } else {
                // Cancel if still connecting
                dialupSound.pause();
                dialupSound.currentTime = 0;
                dialupStatus.textContent = 'Status: Disconnected';
                dialupButton.textContent = 'Connect to Internet';
                isConnecting = false;
                dialupAnimation.classList.remove('connecting');
            }
        });
    }
}

/**
 * Shows a "You've Got Mail" notification
 */
function showMailNotification() {
    const mailNotification = document.createElement('div');
    mailNotification.className = 'mail-notification';
    mailNotification.innerHTML = `
        <div class="mail-content">
            <h3>You've Got Mail!</h3>
            <p>From: studio@reelbigcorp.com</p>
            <p>Subject: Welcome to Reel Big Network!</p>
            <button id="close-mail" class="retro-button">Close</button>
        </div>
    `;
    document.body.appendChild(mailNotification);
    
    // Add mail notification styling
    const style = document.createElement('style');
    style.textContent = `
        .mail-notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 999;
        }
        
        .mail-content {
            background-color: #c0c0c0;
            border: 3px ridge #ffffff;
            color: #000000;
            padding: 15px;
            width: 300px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        }
        
        .mail-content h3 {
            color: #000080;
            margin-top: 0;
        }
    `;
    document.head.appendChild(style);
    
    // Set up close button
    document.getElementById('close-mail').addEventListener('click', function() {
        mailNotification.remove();
    });
    
    // Auto-close after 10 seconds
    setTimeout(function() {
        if (document.body.contains(mailNotification)) {
            mailNotification.remove();
        }
    }, 10000);
}

// Add webring functionality
function setupWebring() {
    const webringLinks = document.querySelectorAll('.webring-links a');
    
    if (webringLinks.length > 0) {
        // Previous site link
        webringLinks[0].addEventListener('click', function(e) {
            e.preventDefault();
            alert('You are already at the first site in the Filmmaker\'s Webring!');
        });
        
        // Random site link
        webringLinks[1].addEventListener('click', function(e) {
            e.preventDefault();
            const randomSites = [
                'https://reelbigstudio.com',
                'https://youtube.com/@iamdonaldland',
                'https://instagram.com/reelbigstudio'
            ];
            const randomIndex = Math.floor(Math.random() * randomSites.length);
            if (confirm('You are about to visit a random site in the Filmmaker\'s Webring. Continue?')) {
                window.open(randomSites[randomIndex], '_blank');
            }
        });
        
        // Next site link
        webringLinks[2].addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('You are about to visit the next site in the Filmmaker\'s Webring: Reel Big Studios. Continue?')) {
                window.open('https://reelbigstudio.com', '_blank');
            }
        });
    }
}

// Setup footer ASCII divider dynamic width
function setupDynamicDividers() {
    const updateDividers = () => {
        const dividerElements = document.querySelectorAll('.divider-ascii');
        dividerElements.forEach(divider => {
            // Adjust ASCII art divider if needed based on window width
            if (window.innerWidth <= 768) {
                divider.style.fontSize = '0.6rem';
            } else {
                divider.style.fontSize = '0.8rem';
            }
        });
    };
    
    window.addEventListener('resize', updateDividers);
    updateDividers(); // Initial setup
}

/**
 * Sets up the program manager buttons to navigate to different sections
 */
function setupProgramButtons() {
    const programButtons = document.querySelectorAll('.program-button');
    
    programButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            if (targetSection) {
                const targetElement = document.querySelector(targetSection);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Setup social button to toggle footer visibility
    const socialButton = document.getElementById('social-button');
    if (socialButton) {
        socialButton.addEventListener('click', toggleFooterVisibility);
    }
}

/**
 * Launches a simple Snake game dialog
 */
function launchSnakeGame() {
    // Create game dialog
    const gameDialog = document.createElement('div');
    gameDialog.className = 'game-dialog';
    gameDialog.innerHTML = `
        <div class="game-dialog-content">
            <div class="game-header">
                <h3>Snake Game</h3>
                <span class="game-close">×</span>
            </div>
            <div class="game-container">
                <canvas id="snake-game" width="300" height="300"></canvas>
                <div class="game-controls">
                    <p>Score: <span id="score">0</span></p>
                    <button id="start-game" class="retro-button">⯈ CLICK HERE TO START GAME ⯇</button>
                    <button id="restart-game" class="retro-button" style="display: none;">⯈ RESTART GAME ⯇</button>
                </div>
                <div class="high-scores" style="margin-top: 20px; text-align: left;">
                    <h4 style="color: #00ff00; text-align: center;">High Scores</h4>
                    <div id="high-scores-list" style="max-height: 120px; overflow-y: auto; margin-top: 10px;"></div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(gameDialog);
    
    // Add game dialog styling
    const style = document.createElement('style');
    style.textContent = `
        .game-dialog {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        
        .game-dialog-content {
            background-color: #000080;
            border: 5px solid #c0c0c0;
            width: 90%;
            max-width: 400px;
        }
        
        .game-header {
            background-color: #000080;
            color: #ffffff;
            padding: 5px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .game-header h3 {
            margin: 0;
            color: white;
        }
        
        .game-close {
            cursor: pointer;
            background-color: #c0c0c0;
            color: #000000;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            border: 1px outset #ffffff;
        }
        
        .game-container {
            padding: 20px;
            text-align: center;
        }
        
        #snake-game {
            background-color: #000000;
            border: 2px solid #ffffff;
            margin: 0 auto;
            display: block;
        }
        
        .game-controls {
            margin-top: 15px;
        }
        
        .game-controls p {
            color: #ffffff;
            margin-bottom: 10px;
        }
        
        .score-entry {
            background-color: #000040;
            border: 2px solid #00ff00;
            padding: 15px;
            margin-top: 15px;
            display: none;
        }
        
        .score-entry input {
            background-color: #000000;
            color: #00ff00;
            border: 1px solid #00ff00;
            padding: 5px;
            margin-right: 10px;
            font-family: 'VT323', monospace;
            width: 150px;
        }
        
        .score-entry button {
            background-color: #000080;
            color: #ffffff;
            border: 2px outset #c0c0c0;
            padding: 5px 10px;
            cursor: pointer;
            font-family: 'VT323', monospace;
        }
        
        .high-score-table {
            width: 100%;
            color: #00ff00;
            font-family: 'VT323', monospace;
            border-collapse: collapse;
            font-size: 14px;
        }
        
        .high-score-table th, .high-score-table td {
            padding: 4px;
            text-align: left;
            border-bottom: 1px dashed #008800;
        }
        
        .high-score-table th:last-child, .high-score-table td:last-child {
            text-align: right;
        }
    `;
    document.head.appendChild(style);
    
    // Set up close button
    document.querySelector('.game-close').addEventListener('click', function() {
        gameDialog.remove();
    });
    
    // Get canvas and context
    const canvas = document.getElementById('snake-game');
    const ctx = canvas.getContext('2d');
    
    // Game variables
    const box = 15;
    let score = 0;
    let snake = [];
    let food = {};
    let direction = '';
    let game;
    let gameIsOver = false;
    
    // Initialize snake
    snake[0] = {
        x: 10 * box,
        y: 10 * box
    };
    
    // Load high scores from localStorage
    const highScores = JSON.parse(localStorage.getItem('snakeHighScores') || '[]');
    updateHighScoresDisplay();
    
    // Place food initial position
    placeFood();
    
    // Add event listeners for game controls
    const startButton = document.getElementById('start-game');
    const restartButton = document.getElementById('restart-game');
    
    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', resetGame);
    
    // Prevent arrow keys from scrolling the page
    window.addEventListener('keydown', function(e) {
        if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    });
    
    function startGame() {
        if (gameIsOver) {
            resetGame();
            return;
        }
        
        direction = 'right'; // Initial direction
        startButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
        game = setInterval(updateGame, 100);
    }
    
    function resetGame() {
        clearInterval(game);
        gameIsOver = false;
        score = 0;
        snake = [{
            x: 10 * box,
            y: 10 * box
        }];
        document.getElementById('score').textContent = '0';
        placeFood();
        
        // Remove score entry if it exists
        const scoreEntry = document.querySelector('.score-entry');
        if (scoreEntry) {
            scoreEntry.style.display = 'none';
        }
        
        // Start the game
        direction = 'right';
        game = setInterval(updateGame, 100);
    }
    
    // Control snake direction with keyboard
    document.addEventListener('keydown', function(event) {
        if (document.querySelector('.game-dialog') && !gameIsOver) {
            const key = event.keyCode;
            
            if (key == 37 && direction != 'right') direction = 'left';
            else if (key == 38 && direction != 'down') direction = 'up';
            else if (key == 39 && direction != 'left') direction = 'right';
            else if (key == 40 && direction != 'up') direction = 'down';
        }
    });
    
    function updateGame() {
        // Snake head position
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;
        
        // Update position based on direction
        if (direction == 'right') snakeX += box;
        if (direction == 'left') snakeX -= box;
        if (direction == 'up') snakeY -= box;
        if (direction == 'down') snakeY += box;
        
        // Check if snake ate food
        if (snakeX == food.x && snakeY == food.y) {
            score++;
            document.getElementById('score').textContent = score;
            placeFood();
        } else {
            // Remove tail if no food eaten
            snake.pop();
        }
        
        // Add new head
        let newHead = {
            x: snakeX,
            y: snakeY
        };
        
        // Game over conditions
        if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
            clearInterval(game);
            gameIsOver = true;
            
            // Create score entry form if it doesn't exist
            if (!document.querySelector('.score-entry')) {
                const scoreEntry = document.createElement('div');
                scoreEntry.className = 'score-entry';
                scoreEntry.innerHTML = `
                    <p>Game Over! Your score: ${score}</p>
                    <div style="margin-top: 10px;">
                        <input type="text" id="player-name" placeholder="Enter your name" maxlength="15">
                        <button id="save-score">Save Score</button>
                    </div>
                `;
                
                // Insert after game controls
                const gameControls = document.querySelector('.game-controls');
                gameControls.after(scoreEntry);
                
                // Add event listener to save button
                document.getElementById('save-score').addEventListener('click', function() {
                    const playerName = document.getElementById('player-name').value.trim() || 'Anonymous';
                    saveHighScore(playerName, score);
                    scoreEntry.style.display = 'none';
                });
                
                // Focus the input field
                setTimeout(() => {
                    document.getElementById('player-name').focus();
                }, 100);
            } else {
                // Update existing score entry form
                const scoreEntry = document.querySelector('.score-entry');
                scoreEntry.innerHTML = `
                    <p>Game Over! Your score: ${score}</p>
                    <div style="margin-top: 10px;">
                        <input type="text" id="player-name" placeholder="Enter your name" maxlength="15">
                        <button id="save-score">Save Score</button>
                    </div>
                `;
                scoreEntry.style.display = 'block';
                
                // Add event listener to save button
                document.getElementById('save-score').addEventListener('click', function() {
                    const playerName = document.getElementById('player-name').value.trim() || 'Anonymous';
                    saveHighScore(playerName, score);
                    scoreEntry.style.display = 'none';
                });
                
                // Focus the input field
                setTimeout(() => {
                    document.getElementById('player-name').focus();
                }, 100);
            }
            
            return;
        }
        
        // Add new head to the beginning of snake array
        snake.unshift(newHead);
        
        // Draw everything
        draw();
    }
    
    function saveHighScore(name, score) {
        // Add to high scores
        highScores.push({ name, score, date: new Date().toISOString() });
        
        // Sort by score (highest first)
        highScores.sort((a, b) => b.score - a.score);
        
        // Keep only top 10
        if (highScores.length > 10) {
            highScores.length = 10;
        }
        
        // Save to localStorage
        localStorage.setItem('snakeHighScores', JSON.stringify(highScores));
        
        // Update display
        updateHighScoresDisplay();
    }
    
    function updateHighScoresDisplay() {
        const highScoresList = document.getElementById('high-scores-list');
        
        if (highScores.length === 0) {
            highScoresList.innerHTML = '<p style="color: #00ff00; text-align: center;">No high scores yet. Be the first!</p>';
            return;
        }
        
        let html = `
            <table class="high-score-table">
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
        `;
        
        highScores.forEach((score, index) => {
            html += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${score.name}</td>
                    <td>${score.score}</td>
                </tr>
            `;
        });
        
        html += '</table>';
        highScoresList.innerHTML = html;
    }
    
    function placeFood() {
        food = {
            x: Math.floor(Math.random() * (canvas.width / box)) * box,
            y: Math.floor(Math.random() * (canvas.height / box)) * box
        };
        
        // Make sure food doesn't spawn on snake
        for (let i = 0; i < snake.length; i++) {
            if (food.x == snake[i].x && food.y == snake[i].y) {
                placeFood();
                return;
            }
        }
    }
    
    function collision(head, array) {
        for (let i = 0; i < array.length; i++) {
            if (head.x == array[i].x && head.y == array[i].y) {
                return true;
            }
        }
        return false;
    }
    
    function draw() {
        // Clear canvas
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw snake
        for (let i = 0; i < snake.length; i++) {
            ctx.fillStyle = (i == 0) ? "#00ff00" : "#009900";
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
            
            ctx.strokeStyle = "#000000";
            ctx.strokeRect(snake[i].x, snake[i].y, box, box);
        }
        
        // Draw food
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(food.x, food.y, box, box);
    }
    
    // Initial draw
    draw();
}

// Function to set up desktop icons
function setupDesktopIcons() {
    // Get all desktop icons
    const icons = document.querySelectorAll('.pc-icon');
    
    // Add click event listeners to each icon
    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            const iconType = this.getAttribute('data-type');
            
            // Handle each icon type
            switch(iconType) {
                case 'portfolio':
                    scrollToSection('#portfolio');
                    break;
                case 'about':
                    scrollToSection('#about');
                    break;
                case 'social':
                    // Open Instagram in a new tab
                    window.open('https://www.instagram.com/reelbigstudio/', '_blank');
                    break;
                case 'photos':
                    // Navigate to the photos section
                    scrollToSection('#photos');
                    break;
                case 'snake':
                    // Update the status message
                    document.querySelector('.pc-status').textContent = 'Loading Snake Game...';
                    
                    // Launch the Snake game after a short delay
                    setTimeout(() => {
                        launchSnakeGame();
                    }, 800);
                    break;
                default:
                    // Update the status message for unknown icons
                    document.querySelector('.pc-status').textContent = 'Program not found.';
            }
            
            // Visual feedback for click
            this.querySelector('.icon-box').style.backgroundColor = '#aaaaaa';
            setTimeout(() => {
                this.querySelector('.icon-box').style.backgroundColor = '#ffffff';
            }, 300);
        });
    });
    
    // Add window controls functionality
    document.querySelector('.pc-controls .minimize').addEventListener('click', function() {
        document.querySelector('.pc-status').textContent = 'Window minimized.';
    });
    
    document.querySelector('.pc-controls .maximize').addEventListener('click', function() {
        document.querySelector('.pc-status').textContent = 'Window maximized.';
    });
    
    document.querySelector('.pc-controls .close').addEventListener('click', function() {
        document.querySelector('.pc-status').textContent = 'System shutting down...';
        setTimeout(() => {
            document.querySelector('.pc-content').style.backgroundColor = '#000000';
            document.querySelector('.pc-desktop').innerHTML = '<div style="color:#00ff00;margin-top:130px;font-family:VT323,monospace;">System Halted.</div>';
        }, 1000);
    });
}

// Helper function to scroll to a section
function scrollToSection(selector) {
    const section = document.querySelector(selector);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to set up boot and game buttons
function setupBootSystem() {
    const bootButton = document.getElementById('boot-button');
    const pcContent = document.querySelector('.pc-content');
    const originalContent = pcContent.innerHTML; // Store the original content
    
    let isBooting = false;
    
    bootButton.addEventListener('click', function() {
        if (isBooting) return; // Prevent multiple clicks during boot
        
        isBooting = true;
        
        // Disable the boot button
        this.disabled = true;
        this.textContent = 'BOOTING...';
        this.classList.add('disabled');
        
        // Boot sequence
        pcContent.innerHTML = '<div style="color:#00ff00;font-family:VT323,monospace;text-align:left;white-space:pre;padding:20px;height:100%;overflow:auto;"></div>';
        const terminal = pcContent.querySelector('div');
        
        let bootText = '';
        const bootMessages = [
            'Initializing Reel Big OS v1.0...',
            'Checking system configuration...',
            'Loading system components...',
            'Initializing video drivers...',
            'Loading file system...',
            'Setting up network configuration...',
            'Loading user interface...',
            'Loading Snake game engine...',
            'System boot complete!'
        ];
        
        let i = 0;
        const typeInterval = setInterval(function() {
            if (i < bootMessages.length) {
                bootText += bootMessages[i] + '\n';
                terminal.textContent = bootText;
                terminal.scrollTop = terminal.scrollHeight;
                i++;
            } else {
                clearInterval(typeInterval);
                
                // After boot sequence, restore original content with added Snake
                setTimeout(function() {
                    // Re-enable the boot button
                    bootButton.textContent = 'REBOOT SYSTEM';
                    bootButton.classList.remove('disabled');
                    bootButton.disabled = false;
                    isBooting = false;
                    
                    // Restore original content
                    pcContent.innerHTML = originalContent;
                    
                    // Add snake game icon if not already present
                    let snakeIconExists = false;
                    const pcIcons = pcContent.querySelectorAll('.pc-icon');
                    pcIcons.forEach(icon => {
                        if (icon.getAttribute('data-type') === 'snake') {
                            snakeIconExists = true;
                        }
                    });
                    
                    if (!snakeIconExists) {
                        const iconsContainer = pcContent.querySelector('.pc-icons');
                        const snakeIcon = document.createElement('div');
                        snakeIcon.className = 'pc-icon';
                        snakeIcon.setAttribute('data-type', 'snake');
                        snakeIcon.innerHTML = `
                            <div class="icon-box">🐍</div>
                            <div class="icon-text">Snake</div>
                        `;
                        iconsContainer.appendChild(snakeIcon);
                    }
                    
                    // Update the status message
                    const statusElement = pcContent.querySelector('.pc-status');
                    if (statusElement) {
                        statusElement.textContent = 'System Ready: Boot complete!';
                    }
                    
                    // Re-attach event listeners
                    setupDesktopIcons();
                    setupWelcomeButtons();
                    
                }, 1000);
            }
        }, 300);
    });
}

// Function to toggle footer visibility for social links
function toggleFooterVisibility() {
    const footer = document.getElementById('footer');
    
    if (footer) {
        const computedStyle = window.getComputedStyle(footer);
        if (computedStyle.display === 'none') {
            footer.style.display = 'block';
            
            // Scroll to footer
            setTimeout(() => {
                footer.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            footer.style.display = 'none';
        }
    }
}

// Setup welcome window buttons
function setupWelcomeButtons() {
    const portfolioBtn = document.getElementById('view-portfolio-btn');
    const contactBtn = document.getElementById('contact-us-btn');
    
    if (portfolioBtn) {
        portfolioBtn.addEventListener('click', function() {
            scrollToSection('#portfolio');
        });
    }
    
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            scrollToSection('#contact');
        });
    }
}

// Function to show email signup popup
function showEmailSignupPopup() {
    // Create the popup if it doesn't exist
    if (!document.querySelector('.email-popup')) {
        const emailPopup = document.createElement('div');
        emailPopup.className = 'email-popup';
        emailPopup.innerHTML = `
            <div class="email-popup-header">
                <span class="email-popup-title">Welcome to Our Network!</span>
                <span class="email-popup-close">×</span>
            </div>
            <div>
                <p>You've successfully connected to our network! Want to stay in touch?</p>
                <ul>
                    <li>Join our email list for updates</li>
                    <li>Contact us to collaborate on projects</li>
                </ul>
                <form class="email-form" id="email-signup-form">
                    <input type="email" id="signup-email" placeholder="your@email.com" required>
                    <button type="submit" class="retro-button">Subscribe</button>
                </form>
                <div id="signup-message"></div>
            </div>
        `;
        document.body.appendChild(emailPopup);
        
        // Show the popup
        emailPopup.style.display = 'block';
        
        // Close button functionality
        document.querySelector('.email-popup-close').addEventListener('click', function() {
            emailPopup.style.display = 'none';
        });
        
        // Form submission
        document.getElementById('email-signup-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('signup-email').value;
            
            // Simulate sending to a database
            setTimeout(function() {
                document.getElementById('signup-message').innerHTML = `
                    <p style="color: green; margin-top: 10px;">Thanks for subscribing with ${email}!</p>
                `;
                // Store email in localStorage as a simple "database"
                const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
                subscribers.push({ email: email, date: new Date().toISOString() });
                localStorage.setItem('subscribers', JSON.stringify(subscribers));
                
                document.getElementById('signup-email').value = '';
                
                // Auto-close after 3 seconds
                setTimeout(function() {
                    emailPopup.style.display = 'none';
                }, 3000);
            }, 1000);
        });
    } else {
        // Just show the existing popup
        document.querySelector('.email-popup').style.display = 'block';
    }
} 