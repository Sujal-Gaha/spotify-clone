import { render } from '@testing-library/react';

import Compounds from './compounds';

describe('Compounds', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Compounds />);
    expect(baseElement).toBeTruthy();
  });
});
