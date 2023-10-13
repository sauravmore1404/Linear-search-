const linearSearch=(array,num)=>{
    for(let i=0;i<array.length;i++){
    
      if(array[i]==num){
        return document.getElementById("demo").innerHTML=i
      }
    } return document.getElementById("demo").innerHTML=-1
    
    }
    