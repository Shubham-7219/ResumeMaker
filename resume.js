//alert("loading")
function addNewWEField() {
    //console.log("Adding New Field...")
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewEQField() {
    //console.log("Adding New Field...")
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);

    let eqOb=document.getElementById("eq");
    let eqAddButtonOb=document.getElementById("eqAddButton");

    eqOb.insertBefore(newNode, eqAddButtonOb);

}

function generateResume(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");

    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

    document.getElementById("liT").innerHTML=document.getElementById("liField").value;

    document.getElementById("ivT").innerHTML=document.getElementById("ivField").value;
    document.getElementById("pvT").innerHTML=document.getElementById("piField").value;

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    let wes=document.getElementsByClassName("weField");

    let str='';

    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML=str;

    let eqs=document.getElementsByClassName("eqField");
    let str1='';
    for(let e of eqs){
        str1 += `<li> ${e.value}</li>`
    }
    document.getElementById("eqT").innerHTML=str1;

    document.getElementById('rm-form').style.display='none';
    document.getElementById('rm-template').style.display='block';

}

function printResume(){
    window.print();
}