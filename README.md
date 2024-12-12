# WEBSITE URL : https://startup.linguafranca.click/


# Startup Specifications 

## Elevator Pitch:
I love learning languages. The ability to communicate with a new culture in a completely unique way, as well as the thrill of seeing improvement in your own abilities have led me to learn 4 languages in addition to my native language. In this process, I have tried just about every software on the market for learning a language. Duolingo, Pimsleur, HelloTalk, Anki, Quizlet, and many others each have their uses, but personally, I have yet to encounter a software that encompasses all of the essential components of learning a language in one neat, user-friendly application. Based on my own language learning experience, such an app would allow a user to learn up to 1000 vocabulary words, the basics of the grammar, and gain a comfortability in understanding and speaking to native speakers in as little as two months, while only taking up 15-30 minutes a day of the user’s time.  
<br><br>
## Sketch:  
The app will open on a login screen, after which the user will be sent to a home screen with links to other parts of the app:
<br>
<img width="362" alt="Home_Screen" src="https://github.com/user-attachments/assets/ac01b3ed-53a5-4be2-8d36-e5703560aed3">

The main feature of the app will be the Vocab section, in which users can create, upload, and import folders and flashcard sets:
<br>
<img width="384" alt="Vocab_1" src="https://github.com/user-attachments/assets/3dfe5cb0-4b97-439d-a355-29fbcc357de2">

Within the Vocabuly section, users can access flashcard sets organised into folders. individual sets will have notifications on them reminding the reader when it is time to review a set for maximum retention:
<br>
<img width="355" alt="Vocab_2" src="https://github.com/user-attachments/assets/0dbbaba8-af7a-4262-b8ba-db466892936b">

Also included in the app will be a live chat, which can match users up with other users who speak the language they are trying to learn:
<br>
<img width="355" alt="Chat" src="https://github.com/user-attachments/assets/320e85ab-5460-4898-9729-6966b78be3da">
<br>
### Potential other additions to the application may include:  
A simplified, duolingo-like grammar course section.  
A voice-chat option for practicing listening and speaking.  
AI translation suggestions for the flashcard creation process.  
Grammar hints attached to phrases within vocab flashcards.
<br><br>

## Technologies:  
### HTML:  
Correctly formatted HTML will be laced throughout the program to structure the login page, home page, vocabulary pages, chat pages, and possibly eventually some grammar pages. All pages will contain hyperlinks to allow easy navigation for the user.  

### CSS:  
Css will be applied on top of the HTML to ensure proper fitting for different sized screens, good spacing, and a pleasant color scheme. 

### Javascript:  
Javascript will be an essential tool for allowing the user to login to their own personally customised account, create, share, and import language learning resources like flashcard sets, and to code the functionality of the flashcards, allowing the user to flip the card and determine whether or not they have mastered the terms thereon. It will also be used to keep track of which sets the user has studied and when, and remind the user to study each set in accordance with spaced review. 

### React:  
React will be used to supply the user with a very interactive, customiseable, and responsive UI system.

### Web Services:  
other web services such as potentially IP stack, and services for translation will be integrated into the application to track and identify users, and to allow for automated translation suggestions.

### Authentication:  
Users will log in and their information will be stored to allow each user to create/assemble their own library of language resources to fit their needs.

### WebSocket Data:  
Users will be able to live chat with oither users in order to exchange languages and practice using their newfound vocabulary and grammar with natives and other learners.


# **Step 1 HTML:**

The initial implementation of the HTML has a few differences from the original plan. Upon seeing how complex it will be to design this website, I decided to focus on the flashcards portion of the website, and will add other features, like a chat and vocab lessons if time permits. p.s. sorry my files are disgustingly disorganised, it was the only way I could get my images to display on the website.  

My site now contains a login page, a home page with paths to a settings and main vocab page, a vocab sets page, a flashcard set maker page, and a flashcard page.   

### Login:  
The login page is pretty stereotypical, and similar to the Simon login page, accepting an email, a username, and a password to be used later.  

### Home:  
The home page is pretty straightfoward, with some nav links, and some buttons that take you to vocab and settings.  

### Settings:  
The settings page allows the user to select a color scheme and set some preferences for their flashcards using various input elements ***(Database)***. the functionality will be implemented later.  

### Vocab:  
This page contains folders of flashcard sets broken up usually by language, to be implemented is an add folder button that will allow the user to create and store their own language data/sets ***(Database)***. The add folder button will eventually also allow the user to search folders made by other users and import them ***(Websocket/Database)***. 

### Flashcard sets:  
Upon clicking on a vocab folder, you are taken to a library of sets of flashcards for the user to study, and given an option to make more sets ***(Database)***. When another user is studying a set made by you, you will receive a notification ***(Websocket)***. 

### Set maker:  
When the user clicks "make a set" they are directed to the set maker page, where they can insert either a CSV format text to be broken up into flashcards, or a manual interface with calls to a translation service ***(3rd party service call)*** to help the user make new sets.   

### Flashcards:  
When the user clicks on one of ther flashcard sets, they are presented with a simplistic flashcard display, which will cycle through flashcards in the set, play audio from a call to an AI voice service ***(3rd party service call)***, and keep track fo which flashcards the user knows, and which they dont know ***(Database)***.  


# **Step 2 CSS:**  

