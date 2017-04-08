// add an entry to the context menu, iff something is selected
browser.contextMenus.create({
        id: "pgxref",
        title: "Gmail X-ref from selection",
        contexts: ["selection"]
});

// the following listener gets active if the above context menue entry is clicked (identified through id)
browser.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId == "pgxref") {
        var link = "https://mail.google.com/mail/u/0/?#all/";

        // task: get text the user has selected
        // solution: window.getSelection();
        // problem: this doesn't work ?!!?
        // new solution found on:
        // https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/contextMenus/create
        var linkId = info.selectionText;

        //console.log("pgxref selection :"+linkId);
        if (linkId != undefined && linkId != "") {
            browser.tabs.create({url: link+linkId});
        };
        // ideally: else{prompt("Enter gmail-thread identifier","")};
        // (in this case of course the context menu entry shouldn't be only on selection)
        // problem: prompt() somehow causes an "unexpected error"
    }
});
