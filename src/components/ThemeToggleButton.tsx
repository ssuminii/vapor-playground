import { useTheme } from '@vapor-ui/core'
import { Button } from '@vapor-ui/core'

export function ThemeToggleButton() {
  const { appearance, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme({
      appearance: appearance === 'light' ? 'dark' : 'light',
    })
  }

  return <Button onClick={toggleTheme}>Toggle Theme (Current: {appearance})</Button>
}
