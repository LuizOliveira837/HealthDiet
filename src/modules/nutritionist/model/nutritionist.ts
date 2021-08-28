import  {uuid as v4 }from 'uuidv4'




class Nutritionist{
    id:string;
    name : string;
    birthday: Date;
    description : string;
    email : string;
    password : string;
    cep: string;


    constructor(){

       if (!this.id) this.id = v4()

    }
}


export {Nutritionist}