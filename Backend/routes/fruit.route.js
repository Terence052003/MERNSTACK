import express from 'express';
import {createFruit, deleteFruit, getFruit, updateFruit} from "../controller/fruit.controller.js";

const router = express.Router();

router.get('/', getFruit )

router.post('/' , createFruit)

router.patch('/:id', updateFruit)

router.delete('/:id', deleteFruit)

export default router;