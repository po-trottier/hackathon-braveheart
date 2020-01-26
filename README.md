# Project Braveheart

[![Build and Deploy](https://github.com/po-trottier/project-braveheart/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/po-trottier/project-braveheart/actions)

This project was created as part of the ConUHacks V hackathon.

**Challenges:**

-  Sun Life Financial: Workplace Well-being Challenge 
-  Zendesk's Sunshine Conversations API Challenge
-  Octave's Build an Innovative Music Player Challenge

### Written by:

- Benjamin Lanthier
- Karl Noory 
- Nahej Lefebvre
- Pierre-Olivier Trottier

---

### Objective

Create an innovative music player taylored to users' mood.

### Target Audience 

Music streaming services users, social media users and music lovers.

### Usage

Head on over to our chat-bot's web page and share your current mood with it. It will return you the link to a music playlist taylored to your current mental state.

- [Link to the bot](https://m.me/105419994348348)

### Business Value

Helps users in times of need by providing them with playlists to boost their moods and make them feel better. Allows for a unique and special experience that will make the users feel connected to the platform. Subcscription-based (Free tier with ads + Paid tier) allows for a continuous revenue flow.

### Technology Stack

- Frontend:
    - **Vue.JS**
- Backend:
    - **Firebase**
- APIs:
    - **Zendesk API**
        - Allowed us to create an interactive bot across multiple platforms very easily
    - **Octave API**
        - Allows for the music streaming in the player app
- ML Algorithm:
    - **word2vec - Skip-Gram Model**
    - Trained on a 5 000 000+ words model
        - Lets us predict the general mood of a sentence based on specific words the ML algorithm was trained to recognize and categorize


### Useful Link(s)

- [Frontend README](https://github.com/po-trottier/project-braveheart/blob/master/frontend/README.md)
