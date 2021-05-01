import menuphoto from './img/al-pastor-menu.jpg'

const menuLoad = () => {
    let contentbody = document.querySelector(".contentbody")
    let menuimg = document.createElement('img')
    let menu = document.createElement('div')
    let description = document.createElement('div')

    menuimg.className = 'homeimg'
    menu.className = 'intro'
    description.className = 'para'

    menuimg.src = menuphoto
    menu.textContent = "Al Pastor"
    description.textContent = "We got the one and only Al Pastor from Mehico"

    contentbody.append(menuimg, menu, description)
}


export { menuLoad }