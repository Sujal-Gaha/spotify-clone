import { render } from '@testing-library/react';

import Compositions from './compositions';

describe('Compositions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Compositions />);
    expect(baseElement).toBeTruthy();
  });
});
