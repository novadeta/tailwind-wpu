// navbar

window.onscroll = () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.scrollY > fixedNav){
        header.classList.add('navbar-fixed')
    }else if(window.scrollY === fixedNav){
        header.classList.remove('navbar-fixed')
    }

}


// hamburger

const hamburger = document.querySelector('#hamburger')
const nav = document.querySelector('nav')
hamburger.addEventListener('click',function () {
    hamburger.classList.toggle('hamburger-active')
    nav.classList.toggle('hidden')
    nav.focus()
})

nav.addEventListener('onfocusout', function () {
    header.classList.remove('navbar-fixed')
})


// spinner
const a = async () => await fetch('https://source.unsplash.com/600x300')
.then(a => appendImage(a)).catch(e => errors(e))
const takeImage = document.querySelector('#card').children[0]
const errors = (message) => {
    const messages = document.createElement('p')
    messages.setAttribute('value',message)
    console .log(messages)
    return takeImage.appendChild(messages)
}

const appendImage = ({url}) => {
    const spinner = document.querySelector('#spinner')
    takeImage.setAttribute('src',url)
    spinner.style.display = 'none'
}


a()

