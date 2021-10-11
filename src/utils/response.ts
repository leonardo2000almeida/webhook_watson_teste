import {notFound as Response} from "../types/responseTypes"

export const notFound = (): Response => {
  return { response: "Nenhum tipo encontrado", status: 404 };
};
