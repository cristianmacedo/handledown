import { paramAuthorization } from "../../constants/params";
import {
  errorResponseInvalidAuthorization,
  errorResponseInvalidFieldFormat,
  errorResponseMissingAuthorization,
  errorResponseResourceForbidden,
  errorResponseResourceNotFound,
  successResponseResourceCreated,
  successResponseResourceUpdated,
} from "../../constants/responses";
import { RoutesData } from "../../types/Routes.types";

const todos: RoutesData = {
  title: "TO-DOs",
  routes: [
    {
      title: "Listar TO-DOs",
      description: "Listar TO-DOs do usuário autenticado",
      path: "/todos",
      method: "GET",
      urlParams: [],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: `[
            { "user": "64b881460e9e3c90f0eb43ae", "id": "64b881567ba3c77254f3c3f0", "title": "fazer mercado", "completed": true },
            { "user": "64b881460e9e3c90f0eb43ae", "id": "64b88177027d0572760397ec", "title": "lavar o carro", "completed": false }
          ]`,
          json: true,
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
      ],
      headers: [paramAuthorization],
      notes: "",
    },
    {
      title: "Listar TO-DO",
      description: "Listar TO-DO específico",
      path: "/todos/:id",
      method: "GET",
      urlParams: [],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: `{ "user": "64b881460e9e3c90f0eb43ae", "id": "64b881567ba3c77254f3c3f0", "title": "fazer mercado", "completed": true }`,
          json: true,
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceNotFound,
        errorResponseResourceForbidden,
      ],
      headers: [paramAuthorization],
      notes: "",
    },
    {
      title: "Criar TO-DO",
      description: "Criar novo TO-DO atrelado ao usuário autenticado",
      path: "/todos",
      method: "POST",
      urlParams: [],
      bodyParams: [
        {
          name: "title",
          example: "comprar frutas",
          type: "string",
        },
      ],
      successResponses: [successResponseResourceCreated],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseInvalidFieldFormat,
        errorResponseResourceForbidden,
      ],
      headers: [paramAuthorization],
      notes: "",
    },
    {
      title: "Deletar TO-DO",
      description: "Deletar TO-DO",
      path: "/todos",
      method: "DELETE",
      urlParams: [],
      bodyParams: [],
      successResponses: [successResponseResourceUpdated],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceNotFound,
        errorResponseResourceForbidden,
      ],
      headers: [paramAuthorization],
      notes: "",
    },
    {
      title: "Atualizar TO-DO",
      description: "Atualizar TO-DO",
      path: "/todos/:id",
      method: "PUT",
      urlParams: [],
      bodyParams: [],
      successResponses: [successResponseResourceUpdated],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceNotFound,
        errorResponseResourceForbidden,
      ],
      headers: [paramAuthorization],
      notes: "",
    },
  ],
};

export default todos;
