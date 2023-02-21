function funkcja(){

    let a=parseInt(document.getElementById("wartosc").value);
    let b=parseInt(document.getElementById("wartosc2").value);
    let c=parseInt(document.getElementById("wartosc3").value);
    let x=(b-a)/(c-1);
    document.getElementById("wynik").value="Różnica ciągu arytmetycznego wynosi "+x;
}