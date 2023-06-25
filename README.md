# Ecotopia
A Parallax E-Learning Website about Climate Change

## MEAN Stack
We use MEAN stack to build this project. All back-end related are in the *backend folder*. 

## Running Ecotopia in Production
### Requirements:
1. Docker Desktop
2. WSL2
3. NodeJS

### Steps
1. In root directory, run  `ng build` and the *dist folder* will automatically generated in *backend folder*.
2. `cd backend`
3. `docker build -t <give-a-container-name> .` to dockerize and build.
4. `docker run -p 3000:3000 <container-name-you-provide-in-3>`
5. Then access `localhost:3000` in your browser.
---
## Running Ecotopia in Development
We will run 2 server, frontend(angular) and backend(express, node).

## Steps:
1. In root directory run `ng serve` to run the Angular and access localhost:4200.
2. Add terminal for backend.
3. Run `cd backend` to change directory to backend folder
4. Run `npm start` to start the backend server.

## Key Features:
1. Mini-arcade game
2. Assessment Module
3. Admin panel
4. Parallax effect

Documentation will be here soon.

A Capstone Project.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.
