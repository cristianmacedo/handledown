import { paramAuthorization } from "../../constants/params";
import {
  errorResponseInvalidAuthorization,
  errorResponseMissingAuthorization,
} from "../../constants/responses";
import { Param, RoutesData } from "../../types/Routes.types";

const cultures: RoutesData = {
  title: "Culturas",
  routes: [
    {
      title: "Consultar Culturas",
      description: "Consultar Culturas existentes",
      path: "/cultures",
      method: "GET",
      urlParams: [],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: `{ cultures: Culture[] }`,
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
      ],
      headers: [paramAuthorization],
      notes:
        "As culturas por enquanto serão criadas manualmente e posteriormente através de um portal",
    },
  ],
};

export default cultures;
