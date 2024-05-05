import ChatWithGemini from './components/ChatWithGemini'
import { Container } from '@chakra-ui/react'
import './App.css'

function App() {

  return (
    <Container maxW={'none'} className="App" bgColor={'white'} bgGradient={'linear(to-r, #01427A, #01B3EF)'} color={'black'}>
      <ChatWithGemini />
    </Container>
  )
}

export default App
