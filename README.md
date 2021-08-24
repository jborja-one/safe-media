<br />
<br />

<p align='center'>
  <img src='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Public/safemedia-logo.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJIMEYCIQCveKMyYN3s34vFrEMxywd4YdWAXaDyuTdg5C4an%2BaIhQIhAPtopbrQBcxuGNRdsUO9hJCDEzWXfFjN3l6%2FwlztnFkaKtACCBkQABoMNjQzNzY1OTYxODY4IgyPP2Tsr90tjZvn7f4qrQIdusxO0Lud6TPa6MLO4CVOZgcVJTdn%2BMrQysEXxaAbJPoPjjL00oGGpWl87Lalt48pShxt6pGeDDi8Nr9ugeEehCoyDrpslDmgvIOwiatFKXL9kGePfDGIca%2FOuRgfrzrRJ%2FLESh9C%2BEXg0F7mwjWHU5aCBxtERL5iHWSC2pf38hC9XSyKOEhcnJDazvFky0oVfPLvwdR2eo18mhL6HubgsptGtA4xRrv3og9ZWc%2FuGwL0r9qfPje6voZts9jXmg5q%2BvmBGM8TewtlbTtnmBIpXMi8E2ji907BS7Yf1nB1StZPIJLfR%2Fn942L5Q9aaXS5G%2Bn%2F4Cjn7%2FcfGkBXJtgu7oVhnywvm%2ByS9M%2Byd7d%2FBglehns%2BTa2e0c5td%2Ff8YQEgqUsVB7BjEMQ52yFxOMNeCj4kGOrQCKmXo4vmBmGfvUoM4UHQ3rXIyRz6jguJ3J2Q2lOlJ9aFTja4l2jZambXJEYLo2xL5oovV22kV6yY7S0PBH%2BOG81hTZA%2B4CXK5ms3UeVy9SzTgBb2B6pF5rrqPemmhYErArCqcH9ppqbU%2FxnWT2pzHFt6TNcmflTMGQPm76eONXJgEdGzgatpb3ctUS6xZNb9i5as7Y4LgKYhq%2BlACYOn4ySqrXZ5LTbPin%2B0WziAQ%2BIprG%2BGMU83Cf%2B5ZjKnDsoczfwgvBy47p5KsAa6mop784shoVivNrWD09HNxkWvly7bWt96P3EYDEX3JBQv%2FMn47U3MQSrIs3SeAhP%2FjADMOeSj5JlrjCjhFFtdkAnGfmQqx6Ee3A976I%2BsI%2Fok6EFvZALhWevytGv0ZYvXEuoPyFUvu92M%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210824T033503Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZLY3RASGPRYRIO4M%2F20210824%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=68c54d973e8d4603becd55fe27e47f5aec0deb6e9246c5f1be9942ad91eb7777' width='500px' >
</p>

TableTalk, a <a href='https://opentable.com'>OpenTable</a> and <a href='https://meetup.com'>MeetUp</a> clone, is a web app where users can make reservations at their favorite restaurants and offer to share their table to other guests to not only make a fun, social experience, but also, earn rewards for free goodies at restaurants.

View live: <a href='https://table--talk.herokuapp.com/'>Table Talk</a>

<br />

## Features

-   User Sign up/in with email and password (Demo account link provided)
-   Create, Edit and Delete groups for categorizing your media uploads
-   Create, Edit and Delete albums to further categorize and sort you media uploads
-   Create, Delete media uploads in your albums, such as images, audio files, videos
    <br />

## Home/Landing Page

-   Image here (coming soon...)
    <br />

## User Profile Page

-   Image here (coming soon...)
    <br />

## Albums Page

-   Image here (coming soon...)
    <br />

# Technologies

-   Python <a href="https://www.python.org/"><img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white&" /></a>
-   CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS3-1572B6?logo=CSS3" /></a>
-   HTML <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML5-E34F26?logo=HTML5&logoColor=ffffff" /></a>
-   Flask <a href="https://flask.palletsprojects.com/en/1.1.x/"><img alt="Flask" src="https://img.shields.io/badge/-Flask-000000?style=flat-square&logo=Flask&logoColor=white" /></a>
-   PostgreSQL <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/-PostgreSQL-336791?logo=PostgreSQL" /></a>
-   React <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/-React-61DAFB?logo=React&logoColor=333333" /></a>
-   Redux <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/-Redux-764ABC?logo=Redux" /></a>
-   SQLAlchemy <a href=https://www.sqlalchemy.org/><img src=https://img.shields.io/badge/-SQLAlchemy-red /></a>
    <br />

## Installation

1. After cloning the project, from the TableTalk (root) folder, run in the terminal:

```
 pipenv install
```

2. In the root folder, enter the flask shell by running in the terminal:

```
 pipenv shell
```

3. In the root folder, create the database by running in the terminal:

```
flask db create
```

4. In the root folder, migrate tables to the database by running in the terminal:

```
flask db migrate
```

5. In the root folder, seed the database by running in the terminal:

```
flask seed all
```

6. In the root folder, start the backend by running in the terminal:

```
flask run
```

7. In the react-app folder, run in the terminal:

```
npm install
```

8. In the react-app, start the frontend by running in the terminal:

```
npm start
```

9. In the browser, navigate to 'http://localhost:3000/'

<br />

### Connect with me:

<a href="https://www.linkedin.com/in/jonathan-borja-1a9959172/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>&nbsp;
<a href="mailto:jborja-one@gmail.com?subject=GitHub"><img src="https://img.shields.io/badge/gmail-%23D14836.svg?&style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/></a>&nbsp;
<a href="https://jborja-one.github.io/"><img src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" alt="website" width=30/></a>&nbsp;
