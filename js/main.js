$(document).ready(function(){
  console.log("Ready...")
  $('#searchUser').on('keyup', function(e){
    let username = e.target.value;

    // Make a request to Github
    $.ajax({
      url:'https://api.github.com/users/' +username,
      data:{
        client_id:'9983f7a2019397d3bded',
        client_secret: '3fd3b2f14f3d1034bee4b5fe135160bc46e86c7d'
      }
    }).done(function(user){
        console.log(user)
      });
});
