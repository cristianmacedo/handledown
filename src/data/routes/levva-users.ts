import { paramEmail, paramName, paramPassword } from "../../constants/params";
import {
  errorResponseEmailAlreadyRegistered,
  errorResponseInvalidFieldFormat,
  successResponseDefault,
  successResponseResourceCreated,
} from "../../constants/responses";
import { RoutesData } from "../../types/Routes.types";

const users: RoutesData = {
  title: "Usuários",
  routes: [
    {
      title: "Criar usuário",
      description: "Criar novo usuário e suas permissões",
      path: "/users",
      method: "POST",
      headers: [],
      urlParams: [],
      bodyParams: [paramName, paramEmail, paramPassword],
      errorResponses: [
        errorResponseEmailAlreadyRegistered,
        errorResponseInvalidFieldFormat,
      ],
      successResponses: [successResponseDefault],
      notes: "",
    },
  ],
};

export default users;
