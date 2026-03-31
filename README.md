Project-AR (2026 Refactor Edition)
Penda and Wiktor

The Pitch
Project AR is a cross-platform, augmented reality art-sharing application. It allows creators to "pin" their digital art or NFTs to physical GPS locations. Users can then "hunt" for these virtual goodies in the real world using their smartphone camera.

Tech Stack
Frontend: Ionic 8 + React 18 (Vite Build System)

Navigation: React Router v6

Backend: Firebase (Auth, Realtime Database, Storage)

AR Engine: Unity (Integrated via custom Capacitor/Native bridge)

Mobile Bridge: Capacitor 6

🛠 Modernized "How to Run" (Post-Refactor)
Since we migrated to Vite, the old ionic serve commands are replaced by faster, more modern tooling.

1. Local Web Development
To run the dashboard and profile management in the browser:

Bash
# Install dependencies (Bun is recommended for speed, but npm works)
bun install 

# Start the Vite development server
npm run dev
2. Running the AR Features (Android)
Because AR relies on the Unity engine, it must be run on a physical device.

Prerequisites: Android Studio, SDK 34+, and a physical ARCore-compatible device.

The Unity Library: Ensure your pre-bundled UnityLibrary project is placed in the path defined in your native Android settings.

Build & Sync:

Bash
# Build the web assets
npm run build

# Sync the code to the Android project
npx cap sync android

# Open in Android Studio
npx cap open android
📝 2026 Developer Notes & Refactor Log
During the recent "Fix-it" session, we made the following critical architectural changes:

Vite Migration: Ditched react-scripts (CRA) to fix the "sea of red" dependency vulnerabilities. The app now boots in milliseconds.

Router v6 Transition: Converted all navigation from useHistory to useNavigate. Fixed the routing logic in App.tsx to use the element={<Component />} pattern.

Auth Logic: Cleaned up the onAuthStateChanged listener in App.tsx to prevent memory leaks and ensure the UI reacts instantly to Firebase login/logout.

PWA Setup: Updated the service-worker.ts to be compatible with Vite’s injectManifest strategy.

🏆 To-Do List (Updated)
[ ] Unity-Ionic Bridge: Finalize the C# to JavaScript communication pipeline for "Collecting" art.

[ ] iOS Port: Begin Objective-C bridging now that the React 18 foundation is stable.

[ ] UX Polish: Replace the standard Ionic "Add" button with the custom floating action button from the Figma mockup.

[ ] Map Clustering: Optimize Mapbox/Google Maps to handle hundreds of "Art Pins" without lagging the UI.
