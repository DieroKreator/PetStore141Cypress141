// Bibliotecas
import pet from '../fixtures/pet.json'
import petAlterado from '../fixtures/petAlterado.json'

describe('CRUD da entidade Pet', () => {

  // Post Pet
  it('POST Pet', () => {
    cy.request({
      method: 'POST',
      url: '/pet',
      body: pet
    }).then(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.id).to.eq(pet.id)
      expect(body.name).to.eq(pet.name)
      expect(body.category.id).to.eq(pet.category.id)
      expect(body.category.name).to.eq(pet.category.name)
      expect(body.tags[0].id).to.eq(pet.tags[0].id)
      expect(body.tags[0].name).to.eq(pet.tags[0].name)
      expect(body.status).to.eq(pet.status)
    })
  })

  // Get Pet
  it('GET Pet', () => {
    cy.request({
      url: `/pet/${pet.id}`,
      method: 'GET'
    }).then(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.id).to.eq(pet.id)
      expect(body.name).to.eq(pet.name)
      expect(body.category.id).to.eq(pet.category.id)
      expect(body.category.name).to.eq(pet.category.name)
      expect(body.tags[0].id).to.eq(pet.tags[0].id)
      expect(body.tags[0].name).to.eq(pet.tags[0].name)
      expect(body.status).to.eq(pet.status)
    })
  })

  // Put Pet
  it('PUT Pet', () => {
    cy.request({
      method: 'PUT',
      url: '/pet',
      body: petAlterado
    }).then(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.id).to.eq(petAlterado.id)
      expect(body.name).to.eq(petAlterado.name)
      expect(body.category.id).to.eq(petAlterado.category.id)
      expect(body.category.name).to.eq(petAlterado.category.name)
      expect(body.tags[0].id).to.eq(petAlterado.tags[0].id)
      expect(body.tags[0].name).to.eq(petAlterado.tags[0].name)
      expect(body.status).to.eq(petAlterado.status)
    })
  })

  // Delete Pet
  it('DELETE Pet', () => {
    cy.request({
      method: 'DELETE',
      url: `/pet/${pet.id}`
    }).then(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.code).to.eq(200)
      expect(body.type).to.eq('unknown')
      expect(body.message).to.eq(`${pet.id}`)
      // expect(body.message).to.eq((pet.id).toString())
    })
  })
})