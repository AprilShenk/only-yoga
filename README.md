# only-yoga

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Only Yoga** This app will allow users to view yoga poses. The app will have user authentication and once a user is registered and logged in they can create a daily log to take notes on the poses they practiced. 


<br>

## MVP

The **Only Yoga** MVP will have full CRUD for logs. The database will have three tables, poses, users, and logs and use postgreSQL. The app will be built using Ruby on Rails and React. 

<br>

### Goals

- Responsive Design
- 
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

### Libraries and Dependencies

|     Library       | Description                                |
| :--------------:  | :----------------------------------------- |
|      React        | Used for front end interfaces              |
|   React Router    | Allows for multiple views within the app   |
|    PostgreSQL     | Database to store app information          |
|  Ruby on Rails    | Used to interact with the database         |
| Styled Components | Used to allow styling in JSX               |
|      Axios        | Used to call database                      |

<br>

### Client (Front End)

#### Wireframes

[Mobile Landing](https://wireframe.cc/y3BzAh)
[Tablet Landing](https://wireframe.cc/lkQFMo) 
[Desktop Landing](https://wireframe.cc/obOeRV)

- Landing Views

[Mobile Poses](https://wireframe.cc/sPhD6u)
[Tablet Poses](https://wireframe.cc/WwvhLj)
[Desktop Poses](https://wireframe.cc/qLrorX)

- Poses Index Views

[Mobile Pose](https://wireframe.cc/uoFkfW)
[Tablet Pose](https://wireframe.cc/uhEkP2)
[Desktop Pose](https://wireframe.cc/Mf1XH2)

- Pose Show View

[Mobile Logs](https://wireframe.cc/JcoVLW)
[Tablet Logs](https://wireframe.cc/a2cB3J)
[Desktop Logs](https://wireframe.cc/O5egUT)

- Log Index

[Dummy Link](url)

- Log Show

[Dummy Link](url)

- Log Edit

#### Component Tree

[Whimsical](https://whimsical.com/3sVEv8KN8rJmGeDwfUCo6G)

#### Component Hierarchy

``` structure

src
|__ components/
      |__ shared
          |__ Nav.jsx
          |__ Footer.jsx
          |__ Layout.jsx
      |__ Pose.jsx
      |__ PoseCard.jsx
      |__ Login.jsx
      |__ Register.jsx
|__ screens/
      |__ Home.jsx
      |__ Poses.jsx
      |__ PoseDetails.jsx
      |__ Log.jsx
      |__ LogDetail.jsx
      |__ LogEdit.jsx
|__ services/
  |__ api-config.js
  |__ auth.js
  |__ poses.js
  |__ log.js

```

#### Component Breakdown

|  Component   | state | props | Description                                                    |
| :----------: | :---: | :---: | :------------------------------------------------------------- |
|  Navigation  |   n   |   n   | The navigation will provide a link to each of the pages.       |
|    Poses     |   y   |   y   | The gallery will render the posts using cards in flexbox.      |
| Pose Detail  |   y   |   y   | The pose detail will render the pose info via props.           |
|     Log      |   y   |   y   | The log will render the log posts and allow deletions.         |
|   Log Edit   |   y   |   y   | The log edit will render the forms that allow edited           |
|     Home     |   y   |   y   | The home will render login/register component.                 |
|    Layout    |   y   |   y   | The layout will render children, nav, and footer components.   |
|    Footer    |   n   |   n   | The footer will link to my portfolio and include copyright.    |

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Layout         |    M     |     2 hrs      |     - hrs     |     TBD     |
| Poses          |    H     |     3 hrs      |     - hrs     |     TBD     |
| Pose Detail    |    H     |     1 hrs      |     - hrs     |     TBD     |
| Log            |    H     |     1 hrs      |     - hrs     |     TBD     |
| Log Edit       |    H     |     3 hrs      |     - hrs     |     TBD     |
| Home           |    M     |     3 hrs      |     - hrs     |     TBD     |
| Login/Register |    H     |     3 hrs      |     - hrs     |     TBD     |
| TOTAL          |          |     16 hrs     |     - hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![ERD](https://i.imgur.com/1f7izTc.png)

<br>

***

## Post-MVP

Create a routines table that allows users to see poses in a routine. 

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.