import axios from "axios";
import inquirer from "inquirer";
import fs from "fs";
import pdf from "html-pdf";
import genHTML from "./generateHTML.js";
let githubData;


function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "username",
        message: "What is your GitHub Username?"
      },
      {
        type: "list",
        message: "What is your favorite color?",
        name: "color",
        choices: [
          "Red",
          "Green",
          "Blue",
          "Orange",
          "Yellow"
        ]}
    ])
     .then(function ({ username, color }) {
    // variable for query URL from github API
    const queryUrl = `https://api.github.com/users/${username}`;
    const starsQueryUrl = `https://api.github.com/users/${username}/starred`;

    //   using axios to retrieve info from github API
    axios.get(queryUrl).then(function (res) {
        githubData = res.data;

    }).then(function (res) {
        axios.get(starsQueryUrl).then(function (res) {
            const stars = res.data.length;

            // this logs the number showing up on page1...not sure how to get the TOTAL number of stars a user has


            // writes HTML File
            
            fs.writeFile('first.html', genHTML(githubData, stars, color), function (err) {
                console.log(genHTML);
                if (err) throw err;
                console.log('Saved HTML File');



                // creates PDF file
                const html = fs.readFileSync('./index.html', 'utf8');
                const options = {"format": "letter"};

                pdf.create(html, options).toFile('.devprofile.pdf', function (err, res) {
                    if (err) return console.log(err);
                    console.log(res);

                });
            });
        });


    });
});
}

promptUser()
