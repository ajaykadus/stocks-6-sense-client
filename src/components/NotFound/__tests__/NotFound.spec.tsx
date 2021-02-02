import * as React from "react";
import renderer from "react-test-renderer";
import NotFound from "../NotFound";

describe("<NotFound />", () => {
  it("shows not found message", () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
