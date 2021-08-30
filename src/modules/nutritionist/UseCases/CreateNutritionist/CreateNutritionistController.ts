import {Request, Response} from 'express';
import { CreateNutrionistUseCase } from './CreateNutritionistUseCase';




class CreateNutrionistController{



    constructor(private createNutrionistUseCase: CreateNutrionistUseCase){

    }

    handle(req: Request, res: Response){

        const {name, birthday, description, email, password,cep} =  req.body 

        try {

            const newUser = this.createNutrionistUseCase.execute({name, birthday, description, email, password, cep})

            return res.status(201).json({newUser})
            
        } catch (error) {

            throw new Error(error.message)
            
        }



    }
}



export {CreateNutrionistController}