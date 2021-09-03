import { NutritionistRepository } from "../../Repository/NutritionRepository";




class GetNutritionistUseCase{

    constructor(private nutritionistRepository: NutritionistRepository){

    }

    execute(id:string){

        try {


            const {name, email, birthday,description, cep} = this.nutritionistRepository.getById(id)

            return {name, email, birthday,description, cep}
            
        } catch (error) {

            throw new Error(error)
            
        }
    }

}


export {GetNutritionistUseCase}