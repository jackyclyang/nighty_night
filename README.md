# Nighty Night

## Overview

**Nighty Night** is a web application that helps you get ready for bedtime by clearing your mind and reducing anxiety. By using the product, you will get the distractions out of your mind and gain the peacefulness desired for a good night sleep. 

<br>

## MVP

The **Nighty Night** MVP allows users to create accounts. And with that account, the user can write down great things happening that day and why before bedtime. Research has shown that it helps reduce anxiety and depression. In additon, the user can jog down a to-do list for the following day, which helps people get out any distractions out of their minds. You can have it set, and don't have to worry about what should be done anymore (which really negative impacts your sleep quality). The app will save everything for you to check the next morning.  

<br>

### Goals

- Create account
- Sign in/Sign out
- Write down great things happening that day (text)
- Check out the history of great things
- Write down to-do list for the following day (text)


<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front-end component framework |
|   React Router   | Front-end library to set up routes and links |
|      Axios       | Render API from backend |
|      Rails       | Back-end framework with Ruby |

<br>

### Client (Front End)

#### Wireframes

![Desktop Landing Page](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1594670829/Landing_Page_pcudxz.png)

- Desktop Landing Page
<br>

![Desktop Sign up](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1594670829/Sign_up_wk8oww.png)

- Desktop Sign up
<br>

![Desktop Dashboard](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1594671189/Dashboard_bvvuet.png)

- Desktop Dashboard
<br>

![Desktop Great_Things](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1594671189/GreatThings_hibk3a.png)

- Desktop Great Things
<br>

![Desktop Great_Things Created](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1594670830/GreatThings_History_v655at.png)

- Desktop Great Things Created
<br>

![Desktop Great_Things Calendar](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1594670829/GreatThings_Calendar_vghqeh.png)

- Desktop Great Things Calendar
<br>

![Desktop To Do Empty](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1594670829/ToDo_Empty_jq4t8a.png)

- Desktop To Do (empty)
<br>


![Desktop To Do List](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1594670830/ToDo_list_r6uleq.png)

- Desktop To Do
<br>

![Desktop User Profile](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1594670830/User_Profile_zts9yr.png)

- Desktop User Profile
<br>

<br>


#### [Component Tree](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1594670830/ComponentTree_mz3ehl.png)

#### Component Hierarchy


``` structure

src
|__ assets/
      |__ images
|__ components/
      |__ Header.jsx
      |__ LandingPage.jsx
      |__ Main.jsx 
            |__ Sign up.jsx
            |__ Sign in.jsx
            |__ Dashboard.jsx
            |__ ToDo.jsx
                  |__ ToDoItem.jsx
                  |__ CreateToDoItem.jsx
                  |__ UpdateToDoItem.jsx
                  |__ DeleteToDoItem.jsx
            |__ GreatThings.jsx
                  |__ GreatThingsOneDay.jsx
                  |__ GreatThingsCalendar.jsx
                  |__ CreateGreatThingsOneDay.jsx
            |__ UserProfile.jsx
|__ services/

```
<br>

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The Header will contain the navigation and logo._               |
|  LandingPage |   class    |   y   |   y   | _The Home will be the homepage including login and signup._      |
|  Dashboard   |   class    |   y   |   y   | _The Dashboard will be the landing page after user sign in._     |
|     ToDo     |   class    |   y   |   y   | _The ToDo will allow users to create/read/update/delete their to do list for the next day._      |
| GreatThings  |   class    |   y   |   y   | _The GreatThings will users to create/read/update/delete great things happening on the day_      |
|  Soundscape  |   class    |   y   |   y   | _The Soundscape will contain soundtracks of natural soothing sounds_      |
| UserProfile  |   class    |   y   |   y   | _The UserProfile will contain user information with CRUD actions as well as Badges_      |
|    About     | functional |   n   |   n   | _The About will explain what this app does and why_      |


#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Back-end setup      |    H     |     10 hrs     |       -       |     TBD     |
| User authentication |    H     |     4 hrs      |       -       |     TBD     |
| Seed data           |    M     |     4 hrs      |       -       |     TBD     |
| Services setup      |    H     |     6 hrs      |       -       |     TBD     |
| Header              |    L     |     1 hrs      |       -       |     TBD     |
| Landing Page        |    H     |     2 hrs      |       -       |     TBD     |
| Dashboard           |    H     |     4 hrs      |       -       |     TBD     |
| ToDo List CRUD      |    H     |     10 hrs     |       -       |     TBD     |
| Great Things (CR)   |    H     |     10 hrs     |       -       |     TBD     |
| User Profile        |    H     |     4 hrs      |       -       |     TBD     |
| About               |    L     |     4 hrs      |       -       |     TBD     |
| Additional Styling  |    L     |     4 hrs      |       -       |     TBD     |
| Deployment          |    H     |     1 hrs      |       -       |     TBD     |
| TOTAL               |          |     64 hrs     |       -       |     TBD     |


<br>

### Server (Back End)


#### [ERD Model](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1594614315/Night_ERD_pnsoik.png)

<br>

***

## Post-MVP
- Upload image feature for Great Things
- Send out email reminder of the to-do list the next morning
- A reward badge system (e.g. created your first list!)
- Soundscape: a list of soothing soundtracks (including favorites feature)
- Add an onboarding stepper that introduces new users to the app
- Add additional contents that can help faciliate a better nighttime environment (e.g. ASMR, Bedtime stories, Bedtime Routine Tips)

<br>

## Code Showcase

<br>

## Code Issues & Resolutions


