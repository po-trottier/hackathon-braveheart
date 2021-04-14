# Projec::Braveheart (Winning Team)

**All services were taken down because we ran out of free credits!**

[![Deploy Functions](https://github.com/po-trottier/project-braveheart/workflows/Deploy%20Functions/badge.svg)](https://github.com/po-trottier/project-braveheart/actions)
[![Docker Image CI](https://github.com/po-trottier/project-braveheart/workflows/Docker%20Image%20CI/badge.svg)](https://github.com/po-trottier/project-braveheart/actions)

This project was created as part of the **ConUHacks V** hackathon on **January 25, 2020** .

**Challenges:**

-  Sun Life Financial: Workplace Well-being Challenge 
-  Zendesk's Sunshine Conversations API Challenge
-  Octave's Build an Innovative Music Player Challenge
-  Telus: Technology for Mental Health Well-being **[WINNER: Second Place]**

### Written by:

- Benjamin Lanthier
- Karl Noory 
- Nahej Lefebvre
- Pierre-Olivier Trottier

---

### Objective

Create an innovative music player that returns playlist tailored to users' mood.

### Target Audience 

Music streaming services users, social media users and music lovers.

### Usage

Head on over to our chat-bot's web page and share your current mood with it. It will return you the link to a music playlist tailored to your current mental state.

- [Link to the bot](https://m.me/105419994348348) (Not functionnal anymore)

- [Demo video (.mp4 download link)](https://github.com/po-trottier/project-braveheart/raw/master/demo/demo.mp4)

### Business Value

Helps users in times of need by providing them with playlists to boost their moods and make them feel better. Allows for a unique and special experience that will make the users feel connected to the platform. Subcscription-based (Free tier with ads + Paid tier) allows for a continuous revenue flow.

### Technology Stack

- Frontend:
    - **Vue.js**
        - Vue.js is helpful for making progressive web apps.
- Backend:
    - **Firebase**
    - **Node.js**
- APIs:
    - **Zendesk API**
        - Allowed us to create an interactive bot across multiple platforms very easily
    - **Octave API**
        - Allows for the music streaming in the player app
- ML Algorithm:
    - **Natural - Classifiers**
    - Trained with custom model to give good answers
        - Lets us predict the general mood of a sentence based on specific words the ML algorithm was trained to recognize and categorize
- CI/CD *(Disabled)*:
    - **GitHub Actions + Docker + Firebase Functions**
        - The GitHub Action builds a docker image and pushes the changes to the Firebase Functions whenever a commit is pushed to master
- Hosting:
    - Azure Web App for Containers
    - Azure Container Registry

### Useful Link(s)

- [Frontend README](https://github.com/po-trottier/project-braveheart/blob/master/frontend/README.md)

### Screenshots

![image](https://user-images.githubusercontent.com/41876093/114652594-2c86a500-9cb4-11eb-992a-85bfb2b740c0.png)

![image](https://user-images.githubusercontent.com/41876093/114652636-4b853700-9cb4-11eb-8122-ff786e0e7031.png)
