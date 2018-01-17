require(['be'], function(be) {
 be('nvmiXCt9qSGwKVURae8c7QVpYeEBrOPU');
});

require(['be'], function(be) {

   be.collection(167837127, function success(results){
     var photos = results.collection.latest_projects;
     for(var i=3; i<6; i++){

      var pic = photos[i].covers.original;

      var oImg = document.createElement("img");
      oImg.setAttribute('src', pic);
      oImg.setAttribute('height', '390px');
      oImg.setAttribute('width', '395px');
      oImg.setAttribute('id','pic'+i);
      document.body.appendChild(oImg);
      }
   });
 });


 //VERSION 2.0
//There was going to be a button to add new photos but i got lazy.
// function newPics() {
//  require(['be'], function(be) {
//   be('nvmiXCt9qSGwKVURae8c7QVpYeEBrOPU');
//
//    be.project.search('cats')
//    .then(function success(results){
//      console.log(results);
//      var photos = results.projects[0].covers.original;
//      console.log(photos);
//      // console.log(photos);
//      // for(var i=3; i<6; i++){
//      //
//      //  var pic = photos[i].covers.original;
//      //
//      //  var oImg = document.createElement("img");
//      //  oImg.setAttribute('src', pic);
//      //  oImg.setAttribute('height', '390px');
//      //  oImg.setAttribute('width', '395px');
//      //  oImg.setAttribute('id','pic'+i);
//      //  document.body.appendChild(oImg);}
//    });
//  });
