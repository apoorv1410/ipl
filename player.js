const tableheader =` 
<thead class="thead-dark">
<tr>
  <th background-color="blue" scope="col">Name</th>
  <th scope="col">Role</th>
  <th scope="col">Label</th>
  <th scope="col">Price</th>
</tr>
</thead>`;

const customHeaders = new Headers();
customHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE1OTAyMzk3NTcsImlhdCI6MTU5MDIyMTc1N30.RSwCZg1vBPhsSklc_GjYBdB5otDYB078uuIeVWyDlBijG1E3PhxwkYNzhDIea5SYBk2QQIaVY8iqe3N_Sbq1BA");

const requestOptions = {
    method: 'GET',
    headers: customHeaders,
};

$("#dropdown").change(function () {
    let teamname = $('option:selected', this).data("value");
    getData(teamname);
});

async function getData(url) {
    fetch(`https://indipl2020.herokuapp.com/ipl2020/team/${url}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            let tableOutput = '';
    
            result.forEach((player) => {
                tableOutput += `<tr>
                                <th scope="row">${player.name}</th>
                                <td>${player.role}</td>
                                <td>${player.label}</td>
                                <td>${player.price}</td>
                              </tr>`;
            });
            document.getElementById("playertable").innerHTML = `<table class="table table-bordered sortable" background-color="blue">${tableheader}<tbody>${tableOutput}</tbody></table>`
        })
        .catch(error => console.log('error', error));
}