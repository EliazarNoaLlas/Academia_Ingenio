/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express');
const path = require('path');
const app = express();
let aux=1; 
const listAlumnos=[]

// Configura el middleware para servir archivos estáticos de la carpeta de compilación de React
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json())


// Configura una ruta para enviar la página de inicio de React
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.get('/api/v8/formulario/:id', (req, res) => {
  const id = parseInt(req.params.id,10);
  const alumno = listAlumnos.find((alumno)=>alumno.id===id)
  if (alumno){
    res.send(alumno)  
  }
  else{
    res.status(404)
    res.send({ok:false,error:"No se encontro este alumno"})
  }
})

app.get('/api/v8/formulario',(req,res)=>{
  res.send(listAlumnos)
})

app.post('/api/v8/formulario',(req,res)=>{
  const { data } =req.body;
  const newAlumno = {
    id: aux,
    ...data
  }
  aux++
  listAlumnos.push(newAlumno)
  res.send({ok:true})
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
// Inicia el servidor en el puerto especificado
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});