// biblioteca com tipagem funcionando
import axios from 'axios'

axios.get('/todos', {})

// biblioteca sem tipagem
import express from 'express'
// instalar a extensão: npm i -D @types/express

const routes = express.Router()
