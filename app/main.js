'use strict';
var gui = require('nw.gui');
var os = require('os');
var myWindow = gui.Window.get();
global.CONSOLE_OUTPUT = [];
global.MONITOR = {
    not_active:true
};
global.CONFIG_PATH = gui.App.dataPath;
global.ANGULAR = angular;

function createWindowMenu() {
    var windowMenu = new gui.Menu({
        type: 'menubar'
    });
    if (os.platform() === 'darwin') {
        if(windowMenu.createMacBuiltin){
            windowMenu.createMacBuiltin('SN Sync Utility', {
                hideEdit: false,
                hideWindow: false
            });
        }
    }
    myWindow.menu = windowMenu;
    windowMenu.append(new gui.MenuItem({
        label: 'SN Sync Utility'
    }));
}

createWindowMenu();
$('#settingsTabs a').click(function() {
    $(this).tab('show');
});