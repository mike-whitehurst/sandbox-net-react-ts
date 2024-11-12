import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import App from "../App"
import { BrowserRouter } from 'react-router-dom'

test('always pass', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    render(
        <BrowserRouter future={{
            v7_relativeSplatPath: true,
            v7_startTransition: true,
        }}>
            <App />
        </BrowserRouter>
    );
    expect(true).toBeTruthy()
})