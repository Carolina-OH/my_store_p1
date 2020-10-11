import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'
import flushPromises from 'flush-promises'
import Login from '@/views/Login.vue'
import { Auth } from "@/services/Auth";
describe('Login.vue', () => {
it('Muestra error si login falla', (done) => {
const loginStub = sinon.stub(Auth, 'login')
.rejects({ message: "Wrong User or Password" })
const wrapper = shallowMount(Login, {})
wrapper.setData({
credentials: {
email: 'usuario@error.com',
password: 'password-error'
}
})
const loginButton = wrapper.find('button.button.is-primary')
loginButton.trigger('click')
flushPromises().then( () => {
expect(wrapper.text()).to.include('Usuario o Contraseña incorrectos')
loginStub.restore()
done()
})
})
})