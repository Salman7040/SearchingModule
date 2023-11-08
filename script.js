var search_bar = document.getElementById("search-bar");
var h1 = document.querySelectorAll(".object h1");
var myobject = document.getElementsByClassName("object");

function startSearch() {
  let inc = 0;
  if (search_bar.value != "") {
    for (let val of h1) {
      if (
        val.innerHTML.toLowerCase().search(search_bar.value.toLowerCase()) != -1
      ) {
        val.style.display = "block";
        myobject[inc].style.display = "block";
      } else {
        val.style.display = "none";
        myobject[inc].style.display = "none";
      }
      inc++;
    } //for loop
  } else {
    inc = 0;
    for (let val of h1) {
      val.style.display = "block";
      myobject[inc].style.display = "block";
      inc++;
    }
  }
}
