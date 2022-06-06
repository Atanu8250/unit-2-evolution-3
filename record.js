// fill in javascript code here
document.querySelector("form").addEventListener("submit",myFunction);
document.querySelector("table").setAttribute("border","1px");
document.querySelector("table").setAttribute("cellSpacing","1px");

function myFunction(event){
    event.preventDefault();

    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    td1.innerText=document.querySelector("#name").value;


    let td2=document.createElement("td");
    td2.innerText=document.querySelector("#employeeID").value;


    let td3=document.createElement("td");
    td3.innerText=document.querySelector("#department").value;


    let td4=document.createElement("td");
    td4.innerText=document.querySelector("#exp").value;


    let td5=document.createElement("td");
    td5.innerText=document.querySelector("#email").value;


    let td6=document.createElement("td");
    td6.innerText=document.querySelector("#mbl").value;

    /* **************************************************** */
    let td7=document.createElement("td");
    let role;
    if(Number(td4.innerText)>5){
        role="Senior";
    }else if(Number(td4.innerText)>=2 && Number(td4.innerText)<=5){
        role="Junior";
    }else if(Number(td4.innerText)<=1){
        role="Fresher";
    }
    td7.innerText=role;


    let td8=document.createElement("td");
    td8.innerText="Delete";
    td8.addEventListener("click",deleteRow);
    td8.style.cursor="pointer"
    td8.style.backgroundColor="red"


    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr);
}

function deleteRow(event){
    event.target.parentNode.remove();
}