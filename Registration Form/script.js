function doPost(e) {
  const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('Sheet1');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx123abc.../exec';

  
  const blob = e.parameter.screenshot ? Utilities.newBlob(Utilities.base64Decode(e.parameter.screenshot)) : null;

  sheet.appendRow([
    new Date(),
    e.parameter.name,
    e.parameter.phone,
    e.parameter.email,
    e.parameter.college
  ]);

  return ContentService.createTextOutput("Success");
}
