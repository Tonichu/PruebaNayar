/*La prueba técnica consistirá en calcular dos números primos cuya multiplicación resulte el número 73505468014063 para ello se dispondrá de 24 horas para la realización en las cuales se puede consultar internet sin limitación pero no está permitida la copia y pega de códigos directamente o el uso de librerías que realicen dicho calculo.*/

//Lo primero que me he planteado es:
//1- dado un número necesito saber si es primo

function isPrime(number) { //le pasamos un número y comprobamos si es primo
    let prime = true; //inicializamos a true
    if (number > 1) { //mayor que uno ya que los primos empiezan con el 2
      for (let i = 2; i < number; i++) {
        if (number % i == 0) { //si el resto es 0, lo descartamos
          prime = false;
        }
      }
    }
    return prime //en este caso es primo ya que es true por defecto
  }
  
  /*2- había pensado en iterar por todos los primos y meterlos en un array. acto seguido los multiplico entre si y compruebo si el resultado esta entre esas operaciones peeero.. al final me decante por esta "chapuza" ya que no consegui hacerlo de esa manera*/
  
  function LookingForPrime(number) {
    for (let i = 1; i < number; i++) { //iteramos en el número dado
      for (let j = 1; j < number; j++) { //volvemos a iterar -.-
        if (isPrime(i) && isPrime(j)) { //comprobamos si la primera vuelta y la segunda son primos
          if (i * j === number) { // multiplicamos los primos y comprobamos si es igual al numero dado
            document.write(`${i} por ${j} es igual a ${numero}<br>`) ; 
            // y obtenemos los dos numeros que multiplicados dan el numero dado
          }
        }
      }
    }
  }
  
  /*pero hay un problema y es q los lee al ir y al volver muchísimas vueltas, no he sabido solucionarlo de otra manera, pero con numeros pequeños se puede comprobar que "funciona"*/
  let numero = 51;
  LookingForPrime(numero);//Número proporcionado 