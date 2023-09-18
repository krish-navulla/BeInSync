import React from "react";
import { shallow } from "enzyme";
import Bio from "./Bio";

describe("Bio", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <Bio>
          dateOfBirth={""}
          favActivity={""}
          favColor={""}
          updateFavColor={jest.fn()}
        </Bio>
      ))
  );

  it("should render multiple <div />", () => {
    expect(wrapper.find("div").length).toEqual(9);
  });
});
