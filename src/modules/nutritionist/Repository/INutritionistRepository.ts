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

    createNutritionist({name, birthday, description, email, password,cep}):INutritionist;

    updateDescription(): INutritionist;


}


export {INutritionistRepository, INutritionist}