import HelloWorldButton from './components/hello-world-button/hello-world-button.js'
import addImage from './add-image.js'
import Heading from './components/heading/heading.js'

const Header = new Heading()
const helloWorldButton = new HelloWorldButton()
Header.render()
helloWorldButton.render()
addImage()