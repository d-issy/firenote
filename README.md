# firenote
firenote is **fire**store + personal **note**.

## Install dependencies
```
yarn
```

## Set up configuration
When you want to set up this app, please add configure file into to src/config/firebase.config.js like below.
```javascript
export default {
  apiKey: '<API_KEY>',
  authDomain: '<PROJECT_ID>.firebaseapp.com',
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com',
  projectId: '<PROJECT_ID>',
  storageBucket: '<BUCKET>.appspot.com',
  messagingSenderId: '<SENDER_ID>'
}

```

## Run server
```
yarn serve
```

## Build
```
yarn build
```
