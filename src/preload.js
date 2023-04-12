const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    getImages: (data) => ipcRenderer.invoke('getImages', data),
    resImages: (callback) => ipcRenderer.on('resImages', callback),

    addImages: (data) => ipcRenderer.invoke('addImages', data),
    addImageSection: (data) => ipcRenderer.invoke('addImageSection', data),
    addImageSubsection: (data) => ipcRenderer.invoke('addImageSubsection', data),

    getSections: (data) => ipcRenderer.invoke('getSections', data),
    resSections: (callback) => ipcRenderer.on('resSections', callback),

    getSubsections: (data) => ipcRenderer.invoke('getSubsections', data),
    resSubsections: (callback) => ipcRenderer.on('resSubsections', callback),

})