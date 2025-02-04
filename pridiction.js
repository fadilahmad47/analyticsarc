//switch between chart and table
const hoverdiv1 = document.querySelector("#hoverdiv1");
const phase2btn1 = document.querySelectorAll("#phase2btn1");
const phase2visicon1 = document.querySelector(".phase2visicon1");
for (let i = 0; i < phase2btn1.length; i++) {
    // console.log(i);
    phase2btn1[i].addEventListener("click", () => {
        if (i === 0) {
            hoverdiv1.style.transform = "translateX(0px)";
            phase2visicon1.style.transform = "translateX(0px)";
        }
        else if (i === 1) {
            hoverdiv1.style.transform = "translateX(69px)";
            phase2visicon1.style.transform = "translateX(-982px)";

        }
        else {
            hoverdiv1.style.transform = "translateX(0px)";
            phase2visicon1.style.transform = "translateX(0px)";

        }
    })
}

//creating chart
async function fetchdata() {
    try {
        const response = await fetch('http://localhost/data_analytics_web/pridictionchart.php');
        const data = await response.json();
        //   console.log(data);

        // Filter data for chart
        const colombiaData = data.filter(data => data.country_name === "Colombia");
        const swedenData = data.filter(data => data.country_name === "Sweden");
        const africaData = data.filter(data => data.country_name === "Central African Republic");
        const chinaData = data.filter(data => data.country_name === "China");
        const indiaData = data.filter(data => data.country_name === "India");
        const bangladeshData = data.filter(data => data.country_name === "Bangladesh");
        const usaData = data.filter(data => data.country_name === "United States");
        const netherlandsData = data.filter(data => data.country_name === "Netherlands");
        // console.log(colombiaData);

        // Extract years and unemployment rates
        const labels = colombiaData.map(data => String(data.year)); // Convert years to strings
        // console.log(labels);

        const colombiaunemploymentRates = colombiaData.map(data => data.pridicted_rate);
        const swedenUnemploymentRates = swedenData.map(data => data.pridicted_rate);
        const africaUnemploymentRates = africaData.map(data => data.pridicted_rate);
        const chinaUnemploymentRates = chinaData.map(data => data.pridicted_rate);
        const indiaUnemploymentRates = indiaData.map(data => data.pridicted_rate);
        const bangladeshUnemploymentRates = bangladeshData.map(data => data.pridicted_rate);
        const usaUnemploymentRates = usaData.map(data => data.pridicted_rate);
        const netherlandsUnemploymentRates = netherlandsData.map(data => data.pridicted_rate);
        // console.log(colombiaunemploymentRates);

        // Define chart data
        const apidata = {
            labels: labels, // Dynamic years
            datasets: [{
                label: 'Colombia',
                data: colombiaunemploymentRates, // Dynamic rates
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.3,
                // pointBackgroundColor: 'rgba(75, 192, 192, 0.3)',
                pointRadius: 6, // Bigger data points
                pointHoverRadius: 8, // Bigger points on hover
                pointBackgroundColor: 'rgb(75, 192, 192, 0.41)' // Color for the points
            },
            {
                label: 'Sweden',
                data: swedenUnemploymentRates,
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.3,
                // pointBackgroundColor: 'rgba(75, 192, 192, 0.3)',
                pointRadius: 6, // Bigger data points
                pointHoverRadius: 8, // Bigger points on hover
                pointBackgroundColor: 'rgb(255, 99, 132, 0.41)' // Color for the points
            },
            {
                label: 'Africa',
                data: africaUnemploymentRates,
                fill: false,
                borderColor: 'rgb(226, 99, 255)',
                tension: 0.3,
                // pointBackgroundColor: 'rgba(75, 192, 192, 0.3)',
                pointRadius: 6, // Bigger data points
                pointHoverRadius: 8, // Bigger points on hover
                pointBackgroundColor: 'rgba(226, 99, 255, 0.41)' // Color for the points
            },
            {
                label: 'China',
                data: chinaUnemploymentRates,
                fill: false,
                borderColor: 'rgb(255, 159, 64)',
                tension: 0.3,
                pointRadius: 6, // Bigger data points
                pointHoverRadius: 8, // Bigger points on hover
                pointBackgroundColor: 'rgba(255, 159, 64, 0.41)'
            },
            {
                label: 'India',
                data: indiaUnemploymentRates,
                fill: false,
                borderColor: 'rgb(134, 192, 75)',
                tension: 0.3,
                pointRadius: 6, // Bigger data points
                pointHoverRadius: 8, // Bigger points on hover
                pointBackgroundColor: 'rgba(134, 192, 75, 0.41)'
            },
            {
                label: 'Bangladesh',
                data: bangladeshUnemploymentRates,
                fill: false,
                borderColor: 'rgb(153, 102, 255)',
                tension: 0.3,
                pointRadius: 6, // Bigger data points
                pointHoverRadius: 8, // Bigger points on hover
                pointBackgroundColor: 'rgba(153, 102, 255, 0.41)'
            },
            {
                label: 'United States',
                data: usaUnemploymentRates,
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.3,
                pointRadius: 6, // Bigger data points
                pointHoverRadius: 8, // Bigger points on hover
                pointBackgroundColor: 'rgba(255, 99, 132, 0.41)'
            },
            {
                label: 'Netherlands',
                data: netherlandsUnemploymentRates,
                fill: false,
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.3,
                pointRadius: 6, // Bigger data points
                pointHoverRadius: 8, // Bigger points on hover
                pointBackgroundColor: 'rgba(54, 162, 235, 0.41)'
            }
            ]

        };

        // Define chart configuration
        const config = {
            type: 'line',
            data: apidata
        };

        // Render the chart
        const canvas = document.getElementById('myChart1');
        // if (window.myChart instanceof Chart) {
        //     window.myChart.destroy(); // Destroy previous chart instance
        // }
        window.myChart = new Chart(canvas, config);
    }
    catch (error) {
        console.error("Data is not fetched: ", error);
    }
}
fetchdata();