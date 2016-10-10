/* eslint-env node, jquery */

document.getElementById("menu").addEventListener('click', function menuclick(event) {
    document.getElementById("myDropdown").classList.toggle("show");
    event.stopPropagation();
});

document.addEventListener('click', function exitmenu(event) {
    if (!event.target.closest('#myDropdown')) {
        document.getElementById("myDropdown").classList.remove("show");
    }
});

/*  IN PROCESS

document.addEventListener('click', function exitmenu(event) {
    var clicked = event.target;
    function checkParents(clicked) {
      var child = clicked;
        if (child.id == "myDropdown") {
          return;
        } else {
          checkParents(child.parentNode);
        }
    }
    checkParents(clicked);
});

*/
