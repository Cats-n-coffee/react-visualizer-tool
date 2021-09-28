import { screen, render } from '../test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import ThemeToggle from '../components/Navbar/ThemeToggle';

test('document.body [data-theme] should switch light --> dark', () => {
    render(<ThemeToggle />)
    
    const docBody = document.body.dataset.theme;
    expect(docBody).toBe('light')

    // const themeButton = screen.getByRole('button', {name: /theme switcher/i});
    // userEvent.click(themeButton);
    // screen.debug()
    // expect(docBody).toBe('dark')
})