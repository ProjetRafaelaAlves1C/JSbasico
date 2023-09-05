function chama_tabuada(){

var var1= document.tabform.var1.value

var var2= document.tabform.var2.value


  for(i=var1; var1<=var2; var1++){


      for (j=1; j<=10; j++){

          document.write(var1+'x' + j+ '='+ var1*j+ '<br>');
        }

     document.write('<br>')


    }
}