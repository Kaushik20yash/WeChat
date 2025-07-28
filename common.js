window.onload = function() {
  var namee = localStorage.getItem('wechat_username');
  if (namee) {
    var displayy = document.getElementById("displayname");
    if (displayy) displayy.textContent = namee;
  }
  
  // Initialize search functionality
  initializeSearch();
  
  // Initialize dark mode
  initializeDarkMode();
}

var contentt = document.getElementById(inputmail);
var namee=contentt.value;
var displayy = document.getElementById("displayname");
displayy.textContent=namee;

// Dark Mode Functions
function initializeDarkMode() {
  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('wechat_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    if (savedTheme === 'dark') {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  } else if (prefersDark) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
  
  // Update theme toggle button
  updateThemeToggle();
}

function toggleDarkMode() {
  const isDark = document.body.classList.contains('dark-mode');
  
  if (isDark) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
  
  // Save preference
  localStorage.setItem('wechat_theme', isDark ? 'light' : 'dark');
  
  // Update toggle button
  updateThemeToggle();
}

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  document.documentElement.setAttribute('data-theme', 'dark');
  
  // Apply dark mode styles
  applyDarkModeStyles();
}

function enableLightMode() {
  document.body.classList.remove('dark-mode');
  document.documentElement.setAttribute('data-theme', 'light');
  
  // Apply light mode styles
  applyLightModeStyles();
}

function updateThemeToggle() {
  const themeButton = document.getElementById('theme');
  const isDark = document.body.classList.contains('dark-mode');
  
  if (themeButton) {
    const icon = themeButton.querySelector('i');
    if (icon) {
      if (isDark) {
        icon.className = 'fa-solid fa-sun';
        icon.style.color = '#ffd700';
        themeButton.title = 'Switch to Light Mode';
      } else {
        icon.className = 'fa-solid fa-moon';
        icon.style.color = '#ffd700';
        themeButton.title = 'Switch to Dark Mode';
      }
    }
    
    // Add visual feedback for the button
    themeButton.style.transition = 'all 0.3s ease';
    themeButton.style.cursor = 'pointer';
    
    // Add hover effect
    themeButton.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
      this.style.backgroundColor = isDark ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 215, 0, 0.2)';
    });
    
    themeButton.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.backgroundColor = '';
    });
  }
  
  // Show theme status notification
  showThemeNotification(isDark ? 'Dark Mode Enabled' : 'Light Mode Enabled');
}

function showThemeNotification(message) {
  // Remove existing notification
  const existingNotification = document.getElementById('theme-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification
  const notification = document.createElement('div');
  notification.id = 'theme-notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 10000;
    font-size: 14px;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 2 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 2000);
}

