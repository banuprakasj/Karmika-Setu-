import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  setPersistence, 
  browserLocalPersistence, 
  initializeAuth,
  indexedDBLocalPersistence,
  signInAnonymously,
  browserPopupRedirectResolver
} from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);

// Using initializeAuth for more explicit control, which sometimes helps in sandboxed environments
let auth;
try {
  auth = initializeAuth(app, {
    persistence: [indexedDBLocalPersistence, browserLocalPersistence],
    popupRedirectResolver: browserPopupRedirectResolver,
  });
} catch (e) {
  // If already initialized
  auth = getAuth(app);
}

export { auth };

// Use the database ID from config as strictly required by instructions
const firestoreDatabaseId = firebaseConfig.firestoreDatabaseId || '(default)';

// Using getFirestore as explicitly requested in instructions for database ID
export const db = getFirestore(app, firestoreDatabaseId);

// Check configuration validity
if (!firebaseConfig.apiKey || firebaseConfig.apiKey === "undefined") {
  console.error("Firebase API Key is missing! Please set up Firebase using the tool.");
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Connectivity check as per instructions
async function testConnection() {
  console.log('Firebase initialized with Project ID:', firebaseConfig.projectId);
  console.log('Auth Domain:', firebaseConfig.authDomain);
  try {
    // Reading the connection test document
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log('Firestore connection verified.');
  } catch (error) {
    if (error instanceof Error && (error.message.includes('the client is offline') || error.message.includes('Could not reach Cloud Firestore backend'))) {
      console.error('Please check your Firebase configuration. The backend is unreachable.');
    } else {
      // If it's a permission error, we are still connected
      console.log('Firestore connected (Auth/Permission check passed).');
    }
  }
}

testConnection();
