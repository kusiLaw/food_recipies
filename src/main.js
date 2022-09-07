const menu = document.getElementById('toggle-menu')
const toggleClose = document.getElementById('toggle-close')
let ulLists = document.getElementById('lists')
let listContainer = document.getElementById('list-dynamic')

menu.onclick = () =>{
 listContainer.classList.add("mobile");
 ulLists.classList.add("mobile");
 ulLists.style.display = 'flex'
 toggleClose.style.display = 'flex'
 console.log(ulLists, listContainer)
 menu.style.display ="none"

}

toggleClose.onclick = () =>{
 listContainer.classList.remove("mobile");
 ulLists.classList.remove("mobile");
 ulLists.style.display = 'none'
 toggleClose.style.display = 'none'
 menu.style.display ="flex"
}