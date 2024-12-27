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

$sql = "SELECT * FROM `average_unemployment_data`";
$result = mysqli_query($con, $sql);

$data = [];

if(mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_assoc($result)){
        $data[] =[
            'id' => $row['Id'],
            'country_name' => $row['Country_name'],
            'year' => $row['Year'],
            'unemployment_rate' => $row['Unemployment_rate']

        ];
    }
    echo json_encode($data);
}
else {
    echo json_encode(['message' => 'No data found']);
}

mysqli_close($con);
?>