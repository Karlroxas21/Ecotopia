# Ecotopia: A Capstone Project
A Parallax E-Learning Website about Climate Change

## MEAN Stack
We use MEAN stack to build this project. All back-end related are in the *backend folder*. 

## Requirements:
1. NodeJS
2. Angular 15.x

## Angular Configuration
### Deploy
"replace": "src/environments/environment.ts",
"with": "src/environments/environment.development.ts"
"defaultConfiguration": "development"
1. Add Environment in backend BASE_URL=webite.com

### Production
"replace": "src/environments/environment.development.ts",
"with": "src/environments/environment.ts"
"defaultConfiguration": "production"

## Backend configuration
Create a .env in backend folder and add DB_CONNECTION=*insert mongodb_string_connection_here*

---

## Key Features:
1. Mini-arcade game
2. Assessment Module
3. Admin panel
4. Parallax effect

Documentation still in progress.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.
