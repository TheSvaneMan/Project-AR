# Project-AR
```Penda and Wiktor```
---
Ionic-Cross-Platform-Unity-Augment-Reality-App
---
// ----------------- Name: Project-AR ----------------- //
---
What is Project-AR?
```
Project AR aims to be a cross platform, augmented reality art sharing application used by anyone and everyone!
Show off your talent and creativity and place your mark on the physical world!
Share your creations to others by pinning your location on the world and have others see it using Augmented Reality.
Developed using Ionic Native React and Unity Software
```
The main intended functionalities are:
- AR Tab: A page where you can place your art or NFT in the real world.
- Add Post: A page where you can add content which will be placed in AR later.
- Collection: A page where you can see other users' art which you have found and collected in AR.
- Map: Is where you can see nearby art, find where to go for a hunt and choose to get notified if you're close to some cool virtual goodies.
- Profile: A page where all your posts/art that you added in AR are shown. There is an option to delete or edit them. The settings tab allows you to change settings and your personal details.
---
// ----------------- Design choices and ideas ----------------- //
---
- We did some inspiration research and made a few sketches in Figma.
- https://www.figma.com/file/tPFws5ke8HYNyvaJh7Fvyl/ProjectAR?node-id=0%3A1
- We made a mid-fidelity mockup, with styling - focusing on the profile page because we knew that other pages will not have so many elements compared to it. We designed different app icons and chose the one we liked most.
```
The potential app icons from best to... worst? :D 
```
<img src="https://i.imgur.com/spLFhnO.png " width="100">
<img src="https://i.imgur.com/VUjC6UW.png " width="100">
<img src="https://i.imgur.com/JEAZpgN.png " width="100">
<img src="https://i.imgur.com/RSVnk5P.png " width="100">
<img src="https://i.imgur.com/lQQCYSU.png " width="100">

- We chose the purple color scheme because it looked good and gave a game-like visual identity. We focused on limiting the amount of 
stuff on a single page and clicks a user has to make. 
- Our app doesn’t look the same as the mockup, because in production we decided that art has to be bigger and 
photos shouldn’t be cut to fit a box. 
- The style of the add button will be changed in the next version to the one from our mockup. 
- All of the pages are easy to use and people should have a good mental model from other apps. The only pontially confusing page, may be the AR Tab. We will work on making it more clear and adding some additional information/helpers, once the AR feature has been more fleshed out and intergrated with the rest of the app.
- We chose Unity for our Augmented Reality solution, as they have a best-in-class solution and free to use. So instead of re-inventing the virtual wheel, we focused on intergrating their android build into our Ionic App (It was hair-pulling at times but the foundation is set). As we will also be working with Unity down the line, this allows us to further improve the app using upcoming material and insight.

---
// ----------------- Project structure ----------------- //
---
- We tried to have a clean and consistent folder structure, so that everything would be easy to find and work with. There are subfolders for each page, to house several components if needed. The shared components will exist outside specific sub-folders, just in components. 
- Ionic has a project structure of its own which is pretty good and has served as a guideline.
--- 
// ----------------- Thinking in React ----------------- //
---
- We tried to have each component doing only one thing.
- When we started the project,  we perhaps should have started with a static version of the app. However we got very excited for the AR part and did that first. We then we added all the remaining pages after and assembled the app.
- During the process of creating new components, we tried to remove unnecessary code, but we still have some of it. 
- We were also trying to have a good file structure and made use imports and exports on a component need basis, as to not repeat code. 
- We left comments on specific areas of code, to make sure we both understood what the purpose and function of the following code block was, plus leaving ideas and future implementations as comments as well. This way, we can attend to them as soon as we read them, instead of diving into a written documentation that exists outside the source code (Good and Bad).
---
// -------------- Future Features: To be announced ----- //
---
🏆 📓 :: --------------- To Do ------------------ ::
- Design and code AR functionality in C# ❗ (Introduce better communication pipeline between our main Ionic app & Unity AR app using our custom Ionic-Unity Plugin script)
- Update plugin to trigger Unity functions or create native code that overlays Unity activity. (?) ❗
- Build and Test for iOS as well : Will require Objective-C code, MacOS system to develop and test on and an iPhone. ❗
- Design updates include improvements to the User Experience, discuss user-journeys and add animations.
- Data management system needs to be designed and coded to accomodate better UX and reduce API calls/Heavy data downloads, throughout the app. ❗
- Refactor code to make use of services to reduce memory leaks. ❗
- Configure Unity to handle firebase access to get relevant data, such as the surrounding AR Post near the user - and the ability to save, share and report Posts.
---
// ----------------- How to run ----------------- //
---
To run in the browser you just need to get the code into VS code(Or your IDE of choice that allows terminal access to npm) and run “npm install” and “ionic serve”.
To run on Android you have to:
- Download Android studio 
- In tools -> SDK manager install:
    - Android API 32
    - Android 12.0
    - SDK build tools
    - NDK - v. 21.1.6352462
- For the AR to work, you must download our pre-bundled UnityLibrary proj that has the AR features. Unity -> Android embedded Unity -> Android embedded: https://1drv.ms/u/s!AuGNE19JPuLjtaR8gxfpbESOI2raQA?e=CwTcwK , Unzip and put in “C:\UnityProject”
- Run in Android studio, if it doesn't work - Go to File, invalidate caches and rebuild project.
- Requires an android phone with developer mode activated and connect to development environment using a USB cable to run the app on.
---
// ----------------- Additional links ----------------- //
```
First repo: https://github.com/WiktorrWie/ProjectAR
```
