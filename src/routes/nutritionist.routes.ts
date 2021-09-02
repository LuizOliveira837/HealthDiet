import {Router} from 'express'
import { createNutrionistController } from '../modules/nutritionist/UseCases/CreateNutritionist';
import { deleteNutritionistController } from '../modules/nutritionist/UseCases/DeleteNutritionist';
import { updateDescripitionController } from '../modules/nutritionist/UseCases/UpdateDescription';


const nutritionRoute = Router();


nutritionRoute.post('/create-nutritionist', (req,res)=>{
    createNutrionistController.handle(req, res);
})

nutritionRoute.get('/get-nutritionist', (req,res)=>{
    createNutrionistController.handle(req, res);
})

nutritionRoute.delete('/delete-nutritionist', (req,res)=>{
    deleteNutritionistController.handle(req,res)
})

nutritionRoute.patch('/update-description', (req,res)=>{
    updateDescripitionController.handle(req,res)
})



export {nutritionRoute}
