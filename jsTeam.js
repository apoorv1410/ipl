window.onload = function()
{
    
    drawTable();

    drawBar();


    
}




const base_url = "https://indipl2020.herokuapp.com/ipl2020/team/"
const token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE1OTAyMzk3NTcsImlhdCI6MTU5MDIyMTc1N30.RSwCZg1vBPhsSklc_GjYBdB5otDYB078uuIeVWyDlBijG1E3PhxwkYNzhDIea5SYBk2QQIaVY8iqe3N_Sbq1BA";

let labels = [];

let response = function(url){
    return fetch(url, {
        headers: {
            "Authorization": token
        }
    });
} 


drawTable = function(){
    
    const url = "https://indipl2020.herokuapp.com/ipl2020/team/all";
    response(url).then(res=>res.json()).then(data=>{
        //console.log(data);

        var label=new Array(8);
        var team=new Array(8);
        var city=new Array(8);
        var coach=new Array(8);
        var home=new Array(8);
        var count=0;
        for(var i in data)
        {
            var ob=data[i];
            label[count]=ob.label;
            team[count]=ob.team;
            city[count]=ob.city;
            coach[count]=ob.coach;
            home[count]=ob.home;
            count++;
        }

        let table = document.createElement('table');
        table.setAttribute("id", "tab");
        table.insertRow();
            let newCell = table.rows[table.rows.length-1].insertCell();
            newCell.textContent="Label";
            let newCell2 = table.rows[table.rows.length-1].insertCell();
            newCell2.textContent="Team";
            let newCell3 = table.rows[table.rows.length-1].insertCell();
            newCell3.textContent="City";
            let newCell4 = table.rows[table.rows.length-1].insertCell();
            newCell4.textContent="Coach";
            let newCell5 = table.rows[table.rows.length-1].insertCell();
            newCell5.textContent="Home";
        for(var i=0;i<8;i++)
        {
            table.insertRow();
            let newCell = table.rows[table.rows.length-1].insertCell();
            newCell.textContent=label[i];
            let newCell2 = table.rows[table.rows.length-1].insertCell();
            newCell2.textContent=team[i];
            let newCell3 = table.rows[table.rows.length-1].insertCell();
            newCell3.textContent=city[i];
            let newCell4 = table.rows[table.rows.length-1].insertCell();
            newCell4.textContent=coach[i];
            let newCell5 = table.rows[table.rows.length-1].insertCell();
            newCell5.textContent=home[i];
        }
        document.body.appendChild(table);

   });
 }


 drawBar = function(){
    
    const url = "https://indipl2020.herokuapp.com/ipl2020/team/totalamount";
    response(url).then(res=>res.json()).then(data=>{
        console.log(data);
        var rcbAmount=0;
        var kkrAmount=0;
        var miAmount=0;
        var kxipAmount=0;
        var dcAmount=0;
        var cskAmount=0;
        var srhAmount=0;
        var rrAmount=0;
        for(var i=0;i<8;i++)
        {
            var ob=data[i];
            if(ob.teamName=="RCB")
                rcbAmount=ob.amount;
            if(ob.teamName=="KKR")
                kkrAmount=ob.amount;
            if(ob.teamName=="MI")
                miAmount=ob.amount;
            if(ob.teamName=="KXIP")
                kxipAmount=ob.amount;
            if(ob.teamName=="DC")
                dcAmount=ob.amount;
            if(ob.teamName=="CSK")
                cskAmount=ob.amount;
            if(ob.teamName=="SRH")
                srhAmount=ob.amount;
            if(ob.teamName=="RR")
                rrAmount=ob.amount;
        }

        
        var database={
            header:["Team","Total Price"],
            rows:[
              ["MI",miAmount],
              ["KKR",kkrAmount],
              ["KXIP",kxipAmount],
              ["DC",dcAmount],
              ["RR",rrAmount],
              ["CSK",cskAmount],
              ["RCB",rcbAmount],
              ["SRH",srhAmount]
        
            ]
          }

        var chart = anychart.column(); 
        chart.title("Total Price of Each Team");
        chart.data(database);
        chart.container('container');
        chart.draw();

   });
 }


