const POPUP_window = require("electron").BrowserWindow;
const POPUP_path = require("path");

class PopupWindow extends POPUP_window
{
    clientOffset: {x: number, y: number};
}

class PopupHandler {
    static Popups = new Set<PopupWindow>();
    static Tick = false;

    static async Update() {
        if(this.Tick) {
            for(let i = 0; i < this.Popups.size; i++) {
                UpdatePopup(this.Popups[i]);
            }

            setTimeout(PopupHandler.Update, 1000/60);
        }
    }

    static StartUpdate() {
        this.Tick = true;
    }

    static StopUpdate() {
        this.Tick = false;
    }

    static Register(Popup: PopupWindow) {
        PopupHandler.Popups.add(Popup)

        console.log("Added popup to registry")

        return PopupHandler.Popups.size-1;
    }

    static DestroyPopup() {

    }
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
    PopupHandler: PopupHandler,
    PopupWindow: PopupWindow,
    CreatePopup: CreatePopup,
    UpdatePopup: UpdatePopup
}