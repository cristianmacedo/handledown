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
  title: "Pedidos Mãe",
  routes: [
    {
      title: "Pedidos Mãe",
      description: "Recuperar lista de Pedidos Mãe",
      path: "/api/mother-orders",
      method: "GET",
      headers: [paramAuthorization],
      urlParams: [
        paramLimit,
        paramOffset,
        {
          ...paramSearch,
          example: "OPT-00001234",
          rule: "Filtrar apenas Pedidos Mãe que contenham parte da pesquisa no nome",
        },
        paramProduct,
        paramSalesChannel,
        paramStatus,
      ],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: "{ motherOrders: [...] }",
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
      title: "Pedido Mãe",
      description: "Recuperar nota fiscal específica",
      path: "/api/mother-orders/:id",
      method: "GET",
      headers: [paramAuthorization],
      urlParams: [],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: "{ motherOrder: {...} }",
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
