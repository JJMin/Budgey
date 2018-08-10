## Overview
Budgey is a dynamic and intuitive budgeting app for those looking for a way to easily manage and visualize their personal finances. Budgey allows users to customize different income and expense categories each with their own entries. Expense categories include budget goals and progress bars to show how close you are to your spending limits! A donut chart and number summary on the main dashboard give users an at-a-glance overview of their spending and budget projections. 

## Final Product
!['ScreenShot of Landing Page'](https://github.com/JJMin/Budgey/tree/master/public/app_screenshots/landing_page.png)
!['ScreenShot of Dashboard'](https://github.com/JJMin/Budgey/tree/master/public/app_screenshots/dashboard.png)
!['ScreenShot of Dashboard with Notification'](https://github.com/JJMin/Budgey/tree/master/public/app_screenshots/notification.png)
!['ScreenShot of Expense Page'](https://github.com/JJMin/Budgey/tree/master/public/app_screenshots/expense_page.png)
!['ScreenShot of Income'](https://github.com/JJMin/Budgey/tree/master/public/app_screenshots/income_category.png)

## Getting Started
1. Fork this repository then clone to make your own.
2. In the root directory, install the back-end dependencies with `$ bundle install`.
3. Run `$ cd client` command to move into the client directory and install the front-end dependencies with `$ npm install`.
4. Move back into the root directory with `$ cd ..` and run `$ rails db:setup` command which will create the database, load the schema, and initialize it with the seed data.
5. Run the `$ rails -s` command in the root directory to run the rails server.
6. Open another terminal, `$ cd client` again into the client directory and run `$ npm start` command to start the client once your rails server is running.
7. Go to http://localhost:3000/ in your browser to view the app.

## Tech Stack
- React.JS
- Bootstrap 4
- CSS
- Chart.JS
- Axios
- ReactStrap
- Ruby  → 2.3.5p376
- Rails → 5.2.0
- PostgreSQL
- Heroku