import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Spinner from "./Spinner";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render a Spinner component", () => {
  act(() => {
    render(
      <Spinner />, 
      container
    );
  });
  expect(container.innerHTML).toMatchSnapshot(); 
});
