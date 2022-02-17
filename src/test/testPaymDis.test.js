import { mount } from "@vue/test-utils";
import index from "../store/index.js";

describe('Test PaymentsDisplay', () => {
    it('should render obj to text', () => {
        const wrapper = mount(index);
      
        expect(wrapper.ctegory()).toContain("Food");
    });
});