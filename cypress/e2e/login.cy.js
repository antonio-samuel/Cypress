describe('Login', () => {
   
    beforeEach(() =>{
        cy.visit('https://www.saucedemo.com')
    }
)
   
    it('entra com usuario e senha', () => {
     //passos da receita
     cy.get('[data-test="username"]').type('standard_user')
     cy.get('[data-test="password"]').type('secret_sauce')
     cy.get('[data-test="login-button"]').click()
     cy.contains('Products').should('be.visible')
    })

    it('mostrar erro para usuario bloqueado',() =>{
    cy.get('[data-test="username"]').type('locked_out_user')
     cy.get('[data-test="password"]').type('secret_sauce')
     cy.get('[data-test="login-button"]').click()
     cy.get('[data-test="error"]')
     .should('contain', 'locked out')
    })

    it('Teste de login com a senha errada', () =>{
     cy.get('[data-test="username"]').type('standard_user')
     cy.get('[data-test="password"]').type('secret') 
     cy.get('[data-test="login-button"]').click()
     cy.get('[data-test="error"]')
     .should('contain', 'Epic sadface: Username and password do not match any user in this service')
    })

     it('Teste de login com campos vazios', () =>{
        // .type() não aceita string vazia então apenas pulei direto para o button
     cy.get('[data-test="login-button"]').click()
     cy.get('[data-test="error"]')
     .should('contain', 'Username is required')
    })

     it('Teste de login sem a senha', () =>{
     cy.get('[data-test="username"]').type('standard_user')
     
     cy.get('[data-test="login-button"]').click()
     cy.get('[data-test="error"]')
     .should('contain', 'Password is required')
    })

    it('Teste de login sem o usuario', () =>{
     
     cy.get('[data-test="password"]').type('secret_sauce')
     cy.get('[data-test="login-button"]').click()
     cy.get('[data-test="error"]')
     .should('contain', 'Username is required')
    })

    it('login com usuario errado', () => {
     //passos da receita
     cy.get('[data-test="username"]').type('standart_user')
     cy.get('[data-test="password"]').type('secret_sauce')
     cy.get('[data-test="login-button"]').click()
     cy.get('[data-test="error"]')
     .should('contain', 'Epic sadface: Username and password do not match any user in this service')
    })
})