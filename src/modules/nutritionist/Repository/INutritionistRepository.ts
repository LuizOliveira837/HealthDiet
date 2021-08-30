import { Nutritionist } from "../model/nutritionist";

interface INutritionist{
    id: string;
    name : string;
    birthday: Date;
    description : string;
    email : string;
    password : string;
    cep: string;

}


interface INutritionistRepository {

    findByEmail(email : string): INutritionist;

    findById(id: string): INutritionist;

    createNutritionist({name, birthday, description, email, password,cep}):INutritionist;

    deleteNutritionist(nutritionist: Nutritionist): void;

    updateDescription(): INutritionist;


}


export {INutritionistRepository, INutritionist}