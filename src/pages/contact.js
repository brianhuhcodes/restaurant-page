const contactLoad = () => {
    let contentbody = document.querySelector(".contentbody")
    let contactus = document.createElement('div')
    let info = document.createElement('div')

    contactus.className = 'intro'
    info.className = 'info'

    contactus.textContent = "Contact Us"
    info.textContent = "info@mehicotaco.com"

    contentbody.append(contactus, info)
}

export { contactLoad }