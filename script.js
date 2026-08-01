function startGame(){
    const team =
    document.getElementById("team").value;

    if(team==""){
        alert("Э, ты с какого района?");
        return;
    }

    localStorage.setItem("team",team);

    window.location.href="map.html";

}
