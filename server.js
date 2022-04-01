import Usuario from "./models/Usuario.js";
import Empresa from "./models/Empresa.js";

//importamos express
import express from "express";
//const express = require("express");
const app = express();
const port = 8000;

//importamos faker
// const { faker } = require('@faker-js/faker');

 //definiendo las funciones middleware en express
 app.use( express.json() );
 app.use( express.urlencoded({ extended: true }) );

 //Definiendo rutas 
 // devolviendo los usuarios 
 
 //nuevo usuario 
 app.get("/api/users/new",(req,res) => {
     const usuario = new Usuario();
     res.json(usuario);
 });

 //nueva compañia 
app.get("/api/companies/new",(req,res) => {
    const empresa = new Empresa();
    res.json(empresa);
});

//devuelve una compañia como usuario 
app.get("/api/user/company",(req,res) => {
    const usuario = new Usuario();
    const empresa = new Empresa();
    res.json( {...usuario, empresa : empresa} );

});


 app.listen( port, () => console.log(`Listening on port: ${port}`) );
