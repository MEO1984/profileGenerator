# A command-line application that dynamically generates a PDF profile from a GitHub username using 

The generated resume imports a user's bio image and location from
their GitHub profile as well as number of public repositories, followers, and following count. The headline
of the generated PDF matches the color that the user picks
from the initial prompts. 
![1](https://github.com/MEO1984/profileGenerator/blob/main/proGenSS.png)

# How It Works
The Command-Line application functions as follows:
1. User is prompted to enter a GitHub username and to pick a color from a pre-generated list. 
2. Axios is used to retrieve user's GitHub data from the GitHub API
3. An HTML file is generated dynamically and then saved to the computer.
4. The HTML file is converted to a PDF file and saved to the computer. 
![gif](https://github.com/MEO1984/profileGenerator/blob/main/proGen.gif)

# Built With
JavaScript,
Node.js

# NPM
HTML-PDF,
Inquirer, 
Axios,
File System

# API
GitHub API
