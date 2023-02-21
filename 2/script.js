function funkcja(){
    let liczba=parseint(document.getElementById("liczba").value);
    let wynik=0;
    if (liczba>0){
        let modulo=liczba%2;
        let wynik=wynik+modulo;
        let liczba=liczba/2;
        return liczba;
    }else{

    }
}