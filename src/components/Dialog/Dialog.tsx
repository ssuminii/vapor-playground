import { Card, Button } from '@vapor-ui/core'
import styles from './Dialog.module.css'

type DialogProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Dialog = ({ setIsOpen }: DialogProps) => {
  return (
    <div className={styles.overlay}>
      <Card.Root>
        <Card.Header>
          <h2>We are so sorry!</h2>
        </Card.Header>
        <Card.Body>
          There was and error and your file could not be uploaded. <br />
          would you like you to try again?
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => setIsOpen(false)}>Cancle</Button>
          <Button variant='primary'>Retry</Button>
        </Card.Footer>
      </Card.Root>
    </div>
  )
}

export default Dialog
