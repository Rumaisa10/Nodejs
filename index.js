var mysql=require('mysql');

var DatabaseConnectionConfiq={
    host:"localhost",
    user:"root",
    password:"",
    database:"form"
}

var con=mysql.createConnection(DatabaseConnectionConfiq);
con.connect(function (error){
    if(error)
    {
        console.log("connection fail")
    }
    else {
        console.log("connection success");
        insertdata(con);
    }
});
//module.exports=con;
function insertdata(){
    /*var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value; */
    let SQLQuery="INSERT INTO `data`( `fname`, `lname`, `email`) VALUES ('abc','bcd','abc@anc')"
    con.query(SQLQuery,function (error){
        if(error)
        {
            console.log("data insert fail")
        }
        else{
            console.log("data insert success");
        }


    })
}
