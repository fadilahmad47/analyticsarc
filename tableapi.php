<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con = mysqli_connect('localhost', 'root', '', 'analyticsarc');
// Check connection
if(!$con){
    http_response_code(500);
    echo json_encode(['message' => 'Database connection failed']);
    exit();
}

$sql = "SELECT * FROM `updated_average_unemployment_data`";
$result = mysqli_query($con, $sql);

$data = [];

if(mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_assoc($result)){
        $data[] =[
            'id' => $row['id'],
            'country_name' => $row['country_name'],
            'year_2014' => $row['2014'],
            'year_2015' => $row['2015'],
            'year_2016' => $row['2016'],
            'year_2017' => $row['2017'],
            'year_2018' => $row['2018'],
            'year_2019' => $row['2019'],
            'year_2020' => $row['2020'],
            'year_2021' => $row['2021'],
            'year_2022' => $row['2022'],
            'year_2023' => $row['2023'],
            'year_2024' => $row['2024']
        ];
    }
    echo json_encode($data);
}
else {
    echo json_encode(['message' => 'No data found']);
}

mysqli_close($con);
?>