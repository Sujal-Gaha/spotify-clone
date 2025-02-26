import { render } from '@testing-library/react';

import Alkali from './alkali';

describe('Alkali', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alkali />);
    expect(baseElement).toBeTruthy();
  });
});
