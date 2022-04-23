

function validate(){
  var password=document.getElementById("pswd").value;
  var username=document.getElementById("username").value;
    if(username=="admin" && password==12345){
      flag=1;
      document.getElementById("login_error").innerHTML="";
     
    }
    else{
      document.getElementById("login_error").innerHTML="Invalid username or password";
      flag=0;
    }
}


const redirect=()=>{
  window.location='todo.html';
}
function login_check(e,callback){
  flag=0;
  validate();
  if(flag==1){
      e.preventDefault();
      callback();
  }
  else{
    e.preventDefault();
  }
}
$('#loginBtn').on('click',(e)=>{
  login_check(e,redirect);
}
)