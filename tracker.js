function Total() {
    let cA = document.getElementById("Age").value;
    let cW = document.getElementById("Weight").value;
    let cH = document.getElementById("Height").value;
    let s
    let r
    if (document.getElementById("Age").value.length == 0) {
        return
    }
    if (document.getElementById("Weight").value.length == 0) {
        return
    }
    if (document.getElementById("Height").value.length == 0) {
        return
    }
    if (document.getElementById("Male").checked) {
        s =  Math.round((10*cW)+(6.25*cH)-(5*cA)+5)
    } else if (document.getElementById("Female").checked) {
        s =  Math.round((10*cW)+(6.25*cH)-(5*cA)-161)
    }
    if (document.getElementById("1").selected) {
        r = s
    }
    if (document.getElementById("2").selected) {
        r = s*1.2
    }
    if (document.getElementById("3").selected) {
        r = s*1.35
    }
    if (document.getElementById("4").selected) {
        r = s*1.55
    }
    if (document.getElementById("5").selected) {
        r = s*1.75
    }
    if (document.getElementById("6").selected) {
        r = s*1.95
    }
    document.getElementById("amc").innerHTML = Math.round(r)
    document.getElementById("calcu").style = "margin: auto; width: 140px; height: 80px;"
}

function taken(){
    let cal = document.getElementById("Ncalorie").value;
    let c;
    if (document.getElementById("Ncalorie")){
        c = cal
    }
    document.getElementById("FCal").innerHTML = c- 200;
    document.getElementById("answer").style = "margin: auto; width: 140px; height: 80px;"

}