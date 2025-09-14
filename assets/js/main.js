// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Add animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.highlight-card, .case-study-preview, .post-preview, .stat-card');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Copy to clipboard functionality for code blocks
document.addEventListener('DOMContentLoaded', function() {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(function(codeBlock) {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    
    button.addEventListener('click', function() {
      const code = codeBlock.textContent;
      navigator.clipboard.writeText(code).then(function() {
        button.textContent = 'Copied!';
        button.classList.add('copied');
        
        setTimeout(function() {
          button.textContent = 'Copy';
          button.classList.remove('copied');
        }, 2000);
      });
    });
    
    const pre = codeBlock.parentNode;
    pre.appendChild(button);
  });
});

// Reading progress bar
document.addEventListener('DOMContentLoaded', function() {
  if (document.body.classList.contains('post') || document.querySelector('article.post')) {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      progressBar.style.width = scrolled + '%';
    });
  }
});

// Search functionality (if implemented)
function initSearch() {
  const searchInput = document.querySelector('#search-input');
  const searchResults = document.querySelector('#search-results');
  
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      
      if (query.length > 2) {
        // Implement search logic here
        // This would typically integrate with Jekyll search plugins
        performSearch(query);
      } else {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
      }
    });
  }
}

function performSearch(query) {
  // Placeholder for search implementation
  // In a real implementation, this would search through posts and pages
  console.log('Searching for:', query);
}

// Initialize search on page load
document.addEventListener('DOMContentLoaded', initSearch);