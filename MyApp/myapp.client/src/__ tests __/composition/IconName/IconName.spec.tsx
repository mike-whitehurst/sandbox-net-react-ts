import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import IconName from "../../../composition/IconName/IconName"

test("Renders correctly", () => {
    render(<IconName name="Exclam" />);
    const text = screen.getByText("Exclam");
    expect(text.className).toBe('iconName')
    expect(text.innerHTML).toBe('Exclam')
})