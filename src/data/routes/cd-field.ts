import {
  errorResponseInvalidFieldFormat,
  errorResponseMissingAuthorization,
  paramAuthorization,
} from "../../constants/routes";
import { RoutesData, Response } from "../../types/Routes.types";

const resourceCreatedResponse: Response = {
  code: "201",
  content: '{ id: "6400d3ccacf732fb0dcea7e0" }',
};

const cdField: RoutesData = {
  title: "Campo",
  routes: [
    {
      title: "Criar Campo",
      description: "Criar campo atrelado ao usuário logado",
      path: "/fields",
      method: "POST",
      headers: [
        {
          ...paramAuthorization,
        },
      ],
      bodyParams: [
        {
          name: "nickname",
          type: "string",
          example: "Lavoura Atrás do Açude",
        },
        {
          name: "city",
          type: "string",
          example: "Lago Verde - GO",
          rule: "Está contido dentro do ENUM de 'city' aceitas.",
        },
        {
          name: "farm",
          type: "string",
          example: "507f191e810c19729de860ea",
          rule: "ObjectID válido, que faz refêrencia a um documento de 'farm' existente.",
        },
        {
          name: "responsible",
          type: "string",
          example: "José Carlos",
        },
        {
          name: "salesChannel",
          type: "string",
          example: "6400a1374ee956b05f00efe7",
          rule: "ObjectID válido, que faz refêrencia a um documento de 'salesChannel' existente.",
        },
        {
          name: "salesChannelSeller",
          type: "string",
          example: "Joaquim Santos",
        },
        {
          name: "culture",
          type: "string",
          example: "soy",
          rule: "Está contido dentro do ENUM de 'culture' aceitas.",
        },
        {
          name: "protocol",
          type: "string",
          example: "Soja Forte",
          rule: "Está contido dentro do ENUM de 'protocols' aceitas.",
        },
        {
          name: "season",
          type: "string",
          example: "21/22",
          rule: "Está contido dentro do ENUM de 'season' aceitas.",
        },
        {
          name: "negotiation",
          type: "string",
          example: "partial-bonus",
          rule: "Está contido dentro do ENUM de 'negotiation' aceitas.",
        },
        {
          name: "variety",
          type: "string",
          example: "3707 i2x",
          rule: "Está contido dentro do ENUM de 'variety' aceitas.",
        },
        {
          name: "plantingDate",
          type: "Date.toJSON()",
          example: "2023-03-02T17:17:17.907Z",
          rule: "Data válida",
        },
        {
          name: "applicationArea",
          type: "number",
          example: "9.52",
          rule: "Número válido, possívelmente com 2 casas decimais",
        },
        {
          name: "applicationAreaUnit",
          type: "string",
          example: "ha",
          rule: "Está contido dentro do ENUM de 'areaUnit' aceitas.",
        },
        {
          name: "soilTexture",
          type: "string",
          example: "clayish",
          rule: "Está contido dentro do ENUM de 'soilTexture' aceitas.",
        },
        {
          name: "fertilizing",
          type: "string",
          example: "Nitrogênio",
        },
      ],
      urlParams: [],
      successResponses: [
        {
          ...resourceCreatedResponse,
          reason: "Novo 'field' criado com sucesso",
        },
      ],
      errorResponses: [
        {
          ...errorResponseInvalidFieldFormat,
        },
        {
          ...errorResponseMissingAuthorization,
        },
      ],
      notes:
        "O campo deve ser criado e atrelado ao usuário logado no momento, através de uma refência de ID no campo 'createdBy'",
    },
  ],
};

export default cdField;
