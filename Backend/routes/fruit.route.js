import express from 'express';
import {createFruit, deleteFruit, getFruit, loginAccount, updateFruit} from "../controller/fruit.controller.js";

const router = express.Router();

router.get('/', getFruit )

router.post('/' , createFruit)

router.patch('/:id', updateFruit)

router.delete('/:id', deleteFruit)

router.post('/login', loginAccount)

export default router;