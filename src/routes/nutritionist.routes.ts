import {Router} from 'express'
import { createNutrionistController } from '../modules/nutritionist/UseCases/CreateNutritionist';


const nutritionRoute = Router();


nutritionRoute.post('/create-nutritionist', (req,res)=>{
    


    createNutrionistController.handle(req, res);
})


export {nutritionRoute}
