<div align="center">
  <img src="https://groundbreaker.co/wp-content/uploads/2019/06/logox1-opt.png" align="center" width="200">
  <h1 align="center">Groundbreaker Engineering Test</h1>
</div>

Please read these instructions entirely before beginning the challenge.

## Summary

This project has one test case that you need to pass:

- Provide all the functionalities an [ACH transaction](#background) can have between two customers using **React + Node API** integrated with **Dwolla**

We don’t expect you to take more than **4** hours to do so. If you do submit it without doing everything you’d like to do, add a `TODO` file in the root with the changes you’d want to make and document any assumptions you made during the implementation.

We truly believe that this boilerplate should be enough to get you started, but you're free to change anything you want in the project. If you feel like we're missing something let us know!

## The Challenge

We have put together this coding test to measure the following skills: how well you write clear code and understand/write business rules.

### What we provide

We've setup the project using Node with [Serverless](https://https://www.serverless.com/) and [React](https://https://reactjs.org/) with [Shopify - Polaris](https://polaris.shopify.com/).

Here's a list of already implemented functionalities:

1. A basic structure of the API using Serverless framework with the customer list.

- You may use any framework in the API (CloudFront, Terraform, etc.) that you want, but please make sure to clearly document how to install anything that is required to run your solution.
- The `serverless-offline` plugin is installed, you can run the application locally using `npm start`

2. A basic React structure showing the customers and already integrated with the API and Polaris setup.
3. A Dwolla Account with the necessary elements already filled, you don’t need to worry about creating customers and funding sources.

> If you haven’t received the credentials to access Dwolla, send as a message to the engineering team, but feel free to start your own sandbox account - [Sandbox](https://accounts-sandbox.dwolla.com). Keep in mind that if you create your own sandbox account, you will need to include customers and bank accounts before starting to work in Dwolla.

Pay attention that the `UI` project uses `yarn` as its package manager (default from CRA), while the `api` uses `npm`. It was designed to run in Unix environments but it should work just fine on Windows.

If you have any issues regarding running the project in your environment, let us know!

### What we expect

- A good UI/UX using [Polaris](https://polaris.shopify.com/) components to:
   - show customer details;
   - list customer accounts;
   - create a new transaction between customers;
- A new service on the API responsible for processing transactions;
- Elegance/simplicity of your solution;
- Unit tests.

You'll need to figure out some ACH/Dwolla business rules to develop this application, so read Dwolla's docs carefully.

Polaris has some nuances too, so read the docs/examples and make sure you understand them, all of them have a "Best Practices" section you must read. We expect you to use some set of components to build the UI.
An example: `DataTables` are not meant to have actions, if the table you're displaying has actions you should use `ResourceList`.

If you have any questions about the requirements, feel free to reach out to us.

### :warning: We don't expect you to

- Deploy the application;

## Background

### ACH and Dwolla

To make transactions, we use **ACH** payments, which are electronic payments that go through the **Automated Clearing House (ACH)** Network. Funds move from one bank account to another with the help of a centralized system that directs funds to their final destination.

To help us on these transactions, we use a service called [Dwolla](https://docs.dwolla.com/#introduction). All requirements to make these transactions are already established. You will only need to consider the implementation;

### Working at Groundbreaker

As engineers at Groundbreaker we use:

- AWS as our cloud provider;
- Terraform and Cloudformation as our infra as a code;
- Github Actions and AWS Codepipeline as our CI/CD;
- Event-driven architecture using SNS/SQS;
- AWS DynamoDB as database and ElasticSearch for searches;
- AWS S3 as our static storage;
- NodeJS and Golang as our main back-end languages;
- GraphQL (AWS AppSync) and REST APIs;
- React as our front-end framework;
- AWS Amplify to help us build AWS integrations faster on the UI;
- AWS Cognito as authentication/user pool;
- Unit tests with codecov coverage reports;
- Github Pull requests (with reviews!);
- Jira and Confluence as our product backlog and documentation;

You don't need to worry about all of this, we won't expect you to know everything

## Submitting your solution

To submit your solution, **zip** up your completed project and send it to engineering-test@groundbreaker.co.

Good luck! We hope to hear from you soon!
