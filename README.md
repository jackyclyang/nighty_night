# Nighty Night

## Overview

**Nighty Night** is a web application that helps you get ready for bedtime by clearing your mind and reducing anxiety. By using the product, you will get the distractions out of your mind and gain the peacefulness desired for a good night sleep. 

<br>

## MVP

The **Nighty Night** MVP allows users to create accounts. And with that account, the user can write down great things happening that day before bedtime. Research has shown that it helps reduce anxiety and depression. In additon, the user can jog down a to-do list for the following day, which helps people get out any distractions out of their minds. You can have it set, and don't have to worry about what should be done anymore (which really negative impacts your sleep quality). The app will save everything for you to check the next morning.  

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
|   React Datepicker   | Front-end date picker library |
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


<br>


#### [Component Tree](https://res.cloudinary.com/dvmkqx6v1/image/upload/v1595423930/ComponentTree_b4ovxv.png)

#### Component Hierarchy


``` structure

src
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ LandingPage.jsx
      |__ Main.jsx 
            |__ Sign up.jsx
            |__ Sign in.jsx
            |__ Dashboard.jsx
            |__ ToDo.jsx
                  |__ ToDoItem.jsx
                  |__ CreateToDoItem.jsx
            |__ GreatThings.jsx
                  |__ GreatThingsItem.jsx
                  |__ CreateGreatThingsjsx
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
|    Footer    | functional |   n   |   n   | _The Footer with credit_      |


#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Back-end setup      |    H     |     10 hrs     |       8 hrs       |     8 hrs     |
| User authentication |    H     |     4 hrs      |       6 hrs       |     6 hrs     |
| Seed data           |    M     |     4 hrs      |       1 hr        |     1 hr      |
| Services setup      |    H     |     6 hrs      |       8 hrs       |     8 hrs     |
| Header & Footer     |    L     |     1 hr       |       1 hr        |     1 hr      |
| Landing Page        |    H     |     2 hrs      |       1 hr        |     1 hr      |
| Dashboard           |    H     |     4 hrs      |       4 hrs       |     4 hrs     |
| ToDo List CRUD      |    H     |     10 hrs     |       10 hrs      |     10 hrs    |
| Great Things (CR)   |    H     |     10 hrs     |       10 hrs      |     10 hrs    |
| Additional Styling  |    L     |     8 hrs      |       12 hrs      |     12 hrs    |
| Deployment          |    H     |     1 hrs      |       1 hr        |     1 hr      |
| TOTAL               |          |     60 hrs     |       62 hrs      |     62 hrs    |


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
- Add additional contents that can help faciliate a better nighttime environment (e.g. Bedtime stories, Bedtime Routine Tips)

<br>

## Code Showcase
```javascript
  handleCreateGreatThings = async (greatThingsData) => {
    let { currentUser } = this.props
    let id = currentUser.id

    const newGreatThings = await postGreatThings(id, greatThingsData)
    this.setState(prevState => ({
      greatThings: [...prevState.greatThings, newGreatThings]
    }))

    this.setState({
      date: newGreatThings.date
    })

    const { showHistory } = this.state
    this.setState({ showHistory: !showHistory })

  }

  toggleHistory = (e) => {
    e.preventDefault()
    const { showHistory } = this.state
    this.setState({ showHistory: !showHistory })

  }


  render() {
    console.log(this.state.showHistory)
    return (
      <div className="great-things">
        <div className="createGreatThings">
          <CreateGreatThings
            handleCreateGreatThings={this.handleCreateGreatThings}
          />
        </div>
        <div className="get-history">
          {this.state.showHistory ?
            <div>
              <button className="history-button" onClick={this.toggleHistory}>Hide past joys</button>
              <GreatThingsItem
                allGreatThings={this.state.greatThings}
                date={this.state.date} />
            </div> :
            <button className="history-button" onClick={this.toggleHistory}>See past joys</button>
          }
        </div>
      </div >
    )
  }
```
<br>

## Code Issues & Resolutions


