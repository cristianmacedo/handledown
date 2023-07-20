import {
  paramAuthorization,
  paramLimit,
  paramOffset,
  paramSearch,
} from "../../constants/params";
import {
  errorResponseInvalidAuthorization,
  errorResponseMissingAuthorization,
  errorResponseResourceForbidden,
  errorResponseResourceNotFound,
} from "../../constants/responses";
import { RoutesData } from "../../types/Routes.types";

const salesChannelsData: RoutesData = {
  title: "Canais de Venda",
  routes: [
    {
      title: "Canais de Venda",
      description: "Recuperar lista de Canais de Venda",
      path: "/api/sales-channels",
      method: "GET",
      headers: [paramAuthorization],
      urlParams: [
        paramLimit,
        paramOffset,
        {
          ...paramSearch,
          example: "Coamo",
          rule: "Filtrar apenas canais de venda que contenham parte da pesquisa no Nome/CPF/CNPJ",
        },
      ],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: "{ salesChannels: [...] }",
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceForbidden,
      ],
      notes: "",
    },
    {
      title: "Nota Fiscal",
      description: "Recuperar nota fiscal específica",
      path: "/api/sales-channels/:id",
      method: "GET",
      headers: [paramAuthorization],
      urlParams: [],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: "{ salesChannels: {...} }",
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceForbidden,
        errorResponseResourceNotFound,
      ],
      notes: "",
    },
  ],
};

export default salesChannelsData;
