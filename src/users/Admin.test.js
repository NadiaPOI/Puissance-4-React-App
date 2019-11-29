import React from "react";
import { shallow, mount } from "enzyme";

import Admin from "./Admin";

describe("Admin", () => {
  it("Should render a ul list as default", () => {
    const adminWrapper = shallow(<Admin />);
    expect(adminWrapper.find("ul").exists()).toBe(true);
  });

  it("Should fetch data from url : http://localhost:8800/users", done => {
    const response = (global.fetch = jest.fn(() => {
      return Promise.resolve(res => res.json()).then(data => data);
    }));

    mount(<Admin />);

    expect(response).toHaveBeenCalledWith("http://localhost:8800/users");
    done();
  });
});
