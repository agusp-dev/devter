import firebase from 'firebase'

firebase.apps.length === 0 && 
firebase.initializeApp({
  apiKey: "AIzaSyA1enPorlCspE_hUSbkBXwqZGmbr-Z2sg0",
  authDomain: "devter-41621.firebaseapp.com",
  projectId: "devter-41621",
  storageBucket: "devter-41621.appspot.com",
  messagingSenderId: "526424252479",
  appId: "1:526424252479:web:9280bc9d15a4397cbd588a"
})

const mapUserFromFirebaseAuthToUser = user => {
  if( user === null ) return null
  const { displayName, email, photoURL } = user
  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export const onAuthStateChanged = setUser =>  {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const formattedUser = mapUserFromFirebaseAuthToUser(user)
      setUser(formattedUser)
    })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}