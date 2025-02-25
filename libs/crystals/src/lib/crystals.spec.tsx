import { render } from '@testing-library/react';

import Crystals from './crystals';

describe('Crystals', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Crystals />);
    expect(baseElement).toBeTruthy();
  });
});
