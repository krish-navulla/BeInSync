import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Header loginHistory={[]} />)));

  it("should render multiple <div />", () => {
    expect(wrapper.find("div").length).toEqual(4);
  });

  it("renders the value of loginHistory", () => {
    wrapper.setProps({
      loginHistory: ["12/15/2019, 12:29:18 PM"]
    });
    expect(wrapper.find(".login-history-value").text()).toEqual(
      "12/15/2019, 12:29:18 PM"
    );
  });
});
