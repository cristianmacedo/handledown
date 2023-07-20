import { paramAuthorization } from "../../constants/params";
import {
  errorResponseInvalidAuthorization,
  errorResponseMissingAuthorization,
} from "../../constants/responses";
import { Param, RoutesData } from "../../types/Routes.types";

const salesChannels: RoutesData = {
  title: "Canais de Venda",
  routes: [
    {
      title: "Consultar Canais de Venda",
      description: "Consultar Canais de Venda existentes",
      path: "/sales-channels",
      method: "GET",
      urlParams: [],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: `{ salesChannels: SalesChannel[] }`,
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
      ],
      headers: [paramAuthorization],
      notes:
        "Os canais de venda são criados apartir da sincronia de lambdas com views do Drêmio",
    },
  ],
};

export default salesChannels;
