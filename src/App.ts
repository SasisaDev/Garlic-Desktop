const {app, BrowserWindow, ipcMain, Menu, Tray} = require('electron');
//const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const path = require('path')
const m_os = require('os')

const mw = require('./server/Multiwindow')

const Popup = require("./server/Popup")
//const DarwinMenu = require('./server/DarwinMenu')

function createWindow () {
    const mainWindow = new BrowserWindow({
      webPreferences: {
        preload: path.join(__dirname, 'server/preloads/main.preload.js')
      },
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
      app.quit()
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

var tray;
app.whenReady().then(() => {
  //const menu = Menu.buildFromTemplate(DarwinMenu)
  
  //Menu.setApplicationMenu(menu)

  try {
    tray = new Tray('path/to/icon')
    const contextMenu = Menu.buildFromTemplate([
      { label: 'Open', type: 'button' },
      { label: 'Exit', type: 'button' },
    ])
    tray.setToolTip('Garlic')
    tray.setContextMenu(contextMenu)
  } catch(err) {

  }
  
  createWindow()

  Popup.PopupHandler.StartUpdate()

  app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()

  Popup.PopupHandler.StopUpdate()
})