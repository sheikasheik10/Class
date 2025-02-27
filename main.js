// Data
const tutors = [
  {
    name: "Dr. Kumara Perera",
    specialty: "Mathematics & Physics",
    description: "Former lecturer at University of Colombo with extensive experience in AL/OL examination preparation.",
    experience: 15,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    name: "Prof. Ranjan Silva",
    specialty: "ICT & Commerce",
    description: "Industry expert with a passion for teaching modern technology and business concepts.",
    experience: 12,
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80"
  },
  {
    name: "Ms. Dilini Fernando",
    specialty: "Biology & Chemistry",
    description: "Experienced educator specializing in practical laboratory techniques and exam preparation.",
    experience: 10,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  }
];

const subjects = [
  "Mathematics",
  "Science",
  "Sinhala",
  "Tamil",
  "English Literature",
  "History",
  "ICT",
  "Commerce",
  "Buddhism",
  "Advanced Level Physics",
  "Advanced Level Chemistry",
  "Advanced Level Biology"
];

const testimonials = [
  {
    name: "Ashan Jayawardena",
    subject: "A/L Mathematics",
    quote: "Thanks to TutorLanka, I secured 3As in my A/Levels and got into the Engineering Faculty at University of Moratuwa.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80"
  },
  {
    name: "Priya Sivakumar",
    subject: "O/L Science",
    quote: "The bilingual teaching approach helped me understand complex concepts clearly. Got an A for Science!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Mohamed Fazil",
    subject: "ICT",
    quote: "The practical approach to teaching ICT helped me develop real-world programming skills. Now I'm working as a software engineer.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  }
];

// Textbooks data
const textbooks = [
  {
    title: "Advanced Mathematics for A/L Students",
    subject: "Mathematics",
    price: "Rs. 2,500",
    description: "Comprehensive guide covering all A/L Mathematics syllabus with practice questions and detailed solutions.",
    image: "https://images.unsplash.com/photo-1576334593255-8a5d7316d892?auto=format&fit=crop&q=80"
  },
  {
    title: "Biology Essentials",
    subject: "Biology",
    price: "Rs. 1,800",
    description: "Complete guide for O/L and A/L Biology with colorful diagrams and exam-focused content.",
    image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&q=80"
  },
  {
    title: "Physics Problem Solver",
    subject: "Physics",
    price: "Rs. 2,200",
    description: "Collection of solved problems for A/L Physics students with step-by-step explanations.",
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80"
  },
  {
    title: "English Literature Anthology",
    subject: "English Literature",
    price: "Rs. 1,500",
    description: "Collection of important literary works with analysis and exam preparation guides.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80"
  }
];

// Initialize Lucide icons
lucide.createIcons();

// Enhanced Mobile menu toggle with animation
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  mobileMenu.classList.toggle('active');
  menuBtn.classList.toggle('active');
  
  // Create a unique animation for the menu icon
  if (isMenuOpen) {
    menuBtn.innerHTML = '<i data-lucide="x"></i>';
    setTimeout(() => {
      menuBtn.style.transform = 'rotate(180deg)';
      setTimeout(() => {
        menuBtn.style.transform = 'rotate(0deg)';
      }, 300);
    }, 150);
  } else {
    menuBtn.innerHTML = '<i data-lucide="menu"></i>';
    menuBtn.style.transform = 'rotate(0deg)';
  }
  
  lucide.createIcons();
});

// Render tutors
const tutorsGrid = document.getElementById('tutorsGrid');
tutorsGrid.innerHTML = tutors.map(tutor => `
  <div class="tutor-card">
    <div class="tutor-image">
      <img src="${tutor.image}" alt="${tutor.name}">
    </div>
    <div class="tutor-info">
      <h3>${tutor.name}</h3>
      <p class="tutor-specialty">${tutor.specialty}</p>
      <p>${tutor.description}</p>
      <div class="tutor-experience">
        <i data-lucide="award"></i>
        <span>${tutor.experience} Years Experience</span>
      </div>
    </div>
  </div>
`).join('');

// Render subjects
const subjectsGrid = document.getElementById('subjectsGrid');
subjectsGrid.innerHTML = subjects.map(subject => `
  <div class="subject-item">
    <p>${subject}</p>
  </div>
`).join('');

// Render testimonials
const testimonialsGrid = document.getElementById('testimonialsGrid');
testimonialsGrid.innerHTML = testimonials.map(testimonial => `
  <div class="testimonial-card">
    <div class="testimonial-header">
      <div class="testimonial-image">
        <img src="${testimonial.image}" alt="${testimonial.name}">
      </div>
      <div class="testimonial-info">
        <h4>${testimonial.name}</h4>
        <p class="testimonial-subject">${testimonial.subject}</p>
      </div>
    </div>
    <p>${testimonial.quote}</p>
  </div>
`).join('');

// Render textbooks
const textbooksGrid = document.getElementById('textbooksGrid');
if (textbooksGrid) {
  textbooksGrid.innerHTML = textbooks.map(textbook => `
    <div class="textbook-card">
      <div class="textbook-image">
        <img src="${textbook.image}" alt="${textbook.title}">
      </div>
      <div class="textbook-info">
        <h3>${textbook.title}</h3>
        <p class="textbook-subject">${textbook.subject}</p>
        <p class="textbook-description">${textbook.description}</p>
        <p class="textbook-price">${textbook.price}</p>
        <button class="btn-whatsapp" onclick="openWhatsAppOrder('${textbook.title}')">
          <i data-lucide="message-circle"></i>
          Order via WhatsApp
        </button>
      </div>
    </div>
  `).join('');
}

// WhatsApp floating button and modal
const whatsappFloat = document.getElementById('whatsappFloat');
const whatsappModal = document.getElementById('whatsappModal');
const whatsappModalClose = document.getElementById('whatsappModalClose');
const whatsappForm = document.getElementById('whatsappForm');
const bookTitleInput = document.getElementById('bookTitle');

// Open WhatsApp modal
function openWhatsAppModal() {
  whatsappModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close WhatsApp modal
function closeWhatsAppModal() {
  whatsappModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Open WhatsApp order with specific book
function openWhatsAppOrder(bookTitle) {
  if (bookTitleInput) {
    bookTitleInput.value = bookTitle;
  }
  openWhatsAppModal();
}

// WhatsApp float click event
if (whatsappFloat) {
  whatsappFloat.addEventListener('click', openWhatsAppModal);
}

// WhatsApp modal close button
if (whatsappModalClose) {
  whatsappModalClose.addEventListener('click', closeWhatsAppModal);
}

// Close modal when clicking outside
if (whatsappModal) {
  whatsappModal.addEventListener('click', (e) => {
    if (e.target === whatsappModal) {
      closeWhatsAppModal();
    }
  });
}

// Handle WhatsApp form submission
if (whatsappForm) {
  whatsappForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const bookTitle = document.getElementById('bookTitle').value;
    const message = document.getElementById('message').value;
    
    // Format the WhatsApp message
    const whatsappMessage = `Hello TutorLanka, I would like to order the following textbook:%0A%0A*Book:* ${bookTitle}%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/94771234567?text=${whatsappMessage}`, '_blank');
    
    // Close the modal
    closeWhatsAppModal();
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu if open
      if (isMenuOpen) {
        isMenuOpen = false;
        mobileMenu.classList.remove('active');
        menuBtn.classList.remove('active');
        menuBtn.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
      }
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Animate sections on scroll
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'all 0.6s ease-out';
  observer.observe(section);
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;
    
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    ripple.style.borderRadius = '50%';
    ripple.style.width = '100px';
    ripple.style.height = '100px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: translate(-50%, -50%) scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);