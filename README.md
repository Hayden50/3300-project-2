# CS3300 Project 2

## OVERVIEW

The goal of this project is to provide a simple and intuitive web-app for users to compare and contrast sports 
statistics. We plan to include stats for the National Basketball Association’s (NBA) players and teams, and hope to expand 
this to the National Football League (NFL) and Major League Baseball (MLB). We will accomplish this task by pulling from public 
sports statistics APIs and comparing the numbers of two user-selected players. After computing the differences, the data will 
be displayedto the screen in a simple and easily digestible visual. When the user clicks on a statistic, more information will be 
given to explain what that statistic really means and how it relates to the skill of the player. For example, if someone
did not understand what “FT%” meant, by clicking on the comparison, the web-app would provide a breakdown of how that number is calculated.

## RUNNING APP:
    1. Navigate into frontend/ dir and run "npm i"
    2. Navigate back into root dir and run "npm i"
    3. While still in root dir, you can run the following commands:
        - "npm run frontend": starts frontend at localhost:5050
        - "npm run backend": starts backend at localhost:8000
        - "npm run dev": starts both the frontend and backend concurrently
        
## TESTING APP:
    1. Navigate to the root directory of the project
    2. Run "npm test"

## INSTALLED DEPENDENCIES:
    FRONTEND:
        - axios
        - formik
        - cypress.js
    BACKEND:
        - axios
        - express
        - nodemon
        - concurrently
        - jest
        - dotenv
