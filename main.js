const {BrowserWindow,app} = require('electron');
const url = require('url');
const path = require('path');
const uuid = require('uuid/v4');

const {dev} = require('./package');
//窗口全局引用
let mainWin = null;
let subWins = [];

const getUrl = (appName)=>{
    return dev?`http://127.0.0.1:8082/${appName}`:require('url').format({
        protocol: 'file',
        slashes: true,
        pathname: require('path').join(__dirname, '/dist/'+appName+'/index.html')
    })

};
const createSubWins = ()=>{
    const subWin = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    });
    const subWinObj = {
        key:uuid(),
        win:subWin
    };
    subWins.push(subWinObj);
    subWin.loadURL(getUrl('App2')).then(e=>{
        if (e) throw e;
    }).catch(e=>{
        console.log(e)
    });
    subWin.on('closed',()=>{
        mainWin = null;
        subWins.filter(subWin=>subWin.key!==subWinObj.key);
    })
};
const createMainWin = ()=>{
    mainWin = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    });
    mainWin.loadURL(getUrl('App')).then(e=>{
        if (e) throw e;
    }).catch(e=>{
        console.log(e)
    });
    mainWin.on('closed',()=>{
        mainWin = null;
        app.quit();
    })
};


app.on('ready',()=>{
    createMainWin();
    createSubWins();
});