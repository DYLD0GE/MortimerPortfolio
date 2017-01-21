function submitFunction()
{

  var x=document.forms["myForm"]["name"].value;
  var y=document.forms["myForm"]["email"].value;
  var z=document.forms["myForm"]["message"].value;
  if(x==null || x=="" || y==null || y=="" || z==null || z=="")
    {
      alert('Please fill out all fields.');
    }
    else {
      localStorage.setItem('username', x);
      var w = localStorage.getItem('username');
      document.getElementById('message').innerHTML = 'Thanks for sending me a message, ' + w + '!';


    }
}
