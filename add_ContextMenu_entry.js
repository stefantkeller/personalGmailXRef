browser.contextMenus.create({
        id: "pgxref",
        title: "Gmail X-ref from selection"
});

//browser.contextMenus.create({
//        id: "pgxref_query",
//        title: "Request query for gmail X-ref"
//});

browser.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId == "pgxref") {
        browser.tabs.executeScript({
                file: "gmail_link.js"
            });
    }
});
