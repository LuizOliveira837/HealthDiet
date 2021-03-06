import { Nutritionist } from "../model/nutritionist";
import { INutritionist, INutritionistRepository } from "./INutritionistRepository";




class NutritionistRepository implements INutritionistRepository {


    private nutritionists : INutritionist  = []

    static INSTANCE : NutritionistRepository

    constructor(){

    }
    findById(id: string): INutritionist {
        

        const nutritionist = this.nutritionists.find((nutritionist)=>nutritionist.id === id)

        if(!nutritionist) throw new Error("User not exists")
        

        return nutritionist

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

        console.log(nutritionist)

        return nutritionist
    }

    deleteNutritionist(nutritionist: Nutritionist) {

        const nutritionistWasExcluded = this.nutritionists.splice(this.nutritionists.indexOf(nutritionist),1)

        if(!nutritionistWasExcluded) throw new Error("Nutritionist was not excluded")

    }

    
    updateDescription(nutritionist : INutritionist,description: string): INutritionist {
        nutritionist.description = description
        return nutritionist 
    }

    getById(id:string): INutritionist{

        const user = this.nutritionists.find(nutritionist=> nutritionist.id === id);

        if(!user) throw new Error("User not exists")

        return user;

    }


}


export {NutritionistRepository}