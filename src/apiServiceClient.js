const request = require('superagent');

class ApiServiceClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    try {
      const response = await request.get(`${this.baseUrl}${endpoint}`);
      return response.body;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async post(endpoint, data) {
    try {
      const response = await request.post(`${this.baseUrl}${endpoint}`).send(data);
      return response.body;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async put(endpoint, data) {
    try {
      const response = await request.put(`${this.baseUrl}${endpoint}`).send(data);
      return response.body;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete(endpoint) {
    try {
      const response = await request.delete(`${this.baseUrl}${endpoint}`);
      return response.body;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = ApiServiceClient;