function applyDarkModeStyles() {
  const style = document.getElementById('dark-mode-styles') || createDarkModeStyleSheet();
  
  style.textContent = `
    /* Dark Mode Styles */
    .dark-mode {
      background-color: #1a1a1a !important;
      color: #ffffff !important;
    }
    
    .dark-mode nav {
      background-color: #262828 !important;
      border-bottom-color: #404040 !important;
      color: #ffffff !important;
    }
    
    .dark-mode #sidebar {
      background-color: #262828 !important;
      border-right-color: #404040 !important;
      color: #ffffff !important;
    }
    
    .dark-mode #dashboard {
      background-color: #1a1a1a !important;
      color: #ffffff !important;
    }
    
    .dark-mode #header {
      color: #ffffff !important;
    }
    
    .dark-mode .items {
      color: #ffffff !important;
    }
    
    .dark-mode .items a {
      color: #ffffff !important;
    }
    
    .dark-mode .items.active {
      background: linear-gradient(to left, rgba(0, 0, 255, 0.574), #404040) !important;
    }
    
    .dark-mode .messages {
      background-color: #2d2d2d !important;
      border-color: #404040 !important;
    }
    
    .dark-mode .messages:hover {
      background-color: #3d3d3d !important;
    }
    
    .dark-mode .message-text p {
      color: #ffffff !important;
    }
    
    .dark-mode .time p {
      color: #cccccc !important;
    }
    
    .dark-mode .online {
      color: #ffffff !important;
    }
    
    .dark-mode .online h2 {
      color: #ffffff !important;
    }
    
    .dark-mode .online p {
      color: #cccccc !important;
    }
    
    .dark-mode .user-online p {
      color: #ffffff !important;
    }
    
    .dark-mode .container2 > div {
      background-color: #2d2d2d !important;
      border-color: #404040 !important;
    }
    
    .dark-mode .container2 h3 {
      color: #ffffff !important;
    }
    
    .dark-mode .container2 p {
      color: #cccccc !important;
    }
    
    .dark-mode .containerp {
      color: #ffffff !important;
    }
    
    .dark-mode .containerp p {
      color: #ffffff !important;
    }
    
    .dark-mode .containerp input {
      background-color: #2d2d2d !important;
      color: #ffffff !important;
      border-color: #404040 !important;
    }
    
    .dark-mode .containerp p {
      color: #ffffff !important;
    }
    
    .dark-mode .profile-picture {
      border-color: #e339e4 !important;
    }
    
    .dark-mode .change-photo-btn {
      background-color: #e339e4 !important;
    }
    
    .dark-mode .change-photo-btn:hover {
      background-color: #d129d1 !important;
    }
    
    .dark-mode .save-btn {
      background: linear-gradient(to right,#e339e4,#e339e4,#2d2d2d) !important;
      color: #ffffff !important;
    }
    
    .dark-mode .cancel-btn {
      background: linear-gradient(to right,#2d2d2d,rgb(251, 235, 235)) !important;
      color: #ffffff !important;
    }
    
    .dark-mode .success-notification {
      background-color: #4CAF50 !important;
      color: #ffffff !important;
    }
    
    .dark-mode .container {
      color: #ffffff !important;
    }
    
    .dark-mode .container h2 {
      color: #ffffff !important;
    }
    
    .dark-mode .container p {
      color: #cccccc !important;
    }
    
    .dark-mode .Appearance,
    .dark-mode .notification,
    .dark-mode .Privacy {
      background-color: #2d2d2d !important;
      border-color: #404040 !important;
    }
    
    .dark-mode #search {
      background-color: #2d2d2d !important;
      color: #ffffff !important;
      border-color: #404040 !important;
    }
    
    .dark-mode #search::placeholder {
      color: #cccccc !important;
    }
    
    .dark-mode #search-suggestions {
      background-color: #2d2d2d !important;
      border-color: #404040 !important;
    }
    
    .dark-mode #search-suggestions div {
      color: #ffffff !important;
      border-bottom-color: #404040 !important;
    }
    
    .dark-mode #search-suggestions div:hover {
      background-color: #3d3d3d !important;
    }
    
    .dark-mode #overlay {
      background-color: rgba(0, 0, 0, 0.7) !important;
    }
    
    .dark-mode #formm,
    .dark-mode #user-profile {
      background-color: #2d2d2d !important;
      color: #ffffff !important;
    }
    
    .dark-mode #formm input,
    .dark-mode #user-profile input {
      background-color: #1a1a1a !important;
      color: #ffffff !important;
      border-color: #404040 !important;
    }
    
    .dark-mode #formm label,
    .dark-mode #user-profile label {
      color: #ffffff !important;
    }
    
    .dark-mode #chatArea {
      background-color: #1a1a1a !important;
    }
    
    .dark-mode #messaging {
      background-color: #2d2d2d !important;
      border-top-color: #404040 !important;
    }
    
    .dark-mode #messaging input {
      background-color: #1a1a1a !important;
      color: #ffffff !important;
    }
    
    .dark-mode #messaging input::placeholder {
      color: #cccccc !important;
    }
    
    .dark-mode .green-dot {
      background-color: #00ff00 !important;
    }
    
    .dark-mode .num {
      background-color: #ff4444 !important;
      color: #ffffff !important;
    }
    
    /* Dashboard Quick Stats Dark Mode */
    .dark-mode .stats-content h3 {
      color: #ffffff !important;
    }
    
    .dark-mode .stats .box h2 {
      color: #000000 !important;
    }
    
    .dark-mode .stats .box p {
      color: #000000 !important;
    }
    
    .dark-mode .stats .box {
      background-color: #f0f0f0 !important;
      border: 1px solid #404040 !important;
    }
    
    /* Login and Signup Dark Mode Styles */
    .dark-mode .container[style*="background-color: rgba(0, 0, 0, 0.093)"] {
      background-color: rgba(0, 0, 0, 0.8) !important;
      border-color: #404040 !important;
      box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.2) !important;
    }
    
    .dark-mode .desc p {
      color: #ffffff !important;
    }
    
    .dark-mode .input-email input {
      background-color: #2d2d2d !important;
      color: #ffffff !important;
      border-color: #404040 !important;
    }
    
    .dark-mode .input-email input::placeholder {
      color: #cccccc !important;
    }
    
    .dark-mode .btn {
      background-color: #404040 !important;
      color: #ffffff !important;
    }
    
    .dark-mode .btn .box {
      color: #ffffff !important;
    }
    
    .dark-mode .footer p {
      color: #ffffff !important;
    }
    
    .dark-mode .footer a {
      color: #4a9eff !important;
    }
    
    /* Story Page Dark Mode Styles */
    .dark-mode .pin_container {
      background-color: #1a1a1a !important;
    }
    
    .dark-mode .card {
      background-color: #2d2d2d !important;
      border-color: #404040 !important;
    }
    
    .dark-mode .card:hover {
      background-color: #3d3d3d !important;
    }
    
    .dark-mode .pin_container {
      background-color: #1a1a1a !important;
    }
    
    .dark-mode .card {
      border-color: #404040 !important;
    }
    
    .dark-mode .card:hover {
      border-color: #7272e5 !important;
      box-shadow: 0px 0px 20px #7272e5 !important;
    }
    
    .dark-mode .loading {
      color: #cccccc !important;
    }
    
    .dark-mode .loading-spinner {
      border-color: #404040 !important;
      border-top-color: #7272e5 !important;
    }
  `;
}

