import {
  paramAuthorization,
  paramLimit,
  paramOffset,
  paramProduct,
  paramSalesChannel,
  paramSearch,
  paramStatus,
} from "../../constants/params";
import {
  errorResponseInvalidAuthorization,
  errorResponseMissingAuthorization,
  errorResponseResourceForbidden,
  errorResponseResourceNotFound,
} from "../../constants/responses";
import { RoutesData } from "../../types/Routes.types";

const receiptsData: RoutesData = {
  title: "Notas fiscais",
  routes: [
    {
      title: "Notas Fiscais",
      description: "Recuperar lista de notas fiscais",
      path: "/api/receipts",
      method: "GET",
      headers: [paramAuthorization],
      urlParams: [
        paramLimit,
        paramOffset,
        {
          ...paramSearch,
          example: "OPT-00001234",
          rule: "Filtrar apenas itens que contenham parte da pesquisa no nome do Pedido-Mãe ou no numero da NF",
        },
        paramProduct,
        paramSalesChannel,
        paramStatus,
      ],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: "{ receipts: [...] }",
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
      path: "/api/receipts/:id",
      method: "GET",
      headers: [paramAuthorization],
      urlParams: [],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: "{ receipt: {...} }",
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

export default receiptsData;
