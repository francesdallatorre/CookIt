# Cook It

## Overview

Cook It is a full-stack application built to get recipes from the edamam API, save them to your account's database, edit them and delete them. You can also add your own pictures

### Technologies

- **React Native**
- **Postgres**
- **Flask**
- **Python**

### Features

- **MVC Structure**
- **Full CRUD | 7 RESTful routes**
- **Sign up / Log in functionality**
- **One to many model relationship**

### Styles

- **React Native Elements**

## Server API Requests

### Secure

| HTTP Request  | URL           | Method   |
| ------------- | ------------- | -------- |
| Create a user | /users/new    | `POST`   |
| Login a user  | /sessions/new | `POST`   |
| Logout a user | /sessions/new | `DELETE` |

- **Sample body for `POST` to `/users/new`**

```javascript
{
    "username": "Ana Jones",
    "password": "HelloWorld"
}
```

- **Sample body for `POST` to `/sessions/new`**

```javascript
{
    "name": "Ana Jones",
    "password": "HelloWorld"
}
```

### Open API Requests

| HTTP Request | URL                | Method   |
| ------------ | ------------------ | -------- |
| Show         | /recipes/          | `GET`    |
| New          | /recipes/new/      | `GET`    |
| Post New     | /recipes/          | `POST`   |
| Edit         | /recipes/:id/edit/ | `GET`    |
| Update       | /entries/:id/      | `PUT`    |
| Show         | /recipes/:id/      | `GET`    |
| Delete       | /recipes/:id/      | `Delete` |

- **Sample body for `POST` to `/entries/`**

```javascript
{           title: "today was an amazing day",
            entry: "Lorem ipsum dolor sit amet, id unum similique ius. Pro ex inermis fastidii patrioque, mei ex wisi interpretaris. Vel ad tritani dissentias. Brute modus aperiri ei mea, te ius tation argumentum. Nec velit assum aperiri an",
            emoji: "🤪"
        }
```

## New Technology

Uploading Images

## Setup

- `git clone` this repo
- `cd` into it.
- `npm install`
- edit values in .env

## Available build commands

Open [http://localhost:3000](http://localhost:3000) to view your local app in the browser. The page will reload if you make edits.


## Author

- Frances Dalla Torre
# cook-it-frontend

