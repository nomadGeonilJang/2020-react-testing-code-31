import React from 'react';
import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import App from './App';

// 가짜를 쓰게 한다.
jest.mock('react-redux');

test('App', () => {
  // 조작 useSelector();
  // test를 위한 예저를 몰아준다.
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'tast1' },
      { id: 2, title: 'tast2' },
    ],
  }));

  const { container } = render(<App />);
  expect(container).toHaveTextContent('To-do');
});
