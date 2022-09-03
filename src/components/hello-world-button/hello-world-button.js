import './hello-world-button.css'
import './hello-world-button-scss.scss'

class HelloWorldButton {
    helloButton = 'hello-world-button'
    render() {
        const button = document.createElement('button')
        button.innerHTML = 'hey there'
        button.classList.add(this.helloButton)
        button.onclick = function() {
            const p = document.createElement('p')
            p.innerHTML = "Hello World!"
            p.classList.add('hello-world-text')
            body.appendChild(p)
        }
        const body = document.querySelector('body')
        body.appendChild(button)
    }
}

export default HelloWorldButton