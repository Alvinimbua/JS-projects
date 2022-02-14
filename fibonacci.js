function fibonacci(x){
    let fn1=0;
    let fn=1;
  
    while(fn <= x){
  
      if (fn == x){
        return x + " is a fibonacci Series";
      }
      fn += fn1;
      fn1= fn-fn1;
      }
     return x + " Does not belong to fibonacci series";
    }
  var x = prompt("Input a random number");
  document.write(fibonacci(x));