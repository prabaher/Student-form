var nameInput = document.getElementById("name")
var ageInput = document.getElementById("age")
var emailInput = document.getElementById("email")
var courseInput = document.getElementById("course")
var maleRadio = document.getElementById("radio1")
var femaleRadio = document.getElementById("radio2")
var resultTableByClass = document.querySelector(".second-table")
var resultTable = document.getElementById("secondtable")

function save(){
    if(nameInput.value.trim() === "" || ageInput.value.trim() === "" || emailInput.value.trim() === "" || (!maleRadio.checked && !femaleRadio.checked)){
        alert("Please fill all the inputs");
        return;
    }

    var newRow = document.createElement("tr")

    var nameCell = document.createElement("td")
    nameCell.textContent = nameInput.value
    newRow.append(nameCell)

    var ageCell = document.createElement("td")
    ageCell.textContent = ageInput.value
    newRow.append(ageCell)

    var genderCell = document.createElement("td")
    if (maleRadio.checked == true){
        genderCell.textContent = maleRadio.value
    }
    else if(femaleRadio.checked == true){
        genderCell.textContent = femaleRadio.value
    }
    newRow.append(genderCell)

    var courseCell = document.createElement("td")
    courseCell.textContent = courseInput.value
    newRow.append(courseCell)

    var emailCell = document.createElement("td")
    emailCell.textContent = emailInput.value
    newRow.append(emailCell)

    var actionCell = document.createElement("td")
    actionCell.innerHTML = "<button class='delbtn'>delete</button>"
    newRow.append(actionCell)

    resultTable.append(newRow)
    clearitem();
}

var saveButton = document.getElementById("savebutton")
saveButton.addEventListener("click", function(event){
    event.preventDefault()
})

resultTable.addEventListener("click", deleteRow);
function deleteRow(event){
    if(!event.target.classList.contains("delbtn")){
        return;
    }
    var deleteButton = event.target;
    deleteButton.closest("tr").remove();
}

function clearitem(){
    nameInput.value = ""
    ageInput.value = ""
    emailInput.value = ""
    courseInput.value = ""
    maleRadio.checked = false
    femaleRadio.checked = false
}