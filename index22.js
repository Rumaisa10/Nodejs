<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registration-From</title>
    <link rel="stylesheet" href="style.css" type="text/css">
</head>
<body>

       <div class="main">
           <div class="register">
               <h2>Register Here</h2>
               <form id="register" method="post">
                   <label>First Name : </label>
                   <br>
                   <input type="text"
                   id="fname" placeholder="Enter Your First Name">
                   <br><br>
                   <label>Last Name :</label>
                   <br>
                   <input type="text"
                          id="lname" placeholder="Enter Your Last Name">
                      <br> <br>
                   <label> Email :</label>
                   <br>
                   <input type="email"  id="email" placeholder="Enter Your Email">
                   <br><br>
                   <button type="button"  onclick="insertdata();">submit</button>

                   <label></label>
               </form>
           </div>
       </div>
<script>
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
            alert("Success");
            console.log("connection success");
            insertdata();
        }
    });
   // module.exports=con;

    function insertdata(){
        var inputval1=document.getElementById("fname").value;
        var inputval2=document.getElementById("lname").value;
        var inputval3=document.getElementById("email").value;

        let SQLQuery="INSERT INTO `data`( `fname`, `lname`, `email`) VALUES ('"+inputval1+"','"+inputval2+"','"+inputval3+"')"
        con.query(SQLQuery,function (error){
            if(error)
            {
                alert("data insert fail");
            }
            else{
                alert("data insert success");
            }


        })
    }

</script>

</body>
</html>