import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBJShmUnNCvQU8NOaezJiFvDLFtnmP7D1A",
    authDomain: "catch-of-the-day-6091a.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-6091a-default-rtdb.firebaseio.com",
  })

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base