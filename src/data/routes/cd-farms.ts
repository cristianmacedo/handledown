import { paramAuthorization } from "../../constants/params";
import {
  errorResponseInvalidAuthorization,
  errorResponseInvalidFieldFormat,
  errorResponseMissingAuthorization,
  errorResponseResourceNotFound,
  successResponseResourceCreated,
  successResponseResourceUpdated,
} from "../../constants/responses";
import { RoutesData, Param } from "../../types/Routes.types";

const paramsFarm: Param[] = [
  {
    name: "name",
    type: "string",
    example: "Fazenda Santa Margarida",
  },
  {
    name: "totalArea",
    type: "number",
    example: "200",
    rule: "Número válido, possívelmente com 2 casas decimais",
  },
  {
    name: "totalAreaUnit",
    type: "string",
    example: "ha",
    rule: "Está contido no ENUM de 'areaUnit' aceitas",
  },
  {
    name: "owner",
    type: "string",
    example: "Pedro Ferreira",
  },
  {
    name: "phone",
    type: "string",
    example: "5511956743224",
    rule: "Numero de telefone celular ou fixo válido. Com código do país e código de área.",
  },
  {
    name: "email",
    type: "string",
    example: "pedro.ferreira@gmail.com",
    rule: "Endereço de email válido",
  },
  {
    name: "saleType",
    type: "string",
    example: "direct",
    rule: "Está contido no ENUM de 'areaUnit' aceitas",
  },
];

const farms: RoutesData = {
  title: "Fazendas",
  routes: [
    {
      title: "Criar Fazenda",
      description: "Criar nova fazenda",
      path: "/farms",
      method: "POST",
      headers: [paramAuthorization],
      bodyParams: [...paramsFarm],
      urlParams: [],
      successResponses: [successResponseResourceCreated],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseInvalidFieldFormat,
      ],
      notes: "",
    },
    {
      title: "Consultar Fazendas",
      description: "Consultar fazendas previamente criadas",
      path: "/farms",
      method: "GET",
      headers: [paramAuthorization],
      bodyParams: [],
      urlParams: [],
      successResponses: [
        {
          code: "200",
          content: `{ farms: Farm[] }`,
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
      ],
      notes: "",
    },
    {
      title: "Consultar Fazenda",
      description: "Consultar fazenda previamente criada",
      path: "/farms/:id",
      method: "GET",
      headers: [paramAuthorization],
      bodyParams: [],
      urlParams: [],
      successResponses: [
        {
          code: "200",
          content: `{ farm: Farm }`,
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceNotFound,
      ],
      notes: "",
    },
    {
      title: "Editar Fazenda",
      description: "Editar fazenda previamente criada",
      path: "/farms/:id",
      method: "PUT",
      headers: [paramAuthorization],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseInvalidFieldFormat,
        errorResponseResourceNotFound,
      ],
      bodyParams: [...paramsFarm],
      notes: "",
      successResponses: [successResponseResourceUpdated],
      urlParams: [],
    },
  ],
};

export default farms;
