import { render } from "@testing-library/react";
import React from "react";
import HelloWorld from "./hello-world.component";

test("renders text", () => {
  const text = "Hello World";
  const { getByText } = render(<HelloWorld />);
  const buttonText = getByText(text);
  expect(buttonText).toBeTruthy();
});
