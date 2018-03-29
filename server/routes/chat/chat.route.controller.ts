'use strict';

import * as Express from 'express';
import * as request from 'request';
import * as path from 'path';
import * as fs from 'fs';
import { WatsonAssistantAdapter } from '../../apis/wa-adapter';

var removeRoute = require('express-remove-route');

namespace ChatRouteController {

    export let app;
    let watsonAdapter = new WatsonAssistantAdapter();

    export function sendChat(req: Express.Request, res: Express.Response, next?: Express.NextFunction) {
        // this.watsonAdapter.
        // try {
        //     const headerToken = req.headers.authorization;
        //     let information = req.body;
        //     let apiPath = information.apiPath;
        //     let packaging = information.packaging;
        //     let testing = information.testing;
        //     let czarAnswers = information.czarAnswers;
        //     let resources = czarAnswers.configFilePath.multipleResources.resources;
        //     let isNodejs = (czarAnswers.configFilePath.deploy.apiApplicationType=="nodejs");
        //     let versioning = czarAnswers.configFilePath.detail.versioning;
        //     //console.log("Czar Answers: ", versioning);

        //     let czarConfig = {
        //         answers: czarAnswers
        //     };
                            
        //     utils.createDirectory(path.join(apiPath),async (dirError)=>{

        //         let genName = "cedrus-api";
        //         let outDir=path.join(configuration.config.fileSystem.path,apiPath);
        //         let sampleDataPath = path.join(outDir,"sampleData");
        //         if(versioning && versioning.enabled==true && versioning.versionNumber && versioning.versionNumber.length>0) {
        //             sampleDataPath = path.join(outDir,"sampleData",versioning.versionNumber[0]);
        //         }
        //         if(outDir.indexOf('TempSystem')>-1) {
        //             await utils.removeDirectorySync(path.join(outDir,'/../'));
        //             console.log("Cleaned: ", path.join(outDir,'/../'));
        //         }

        //         let generator = new GeneratorApi();
        //         generator.runGenerator(genName, czarConfig, outDir).then(() => {
        //             console.log("Success");
        //             if(testing==false && packaging && packaging.option == "cloudFoundry"){
        //                 genName = "cedrus-api:deploy-manifest";

        //                 let generator2 = new GeneratorApi();
        //                 generator2.runGenerator(genName, czarConfig, outDir).then(() => {
        //                     console.log("Success for Gen CloudFoundry");
        //                     replaceSampleData(resources,sampleDataPath);
        //                     res.json(JSON.parse('{ "message": "Success"}'));
        //                 });
        //             }
        //             else if(testing==false && isNodejs && packaging && packaging.option == "aws"){
        //                 genName = "cedrus-api:create-aws-deployment";

        //                 let generator2 = new GeneratorApi();
        //                 try{
        //                     generator2.runGenerator(genName, czarConfig, outDir).then(() => {
        //                         console.log("Success for Gen AWS");
        //                         replaceSampleData(resources,sampleDataPath);
        //                         let projectDir = path.join(outDir,'../../');
        //                         let readMeFile = path.join(projectDir,"README.md");
        //                         fs.writeFile(readMeFile,utils.getAWSReadMe(), 'utf8', (err)=>{
        //                         });
        //                         res.json(JSON.parse('{ "message": "Success"}'));
        //                     });
        //                 }
        //                 catch(error){
        //                     console.log("Failed for Gen AWS");
        //                     res.json(JSON.parse('{ "message": "Success"}'));
        //                 }
        //             }
        //             else {
        //                 replaceSampleData(resources,sampleDataPath);
        //                 if(testing == true){
        //                     let yamlUrl = '/'+apiPath;
        //                     console.log("Yaml url: ", yamlUrl);
        //                     let yamlPath = path.join(outDir,"swaggerConfig","input.yaml");
        //                     let encoding = {
        //                         encoding: 'UTF8'
        //                     };
        //                     let yaml =  fs.readFileSync(yamlPath,encoding);
        //                     yaml = yaml.replace('basePath: '+czarAnswers.apiBasePath, 'basePath: '+yamlUrl+czarAnswers.apiBasePath);
        //                     yaml = yaml.replace(`host: 'localhost:2002'`, `host: '`+configuration.config.deploymentServer.host+`'`);
        //                     fs.writeFileSync(yamlPath,yaml,encoding);
        //                     let filesExist = false;
        //                     let neededResourceFile1 = capitalizeFirstLetter(resources[resources.length-1].resourceName)+".js";
        //                     let neededResourceFile2 = capitalizeFirstLetter(resources[resources.length-1].resourceName)+"Service.js";
        //                     let neededResourceFile3 = capitalizeFirstLetter(resources[resources.length-1].resourceName)+".json";
                            
        //                     setTimeout(function () { 
        //                         for(let f=0; f<3; f++) {
        //                             console.log("Attempt number: ", f);
        //                             if(filesExist) {
        //                                 return res.json(JSON.parse('{ "message": "Success"}'));
        //                             } 
        //                             else {
        //                                 let neededFile1 = path.join(outDir,"controllers",neededResourceFile1);
        //                                 let neededFile2 = path.join(outDir,"controllers",neededResourceFile2);
        //                                 let neededFile3 = path.join(sampleDataPath,neededResourceFile3);
        //                                 console.log("Sample Data: ", neededFile3);
        //                                 if (fs.existsSync(neededFile1)) {
        //                                     console.log("File exists! ", neededResourceFile1);
        //                                     if (fs.existsSync(neededFile2)) {
        //                                         console.log("File exists! ", neededResourceFile2);
        //                                         if (fs.existsSync(neededFile3)) {
        //                                             console.log("File exists! ", neededResourceFile3);
        //                                             filesExist = true;
        //                                         }
        //                                     }
        //                                 }
        //                             }
        //                         }
        //                         return res.json(JSON.parse('{ "message": "Success"}'));
        //                     },3000);
        //                 }
        //                 else {
        //                     return res.json(JSON.parse('{ "message": "Success"}'));
        //                 }
        //                 console.log("Reached after testing");
        //             }
        //         });

        //     });
        // }
        // catch(error){
        //     console.log("Error on Generating API: ", error);
        //     if(error!=null) {
        //         utils.logErrors(error.stack);
        //     }
        //     return res.json(JSON.parse('{ "message": "Server Error" }'));
        // }
    };
}

export default ChatRouteController;