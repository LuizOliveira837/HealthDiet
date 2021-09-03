import { NutritionistRepository } from "../../Repository/NutritionRepository";
import { GetNutritionistController } from "./getNutritionistController";
import { GetNutritionistUseCase } from "./getNutritionistUseCase";

const nutritionistRepository = NutritionistRepository.getInstance();



const getNutritionistUseCase = new GetNutritionistUseCase(nutritionistRepository);

const getNutritionistController = new GetNutritionistController(getNutritionistUseCase);


export {getNutritionistController}