var n=document.getElementById("name")
var a=document.getElementById("age")
var e=document.getElementById("email")
var c=document.getElementById("course")
var r1=document.getElementById("radio1")
var r2=document.getElementById("radio2")


var st=document.querySelector(".second-table")
var nt=document.getElementById("secondtable")
function save(){

    // st.style.display="block"

    var ntr=document.createElement("tr")
    
    var nn=document.createElement("td")
    nn.textContent=n.value
    ntr.append(nn)
    nt.append(ntr)

    var na=document.createElement("td")
    na.textContent=a.value
    ntr.append(na)
    nt.append(ntr)

    var nr=document.createElement("td")
    if (r1.checked == true){
        nr.textContent=r1.value
        ntr.append(nr)
        nt.append(ntr)
    }
    if(r2.checked == true){
        nr.textContent=r2.value
        ntr.append(nr)
        nt.append(ntr)
    }
    else{
        nr.textcontent="select gender"
        ntr.append(nr)
        nt.append(ntr)
    }
    var nc=document.createElement("td")
    nc.textContent=c.value
    ntr.append(nc)
    nt.append(ntr)

    var ne=document.createElement("td")
    ne.textContent=e.value+"@gmail.com"
    ntr.append(ne)
    nt.append(ntr)

    var nb=document.createElement("td")
    nb.innerHTML="<button class='delbtn'>delete</button>"
    ntr.append(nb)
    nt.append(ntr)

    clearitem();
}
var savebutton=document.getElementById("savebutton")

savebutton.addEventListener("click",function(event){
    event.preventDefault()
})

nt.addEventListener("click" , del);


function del(e){
        if(!e.target.classList.contains("delbtn")){
            return;
        }
        const btn=e.target;
        btn.closest("tr").remove();
        
    }


function clearitem(){
    document.getElementById("name").value=""
    document.getElementById("age").value=""
    document.getElementById("email").value=""
    document.getElementById("course").value=""
}
