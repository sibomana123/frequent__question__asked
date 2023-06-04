const mainElent = document.getElementsByClassName("content__container");   // if you use quelselector not working

for(let i=0; i<mainElent.length; i++){

  mainElent[i].addEventListener("click", function () {
    this.classList.toggle('active')
  });
}

