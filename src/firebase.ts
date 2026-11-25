import { initializeApp } from 'firebase/app'
import { getAuth, signInAnonymously, type User } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp({
  apiKey: 'AIzaSyDAAglhzzadIRphV5O3okbRSvHbchuJr_4',
  authDomain: 'pantry-pilot-sync.firebaseapp.com',
  projectId: 'pantry-pilot-sync',
  storageBucket: 'pantry-pilot-sync.firebasestorage.app',
  messagingSenderId: '407621400530',
  appId: '1:407621400530:web:34565cd90e3c54523f7a0b',
})

export const auth = getAuth(app)
export const db = getFirestore(app)

export async function sharedUser(): Promise<User> {
  if (auth.currentUser) return auth.currentUser
  const credential = await signInAnonymously(auth)
  return credential.user
}

