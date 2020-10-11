
describe('Login',()=>{
    it('redireccionar a home cuando usuario se logea', ()=>{
        cy.visit('/login')
        cy.get('.navbar-burger > :nth-child(2)').click()
        cy.get('#email').type('user1@mystore.com')
        cy.get('#password').type('password')
        cy.get('.button').click()

        cy.location().should((loc)=>{

            expect(loc.pathname).to.eq('/')
        })
    })
    
    it('mostrar el error al tener credenciales erroneas',()=>{
        cy.visit('/login')
        cy.get('.navbar-burger > :nth-child(2)').click()
        cy.get('#email').type('hola@mundo.com')
        cy.get('#password').type('password')
        cy.get('.button').click()
        cy.contains('Usuario o Contraseña incorrectos')
    })
}) 