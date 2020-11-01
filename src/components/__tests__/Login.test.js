import { shallowMount } from "@vue/test-utils";
import Login from "../Login.vue";

describe('Login component', () => {
    it('render html correctly', () => {
        const wrapper = mount(Login);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Should emit `failed` if the login failed', async() => {
        const wrapper = shallowMount(Login);
        const usernameInput = wrapper.find('#username');
        const passwordInput = wrapper.find('#password');
        const submitButton = wrapper.find('#submit');

        usernameInput.setValue('wrong_user');
        passwordInput.setValue('wrong_pass');
        await submitButton.trigger('click');

        expect(wrapper.emitted().input[0]).toEqual(['failed']);
    })

    it('Should emit `success` if the login succeeds', async() => {
        const wrapper = shallowMount(Login);
        const usernameInput = wrapper.find('#username');
        const passwordInput = wrapper.find('#password');
        const submitButton = wrapper.find('#submit');

        usernameInput.setValue('user');
        passwordInput.setValue('pass');
        await submitButton.trigger('click');

        expect(wrapper.emitted().input[0]).toEqual(['success']);
    })

    it('Should clear all form inputs when user clicks reset', async() => {
        const wrapper = shallowMount(Login);
        const usernameInput = wrapper.find('#username');
        const passwordInput = wrapper.find('#password');
        const resetButton = wrapper.find('#reset');

        usernameInput.setValue('random_user');
        passwordInput.setValue('random_pass');
        await resetButton.trigger('click');

        expect(wrapper.vm.username).toEqual('');
        expect(wrapper.vm.password).toEqual('');
    })

    it('Should emit `idle` status when user clicks reset', async() => {
        const wrapper = shallowMount(Login);
        const usernameInput = wrapper.find('#username');
        const passwordInput = wrapper.find('#password');
        const resetButton = wrapper.find('#reset');
        await resetButton.trigger('click');

        expect(wrapper.emitted().input[0]).toEqual(['idle']);
    })
})