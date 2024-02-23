# TO-DO
- TO-DO is a todo list application made using the MERN stack - React (Front-end), Node with Express (Back-end) and MongoDB for database

## Features 
- JWT authentication
- CRUD todos (Create, read, updated and delete)
- Mark todos as completed
- Clear all todos that are marked completed
- Filter todos (All, Active and Completed)

# Installation Guide

Follow these steps to set up the system on your local machine. This guide assumes you have Git, Node.js, and npm installed. If not, please install these before proceeding.

## Prerequisites

- Git
- Node.js 
- npm (usually comes with Node.js)

## Clone the Repository

1. Clone the project repository to your local machine:

    ```shell
    git clone https://github.com/dinilgamage/TO-DO.git
    ```

## Project Setup

2. Change into the project directory:

    ```shell
    cd TO-DO
    ```

3. **Backend Setup**: Install backend dependencies. This project uses Node.js for the backend.

    ```shell
    cd backend
    npm install
    ```

4. **Frontend Setup**: Install frontend dependencies. The frontend is built with React.

    ```shell
    cd ../frontend
    npm install
    ```

## Environment Configuration

5. **Backend Environment Variables**: Set up the backend environment variables by creating a `.env` file in the `backend` directory. 

    ```shell
    PORT=4000
    MONGO_URI=<your-mongodb-connection-string>
    TOKEN_SECRET=<your-token-secret>
    ```

    - `PORT`: The port your backend server will listen on.
    - `MONGO_URI`: Your MongoDB connection URI. Replace with your own to connect to your database.
    - `TOKEN_SECRET`: A secret key for JWT token generation. Use a strong, random string.

    **Security Note**: Keep your `.env` files secure and never commit them to public repositories.

6. **Frontend Environment Variables**: Configure the frontend environment by creating a `.env` file in the `frontend` directory.

    ```shell
    REACT_APP_API_BASE_URL=http://localhost:4000
    ```

    This specifies the base URL of your backend API.

## Running the Application

7. **Run the Backend Server**: Navigate back to the backend directory and start the server.

    ```shell
    cd ../backend
    npm start
    ```

8. **Run the Frontend Server**: Open a new terminal, navigate to the frontend directory, and start the React app.

    ```shell
    cd ../frontend
    npm start
    ```

9. **Access the Application**: Open your web browser and go to http://localhost:3000 to view the application.

    Upon successful setup, you should be able to see the application's login page. Try navigating around the application to ensure everything is working as expected.

## Troubleshooting

- If you encounter npm dependency conflicts, try running `npm install` with the `--legacy-peer-deps` flag.
- For MongoDB connection issues, ensure that your `MONGO_URI` is correct and that your network allows connections to MongoDB servers.

## Additional Information

- For development, both the backend and frontend support hot reloading. Make changes to your code, and the servers will automatically refresh to reflect your updates.
- Ensure your MongoDB Atlas cluster (or other MongoDB services) is correctly set up and accessible from your development environment.

By following these steps, you should have a fully functional local setup of my TO-DO project. Enjoy developing!

# Screens

![image](https://github.com/dinilgamage/TO-DO/assets/113094888/972b746f-8fe0-42fc-b78b-cdd6c3a69599)

![image](https://github.com/dinilgamage/TO-DO/assets/113094888/1ae1407f-6730-4aba-80de-fd3789c098c2)

![image](https://github.com/dinilgamage/TO-DO/assets/113094888/018622b9-26ab-4dd4-890a-9e537f2063ec)

![image](https://github.com/dinilgamage/TO-DO/assets/113094888/749372f4-5af1-448c-a1f0-11ec06c0ac25)



