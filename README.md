# WeChat 

A modern WeChat clone with comprehensive search functionality and dark mode support.

## Features

### 🔍 Universal Search
- **Real-time Search**: Search across all pages as you type
- **Smart Suggestions**: Context-aware search suggestions based on current page
- **Multi-Context Search**: 
  - **Chats Page**: Search through chat names and messages
  - **Contacts Page**: Search through contact names and emails
  - **All Pages**: Search through any visible text content
- **Visual Feedback**: Highlighted search results with color coding
- **Keyboard Support**: Enter key to execute search

### 🌙 Dark Mode Toggle
- **Universal Toggle**: Works across all pages
- **Persistent Settings**: Theme preference saved in localStorage
- **System Preference Detection**: Automatically detects user's system theme preference
- **Smooth Transitions**: Animated theme switching
- **Visual Feedback**: 
  - Sun icon for dark mode
  - Moon icon for light mode
  - Hover effects and notifications
- **Comprehensive Styling**: Dark mode styles for all components including:
  - Navigation bars
  - Sidebars
  - Chat messages
  - Contact cards
  - Forms and inputs
  - Login/Signup pages
  - Story cards

## How to Use

### Search Functionality
1. Type in the search bar on any page
2. Results are highlighted in real-time
3. Use search suggestions by clicking on them
4. Clear search to show all items

### Dark Mode
1. Click the moon/sun icon in the top navigation
2. Theme switches instantly with smooth animation
3. Your preference is automatically saved
4. Works across all pages and persists between sessions

## Technical Implementation

### Search System
- **File**: `common.js`
- **Functions**: 
  - `searchclicked()` - Main search function
  - `searchChats()` - Chat-specific search
  - `searchContacts()` - Contact-specific search
  - `searchAll()` - Universal search
  - `showSearchSuggestions()` - Search suggestions
  - `advancedSearch()` - Advanced search with filters

### Dark Mode System
- **File**: `common.js`
- **Functions**:
  - `toggleDarkMode()` - Toggle between themes
  - `enableDarkMode()` - Apply dark theme
  - `enableLightMode()` - Apply light theme
  - `updateThemeToggle()` - Update UI elements
  - `applyDarkModeStyles()` - Apply CSS styles

## Browser Compatibility
- Modern browsers with ES6+ support
- localStorage for theme persistence
- CSS Grid and Flexbox for layout

## File Structure
```
WeChat/
├── common.js          # Core functionality (search + dark mode)
├── Chats.html         # Chat interface
├── contact.html       # Contact management
├── index.html         # Dashboard
├── Profile.html       # User profile
├── Settings.html      # App settings
├── Story.html         # Stories feature
├── login.html         # Login page
├── signup.html        # Signup page
└── README.md          # This file
```
