const contactLoad = () => {
    let contentbody = document.querySelector(".contentbody")
    let contactus = document.createElement('div')
    let info = document.createElement('div')

    contactus.className = 'intro'
    info.className = 'para'

    contactus.textContent = "Contact U"
    info.textContent = "info@mehicotaco.com"

    contentbody.append(contactus, info)
}

export { contactLoad }