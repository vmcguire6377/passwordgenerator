<!DOCTYPE html>
<html>
<head>
        <title>Watch That Box</title>
</head>
<body>
        <p>Press the buttons to move the box!</p>

        <div id="box" style="height:150px; width:150px; background-color:orange;"</div>


        <button id="growBtn">Grow</button>
        <button id="redBtn">Red</button>
        <button id="fadeBtn">Fade</button>
        <button id="resetBtn">Reset</button>

        <script type="text/javascript">
        
        document.getElementById("growBtn").addEventListener("click", function(){
            document.getElementById("box").style.height = "250px";
        });

        document.getElementById("redBtn").addEventListener("click", function(){
            document.getElementById("box").style.backgroundColor="red";
        });

        document.getElementById("fadeBtn").addEventListener("click", function(){
            document.getElementById("box").style.opacity=".1";
        });

        document.getElementById("resetBtn").addEventListener("click", function(){
            document.getElementById("box").style.height = "150px";
        });
    </script>

</body>
</html>