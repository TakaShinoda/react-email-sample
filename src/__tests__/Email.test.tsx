import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Email } from '../Email'

describe('Email.tsx', () => {
  const defaultUrl = 'https://example.com'

  test('リンクが表示されていること', () => {
    render(<Email url={defaultUrl} />)
    const element = screen.getByTestId('button')
    expect(element).toBeTruthy()
  })

  test('Click me と表示されていること', () => {
    render(<Email url={defaultUrl} />)
    const element = screen.getByTestId('button')
    expect(element).toHaveTextContent('Click me')
  })

  test('リンク先の url が https://example.com であること', () => {
    render(<Email url={defaultUrl} />)
    const element = screen.getByTestId('button')
    expect(element).toHaveAttribute('href', 'https://example.com')
  })
})
