import { render } from '@testing-library/react';

import Flasks from './flasks';

describe('Flasks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Flasks />);
    expect(baseElement).toBeTruthy();
  });
});
