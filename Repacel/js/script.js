import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDLnOrDioEna1jpFNdj9hv445eBEX3EpAs",
    authDomain: "repacel.firebaseapp.com",
    projectId: "repacel",
    storageBucket: "repacel.firebasestorage.app",
    messagingSenderId: "153420642365",
    appId: "1:153420642365:web:1a969f2db2d6759f7c1254",
    measurementId: "G-TMYR0ECQC3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const form = document.getElementById('crudForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = form.nombre.value;
    const email = form.email.value;
    const telefono = form.telefono.value;
    const direccion = form.direccion.value;
    const fecha = form.fecha.value;
    const mensaje = form.mensaje.value;

    try {
        await addDoc(collection(db, 'citas'), {
            nombre,
            email,
            telefono,
            direccion,
            fecha,
            mensaje
        });
        alert('Cita guardada exitosamente');
        form.reset();
        fetchData();
    } catch (error) {
        console.error('Error al guardar la cita: ', error);
    }
});

async function fetchData() {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = '';
    const querySnapshot = await getDocs(collection(db, 'citas'));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const div = document.createElement('div');
        div.textContent = `Nombre: ${data.nombre}, Email: ${data.email}, Teléfono: ${data.telefono}, Dirección: ${data.direccion}, Fecha: ${data.fecha}, Mensaje: ${data.mensaje}`;
        dataContainer.appendChild(div);
    });
}

fetchData();

// Function to load data from data.json
async function loadData() {
    const response = await fetch('data/data.json');
    const data = await response.json();
    const itemsContainer = document.getElementById('itemsContainer');
    data.items.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `ID: ${item.id}, Name: ${item.name}, Description: ${item.description}`;
        itemsContainer.appendChild(div);
    });
}

loadData();