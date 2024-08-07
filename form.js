function choose() {
  var select = document.getElementById("detail");
  var selectValue = select.value;

  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var address1 = document.getElementById("address1").value;
  var address2 = document.getElementById("address2").value;
  var city = document.getElementById("city").value;
  var region = document.getElementById("region").value;
  var email = document.getElementById("email").value;

  var table = document.createElement("table");
  var headerRow = document.createElement("tr");
  var thead = document.createElement("thead");

  var header = [
      "First Name",
      "Last Name",
      "Address Line 1",
      "Email",
      "Course",
      "Time Till Course Begin"
  ];

  header.forEach(function (headerText) {
      var th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  var body = document.createElement("tbody");
  var rows = document.createElement("tr");

 
  var currentDate = new Date();

  let courseDates = {
    'BCOM': new Date(2024, 8, 1), 
    'BIT': new Date(2024, 10, 1), 
    'DIT': new Date(2024, 9, 1),  
    'Higher Certificate': new Date(2024, 8, 1)
};


  let courseDate = courseDates[selectValue];
  let timeDifference = courseDate - currentDate;
  let dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  

 
  var FnameData = document.createElement("td");
  FnameData.textContent = firstName;
  rows.appendChild(FnameData);

  var LnameData = document.createElement("td");
  LnameData.textContent = lastName;
  rows.appendChild(LnameData);

  var AddressData = document.createElement("td");
  AddressData.textContent = address1;
  rows.appendChild(AddressData);

  var EmailData = document.createElement("td");
  EmailData.textContent = email;
  rows.appendChild(EmailData);

  var CourseData = document.createElement("td");
  CourseData.textContent = selectValue;
  rows.appendChild(CourseData);

  var TimeData = document.createElement("td");
  TimeData.textContent = dayDifference + " days";
  rows.appendChild(TimeData);


  body.appendChild(rows);
  table.appendChild(body);

  var output = document.getElementById("output");
  output.innerHTML = "";
  output.appendChild(table);
}
