import {describe, expect, test} from "vitest"
import {shallow} from 'enzyme'
import PrimeraApp from "../PrimeraApp";

describe('testing PrimeraApp', () => {
    test('it should show the message "Hola soy josé', () => {
        const saludo = 'Hola soy josé';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)
        expect(wrapper).toMatchSnapshot();
    })
})

test('it should show the subtitle sended by props', () => {
    const saludo = 'Hola soy josé';
    const subtitulo = "Soy un subtitulo";
    const wrapper = shallow(
        <PrimeraApp
            saludo={saludo}
            subtitulo={subtitulo}
        />)

    const textoParrafo = wrapper.find('p').text();
    expect(textoParrafo).toBe(subtitulo);

})