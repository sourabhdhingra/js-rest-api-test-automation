const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const ApiServiceClient = require('../src/apiServiceClient');

describe('ApiServiceClient', () => {
    let jsonServer;

    const apiClient = new ApiServiceClient('http://localhost:3000');

    beforeAll((done) => {
        // db.json revert back to original content
        const dbPath = path.resolve(__dirname, '..', 'db.json');
        const dbOriginalPath = path.resolve(__dirname, '..', 'db_original.json');
        const dbContent = fs.readFileSync(dbOriginalPath);
        fs.writeFileSync(dbPath, dbContent);

        // setup the json server
        jsonServer = spawn('json-server', [dbPath]);

        // Wait for the server to start
        jsonServer.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
            done();
        });

        jsonServer.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

    });

    afterAll(() => {
        // Stop the server
        jsonServer.kill();

        // Wait for the server to exit
        return new Promise((resolve) => {
            jsonServer.on('close', (code) => {
                console.log(`child process exited with code ${code}`);
                resolve();
            });
        });
    });


    it('should retrieve a list of users', async () => {
        const response = await apiClient.get('/users');
        expect(response).toBeInstanceOf(Array);
        expect(response.length).toBeGreaterThan(0);
    });

    it('should create a new user', async () => {
        const userData = { name: 'New User', email: 'newuser@example.com' };
        const response = await apiClient.post('/users', userData);
        expect(response).toHaveProperty('id');
        expect(response.name).toBe(userData.name);
        expect(response.email).toBe(userData.email);
    });

    it('should update an existing user', async () => {
        const userId = 1; // assume user with id 1 exists
        const updatedUserData = { name: 'Updated User', email: 'updateduser@example.com' };
        const response = await apiClient.put(`/users/${userId}`, updatedUserData);
        expect(response).toHaveProperty('id', userId);
        expect(response.name).toBe(updatedUserData.name);
        expect(response.email).toBe(updatedUserData.email);
    });
});