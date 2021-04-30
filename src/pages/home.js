const homeLoad = () => {
    let contentbody = document.querySelector(".contentbody")
    let intro = document.createElement('div')
    let para = document.createElement('div')

    intro.className = 'intro'
    para.className = 'para'

    intro.textContent = "Taco from Mehico"
    para.textContent = "Get your authentic taco from us"

    contentbody.append(intro, para)
}

export { homeLoad }