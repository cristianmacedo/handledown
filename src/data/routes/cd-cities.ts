import { paramAuthorization } from "../../constants/params";
import {
  errorResponseInvalidAuthorization,
  errorResponseMissingAuthorization,
} from "../../constants/responses";
import { Param, RoutesData } from "../../types/Routes.types";

const cities: RoutesData = {
  title: "Cidades",
  routes: [
    {
      title: "Consultar Cidades",
      description: "Consultar Cidades existentes",
      path: "/cities",
      method: "GET",
      urlParams: [],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: `{ cities: City[] }`,
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
      ],
      headers: [paramAuthorization],
      notes:
        "As cidades por enquanto serão criadas manualmente e posteriormente através de um portal",
    },
  ],
};

export default cities;
