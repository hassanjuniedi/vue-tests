import { mount } from "@vue/test-utils";
import Home from "../Home.vue";

describe('Home page', () => {
    it('render html correctly', () => {
        const wrapper = mount(Home);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Should change the status text to `Success` if login succeeds', async() => {
        const wrapper = mount(Home);
        const usernameInput = wrapper.find('#username');
        const passwordInput = wrapper.find('#password');
        const submitButton = wrapper.find('#submit');

        usernameInput.setValue('user');
        passwordInput.setValue('pass');
        await submitButton.trigger('click');

        expect(wrapper.find('#status-text').text()).toEqual('Successfully logged in.');
    })
    it('Should change the status text to `Failed` if login fails', async() => {
        const wrapper = mount(Home);
        const usernameInput = wrapper.find('#username');
        const passwordInput = wrapper.find('#password');
        const submitButton = wrapper.find('#submit');

        usernameInput.setValue('wrong_user');
        passwordInput.setValue('wrong_pass');
        await submitButton.trigger('click');

        expect(wrapper.find('#status-text').text()).toEqual('Failed to login.');
    });

    it('Should reset the status text when user clicks reset', async() => {
        const wrapper = mount(Home);
        const usernameInput = wrapper.find('#username');
        const passwordInput = wrapper.find('#password');
        const resetButton = wrapper.find('#reset');
        const submitButton = wrapper.find('#submit');

        usernameInput.setValue('wrong_user');
        passwordInput.setValue('wrong_pass');
        await submitButton.trigger('click');
        await resetButton.trigger('click');
        
        expect(wrapper.find('#status-text').text()).toEqual('Please login to view you status');
    })
})