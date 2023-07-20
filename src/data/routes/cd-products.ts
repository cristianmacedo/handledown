import { paramAuthorization } from "../../constants/params";
import {
  errorResponseInvalidAuthorization,
  errorResponseMissingAuthorization,
} from "../../constants/responses";
import { RoutesData } from "../../types/Routes.types";

const products: RoutesData = {
  title: "Produtos",
  routes: [
    {
      title: "Consultar Produtos",
      description: "Consultar Produtos existentes",
      path: "/products",
      method: "GET",
      urlParams: [],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: `{ products: Product[] }`,
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
      ],
      headers: [paramAuthorization],
      notes:
        "Produtos são criados manualmente através das solicitações dos usuários, e inputs do formulário, por isso não precisamos de uma rota de cadastro.",
    },
  ],
};

export default products;
