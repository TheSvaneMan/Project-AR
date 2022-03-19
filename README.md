# Project-AR
Penda and Wiktor
Ionic-Cross-Platform-Unity-Rep
// ----------------- Name: undecided ----------------- //
// What is Project-AR?
Project AR aims to be a cross platform, augmented reality art sharing application used by anyone and everyone!
Show off your talent and creativity and place your mark on the physical world!
Share your creations to others by pinning your location on the world and have others see it using Augmented Reality.
Developed using Ionic Native React and Unity Software
The main functionalities are:
- AR where you can place your art or NFT in the real world.
- Add post page where you can add stuff which will be placed in AR later.
- Collection where you can see other users' art which you have found and collected in AR.
- Map where you can see nearby art, find where to go for a hunt and choose to get notified if you're close to some cool virtual stuff.
- Profile with all your posts = art added in AR, option to delete and edit them, settings tab where you can change settings and your personal details.

// -------------- Future Features to be announced ----- //
🏆 📓 :: --------------- To Do ------------------ ::
- Design and code AR functionality in C# ❗
- Update plugin to trigger Unity functions or create native code that overlays Unity activity. (?) ❗
- Build and Test for iOS as well : Might require Objective-C code ❗
- Some small design changes and code optimization
 
// ----------------- Design choices and ideas ----------------- //
We did some inspiration research and made a few sketches in Figma.
https://www.figma.com/file/tPFws5ke8HYNyvaJh7Fvyl/ProjectAR?node-id=0%3A1
We sketched the profile page as a reference because we knew that other pages will not have so many elements. We chose the purple color scheme because it looked good and gave a game-like visual identity. We focused on limiting the amount of stuff on a single page and clicks a user has to make. Our app doesn’t look the same as the mockup, because in production we decided that art has to be bigger and photos shouldn’t be cut to fit a box. The style of the add button will be changed in the next version to the one from our mockup. All of the pages are easy to use and people should have a good mental model from other apps. The only confusing page may be the AR, we will work on it to make it more clear and maybe add some additional information once the AR part is fully connected with the rest of the app.
 
// ----------------- Project structure ----------------- //
We tried to have a clean folders structure so that everything would be easy to find and work with. There are different subfolders for components that have more pages. Ionic has a project structure of its own which is pretty good and can serve as a good base.
 
// ----------------- Thinking in React ----------------- //
We tried to have each component doing only one thing.
When we started coding we should have started with a static version of the app. However we got very excited for the AR part and did that first. Then we added all pages and assembled the app.
During the process we tried to remove unnecessary code, but we still have some of it. We were also trying to have a good structure and use imports and exports to not repeat code.
 
// ----------------- How to run ----------------- //
To run in the browser you just need to get the code into VS code and run “npm install” and “ionic serve”.
To run on Android you have to:
- Download Android studio 
- In tools -> SDK manager install:
    - Android API 32
    - Android 12.0
    - SDK build tools
    - NDK - v. 21.1.6352462
- Unity -> Android embedded Unity -> Android embedded: https://drive.google.com/file/d/1vx5j3Z55teYBmGvNCdQZACjQQhWbL-_K/view, Unzip and put in “C:\UnityProject”
- Run in Android studio, if it doesn't work invalidate caches and rebuild project.

// ----------------- Additional links ----------------- //
First repo: https://github.com/WiktorrWie/ProjectAR
