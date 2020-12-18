var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");

	var btn = document.createElement("button");
	btn.classList.add("rmvbtn");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);

	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	possibledelete();
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function possibledelete(){
	document.querySelectorAll('.rmvbtn').forEach(btn => {
	btn.addEventListener("click", function(){
		var li = this.parentNode
		li.remove()
		console.log(ul)
	})	
})
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.onclick=function(event){
	var target= event.target;
	target.classList.toggle("done");
}

		
