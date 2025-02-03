<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This repository contains a simple NestJs backend that manages a list of superheroes. Each superhero has a name, a superpower, and a humility score (an integer between 1 and 10). The application provides endpoints to add new superheroes and retrieve the list sorted by humility score in descending order.

## Features

- **In-memory Storage**: Superheroes are stored in an in-memory list.
- **Input Validation**: Uses NestJs validation with DTOs and class-validator to ensure the humility score is between 1 and 10.
- **REST Endpoints**:
  - **POST** `/superheroes`: Add a new superhero.
  - **GET** `/superheroes`: Retrieve the sorted list of superheroes.


[Node.js](https://nodejs.org/) (version 14 or above)

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository

## Endpoints

### POST /superheroes

**Description:** Adds a new superhero to the list.

**Request Body:**

```json
{
  "name": "string",
  "superpower": "string",
  "humility": "number (integer between 1 and 10)"
}
```

**Validation rules:**

`name` must be a string.

`superpower` must be a string.

`humility` must be an integer between 1 and 10.


**Response:** Returns a confirmation message along with the added superhero object.

### GET /superheroes

**Description:**
Retrieves the list of superheroes sorted by humility score in descending order.

**Response:** An array of superhero objects, for example:

```json
[
  {
    "name": "Spider-Man",
    "superpower": "Wall-Crawling",
    "humility": 8
  },
  {
    "name": "Iron Man",
    "superpower": "Genius-level intellect",
    "humility": 5
  }
]
```

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

The server will start on http://localhost:3000

## Run tests

(tests were not added in this version of the product)

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).



# Improvements

Here's a list of improvements that can be made given more time:

**Persistent storage:** Replace the in-memory list with a database for data persistence and scalability.

**Service Layer Abstraction:** Introduce a dedicated service layer to separate business logic from controller logic, making the code easier to maintain and test.

**Enhanced Error Handling and Logging:** Implement more robust error handling with structured logging to improve troubleshooting and system monitoring.

**Comprehensive Testing:** Add unit and integration tests to ensure reliability and catch regressions early.

**Authentication & Authorization:** Incorporate security measures such as JWT authentication and role-based access control for sensitive endpoints.

**Advanced Validation & Middleware:** Use additional NestJS features like custom pipes and interceptors for refined input validation and request/response transformation.

# Teamwork

Collaborating with a teammate on this project would involve regular communication and clearly defined responsibilities. We would schedule code reviews and pair programming sessions to discuss design improvements, such as integrating a persistent database and adding authentication. Additionally, using version control (e.g., Git) and CI/CD pipelines would help ensure code quality as we iterate on the backend. Open discussions on prioritizing features, sharing insights via documentation, and organizing stand-up meetings would also be key to ensuring our improvements are aligned and efficiently implemented.