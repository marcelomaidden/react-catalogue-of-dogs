import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from './testUtils';
import Detail from './Detail';

it('Renders the connected app with initialState', () => {
  const history = createMemoryHistory();
  const route = '/photos/h2QPKvzieC4';
  history.push(route);

  render(
    <Router>
      <Route>
        <Detail />
      </Route>
    </Router>,
    {
      initialState:
      {
        list: [],
        loading: false,
        filter: 'dogs-human',
        page: 1,
        message: '',
        detail: '',
      },
    },
  );
  screen.getByText(/Photo by/i);
});
