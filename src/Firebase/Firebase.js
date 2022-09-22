import { initializeApp } from "firebase/app";

import {
  collection,
  addDoc,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "basecoder-christian.firebaseapp.com",
  projectId: "basecoder-christian",
  storageBucket: "basecoder-christian.appspot.com",
  messagingSenderId: "312922146522",
  appId: "1:312922146522:web:a2e90e3b75a36b1c8347e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function cargarBBDD() {
  const promise = await fetch("../components/Mock/productos.json");
  const productos = await promise.json();
  productos.forEach(async (producto) => {
    await addDoc(collection(db, "items"), {
      nombre: producto.nombre,
      precio: producto.precio,
      description: producto.description,
      category: producto.category,
      image: producto.image,
      stock: producto.stock,
    });
  });
}

export { db, app, cargarBBDD };
