class Multiwindow {
    private static Registry = new Set<any>();
    
    static Register(Window)
    {
        for(var i = 0; i < Multiwindow.Registry.size; i++) {
            if(Multiwindow.Registry[i] == Window)
            {
                console.log("ELECTRON: Tried to register a window, but it is already registered");
                return i;
            }
        }

        Multiwindow.Registry.add(Window)

        console.log("adding element to mw")

        return Multiwindow.Registry.size-1;
    }

    static GetWindow(id) {
        return Array.from(Multiwindow.Registry)[parseInt(id)];
    }

    static Unregister(id) {
        return Multiwindow.Registry.delete(Multiwindow.GetWindow(id));
    }
}

module.exports = Multiwindow;