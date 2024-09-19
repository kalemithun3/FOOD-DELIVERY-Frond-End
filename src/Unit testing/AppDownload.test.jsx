import React from 'react';
import { render } from '@testing-library/react';
import AppDownload from '../components/AppDownload/AppDownload';

describe('AppDownload', () => {
    it('renders without crashing', () => {
        render(<AppDownload />);
    });

    it('applies the correct CSS classes', () => {
        const { container } = render(<AppDownload />);
        expect(container.firstChild).toHaveClass('app-download');
    });
});
