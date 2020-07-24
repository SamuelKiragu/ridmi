// variable declaration
const colorIcon = document.querySelectorAll('.menu-color');


// initially set the focus on the home icon when the page is loaded
document.addEventListener('DOMContentLoaded', function(){
  // color variables
  var focus = "#1262c9";

  colorIcon[0].style.fill = focus;
});


// checks whether menu option has been clicked
colorIcon.forEach((item, i)=> {
  item.addEventListener('click', function(){
    // color change depending with the option that has been clicked
    colorChange(i);
  });
});



// changes he color of the icon depending on the icon chosen
function colorChange(index){
  var focus = "#1262c9";
  var unFocus = "#ededed";

  // changes the focus
  colorIcon.forEach((item, i) => {
    if(i == index){
      item.style.fill = focus;
    }
    else{
      item.style.fill = unFocus;
    }
  });
}
