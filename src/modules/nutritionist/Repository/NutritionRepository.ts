import { Nutritionist } from "../model/nutritionist";
import { INutritionist, INutritionistRepository } from "./INutritionistRepository";




class NutritionistRepository implements INutritionistRepository {


    private nutritionists : INutritionist  = []

    static INSTANCE : NutritionistRepository

    constructor(){

    }

   static  getInstance(){

        if(NutritionistRepository.INSTANCE) return NutritionistRepository.INSTANCE

        NutritionistRepository.INSTANCE = new NutritionistRepository();

        return NutritionistRepository.INSTANCE 

    }


    findByEmail(email : string) : INutritionist {

        const userAlreadyExists = this.nutritionists.find(nutritionist=> nutritionist.email === email);

        if(userAlreadyExists)  throw new Error("User already exists")


        
    }
    createNutritionist({name, birthday, description, email, password,cep}): INutritionist {

        const nutritionist = new  Nutritionist();

        Object.assign(nutritionist, {name, birthday, description, email, password,cep})

        this.nutritionists.push(nutritionist);

        return nutritionist
    }
    updateDescription(): INutritionist {
        throw new Error("Method not implemented.");
    }


}


export {NutritionistRepository}