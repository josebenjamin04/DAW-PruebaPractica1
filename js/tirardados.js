int = 0;

function jugadas(veces, jugador, v1, v2, v3, puntaje, hora){ //Constructor de objeto
    this.veces = veces;
   this.jugadador = jugador;
   this.v1 = v1;
   this.v2 = v2;
   this.v3 = v3;
   this.puntaje = puntaje;
   this.hora = hora;
   //Metodo obtener hora
   this.hora = function(){
       var hora = new Date();
       hour = hora.getHours();
       minutes = hora.getMinutes();
       this.hora = hour + ":" + minutes;
   }
}
function get(){
    nombreJ = document.getElementById("nombre").value;
    if(nombreJ == ""){
        alert("Deebe ingresar su nombre")
        document.getElementById("nombre").focus();
    }else{
        document.getElementById("button").innerHTML = "<button onclick='tirar();'>Tirar Dados</button>";
    }
}
function tirar(){
    int++
    if(int <= 3){
        max = 3;
        min = 1;
        valor1 = Math.floor(Math.random()*(max-min+1)+min);
        valor2 = Math.floor(Math.random()*(max-min+1)+min);
        valor3 = Math.floor(Math.random()*(max-min+1)+min);
        res = parseInt(valor1) + parseInt(valor2) + parseInt(valor3);
        calcH = new jugadas(int, nombreJ, valor1, valor2, valor3, res)
        h = calcH.hora();
        intentos = new jugadas(int, nombreJ, valor1, valor2, valor3, res, h);
        mostar();
    }else{
        alert("Ya no puedes tirar más dados");
    }
}
var registros = [];
function mostar(){
    registros.push(intentos);
    document.getElementById("this").innerHTML = intentos.jugadador;
    document.getElementById("table").innerHTML += "<tbody><tr> <td>"+intentos.veces+"</td> <td>"+intentos.v1+"</td> <td>"+intentos.v2+"</td> <td>"+intentos.v3+"</td> <td>"+intentos.puntaje+"</td> </tr></tbody>";
    console.log(intentos);
}
