import { NutritionistRepository } from "../../Repository/NutritionRepository";
import { UpdateDescriptionController } from "./UpdateDescriptionController";
import { UpdateDescriptionUseCase } from "./UpdateDescriptionUseCase";




const nutritionistRepository = NutritionistRepository.getInstance()


const updateDescriptionUseCase = new UpdateDescriptionUseCase(nutritionistRepository);


const updateDescripitionController = new UpdateDescriptionController(updateDescriptionUseCase)


export{updateDescripitionController}
 