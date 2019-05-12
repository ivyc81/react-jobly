## Jobly Frontend

## To start
```
npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## To run tests
```
npm test
```

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Component architecture
```
App
├─┬ Nav
│ └── DropDown
└─┬ Routes
  ├── Home
  ├─┬ Login
  │ └── Alert
  ├─┬ Companies
  │ ├── CompanyCard
  │ ├── Search
  │ └── Alert
  ├─┬ Company
  │ ├── JobCard
  │ └── Alert
  ├─┬ Jobs
  │ ├── JobCard
  │ ├── Search
  │ └── Alert
  └─┬ Profile
    └── Alert
```