import { paramEmail, paramPassword } from "../../constants/params";
import {
  errorResponseEmailOrPasswordWrong,
  successResponseResourceCreated,
} from "../../constants/responses";
import { RoutesData } from "../../types/Routes.types";

const login: RoutesData = {
  title: "Autenticação",
  routes: [
    {
      title: "Login",
      description: "Autenticar usuário e retornar token de acesso",
      path: "/auth/login",
      method: "POST",
      urlParams: [],
      bodyParams: [paramEmail, paramPassword],
      successResponses: [
        {
          code: "200",
          json: true,
          content: `{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" }`,
        },
      ],
      errorResponses: [errorResponseEmailOrPasswordWrong],
      headers: [],
      notes:
        "Usar o mesmo erro para email ou senha erradas para evitar que o login funcione como um scraper para encontrar emails cadastrados, por usuários maliciosos",
    },
  ],
};

export default login;
