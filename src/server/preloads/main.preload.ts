const { contextBridge, ipcRenderer } = require('electron')
const preload_os = require('os')

contextBridge.exposeInMainWorld('electron', {
    platform: preload_os.platform(),

    setTitle: (title) => ipcRenderer.send('set-title', title),
    closeApp: () => ipcRenderer.send('app:close'),
    minmaxApp: () => ipcRenderer.send('app:minmax'),
    minimizeApp: () => ipcRenderer.send('app:min'),
    isMaximizedApp: () => ipcRenderer.invoke('app:ismax'),

    NewProject: async (path) => ipcRenderer.invoke('proj:new'),
})