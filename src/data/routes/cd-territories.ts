import { paramAuthorization } from "../../constants/params";
import {
  errorResponseInvalidAuthorization,
  errorResponseMissingAuthorization,
} from "../../constants/responses";
import { RoutesData } from "../../types/Routes.types";

const territories: RoutesData = {
  title: "Territórios",
  routes: [
    {
      title: "Consultar Territórios",
      description: "Consultar Territórios existentes",
      path: "/territories",
      method: "GET",
      urlParams: [],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: `{ territories: Territory[] }`,
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
      ],
      headers: [paramAuthorization],
      notes:
        "Territórios são criados através de uma integração e sincronização periódica com views pré-definidas Drêmio.",
    },
  ],
};

export default territories;
