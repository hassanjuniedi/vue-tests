import { mount } from "@vue/test-utils";
import Home from "../Home.vue";

describe('Home page', () => {
    it('render html correctly', () => {
        const wrapper = mount(Home);
        expect(wrapper.html()).toMatchSnapshot();
    })
})