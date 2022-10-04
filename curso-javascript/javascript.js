function  calcularMedia(notas) { 
    let   soma = 0 ; 
  
  for ( c = 0 ; c < notas.length ; c++  ) { 
    soma +=  notas[c] ; 
  }
  media = soma  / notas.length; 
  
  return  media ; 
  }
  
  let media ; // escopo global  

  function  aprovacao( notas ) { 
 
     let media =  calcularMedia(notas)  ;  // escopo da funcao 
    
    let condicao  = media >= 7 ?  " Aluno Aprovado  " : " Aluno  Vagabundo está na N-1  " ; 

  return 'Media ' +  media +  ' - Resultado:'  + condicao ; 
  }
  console.log( aprovacao ([9,6,8 ]));


 console.log ( " Media : " +   calcularMedia([9,6 ,8])) ; 

  //console.log ( " Media : " + calcularMedia([8,6,6]))
 // console.log( aprovacao( calcularMedia([8,6,6])))
 // console.log ( " Media : " + calcularMedia([6,7,8]))
 // console.log( aprovacao( calcularMedia([6,7,8])))

 /* let , var e const são tipos de variaveis Variáveis
São utilizadas para referenciar espaço na memória
var
const (fica com valor imutável)
let
string (tipo de variável para conjunto de caracteres)
tipagem: número ou string
array: conjunto de valores */
 

  /* funcao recursiva */ 

  function contagemRecresivas( numero) { 
   

    console.log( numero ) ; 
 let  proximoNumero   =  numero - 1 ; 


     if ( numero > 0 )
    contagemRecresivas (proximoNumero)  ; 

   
  }


document.addEventListener( 'submit', function (evento){ 
    evento.preventDefault() ;
     evento.stopImmediatePropagation () 
     let formulario  = document.getElementById( ' formulario - 01 ') ; 
     let dados =  new FormData ( formulario ) ; 

     let objeto = { } ; 
      let notas = []  ; 
       
      for (  let key  of dados.keys( )) { 
       objeto [key]  = dados.get(key ) ; 
        notas.push(parseIntdados.get(key) )  ;  
      }

      console.log (objeto) ; 
      console.log ( notas ) ;
      texto = aprovacao ( notas ) ; 

        document.getElementById  ( ' resultado').innerHTML = aprovacao( notas ) ; 
         
  }) ; 

