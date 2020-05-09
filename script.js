const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const div = document.getElementById("main")
const form = document.getElementById("form")
let itemCount = 0
let id = []

function newTodo() {
  // ids
  id2 = itemCount+""
  id.push(id2)
  // wrapper
  const wrapper = document.createElement("div")
  wrapper.id = id2
  // checkboxes
  const list = document.createElement("input")
  list.type = "checkbox"
  // label (by input)
  const label = document.createElement("label")
  let todo = prompt("What is your plan today?",)
  const labelText = document.createTextNode(todo)
  label.appendChild(labelText)
  // delete button
  const delButton = document.createElement("button")
  delButton.id = id2 + "button"
  delButton.innerHTML = "delete"
  // line break
  const br = document.createElement("br")
  // appending
  wrapper.appendChild(list)
  wrapper.appendChild(labelText)
  wrapper.appendChild(delButton)
  wrapper.appendChild(br)
  form.appendChild(wrapper)
  // giving an onclick attribute on the delButton
  document.getElementById(id2+"button").setAttribute('onclick','deleteList(id)')
  itemCount++
  itemCountSpan.innerHTML = itemCount
}

function checkedListener(){
  let checkedCount = 0
  for(let i = 0; i < form.length; i++){
    if(form[i].checked == true){
      checkedCount++
    }
  }
  console.log(checkedCount)
  uncheckedCountSpan.innerHTML = checkedCount
}

function deleteList(atr){
  document.getElementById(atr[0]).remove()
  itemCount-=1
  itemCountSpan.innerHTML = itemCount 
  checkedListener()
  console.log(atr[0])
}