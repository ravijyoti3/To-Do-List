//Declare varible
var addButton = document.getElementById("button-addon2");
var list = document.getElementById("list");
var checkBox = document.getElementById("flexCheckDefault");

const addTask = (inp) => {
  console.log("button is working!");
  const newChecBox = document.createElement("input");
  newChecBox.setAttribute("class", "form-check-input");
  newChecBox.setAttribute("type", "checkbox");
  newChecBox.setAttribute("id", "flexCheckDefault");

  const newTaskText = document.createElement("h5");
  newTaskText.setAttribute("class", "form-check-label"); //Only for styling of the list text
  newTaskText.setAttribute("for", "flexCheckDefault");
  newTaskText.innerHTML = inp;

  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "form-check w-50 mt-3");

  wrapper.appendChild(newChecBox);
  wrapper.appendChild(newTaskText);
  list.appendChild(wrapper);
};

const removeItems = (e) => {
  if (e.target.type == "checkbox") {
    var parent = e.path[1];
    parent.remove();
  }
};

list.addEventListener("click", function (e) {
  console.log("checked");
  removeItems(e);
});

addButton.addEventListener("click", function (e) {
  e.preventDefault();
  var textInput = document.getElementById("addInput");
  if (textInput.value != "") {
    addTask(textInput.value);
    textInput.value = "";
  } else {
    alert("Please provide some input!");
  }
});
