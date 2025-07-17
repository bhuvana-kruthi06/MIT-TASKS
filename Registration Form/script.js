function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Extract form data from request
    var name = e.parameter.name || "Not provided";
    var phone = e.parameter.phone || "Not provided";
    var email = e.parameter.email || "Not provided";
    var college = e.parameter.college || "Not provided";
    var screenshot = e.parameter.screenshot || "No file";

    // Append data to the next row in the sheet
    sheet.appendRow([name, phone, email, college, screenshot, new Date()]);

    // Send response back to client
    return ContentService
      .createTextOutput("Success")
      .setMimeType(ContentService.MimeType.TEXT);

  } catch (error) {
    // Error handling
    return ContentService
      .createTextOutput("Error: " + error)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}
