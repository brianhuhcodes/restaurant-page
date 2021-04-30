const menuLoad = () => {
    let contentbody = document.querySelector(".contentbody")
    let menu = document.createElement('div')
    let description = document.createElement('div')

    menu.className = 'intro'
    description.className = 'para'

    menu.textContent = "Al Pastor"
    description.textContent = "We got the one and only Al Pastor from Mehico"

    contentbody.append(menu, description)
}


export { menuLoad }