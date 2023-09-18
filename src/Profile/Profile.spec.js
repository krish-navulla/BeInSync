import React from "react";
import { shallow } from "enzyme";
import Profile from "./Profile";
import Header from "../Header/Header";
import Bio from "../Bio/Bio";
import Friends from "../Friends/Friends";

describe("Profile", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Profile />)));

  it("should render multiple <div />", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("should render the Header, Bio and Friends component", () => {
    expect(
      wrapper.containsAllMatchingElements([
        <Header key="1" />,
        <Bio key="2" />,
        <Friends key="3" />
      ])
    ).toEqual(true);
  });
});
