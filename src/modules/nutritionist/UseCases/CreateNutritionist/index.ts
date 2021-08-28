import { NutritionistRepository } from "../../Repository/NutritionRepository";
import { CreateNutrionistController } from "./CreateNutritionistController";
import { CreateNutrionistUseCase } from "./CreateNutritionistUseCase";

const nutritionistRepository = NutritionistRepository.getInstance()

const createNutrionistUseCase = new CreateNutrionistUseCase(nutritionistRepository)
const createNutrionistController = new CreateNutrionistController(createNutrionistUseCase);


export {createNutrionistController}