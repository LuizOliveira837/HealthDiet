import { NutritionistRepository } from "../../Repository/NutritionRepository"

interface DelteNutritionistDTO{
    id: string
}






class DeleteNutritionistUseCase{


    constructor(private nutritionistRepository: NutritionistRepository){

    }


    execute({id }:DelteNutritionistDTO){


        try {

            const nutritionist = this.nutritionistRepository.findById(id);

            this.nutritionistRepository.deleteNutritionist(nutritionist)

        } catch (error) {

            throw new Error(error.message)
            
        }








    }

}


export{DeleteNutritionistUseCase}