### Changes:   
I made a couple funcitonality changes to the website, the main one being cutting out the flashcard_sets.html page, and allowing users to just have one large database of flashcards per floder, instead of multiple sets. I inted to implemetn some sort of way for users to rank the importance of their flaschards to allow them to control what order they learn terms in.   

### Header, footer, and main content body:  
Each page contains a header and footer that come intially on a blue background. The header for each page contains the title of the page, as well as a username and profile picture. The footer for each page contains useful links to other places in the website, including a back button. It also contains the github link in the bottom right corner. Each page has a unique main content body to sevr the puroses of that page. this main content body is displayed between the header and footer, intitally on a white background.   

### Navigation elements:  
The Footer contains a nav box with links to the home and login pages, as well as a back button to allow the user to back out of certain pages. The Menu and Vocab pages also contain buttons that link to other pages.  

### Responsive to window resizing:  
Holy cow this was painful to implement, but I finally got all my pages to be reasonably responsive to resizing, I even checked the website on my phone and it seems to resize pretty well.   

### Application elements:  
There are a lot of application elements. There is a button on the vocab page "make new folder" that takes the user to a flashcard maker page, in which they can make and add flashcards, either one at a time, in in bulk using CSV format, and then edit or delete the flashcards they are making. There is also a setting page accesible from the main menu which has elements that will allow users to set a custom color scheme, as well as customise their flashcard experience. the flashcard page itself allows users to study flaschards from their sets, and will keep track of which terms the users did and ddint know.   

### Application text content:  
There is a lot of text content, including labels on buttons and textboxes to help the user navigate the site, and many places for the user to input text.  

### Application images:  
The most prominent images on the website are the user profile picture, and the coverrs for the vocab buttons. Both of these will eventually be customizeable by the user.  



# **Step 3 - JSX/React:**  

This about killed me, and I had to chop off a whole bunch of my website just so I could turn it in and move on.    

### Changes:  
Things dropped:  
-settings  
-the notificaiton animation  
-the menu page  

Things added:  
-flashcard functionality  
-folder & flashcard editability, including the ability to create and delete both folders and flashcards.  
-image/video upload for both folders and flashcards  

### Vite:  
I bundled my files using vite and organized them.    

### React:  
There is a lot of reactivity in my website, including being able to select a username, being able to make new flashcard folders, being able to add flashcards to those folders using the "edit flashcards" button, being able to upload images/videos for both the flashcards and the covers of the folders, next and previous buttons for the flashcards to progress forwards and backwards through your flashcards, clicking on the flashcard displays the other side. Sourcing for the next porject will include a translation service autofill for the flashcard editor, and an AI voice to read flashcards.  

### React Router:   
I have routing to all my different pages, either thorugh buttons in the main or through the links in the footer. I also stored a "current page" variable to be able to control what shows up in the header and footer on certain pages.  

### React Hooks:  
I use tons of hooks, both useState and useEffect to ensure that flashcard data is being correctly updated in real time as you remove or add flashcards to local storage. They are also used to store the folders as JSON strings, and to keep track fo which data belongs to which folder. useState and useEffect are also laced throughout just about every other component of my website as well.  


# **Step 4: Service:**  

### Changes:  
Had to cut back on more stuff, I think I might not be cut out for web development.   
  Dropped:   
    AI text to speech  

  Added:  
    Quote 3rd party service on login page  
    

### Nodejs and Express:  
  Website runs using Node.js and express now.  

### Frontend using Express middleware:  
  The data for my website now runs through express middleware and my index.js file instead of local storage.  

### frontend calls third party service endpoints:  
  My frontend pulls a random quote for the login page from a 3rd party endpoint.   

### backend provides service endpoints:  
  I have a handful of endpoints in index.js prikariy for handling my figures data, which stores the bulk of the information I use in my website.  

### frontend calls your service endpoints:  
  There are various places in my code that post or get to/from my backend endpoints, including sending user data from login, and bosth sending and recieveing data for the flashcard folders on all my other pages.  


# **Step 5: Login:**  

### supports new user registration:  
complete  
It does, and stores each users info in the backend  

### supports existing user authentification and logout:   
complete  
It does, it stores user data and authenticates preexisting users on login  

### stores application data in MongoDB:  
complete (mostly)
sends most application data to the bakcend using database.js and mongo, I am able to access the data that successfully ends up in the database.

### stores and retireves credentials in mongoDB:  
complete  
credentials are sent successfully to mongodb and encrypted and retireved successfully from mongodb  

### restricts application functionality based upon authentication:  
complete
users cant login and are restricted from using the application if not authenticaed




# **Step 6: WebSocket:**    

## Description:  
My website attempts to implement simple websocket functionality to display a message whenever another user logs in to the site. 

### backend listens for websocket connections:   
complete   
implemented peerProxy.js and loginNotifier.js, which each play a role in opening a websocket and listining for connctions.   
### frontend makes websocket connections:  
complete   
authenticated.jsx and loggedin.jsx both interract with the open websocket. authenticated makes a broadcast using loginNotifier.js, successfully making a websocket conenction.   

### data sent over websocket connection:  
partially complete  
a message is created in loggedin.jsx to update users when a fellow user has logged in, this message is sent through the websocket, but is a little flaky on actually going through.  

### websocket data displayed in the application interface:  
complete  
the message sent through websocket displays on the front end, but data is not always conveyed successfully throught the websocket. i.e. the displaying of the websocket data is working, but the sending of the data via the websocket is only semifucntional.   







