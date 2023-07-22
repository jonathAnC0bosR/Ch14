# Tech Blog

## Description

The Tech Blog is a CMS-style blog site, similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts. This site follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

The blog provides a dynamic, interactive, and user-friendly interface where developers can sign up, log in, publish their thoughts and ideas, comment on existing posts, and manage their posts via a personal dashboard.

This application is deployed on Heroku.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this application locally, follow these steps:

1. Clone the repository.
2. Install the required dependencies by running `npm install`.
3. Set up the MySQL database using the schema located in the `./db` directory.
4. If you want to populate the database with test data, you can run `npm seed`.
5. Start the server using `npm start`.

## Usage

Once the server is running, open your browser and visit `http://localhost:3001`. From here, you will be able to visit the homepage, sign up for a new account or sign in to an existing one, create and manage your posts through the dashboard, and view or comment on other developers' posts.

A live demo of the application is available at [https://techblogx-78308d1dcbc4.herokuapp.com/](#)

![Application Screenshot](#)

## Tests

To run tests, use the following command: `npm test`.

## Contributing

Contributions are welcomed. If you would like to contribute to this project, please clone the repository, make your changes, and push to a new branch. Please send a pull request with a clear and concise explanation of what you've done and why it should be included.

## License

This project is licensed under the terms of the MIT license.

## Questions

For any queries or questions, feel free to contact me at:

- [Github Profile](https://github.com/jony0418)
- Email: jony0418@gmail.com
