
This project is a showcase of the admin dashboard of Lendsqr, it contains a login page, a dashboard page, and a profile page. This project features is built with React, TypeScript, SASS and Vite bundler. A user can login, access the dashboard and profile pages. A user can modify the status of the users within the dashboard and filter the users by organization, status, date joined, etc. The project features a state management system using Zustand and a test suite using Vitest.

Table of Contents
Getting Started
Prerequisites
Installation
Usage
Running the Development Server
Building for Production
Running Tests
Folder Structure
Getting Started
Prerequisites
You need to have the following installed on your computer.

Node.js (v14+)
yarn

Install project dependencies:

yarn install
Usage
Running the Development Server
To start the development server and run the project locally, use the following command:

yarn dev
The application will be available at http://localhost:5173.

Building for Production
To build the project for production deployment, use:

yarn build
This will create an optimized production build in the dist directory.

Running Tests
Explain how to run tests if you have included testing in your project using Vitest or any other testing framework:

yarn test
Folder Structure
Here's an overview of the project's folder structure:

project-root/
├── node_modules/           
├── public/                     
│   └──assets/             
│        ├──images/             
│        ├──icons/             
│        └──logo/              
│        
├── src/                   
│   ├── components/         
│   │    ├── Button/             
│   │    ├── FilterForm/
│   │    ├── Layout/
│   │    ├── Navigation/
│   │    ├── UserDetailsCard/
│   │    └── UserList
│   ├── lib/             
│   │   ├── hook        
│   │   └── store
│   ├── pages/             
│   │   ├── Dashboard        
│   │   ├── Login        
│   │   └── UserDetails
│   │ 
│   ├── styles/               
│   │              
│   ├── tests/             
│   │   
│   ├── App.tsx            
│   ├── main.tsx            
│   └── vite-env.d.ts
│
│
├── .gitignore             
├── .index.html             
├── package.json            
├── README.md               
├── tsconfig.json           
├── tsconfig.node.json           
├── vercel.json        
├── vite.config.js         
└── yarn.lock
