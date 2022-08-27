var gettablinks = document.getElementsByClassName("tablinks") // HTML Collection
var gettabpanes = document.getElementsByClassName("tab-pane") // HTML Collection
var getbtnclose = document.querySelectorAll(".btn-close") // NodeList

var getpanes = Array.from(gettabpanes)

function gettab(evn,linkid){

    // console.log(linkid)
    // console.log(evn.target)


    getpanes.forEach(function(getpane){
        getpane.style.display = "none"
    })

    for(var x = 0; x < gettablinks.length; x++){
        gettablinks[x].className = gettablinks[x].className.replace(" active","")

        getbtnclose[x].addEventListener("click",function(){
            this.parentElement.style.display = "none"
        })
    }



    document.getElementById(linkid).style.display = "block"

    // console.log(evn.currentTarget)
    // evn.currentTarget.classList.add("active")
    // evn.currentTarget.className = evn.currentTarget.className.replace("tablinks","tablinks active")
    evn.currentTarget.className += " active"
}

document.getElementById("autoclick").click();