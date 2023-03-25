![](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)
![](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)
![](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

# Cypress-Api-Automation-sorryCypressDashboard

---

> ### Project made from scratch to perform api automated tests, also adding integrations to GitHub Actions and Sorry Cypress (Dashboard)

---

---

---

## Cypress Installation

> Use the package manager npm [nodejs](https://nodejs.org/en/) to install the framework and dependencies

```
npm i
```
## Cypress Dashboard installation (Check docs to enable parallelization, recording and debugging of cypress tests) (Sefl hosted service)

> Use docker to download and run the containers needed (after containers are running you could access http://localhost:8080)

```
docker compose -f docker-compose-minio.yml up
```
## How to use it

```
npm test  // this run all tests in headless mode
```

## Reporter

Github Actions genereate screenshots and videos

### Reporter on local machine


### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the terms of the [MIT license](/LICENSE).

[![Cypress.io](https://img.shields.io/badge/Tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
