import { body } from 'express-validator'

export const productoCheck = () => {
    return [
        body('nombre').trim().not().notEmpty().withMessage('El campo nombre es obligatorio'),
        body('precio').trim().not().notEmpty().withMessage('El campo precio es obligatorio'),
        body('stock').trim().not().notEmpty().withMessage('El campo stock es obligatorio'),
    ]
}