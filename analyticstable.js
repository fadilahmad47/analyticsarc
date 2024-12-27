
async function fetchdata() {
  try {
    // Fetch data from API
    const response = await fetch('http://localhost/data_analytics_web/tableapi.php');
    const data = await response.json();
    console.log(data);

    // Create table header dynamically
    const tableheader = document.querySelector(".table-header");
    const trtag = document.createElement("tr");
    tableheader.appendChild(trtag);

    const thdata = [
      "Country Name", 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024
    ];
    for (let i = 0; i < thdata.length; i++) {
      const th = document.createElement("th");
      th.textContent = thdata[i];
      trtag.appendChild(th);
    }

    // Populate table body with data
    const tablebody = document.querySelector(".table-body");
    for (let i = 0; i < data.length; i++) {
      const trtagbody = document.createElement("tr");
      tablebody.appendChild(trtagbody);

      const rowData = [
        data[i].country_name,
        data[i].year_2014, data[i].year_2015, data[i].year_2016,
        data[i].year_2017, data[i].year_2018, data[i].year_2019,
        data[i].year_2020, data[i].year_2021, data[i].year_2022,
        data[i].year_2023, data[i].year_2024
      ];

      for (let j = 0; j < rowData.length; j++) {
        const td = document.createElement("td");
        if (rowData[j] !== undefined) {
          td.textContent = rowData[j]; // Set value if it's available
        } else {
          td.textContent = "N/A"; // Handle missing data
        }
        trtagbody.appendChild(td);
      }
    }
  } catch (error) {
    console.error("Data is not fetched: ", error);
  }
}


fetchdata();