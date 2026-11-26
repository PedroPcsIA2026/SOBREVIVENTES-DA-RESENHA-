const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function create() {
  const win = new BrowserWindow({
    width: 1280, height: 720, minWidth: 800, minHeight: 450,
    backgroundColor: '#0d0710', title: 'Sobreviventes da Resenha',
    icon: path.join(__dirname, 'build', 'icon.png'),
    webPreferences: { contextIsolation: true }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, 'www', 'index.html'));
  // F11 alterna tela cheia
  win.webContents.on('before-input-event', (e, i) => { if (i.type === 'keyDown' && i.key === 'F11') { win.setFullScreen(!win.isFullScreen()); e.preventDefault(); } });
}
app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
