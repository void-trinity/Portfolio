# Portfolio
This repo serves as a source for my Portfolio that is deployed on the GitHub pages.

## Introduction
Made using React JS, this is fully customizable and can be deployed on your own GitHub page/ other domains.

## Instructions

### Fork the repository:
1. Fork/clone the repository.
```
gh repo clone void-trinity/Portfolio
```

2. Make changes to following files under *src/constansts* folder:

| File           	| Description                                                                                               	|
|----------------	|-----------------------------------------------------------------------------------------------------------	|
| intro.js       	| Contains your name, profile and links to your social media/ platform accounts like github, linkedin, etc. 	|
| workExp.js     	| Your work experience goes here, follow the format as specified in the file.                               	|
| achievement.js 	| Prizes that you won.                                                                                      	|
| contact.js     	| Your contact number and email.                                                                            	|
| education.js   	| All your relevant education details go here.                                                              	|
| projects.js    	| Contains information about your projects.                                                                 	|
| skills.js      	| Skills like programming language, database, os, tech stack, etc. can be listed here.                      	|
| aboutMe.js     	| Short description about yourself.                                                                         	|

3. Install the dependencies:
    1. Using yarn:
    ```
    yarn
    ```
    2. Using npm:
    ```
    npm install
    ```

4. Run and check whether the project is working correctly or not:
    1. Using yarn:
    ```
    yarn start
    ```
    2. Using npm:
    ```
    npm start
    ```

5. Deploy the project using the instructions [here](https://medium.com/mobile-web-dev/how-to-build-and-deploy-a-react-app-to-github-pages-in-less-than-5-minutes-d6c4ffd30f14)