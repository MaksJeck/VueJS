import { createLocalVue, shallowMount } from "@vue/test-utils";
// import '@testing-library/jest-dom';
import MyForm from "../components/MyForm.vue";

const localVue = createLocalVue();

describe("MyForm testing", () => {
  it("Not visible div", async () => {
    const wrapper = shallowMount(MyForm, {localVue});
    await wrapper.setData({show: true});
    expect(wrapper.findComponent(`div[class="form"]`).isVisible()).toBe(true);
    await wrapper.setData({show: false});
    expect(wrapper.findComponent(`div[class="form"]`).isVisible()).toBe(false);
  });
});

