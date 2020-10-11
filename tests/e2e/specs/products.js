describe('Login',()=>{
    it('filtra productos por nombre', ()=>{
        cy.visit('/')
        cy.get('.navbar-burger > :nth-child(2)').click()
        cy.get('input').type('casa')

        })
    
    it('añade productos al carrito y lo revisa',()=>{
        cy.visit('/')
        cy.get('.navbar-burger > :nth-child(2)').click()
        cy.get('input').type('casa')
        cy.get('.mdi.mdi-plus').click()
        cy.get('.button.is-pulled-right.is-warning').click()
        cy.get('.navbar-burger > :nth-child(3)').click()
        cy.get('.mdi.mdi-32px.mdi-cart').click()
    })

    it('Elimina productos al carrito',()=>{
        cy.visit('/')
        cy.get('.navbar-burger > :nth-child(2)').click()
        cy.get('input').type('casa')
        cy.get('.mdi.mdi-plus').click()
        cy.get('.button.is-pulled-right.is-warning').click()
        cy.get('.navbar-burger > :nth-child(3)').click()
        cy.get('.mdi.mdi-32px.mdi-cart').click()
        cy.get('.mdi.mdi-18px.mdi-delete').click()
    })
    })