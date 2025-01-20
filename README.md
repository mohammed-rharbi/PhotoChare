# Photo Sharing App

A mobile application built with **React Native** and **Firebase** that allows users to share photos, interact with others' posts, and manage their profiles.

---

## Features

### Authentication
- User registration and login using Firebase Authentication.
- Persistent session management (users stay logged in).

### Photo Sharing
- Upload photos from the gallery or camera.
- Store photos in Firebase Storage.
- Preview photos before sharing.

### News Feed
- Scrollable feed of shared photos.
- Display user information (username, profile picture) for each photo.
- Lazy loading for smooth scrolling.

### Photo Interaction
- Like and react to photos (e.g., laugh, love).
- Leave comments on photos.
- View the number of likes and comments.

### Follow and Swipe
- Follow other users to see their posts in your feed.
- Swipe to interact with photos (like or skip).

### User Profile
- Customize profile (upload profile picture, update bio).
- View shared photos and liked photos.

---

## Technologies Used
- **Frontend**: React Native, Expo
- **Backend**: Firebase (Authentication, Storage, Firestore)
- **State Management**: React Context API or Redux (optional)
- **Navigation**: React Navigation

---

## Setup Instructions

### Prerequisites
- Node.js installed
- Expo CLI installed (`npm install -g expo-cli`)
- Firebase project set up (with Authentication, Storage, and Firestore enabled)

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/photo-sharing-app.git
   cd photo-sharing-app
