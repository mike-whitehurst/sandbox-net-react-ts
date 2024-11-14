import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import Icon from "./../../../composition/Icon/Icon"

test("Contains icon text", () => {
    render(<Icon icon="!" />);
    const text = screen.getByText("!");
    expect(text).toBeTruthy();
})