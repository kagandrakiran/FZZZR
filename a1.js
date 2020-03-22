let checks = document.getElementById("checks1");
console.log("Value check");
console.log(checks);

function getvalue() {

    if (checks[0].checked == true && checks[1].checked == true) {
        document.getElementById("Result").innerHTML = "correct!";
    } else {
        document.getElementById("Result").innerHTML = "oops...";
    }
}
//git  problem sir...
// what it 
//why the git is not working
//let checks = document.querySelector("check");
// its working now
// any more queries