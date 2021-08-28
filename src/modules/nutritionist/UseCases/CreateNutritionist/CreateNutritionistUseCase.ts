import { Nutritionist } from "../../model/nutritionist";
import { NutritionistRepository } from "../../Repository/NutritionRepository";

interface ICreateNutrionistDTO{
    name : string;
    birthday: Date;
    description : string;
    email : string;
    password : string;
    cep: string;

}


class CreateNutrionistUseCase  {

    constructor(private nutritionistRepository: NutritionistRepository){

    }

    execute({name, birthday, description, email, password,cep}:ICreateNutrionistDTO){

        try {
            this.nutritionistRepository.findByEmail(email)
            const newNutritionist = this.nutritionistRepository.createNutritionist({name,birthday,description,email,password,cep})
            return newNutritionist
            
        } catch (error) {

            throw new Error(error.message);

            
        }





    }


}


export {CreateNutrionistUseCase}