//import home menu contact here

const pageLoad = () => {
    let content = document.querySelector("#content")
    let tabsy = document.createElement("div")
    let inputhome = document.createElement('input')
    let inputmenu = document.createElement('input')
    let inputcontact = document.createElement('input')
    let labelhome = document.createElement("label")
    let labelmenu = document.createElement("label")
    let labelcontact = document.createElement("label")
    let tabhome = document.createElement("div")
    let tabmenu = document.createElement("div")
    let tabcontact = document.createElement("div")
    let bodycontenthome = document.createElement('div')
    let bodycontentmenu = document.createElement('div')
    let bodycontentcontact = document.createElement('div')
    content.appendChild(tabsy)


    tabsy.className = "tabsy"
    inputhome.type = "radio"
    inputhome.id = "tab1"
    inputhome.name = 'tab'
    labelhome.className= "tabButton"
    labelhome.htmlFor = "tab1"
    labelhome.textContent = 'Home'
    tabhome.className = 'tab'

    bodycontenthome.textContent = 'home content'



    tabsy.append(inputhome, labelhome, tabhome)
    tabhome.append(bodycontenthome)


    inputmenu.type = "radio"
    inputmenu.id = "tab2"
    inputmenu.name = 'tab'
    labelmenu.className= "tabButton"
    labelmenu.htmlFor = "tab2"
    labelmenu.textContent = 'Menu'
    tabmenu.className = 'tab'
    bodycontentmenu.textContent = 'menu content'

    tabsy.append(inputmenu, labelmenu, tabmenu)
    tabmenu.append(bodycontentmenu)
    
    
    inputcontact.type = "radio"
    inputcontact.id = "tab3"
    inputcontact.name = 'tab'
    labelcontact.className= "tabButton"
    labelcontact.htmlFor = "tab3"
    labelcontact.textContent = 'Contact'
    tabcontact.className = 'tab'
    bodycontentcontact.textContent = 'contact content'
    
    tabsy.append(inputcontact, labelcontact, tabcontact)
    tabcontact.append(bodycontentcontact)
}

export { pageLoad };