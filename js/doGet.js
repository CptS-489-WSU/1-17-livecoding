//********************************************************************************
//DOGET.GS
//*********************************************************************************
//This file contains the doGet() function, which serves up the web-based Play 
//app, responding to get requests with query strings as appropriate to dish out
//new pages
//*********************************************************************************

function doGet() {
  var faviconUrl = "https://dl.dropboxusercontent.com/s/79q9a1xy2148unf/SpeedScore3Icon.ico";
  var template = HtmlService.createTemplateFromFile('html/app');
  return template
        .evaluate()
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setFaviconUrl(faviconUrl)
        .setTitle("SpeedScore Track")
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);     
}

//include: Allows us to include files using templated HTML, per Google's best practices 
//(https://developers.google.com/apps-script/guides/html/best-practices)
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
