//import home menu contact here
import { homeLoad } from "./home";
import { menuLoad } from "./menu";
import { contactLoad } from "./contact";

const pageLoad = () => {
    let content = document.querySelector("#content")
    let title = document.createElement('div')
    let tabsy = document.createElement("div")
    let contentbody = document.createElement("div")
    let inputhome = document.createElement('input')
    let inputmenu = document.createElement('input')
    let inputcontact = document.createElement('input')
    let labelhome = document.createElement("label")
    let labelmenu = document.createElement("label")
    let labelcontact = document.createElement("label")
    let tabhome = document.createElement("div")
    let tabmenu = document.createElement("div")
    let tabcontact = document.createElement("div")
    // let bodycontenthome = document.createElement('div')
    // let bodycontentmenu = document.createElement('div')
    // let bodycontentcontact = document.createElement('div')




    title.className = 'title'
    title.textContent = "Mehico Taco"
    contentbody.className = 'contentbody'
    
    content.append(title, tabsy, contentbody)



    tabsy.className = "tabsy"
    inputhome.type = "radio"
    inputhome.id = "tab1"
    inputhome.name = 'tab'
    inputhome.checked = true
    labelhome.className= "tabButton"
    labelhome.htmlFor = "tab1"
    labelhome.textContent = 'Home'
    tabhome.className = 'tab'
    // bodycontenthome.className = 'content'
    //bodycontenthome.textContent = 'home content'



    tabsy.append(inputhome, labelhome, tabhome)
    // tabhome.append(bodycontenthome)



    inputmenu.type = "radio"
    inputmenu.id = "tab2"
    inputmenu.name = 'tab'
    labelmenu.className= "tabButton"
    labelmenu.htmlFor = "tab2"
    labelmenu.textContent = 'Menu'
    tabmenu.className = 'tab'
    // bodycontentmenu.textContent = 'menu content'
    // bodycontentmenu.className = 'content'

    tabsy.append(inputmenu, labelmenu, tabmenu)
    // tabmenu.append(bodycontentmenu)
    
    
    inputcontact.type = "radio"
    inputcontact.id = "tab3"
    inputcontact.name = 'tab'
    labelcontact.className= "tabButton"
    labelcontact.htmlFor = "tab3"
    labelcontact.textContent = 'Contact'
    tabcontact.className = 'tab'
    // bodycontentcontact.textContent = 'contact content'
    // bodycontentcontact.className = 'content'

    tabsy.append(inputcontact, labelcontact, tabcontact)
    // tabcontact.append(bodycontentcontact)

    labelhome.addEventListener("click", function() {
        contentbody.innerHTML = ""
        homeLoad()}
        
        )//not done yet
    labelmenu.addEventListener("click", function() {
        contentbody.innerHTML = ""
        menuLoad()})
    labelcontact.addEventListener("click", function() {
        contentbody.innerHTML = ""
        contactLoad()})
    

}



export { pageLoad };