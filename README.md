# Docker TODO app < Node JS, React and MongoDB.>
[![back CI](https://github.com/taiebrafik1998/todolist_ci_cd/actions/workflows/back.yml/badge.svg?branch=main)](https://github.com/taiebrafik1998/todolist_ci_cd/actions/workflows/back.yml)


<img width="407" alt="getall" src="https://github.com/taiebrafik1998/todolist_ci_cd/assets/84631421/9cc79ee7-273f-4c58-8429-f7a0b31ce94c">

<img width="407" alt="getall" src="https://github.com/taiebrafik1998/todolist_ci_cd/assets/84631421/6ca0b392-28af-4934-a18a-72685680f067">

update et delete c'est presque la meme chose juste l'un supprime a la fin l'autre il met ajour

 avant tous je tien a remercier AbdulMoqueet vu que j'ai suivi avec lui le projet (tuto youtube)

 ## Overview

Le project fait partie de  CI/CD 

Dans repo on a **Docker** containers : **frontend** && **backend**. Le frontend fait avec **ReactJS** et  notre  **backend** fait a base  **NodeJS**, qui se connect  a **MongoDB** database .

# Guide pour comprendre le projet



#### 2. Dockerfile backend (Node.js) 



```bash
FROM node:20


#Echo port
RUN echo " port BACKEND is : 5001"

# repetoir app
WORKDIR /app


#COPY . .
COPY package*.json /app/


# Install all dependencies
RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "start"]
```
#### 3. Dockerfile frontend (ReactJS) 



```bash
FROM node:20


#Echo port
RUN echo " port  is : 3000"

# repetoir app
WORKDIR /app



COPY package*.json /app/


# Install all dependencies
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

```

#### docker-compose
```bash
version: "3"
services:
  frontend:
    image: taieb98/todo_react_img
    ports:
      - ${{secrets.FRONT_ACCESS_PORT}}:${{secrets.FRONT_ACCESS_PORT}}
    stdin_open: true
    volumes:
      - ./frontend:/app
      - /app/node_modules
    container_name: frontend
    restart: always
  backend:
    container_name: backend
    restart: always
    image: taieb98/backend_img
    ports:
      - ${{secrets.BACKEND_ACCESS_PORT}}:${{secrets.BACKEND_ACCESS_PORT}}
    volumes:
      - ./backend:/app
      - /app/node_modules
    
 

```

pour demarer le projet 

```bash
$ docker-compose up
```

<img width="936" alt="docker-compose" src="https://github.com/taiebrafik1998/todolist_ci_cd/assets/84631421/f3e296b8-01fc-40a1-acd8-84b399f332d9">

####  Verification of FrontEnd

ouvre un navigateur

###### :clipboard: `Note: It is the port which I defined in `.env` file you can change this port it's totally up to you.`

```
http://localhost:3000/
```


vous allez tomber sur cette ecran


### l'ecran de l'app
![Capture d'écran 2024-02-02 095440](https://github.com/taiebrafik1998/todolist_ci_cd/assets/84631421/8cbf25c3-9241-465a-bb22-57a2ba7ed39a)
