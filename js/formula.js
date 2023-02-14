function submit(){
    let base = document.getElementById("base").value;
    let height = document.getElementById("height").value;
    let area = (base * height)/2;
   // console.log(area);
   area = document.getElementById("result").innerText = `Area = ${area}`
}

