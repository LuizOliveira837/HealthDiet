import { DeleteNutritionistUseCase } from "./DeleteNutritionistUseCase";




class DeleteNutritionistController{



    constructor(private deleteNutritionistUseCase : DeleteNutritionistUseCase){

    }

    handle(req : Request, res : Response){

        const {id} = req.headers

        try {
            this.deleteNutritionistUseCase.execute({id})

            return res.status(200).json({"Message": "Consumidor deletado com sucesso"});
            
        } catch (error) {

            throw new Error(error.message)
            
        }

    }
}


export{DeleteNutritionistController}