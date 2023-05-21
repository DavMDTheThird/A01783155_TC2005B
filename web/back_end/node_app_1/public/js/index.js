const result_p = document.getElementById('fetch_result');

// const request_result = await fetch('/api/hello/?name=David&surname=Doe');
// result_p.innerHTML = await request_result.text();

const response_json = await fetch('/api/json_test', {
    method: 'GET'})

if(response_json.ok){
    const message = await response_json.json();
    const resultDiv = document.getElementById('fetch_result');
    resultDiv.innerHTML = `hello ${message.name} ${message.surname}!!`
}
else{
    console.log('HttpError: ' + response_json.status);
}

console.log(request_result);