function applyLightModeStyles() {
  const style = document.getElementById('dark-mode-styles');
  if (style) {
    style.textContent = '';
  }
}

function createDarkModeStyleSheet() {
  const style = document.createElement('style');
  style.id = 'dark-mode-styles';
  document.head.appendChild(style);
  return style;
}

// Comprehensive search function
function searchclicked() {
  const searchTerm = document.getElementById('search').value.toLowerCase().trim();
  
  if (!searchTerm) {
    // If search is empty, show all items
    showAllItems();
    return;
  }

  // Search in different contexts based on current page
  const currentPage = window.location.pathname.split('/').pop();
  
  switch(currentPage) {
    case 'Chats.html':
      searchChats(searchTerm);
      break;
    case 'contact.html':
      searchContacts(searchTerm);
      break;
    case 'index.html':
    case 'Profile.html':
    case 'Settings.html':
    case 'Story.html':
    case 'darkMode.html':
      searchAll(searchTerm);
      break;
    default:
      searchAll(searchTerm);
  }
}

// Search in chats page
function searchChats(searchTerm) {
  const chatMessages = document.querySelectorAll('.messages');
  const dynamicMessages = document.querySelectorAll('#chatArea div');
  
  // Search in chat list
  chatMessages.forEach(chat => {
    const chatName = chat.querySelector('.message-text p:first-child')?.textContent.toLowerCase() || '';
    const lastMessage = chat.querySelector('.message-text p:last-child')?.textContent.toLowerCase() || '';
    
    if (chatName.includes(searchTerm) || lastMessage.includes(searchTerm)) {
      chat.style.display = 'flex';
      chat.style.backgroundColor = 'rgba(0, 0, 255, 0.1)';
    } else {
      chat.style.display = 'none';
    }
  });
  
  // Search in dynamic messages if chat is open
  if (dynamicMessages.length > 0) {
    dynamicMessages.forEach(message => {
      const messageText = message.textContent.toLowerCase();
      if (messageText.includes(searchTerm)) {
        message.style.display = 'flex';
        message.style.backgroundColor = 'rgba(255, 255, 0, 0.3)';
      } else {
        message.style.display = 'none';
      }
    });
  }
}

// Search in contacts page
function searchContacts(searchTerm) {
  const contactItems = document.querySelectorAll('#contact .container2 > div');
  
  contactItems.forEach(contact => {
    const contactName = contact.querySelector('h3')?.textContent.toLowerCase() || '';
    const contactEmail = contact.querySelector('p')?.textContent.toLowerCase() || '';
    
    if (contactName.includes(searchTerm) || contactEmail.includes(searchTerm)) {
      contact.style.display = 'flex';
      contact.style.backgroundColor = 'rgba(0, 0, 255, 0.1)';
    } else {
      contact.style.display = 'none';
    }
  });
}

// Search across all content
function searchAll(searchTerm) {
  // Search in any visible text content
  const allElements = document.querySelectorAll('*');
  
  allElements.forEach(element => {
    if (element.children.length === 0 && element.textContent) {
      const text = element.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        element.style.backgroundColor = 'rgba(255, 255, 0, 0.3)';
        element.style.borderRadius = '2px';
      }
    }
  });
}

// Show all items (reset search)
function showAllItems() {
  // Reset chat messages
  const chatMessages = document.querySelectorAll('.messages');
  chatMessages.forEach(chat => {
    chat.style.display = 'flex';
    chat.style.backgroundColor = '';
  });
  
  // Reset dynamic messages
  const dynamicMessages = document.querySelectorAll('#chatArea div');
  dynamicMessages.forEach(message => {
    message.style.display = 'flex';
    message.style.backgroundColor = '';
  });
  
  // Reset contact items
  const contactItems = document.querySelectorAll('#contact .container2 > div');
  contactItems.forEach(contact => {
    contact.style.display = 'flex';
    contact.style.backgroundColor = '';
  });
  
  // Reset all highlighted elements
  const highlightedElements = document.querySelectorAll('*[style*="rgba(255, 255, 0, 0.3)"]');
  highlightedElements.forEach(element => {
    element.style.backgroundColor = '';
    element.style.borderRadius = '';
  });
}

