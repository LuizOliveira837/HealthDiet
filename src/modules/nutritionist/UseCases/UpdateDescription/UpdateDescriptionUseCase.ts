import { NutritionistRepository } from "../../Repository/NutritionRepository";


interface UpdateDescriptionUseCaseDTO{
    id: string;
    description: string;

}




class UpdateDescriptionUseCase{

    constructor(private nutritionistRepository : NutritionistRepository){

    }


    execute({id, description}: UpdateDescriptionUseCaseDTO){

        try{

        const nutritionist = this.nutritionistRepository.findById(id)
        if(nutritionist) {
        
            return this.nutritionistRepository.updateDescription(nutritionist, description )
        }
    }catch(e){
        throw new Error(e.message)
    }

    }

}


export {UpdateDescriptionUseCase}