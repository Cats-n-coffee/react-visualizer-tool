import { screen, render } from '../test-utils/test-utils';
import App from '../App';

test('it should show the h1', () => {
    render(<App />);

    expect(screen.getByRole('heading', /react visualizer/i)).toBeInTheDocument();
})