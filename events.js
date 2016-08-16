const outputTarget = document.getElementById("output-target");
const sections = document.getElementsByClassName("article-section");


// JavaScript, in the browser, automatically send the source
// event to the handler function for the event
function handleSectionClick (event) {
  let sectionContent = event.target.innerHTML;
  outputTarget.innerHTML = `You clicked on the ${sectionContent} section`;
}

for (var i = 0; i < sections.length; i++) {
  sections.item(i).addEventListener("click", handleSectionClick);
}

document.getElementById("page-title").addEventListener("mouseover", function(){
  outputTarget.innerHTML = "You moved your mouse over the header";
});

document.getElementById("page-title").addEventListener("mouseout", function(){
  outputTarget.innerHTML = "You left me!";
});

document.getElementById("keypress-input").addEventListener("keyup", function(event){
  outputTarget.innerHTML = event.target.value;
});

document.getElementById("add-color").addEventListener("click", function(){
  document.getElementById("guinea-pig").classList.add("blue-text");
});

document.getElementById("make-large").addEventListener("click", function(){
  document.getElementById("guinea-pig").classList.add("make-large");
});

document.getElementById("add-border").addEventListener("click", function(){
  document.getElementById("guinea-pig").classList.add("add-border");
});

document.getElementById("add-rounding").addEventListener("click", function(){
  document.getElementById("guinea-pig").classList.add("add-rounding");
});
