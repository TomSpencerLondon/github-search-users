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
        $('#profile').html(`
          <div class="panel panel-default">
            <div class="panel-heading">
            <h3 class="panel-title">${user.name}</h3>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-3">
                  <img class="thumbnail avatar" src="${user.avatar_url}">
                </div>
                <div class="col-md-9">
                </div>
              </div>
            </div>
          </div>

        `);
      });
    });
  });
