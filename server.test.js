const request = require('supertest');
const app = require('./server');    


describe('GET /', () => {
    it('responds with "ello from backend"', async () => {
      const response = await request(app).get('/');
      expect(response.text).toBe('ello from backend ');
      expect(response.status).toBe(200);
    });
  });

  
  describe('POST /grade', () => {
    it('responds with a valid response for grading', async () => {
      const response = await request(app)
        .post('/grade')
        .query({ question: 'What is javascript', answer: 'a coding language' }); 
      expect(response.status).toBe(200);

    });
  });


  describe('POST /ask', () => {
    it('responds with a valid response for asking a quiz', async () => {
      const response = await request(app)
        .post('/ask')
        .query({ length: 5, topic: 'texas', expertise: 'novice', style: 'captain jack sparrow' }); 
      expect(response.status).toBe(200);
      
    });
  });
  
  describe('GET /nonexistentroute', () => {
    it('responds with a 404 error for a route that does not exist', async () => {
      const response = await request(app).get('/nonexistentroute');
  
      expect(response.status).toBe(404);
     
    });
  });