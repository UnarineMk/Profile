function w3_open(){
    document.getElementById("main").style.marginLeft ="30%";
    document.getElementById("Sidebar").style.width="30%";
    document.getElementById("Sidebar").style.display="inline-block";
    document.getElementById("OpenNav").style.display="none";  
}
function w3_close(){
 document.getElementById("main").style.marginLeft ="0%";
 document.getElementById("Sidebar").style.display="none";
 document.getElementById("OpenNav").style.display="inline-block";
}