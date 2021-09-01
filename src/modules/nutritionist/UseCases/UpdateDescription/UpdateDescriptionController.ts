import { UpdateDescriptionUseCase } from "./UpdateDescriptionUseCase";




class UpdateDescriptionController{



    constructor(private updateDescriptionUseCase: UpdateDescriptionUseCase){

    }


    handle(req:Request, res:Response){

        const {description} = req.body;
        const {id} = req.headers



        try{

           const nutritionist = this.updateDescriptionUseCase.execute({id, description})


            return res.status(200).json({nutritionist} )

        }catch(err){
            throw new Error(err.message);
        }

    }

}


export {UpdateDescriptionController}