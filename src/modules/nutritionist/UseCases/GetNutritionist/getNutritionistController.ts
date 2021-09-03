import { GetNutritionistUseCase } from "./getNutritionistUseCase";






class GetNutritionistController{

    constructor(private getNutritionistUseCase : GetNutritionistUseCase){
        
    }

    handle(req: Request, res: Response){

        const {id} = req.params


        try {

            const user = this.getNutritionistUseCase.execute(id)

            return res.status(200).json(user);
            
        } catch (error) {

            return res.status(200).json({"message": error.message})
            
        }
    }

}


export {GetNutritionistController}