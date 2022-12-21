const containerDiv = document.querySelector("#container");



const buttonEl = document.getElementById("btn");

buttonEl.onclick = ()=>{
   var a = prompt("Enter Grid size");
   if (a <= 100){
   makeRows(a,a);
   }
   else {
    alert("Enter size below 100");
   }
}



function makeRows(rows, columns) {
    containerDiv.style.setProperty("--grid-rows", rows);
    console.log(containerDiv);
    containerDiv.style.setProperty("--grid-columns", columns);
    for(i = 0; i< (rows * columns); i++){
        let square = document.createElement("div");
        //square.innerText = (i + 1);
        square.style.minHeight = "0";
        square.style.minWidth = "0";
        square.style.overflow = "hidden";
        containerDiv.appendChild(square).className = "grid-item";
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
            console.log(square);
        })
    }
}


