$(function(){
  var hash = window.location.hash;
  if (hash) {
    var target = hash.substr(1);
    console.log(target);
    $.ajax({
        url: target,
        dataType: 'text'
      })
     .done(function(data){
       var parsed = JSON.parse(data.split('\n').slice(1,-1)[0]);
       history.pushState({}, 'Title', target);
       console.log(parsed.content);
     })
     .fail(function(){
       console.log('fail');
     });
  }
  else {
    console.log('no hash');
  }
});
