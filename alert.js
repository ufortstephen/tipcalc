
function getPercent() {
    var num = document.getElementById("num").value;
    var p = document.getElementById("percent").value;
    var percent = p / 100;
    if (num <= 0 || p <= 0) {
        if(num <=0) {
            var output = document.getElementById("amountinfo").textContent = ("Please input a valid number");
            output = document.getElementById("amountinfo").style.color = ("red");
            document.getElementById("ans").textContent = (` `);

        }
        else{
             output = document.getElementById("amountinfo").textContent = ("");
        }

        if(p <=0) {
            var output2 = document.getElementById("percentinfo").textContent = ("Input a percent value");
            output2 = document.getElementById("percentinfo").style.color = ("red");
            document.getElementById("ans").textContent = (` `);

        }
        else{
             output2 = document.getElementById("percentinfo").textContent = ("");

        }   
        
    }
    else{
        var all = num *  percent;
         document.getElementById("ans").textContent = (`This is your tip ${all.toFixed(2)}`);
         var output = document.getElementById("amountinfo").textContent = ("");
         var output2 = document.getElementById("percentinfo").textContent = ("");
    }
}



