import { NutritionistRepository } from "../../Repository/NutritionRepository";
import { DeleteNutritionistController } from "./DeleteNutritionistController";
import { DeleteNutritionistUseCase } from "./DeleteNutritionistUseCase";



const nutritionistRepository = NutritionistRepository.getInstance()


const deleteNutritionistUseCase = new DeleteNutritionistUseCase(nutritionistRepository)


const deleteNutritionistController = new DeleteNutritionistController(deleteNutritionistUseCase)


export {deleteNutritionistController}