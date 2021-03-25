const fs = require("fs");
const http = require('http');
const path = require('path');
const { exec } = require("child_process");

/**
 * Name : download
 * @param url : string : Emplacement de wiremock
 * @param dest : string : Chemin ou l'on veut stocker wiremock
 * @param cmd : string : Execution de wiremock
 * Comment : Permet de télécharger wiremock
 */
const download = (url, dest, cmd) => {
    http.get(url, (res) => {
        res.pipe(fs.createWriteStream(dest));
        res.on('end',() => {
            console.log('Finish');
            processExecute(cmd);
        });

    });
}

/**
 * Name : processExecute
 * @param cmd : string : Execution de wiremock
 * Comment : Permet de lancer wiremock
 */
const processExecute = cmd => {
    let process = exec(cmd, (error, stdout, stderr) => {
        if (error instanceof Error) { console.error(`error: ${error.message}`); }
    });

    process.stdout.on('data', (data) => {
        console.log(data.toString());
    });

}

/**
 * Name : wiremockExist
 * @param dest : string : Chemin ou l'on veut stocker wiremock
 * @param cmd : string : Execution de wiremock
 * Comment : Verifie si wiremock existe déjà
 */
const wiremockExist = (dest, cmd) => {
    fs.access(dest, fs.F_OK, (existe => {
        if(existe === null){
            processExecute(cmd);
        }else{
            download(url, dest, cmd);
        }
    }));
}
let nexus = 'http://artifact.dev.n18.an.cnav/service/local/repositories/central/content';
let url = nexus + '/com/github/tomakehurst/wiremock-standalone/2.26.3/wiremock-standalone-2.26.3.jar'
let dest = path.resolve(process.cwd() + '/tmp/wiremock-standalone.jar');
const command = "java -jar tmp/wiremock-standalone.jar --verbose --global-response-templating --root-dir " +  path.resolve(process.cwd() + "/src/test/stub --port 8000");
console.log(dest);
wiremockExist(dest, command);

