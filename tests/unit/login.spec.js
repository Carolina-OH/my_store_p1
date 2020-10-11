import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Login from '@/views/Login.vue'
import VueRouter from 'vue-router'
import myRoutes from './mocks/routes'
import Vuex from 'vuex'
import myStore from './mocks/store'
import {Auth} from '@/services/Auth'
import sinon from 'sinon'
import flushPromises from 'flush-promises'

let localVue =createLocalVue()
localVue.use(Vuex)
let store = new Vuex.Store(myStore)
localVue.use(VueRouter)
let router = new VueRouter(myRoutes)

describe('Login.vue', () => {
  it('redireccionar a home si login es exitoso',(done) => {
    const loginStub = sinon.stub(Auth, 'login').resolves({email:'usuario@user.com'})

    const routerPushSpy= sinon.spy(router,'push')
    
    const wrapper = shallowMount(Login,{
        localVue,
        router,
        store
    })

    wrapper.setData({
        credentials:{
            email:'usuario@error.com',
            password:'password'
        } 
    })

    const loginButton = wrapper.find('button.button.is-primary')
    loginButton.trigger('click')
    
    flushPromises().then(()=>{
        expect(true).to.equals(true)
        expect(routerPushSpy.callCount).to.be.equals(1)
        expect(routerPushSpy.firstCall.args).to.contain('/')
        loginStub.restore()
        routerPushSpy.restore()
        done()
    }).catch(done)

})
it('muestra error si login falla',(done)=>{

    const loginStub = sinon.stub(Auth,'login').rejects({messagw:'wrong'})

    const wrapper = shallowMount(Login,{})
    wrapper.setData({
        credentials:{
            email:"usuario@error.com",
            password:'password-error'

        }
    })
    const loginButton = wrapper.find('button.button.is-primary')
    loginButton.trigger('click')

    flushPromises().then(()=>{
        expect(wrapper.text()).to.include('Usuario o Contraseña incorrectos')
        loginStub.restore()
        done()
    }).catch(done)
})
})