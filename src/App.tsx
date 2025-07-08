import './App.css'
import { Button, Dialog } from '@vapor-ui/core'
import { ThemeToggleButton } from './components/ThemeToggleButton'

function App() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>클릭</Button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Header></Dialog.Header>
            <Dialog.Body>
              <Dialog.Title>test</Dialog.Title>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.Close asChild>
                <Button>네</Button>
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <ThemeToggleButton />
    </>
  )
}

export default App
