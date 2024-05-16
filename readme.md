### Rest API Automation using JS
A project to demonstrate how Javscript can be used for rest api test automation
-  `jest`: JS Testing framework
- `superagent`: Small progressive client-side HTTP request library
- `json-server`: to mock the rest api under test
 
 1. Commands run:
 - npm init -y
 - npm i json-server@0.17.4 --save-dev

 2. Populate db.json with mock data

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

4. run `npx json-server --watch db.json` to start the mock server

5. Install `superagent` as http-request library
    - `npm install superagent --save`

6. Install `jest` as `npm i jest`

7. In `api.test.js` - adding setUp to initialize db.json file.

8. Run using `npx jest` or `npm run test`. For `npm run test` make sure below change is done
    ```json
        "scripts": {
        "test": "jest"
    }
    ```
9. `json-server` configured in beforeAll and afterAll steps. One may avoid manual launch of server.
