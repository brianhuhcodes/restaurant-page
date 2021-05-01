import alpastor from './img/al-pastor.jpg'

const homeLoad = () => {
    let contentbody = document.querySelector(".contentbody")
    let homeimg = document.createElement('img')
    let intro = document.createElement('div')
    let para = document.createElement('div')

    homeimg.className = 'homeimg'
    intro.className = 'intro'
    para.className = 'para'

    intro.textContent = "Taco from Mehico"
    para.textContent = "Get your authentic taco from us"
    // homeimg.setAttribute('src', './img/al-pastor.jpg')
    homeimg.src = alpastor
    contentbody.append(homeimg, intro, para)
}

export { homeLoad }