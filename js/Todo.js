
function ajax(){
    var xhttp=new XMLHttpRequest();
  
  xhttp.onreadystatechange=function(){
    if(this.readyState==4&&this.status==200){
        var response=JSON.parse(this.responseText);
        //var Jpeople=response.people;
        var output="";
        for(i=0;i<response.length;i++){
            
            if(response[i].completed==true){
              output +="<li><input type='checkbox' id='"+i+"' class='me-3 my-2 checkbox form-check-input'  disabled checked ><label for="+i+">"+response[i].title+"</label></li>";
            }
            else{
              output +="<li><input type='checkbox' id="+i+" class='me-3 my-2 checkbox form-check-input' name='chck'><label for="+i+">"+response[i].title+"</label></li>";
            }
        }
        document.getElementById("demo").innerHTML=output;
        
    }
  }
  xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
  xhttp.send();
  }
  ajax();
  
  
  
  // Checkbox action
  let promise = new Promise(function(resolve, reject){
    checkedCount=0;
    $('#demo').on('change','.checkbox',function(e){
    
      if($(this).prop('checked')===true){
          checkedCount++; 
      }
      else{
          checkedCount--;
      }
      if(checkedCount==5){
        resolve("Congrats. 5 Tasks have been Successfully Completed ");
      }
    });
  });
  
  promise.then(function(e){
    alert(e);
  })
  promise.catch(()=>{
      
    console.log("promise failed");
  })