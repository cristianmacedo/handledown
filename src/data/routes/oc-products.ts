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

const productsData: RoutesData = {
  title: "Produtos",
  routes: [
    {
      title: "Produtos",
      description: "Recuperar lista de Produtos",
      path: "/api/products",
      method: "GET",
      headers: [paramAuthorization],
      urlParams: [
        paramLimit,
        paramOffset,
        {
          ...paramSearch,
          example: "Stimulate",
        },
      ],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: "{ products: [...] }",
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
      title: "Produto",
      description: "Recuperar produto específico",
      path: "/api/products/:id",
      method: "GET",
      headers: [paramAuthorization],
      urlParams: [],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: "{ product: {...} }",
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

export default productsData;
