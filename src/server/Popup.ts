const POPUP_window = require("electron").BrowserWindow;
const POPUP_path = require("path");

class PopupWindow extends POPUP_window
{
    clientOffset: {x: number, y: number};
}

function CreatePopup(ParentWindow: any, loadPath: string, clientOffset: {x: number, y: number}, options?: any, preload?: string) 
: PopupWindow {
    const popupWindow = new POPUP_window({
        webPreferences: {
            preload: (preload) ? path.join(__dirname, preload) : ''
          },
          frame: false,
          parent: ParentWindow
    });

    popupWindow.loadFile(loadPath);

    popupWindow.clientOffset = clientOffset;

    return popupWindow;
}

function UpdatePopup(popupWindow: PopupWindow)
{
    let parentPos = popupWindow.getParentWindow().getPosition();
    let popupOffset = popupWindow.clientOffset;

    popupWindow.setPosition(parentPos[0] + popupOffset.x, parentPos[1] + popupOffset.y, false);
}

module.exports = {
    PopupWindow: PopupWindow,
    CreatePopup: CreatePopup,
    UpdatePopup: UpdatePopup
}