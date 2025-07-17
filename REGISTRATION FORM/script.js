function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var name = e.parameter.name;
  var phone = e.parameter.phone;
  var email = e.parameter.email;
  var college = e.parameter.college;
  var screenshot = e.parameter.screenshot || "No file";

  sheet.appendRow([name, phone, email, college, screenshot, new Date()]);
  
  return ContentService.createTextOutput("Success");
}
