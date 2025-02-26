import { render } from '@testing-library/react';

import Inerts from './inerts';

describe('Inerts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Inerts />);
    expect(baseElement).toBeTruthy();
  });
});
