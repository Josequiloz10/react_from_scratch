import {describe, expect, test} from "vitest"
import {shallow} from 'enzyme'
import CounterApp from "../CounterApp";

describe('testing CounterApp', () => {
    let wrapper = shallow(<CounterApp />);

    //@ts-ignore
    beforeEach(() => {
        wrapper = shallow(<CounterApp />)
    })

    test('it should show CounterApp with default values', () => {
        expect(wrapper).toMatchSnapshot();
    })

test('it should show CounterApp with default 100 values', () => {

    const wrapper = shallow(
        <CounterApp
            value={100}
        />)

    const valueH2 = wrapper.find('h2').text().trim();
    expect(valueH2).toBe('100');
})

test('it should increse with +1 button', () => {

    wrapper.find('button').at(0).simulate('click');
    const valueH2 = wrapper.find('h2').text().trim();
    expect(valueH2).toBe('11');
})

test('it should decrease with -1 button', () => {

    wrapper.find('button').at(2).simulate('click');
    const valueH2 = wrapper.find('h2').text().trim();
    expect(valueH2).toBe('9');
})

test('it should restart the value', () => {
    const wrapper = shallow(
        <CounterApp
            value={105}
        />)
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const valueH2 = wrapper.find('h2').text().trim();
    expect(valueH2).toBe('105');
})

})
