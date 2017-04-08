browser.contextMenus.create({
        id: "pgxref",
        title: "Gmail X-ref from selection"
});

browser.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId == "pgxref") {
        var link = "https://mail.google.com/mail/u/0/?#all/";
        var linkId = info.selectionText; // https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/contextMenus/create
        //console.log("pgxref selection :"+linkId);
        //prompt("","");
        if (linkId != undefined && linkId != "") {
            browser.tabs.create({url: link+linkId});
        };
    }
});
