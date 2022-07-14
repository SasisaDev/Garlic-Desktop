const {app, BrowserWindow, ipcMain, Menu, Tray} = require('electron');
//const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const axios = require('axios');
const path = require('path')
const m_os = require('os')
const fs = require('fs');

const mw = require('./server/Multiwindow')

const Popup = require("./server/Popup")
//const DarwinMenu = require('./server/DarwinMenu')

var mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({
      webPreferences: {
        preload: path.join(__dirname, 'server/preloads/main.preload.js')
      },
      icon: path.join(__dirname, 'Assets/icon'),
      frame: false,
      webgl: true,
      transparent: true,
      minWidth: 725,
      minHeight: 500,
      vibrancy: 'ultra-dark',
    } as any)

    mw.Register(mainWindow);

    mainWindow.webContents.openDevTools()
  
    ipcMain.on('set-title', (event, title) => {
      const webContents = event.sender
      const win = BrowserWindow.fromWebContents(webContents)
      win.setTitle(title)
    })

    ipcMain.on('app:close', (event) => {
      //app.quit()
      mainWindow.hide();
    })
    ipcMain.on('app:minmax', (event) => {
      if (mainWindow.isMaximized()) {
        if(m_os.platform() === 'darwin')
          mainWindow.setFullScreen(false);
        else
          mainWindow.restore();
      } else {
        if(m_os.platform() === 'darwin')
          mainWindow.setFullScreen(true);
        else
          mainWindow.maximize();
      }
    })
    ipcMain.on('app:min', (event) => {
      mainWindow.minimize();
    })

    ipcMain.handle('app:ismax', async () => {
      return mainWindow.isMaximized();
    })

    ipcMain.handle('net:multipart', async (event, url, filename) => {
      const formData = new FormData();
      formData.append('attachment', fs.createReadStream(filename));
      return axios.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }});
    })

    ipcMain.handle('app:getplatform', () => {
      return m_os.platform();
    })

    ipcMain.on('mw:close', (event, winid) => {
      if(mw.GetWindow(winid) != undefined) 
      {
        console.log('ELECTRON: Closing window ' + winid)
        mw.GetWindow(winid).close();
        mw.Unregister(winid);
      }
      else
      {
        console.log('ELECTRON: Unable to close window ' + winid + ' because of undefined')
      }
    })

    ipcMain.on('pop:emoji', () => {
      Popup.CreatePopup(mainWindow, "", {x: 0, y: 0});
    })
  
    mainWindow.loadFile(path.join(__dirname,'client/main.html'))
}

app.requestSingleInstanceLock();
app.on('second-instance', (event, argv, cwd) => {
  // Someone tried to run a second instance, we should focus our window.
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.show();
    mainWindow.focus();
  }
});

var tray;
app.whenReady().then(() => {
  //const menu = Menu.buildFromTemplate(DarwinMenu)
  
  //Menu.setApplicationMenu(menu)

  createWindow()

  try {
    tray = new Tray(path.join(__dirname, '/Assets/icon'))
      .on('click', (a, b, c) => {
        mainWindow.show();
      })
    const contextMenu = Menu.buildFromTemplate([
      { 
        label: 'Open',
        click: async () => {
          mainWindow.show();
        }
      },
      { 
        label: 'Exit', 
        click: async () => {
          app.quit();
        }
      },
    ])
    tray.setToolTip('Garlic Desktop')
    tray.setContextMenu(contextMenu)
    
  } catch(err) {
    console.log(err)
  }

  Popup.PopupHandler.StartUpdate()

  app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()

  Popup.PopupHandler.StopUpdate()
})