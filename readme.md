[![Thumbnail](./resources/Rest%20API%20Automation%20using%20JS.png)]([link_to_your_project](https://github.com/sourabhdhingra/js-rest-api-test-automation))


### REST API Automation using JavaScript
A project to demonstrate how JavaScript can be used for REST API test automation.
- `jest`: JavaScript Testing framework
- `superagent`: Small, progressive client-side HTTP request library
- `json-server`: To mock the REST API under test

1. Commands to run:
   - npm init -y
   - npm i json-server@0.17.4 --save-dev

2. Populate db.json with mock data.

3. Explanation of the Entities:

    ```yaml
    Users:
        Represents the users of the payment service.
        Contains basic user information like id, name, and email.

    Accounts:
        Represents the accounts associated with users.
        Contains information about the account balance, currency, and associated user (userId).

    Transactions:
        Represents the transactions made through the payment service.
        Contains details about each transaction, such as id, accountId, amount, type (debit or credit), description, and date.

    Payment Methods:
        Represents different payment methods associated with users.
        Contains details about each payment method, such as id, userId, type (e.g., credit card, PayPal), provider, and relevant account information.
    ```

4. Run `npx json-server --watch db.json` to start the mock server.

5. Install `superagent` as an HTTP request library:
   - `npm install superagent --save`

6. Install `jest`:
   - `npm i jest`

7. In `api.test.js`, add setUp to initialize the db.json file.

8. Run using `npx jest` or `npm run test`. For `npm run test`, make sure the following change is done:
   ```json
   "scripts": {
       "test": "jest"
   }
   ```

9. Configure `json-server` in beforeAll and afterAll steps to avoid manual launch of the server.