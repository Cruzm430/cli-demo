const {expect} = require('chai')
const app = require('supertest')(require('./app'));

let woo = false
woo = !woo

describe('Our Application', ()=>{
  it('true is true', ()=>{
    expect(woo).to.equal(true)
  })
  describe('GET /', ()=>{
    it('returns a 200 with foo', async ()=>{
      const response = await app.get('/')
      expect(response.status).to.equal(200)
      expect(response.text).to.contain('foo')
    })
  })
})