// Initialize search functionality
function initializeSearch() {
  const searchInput = document.getElementById('search');
  if (searchInput) {
    // Add event listeners for real-time search
    searchInput.addEventListener('input', function() {
      searchclicked();
    });
    
    // Add event listener for Enter key
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        searchclicked();
      }
    });
    
    // Add event listener for focus to show search suggestions
    searchInput.addEventListener('focus', function() {
      showSearchSuggestions();
    });
    
    // Add event listener for blur to hide search suggestions
    searchInput.addEventListener('blur', function() {
      setTimeout(hideSearchSuggestions, 200);
    });
  }
}

// Show search suggestions
function showSearchSuggestions() {
  const searchInput = document.getElementById('search');
  const suggestions = getSearchSuggestions();
  
  // Remove existing suggestions
  const existingSuggestions = document.getElementById('search-suggestions');
  if (existingSuggestions) {
    existingSuggestions.remove();
  }
  
  if (suggestions.length > 0) {
    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.id = 'search-suggestions';
    suggestionsDiv.style.cssText = `
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      z-index: 1000;
      max-height: 200px;
      overflow-y: auto;
    `;
    
    suggestions.forEach(suggestion => {
      const suggestionItem = document.createElement('div');
      suggestionItem.textContent = suggestion;
      suggestionItem.style.cssText = `
        padding: 8px 12px;
        cursor: pointer;
        border-bottom: 1px solid #eee;
      `;
      suggestionItem.addEventListener('click', function() {
        searchInput.value = suggestion;
        searchclicked();
        hideSearchSuggestions();
      });
      suggestionItem.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f5f5f5';
      });
      suggestionItem.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
      });
      suggestionsDiv.appendChild(suggestionItem);
    });
    
    searchInput.parentNode.style.position = 'relative';
    searchInput.parentNode.appendChild(suggestionsDiv);
  }
}

// Hide search suggestions
function hideSearchSuggestions() {
  const suggestions = document.getElementById('search-suggestions');
  if (suggestions) {
    suggestions.remove();
  }
}

// Get search suggestions based on current page and data
function getSearchSuggestions() {
  const suggestions = [];
  const currentPage = window.location.pathname.split('/').pop();
  
  switch(currentPage) {
    case 'Chats.html':
      // Add chat names and recent messages
      const chatMessages = document.querySelectorAll('.messages');
      chatMessages.forEach(chat => {
        const name = chat.querySelector('.message-text p:first-child')?.textContent;
        const message = chat.querySelector('.message-text p:last-child')?.textContent;
        if (name) suggestions.push(name);
        if (message && message.length < 50) suggestions.push(message);
      });
      break;
      
    case 'contact.html':
      // Add contact names and emails
      const contacts = JSON.parse(sessionStorage.getItem('wechat_contacts') || '[]');
      contacts.forEach(contact => {
        suggestions.push(contact.name);
        suggestions.push(contact.email);
      });
      break;
      
    default:
      // Add common search terms
      suggestions.push('hello', 'meeting', 'project', 'files', 'thanks');
  }
  
  return suggestions.slice(0, 5); // Limit to 5 suggestions
}

// Advanced search with filters
function advancedSearch(searchTerm, filters = {}) {
  const results = {
    chats: [],
    contacts: [],
    messages: []
  };
  
  // Search in chats
  if (filters.includeChats !== false) {
    const chatMessages = document.querySelectorAll('.messages');
    chatMessages.forEach(chat => {
      const chatName = chat.querySelector('.message-text p:first-child')?.textContent || '';
      const lastMessage = chat.querySelector('.message-text p:last-child')?.textContent || '';
      
      if (chatName.toLowerCase().includes(searchTerm.toLowerCase()) || 
          lastMessage.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.chats.push({
          name: chatName,
          lastMessage: lastMessage,
          element: chat
        });
      }
    });
  }
  
  // Search in contacts
  if (filters.includeContacts !== false) {
    const contacts = JSON.parse(sessionStorage.getItem('wechat_contacts') || '[]');
    contacts.forEach(contact => {
      if (contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          contact.email.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.contacts.push(contact);
      }
    });
  }
  
  // Search in messages
  if (filters.includeMessages !== false) {
    const messages = document.querySelectorAll('#chatArea div, .message-text p');
    messages.forEach(message => {
      const messageText = message.textContent || '';
      if (messageText.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.messages.push({
          text: messageText,
          element: message
        });
      }
    });
  }
  
  return results;
}

// Export functions for use in other files
window.searchFunctions = {
  searchclicked,
  searchChats,
  searchContacts,
  searchAll,
  showAllItems,
  advancedSearch,
  getSearchSuggestions
};

// Export dark mode functions
window.darkModeFunctions = {
  toggleDarkMode,
  enableDarkMode,
  enableLightMode,
  updateThemeToggle
};

loadcontext();