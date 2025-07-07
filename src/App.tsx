import './App.css'
import { Button } from '@vapor-ui/core'
import { ThemeToggleButton } from './components/ThemeToggleButton'
import { useState } from 'react'
import Dialog from './components/Dialog/Dialog'

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      {isOpen && <Dialog setIsOpen={setIsOpen} />}
      <ThemeToggleButton />
    </>
  )
}

export default App
