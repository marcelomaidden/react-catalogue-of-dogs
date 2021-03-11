import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Photo from './Photo';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should render a Photo component', () => {
  act(() => {
    render(
      <Photo
        id="T-0EW-SEbsE"
        url="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw1MTAzN3wwfDF8c2VhcmNofDF8fGRvZ3N8ZW58MHx8fHwxNjE1MzkxNjUx\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400"
        photoStyle="photo"
        photoContainer="photo-container"
      />,
      container,
    );
  });

  expect(
    container.innerHTML,
  ).toMatchSnapshot();
});
