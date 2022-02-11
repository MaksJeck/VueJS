import { mount } from "@vue/test-utils";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";

describe("unit test for PaymentsDisplay", () => {
  it("renders a div ", () => {
    const wrapper = mount(PaymentsDisplay);
    expect(wrapper.findComponent('div[class="item"')).toBeTruthy();
  });
});