const {app, BrowserWindow} = require('electron');
const path = require('path');
const { isConstructorDeclaration } = require('typescript');
const isDev = require('electron-is-dev');
const url = require('url');

function createWindow() {

    const win = new BrowserWindow({
      width: 800,
      height: 600,
  });

    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });


    if (isDev) {
      console.log("start1");
			win.loadURL("http://localhost:3000")
		} else {
			win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`)
			win.loadFile(`${path.join(__dirname, "../build/index.html")}`)
		}   
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });