import { mount } from "@vue/test-utils";
import Calc from "../components/Calc.vue";

describe('Test Calculator', () => {
    it('test first operand input', () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue('1');
        expect(wrapper.vm.operand1).toBe(1);
    });
    it('test two operand input', () => {
        const wrapper = mount(Calc);
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.element.value = "1";
        operand2.trigger('input');
        expect(wrapper.vm.operand2).toBe(1);
    });
    it('test sum', () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue('4');
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('3');
        const sumBtn = wrapper.find('button[name="+"]');
        sumBtn.trigger('click');

        expect(wrapper.vm.result).toBe(7);
    });
    it('test sub', () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue('12');
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('8');
        const subBtn = wrapper.find('button[name="-"]');
        subBtn.trigger('click');

        expect(wrapper.vm.result).toBe(4);
    });
    it('test division', () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue('12');
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('3');
        const dishnBtn = wrapper.find('button[name="/"]');
        dishnBtn.trigger('click');

        expect(wrapper.vm.result).toBe(4);
    });
    it('test multiplication', () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue('4');
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('3');
        const multiBtn = wrapper.find('button[name="*"]');
        multiBtn.trigger('click');

        expect(wrapper.vm.result).toBe(12);
    });
    it('test Integer division', () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue('16');
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('12');
        const intBtn = wrapper.find('button[name="%"]');
        intBtn.trigger('click');

        expect(wrapper.vm.result).toBe(1);
    });
   
})