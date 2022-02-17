let list = document.querySelector("#to-do-list")
let addInput = document.querySelector("#add-form input")
let searchInput = document.querySelector(".searchInput")
let addBtn = document.querySelector("#add-form button")
let myform = document.querySelector("#add-form")

let completedTask = document.querySelector(".completedTask")


// events

searchInput.addEventListener("input", (e)=>{
  Array.from(list.children).forEach(element => {
      if(document.querySelector(".mydiv")){
          return
      }
      if(!element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
          element.style.display = "none"
      }else
          element.style.display = "flex"
  });
})


list.addEventListener("click", (e) => {



  if(list.children.length == 0){
    let mydiv = document.createElement("div")
    mydiv.className = "mydiv"
    mydiv.style.color = "red"
    mydiv.style.textAlign = "center"
    mydiv.style.fontSize = "1.5rem"
    mydiv.innerText = "you,r List is empty"
    list.appendChild(mydiv)
  }
  })
 
  
  myform.addEventListener("submit", (e)=>{
  e.preventDefault()
  if(!addInput.value){
    return;
  }

  if(document.querySelector(".mydiv")){
    document.querySelector(".mydiv").remove()
  }
    createList(addInput.value)
    addInput.value = ""
  })
  


  // end events
  
  // functions




  let createList = (itemValue)=>{
    // CreateLi
  let myli = document.createElement("li")
  myli.className  = "to-do-item"
  //  CreateSpan
  let myspan = document.createElement("span")
  myspan.className = "title"
  myli.appendChild(myspan)
  myspan.innerText = itemValue
  // CreateTrashBtn
  let trashBtn = document.createElement("button")
  trashBtn.className = "trash-btn"
  trashBtn.innerHTML = '<i class="fa fa-trash trash-icon"></i>'
  trashBtn.addEventListener("click", () => {
    document.querySelector(".to-do-item").remove()
  })

  myli.appendChild(trashBtn)

  // Create Completed Btn

  let completedBtn = document.createElement("button")
  completedBtn.className = "complete-btn"
  completedBtn.innerHTML = '<i class="fa fa-check"></i>'
  completedBtn.addEventListener("click" , () => {
    myspan.style.color = "green"
    myspan.style.fontSize = "1.7rem"
    completedTask.appendChild(myli)
    completedBtn.remove()

  })
  myli.appendChild(completedBtn)

  list.appendChild(myli)
  return myli;
  }


  // end functions



