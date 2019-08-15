# electron-template
## main include:
* electron  
* react  
* antd  
* webpack  
* electron-builder
## instructions  
* start react `npm run start`  
* pack react `npm run build`  
* start electron  ` npm run electron-start`  
* pack electron `npm run dist`  
## configures
### package.json  
* development true electron load by webpack-dev-server
* development false electron load by dist path  
### webpack.common.js  
* entry  react apps main paths 
* plugins add new HtmlWebPackPlugin when add react app  
