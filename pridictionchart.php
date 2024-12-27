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

$sql = "SELECT * FROM `pridicted_line_chart_table`";
$result = mysqli_query($con, $sql);

$data = [];

if(mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_assoc($result)){
        $data[] =[
            'id' => $row['id'],
            'country_name' => $row['country_name'],
            'year' => $row['year'],
            'pridicted_rate' => $row['pridicted_rate']

        ];
    }
    echo json_encode($data);
}
else {
    echo json_encode(['message' => 'No data found']);
}

mysqli_close($con);
?>