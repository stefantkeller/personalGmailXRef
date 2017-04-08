console.log("gmail_link");


var creating = browser.tabs.create({
    url: "http://www.example.com"
    });


/*
var pgxref = function () {
    var link = "https://mail.google.com/mail/u/0/?#all/";

    return {
        pgxrefSelection : function(){
            var linkId = getBrowserSelection();
            if (linkId != ""){
                pgxref.openLink(linkId);
            } else {
                pgxref.showPrompt();
            };
        },

        showPrompt : function() {
           var linkId = prompt("What's the gmail-thread identifier you want to open?",
                   ""); 
           if (linkId != null && linkId != ""){
                pgxref.openLink(linkId); 
           };
        },

        openLink : function(linkId) {
            gBrowser.addTab(link+linkId);
        }
    };
}();
*/
