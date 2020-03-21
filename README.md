# Chatbot
### Prerequisites

Installed Nodejs >= v8.x

run migrations

```
npm run migrate
```
### How to run it

```
npm start
```

#### Basic requests

Create an user

```
curl --header "Content-Type: application/json"   --request POST   --data '{"username":"xyz","password":"xyz"}'   http://localhost:8080/user
```

Log an user

```
curl --header "Content-Type: application/json"   --request POST   --data '{"username":"xyz","password":"xyz"}'   http://localhost:8080/login
```

Send a video message
```
curl --header "Content-Type: application/json"   --request POST   -H "Authorization: INSERT_TOKEN_HERE" --data '{ "sender": 1, "recipient": 1, "content": { "type": "video", "video": "somevideo", "metadata":{"some":"metadata"} } }' localhost:8080/messages
```

Send a text message
```
curl --header "Content-Type: application/json"   --request POST   -H "Authorization: INSERT_TOKEN_HERE" --data '{ "sender": 1, "recipient": 1, "content": { "type": "string", "text": "string" } }' localhost:8080/messages
```

Get messages 
```
curl --header "Content-Type: application/json"   --request GET   -H "Authorization: INSERT_TOKEN_HERE" localhost:8080/messages?recipient=1 
```

## Architecture

Microservices architecture was selected for this exercise. The app is divided into routes / controllers / services / repositories to detach business logic from database schema and input validation/formatting. Sequelize is a ORM used in this project to simplify db connection, queries & migrations.

## Improvements

- Complete all TODOS in code
- Use a dependency injection lib
- Create a dockerfile to generate an image
- Add a logging middleware
- Add logs
- Handle db errors & disconnections
- Use constants in a separate file
- Move all the code to a src folder

## Testing

Little testing has been done, UNIT test should be created to validate internal modular functionality such as validations, token generation, mappers.
Integration test to validate correct connection with a db and inter operability with modules.
e2e covering all use cases and main fail scenarios.

To run tests
```
npm run test
```

## Follow-up discussion

How well does your project scale? If this was running in kubernetes, horizontal scaling could help managing the load of the pods. Configuring a 'Horizontal Pod Autoscaler' could monitor the infrastructure and create new pods when necessary.

What if you had users around the globe? How do you keep the application responsive? There could be different kubernetes clusters around the word. A simple solution could be using read replicas in each region and one master db in a specific location. Using something like AWS [cross-region-read-replicas](https://aws.amazon.com/blogs/aws/cross-region-read-replicas-for-amazon-rds-for-mysql/)
