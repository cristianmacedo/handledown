import { paramAuthorization } from "../../constants/params";
import {
  errorResponseInvalidAuthorization,
  errorResponseInvalidFieldFormat,
  errorResponseMissingAuthorization,
  errorResponseResourceForbidden,
  errorResponseResourceNotFound,
  successResponseResourceCreated,
  successResponseResourceUpdated,
} from "../../constants/responses";
import { RoutesData, Param } from "../../types/Routes.types";

const paramsField: Param[] = [
  {
    name: "nickname",
    type: "string",
    example: "Lavoura Atrás do Açude",
  },
  {
    name: "city",
    type: "string",
    example: "Lago Verde - GO",
    rule: "Está contido no ENUM de 'city' aceitas",
  },
  {
    name: "farm",
    type: "string",
    example: "507f191e810c19729de860ea",
    rule: "ObjectID válido, que faz refêrencia a um documento de 'farm' existente",
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
    rule: "ObjectID válido, que faz refêrencia a um documento de 'salesChannel' existente",
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
    rule: "ObjectID válido, que faz refêrencia a um documento de 'culture' existente",
  },
  {
    name: "protocol",
    type: "string",
    example: "Soja Forte",
    rule: "ObjectID válido, que faz refêrencia a um documento de 'protocol' existente",
  },
  {
    name: "season",
    type: "string",
    example: "21/22",
    rule: "Está contido no ENUM de 'season' aceitas",
  },
  {
    name: "negotiation",
    type: "string",
    example: "partial-bonus",
    rule: "Está contido no ENUM de 'negotiation' aceitas",
  },
  {
    name: "variety",
    type: "string",
    example: "3707 i2x",
    rule: "Está contido no ENUM de 'variety' aceitas",
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
    rule: "Está contido no ENUM de 'areaUnit' aceitas",
  },
  {
    name: "soilTexture",
    type: "string",
    example: "clayish",
    rule: "Está contido no ENUM de 'soilTexture' aceitas",
  },
  {
    name: "fertilizing",
    type: "string",
    example: "NPK 10-10-10",
  },
  {
    name: "treatments",
    type: "Treatment[]",
    example: `[{...}]`,
  },
  {
    name: "treatments[n].isControl",
    type: "boolean",
    example: "true",
    rule: "Apenas 1 tratamento por campo demonstrativo deve ser marcado como 'isControl=true'",
  },
  {
    name: "treatments[n].isAbsoluteWitness",
    type: "boolean",
    example: "true",
    rule: "Caso 'isAbsoluteWitness=true', não devem haver produtos no array 'productsWithTreatment'",
  },
  {
    name: "treatments[n].productsWithTreatment",
    type: "ProductsWithTreatment[]",
    example: "[{ ... }]",
    rule: "Deve conter pelo menos 2 itens",
  },
  {
    name: "treatments[n].productsWithTreatment[n].stage",
    type: "string",
    example: "TSI",
    rule: "Está contido no ENUM de 'productStage' aceitas",
  },
  {
    name: "treatments[n].productsWithTreatment[n].dose",
    type: "number",
    example: "24",
  },
  {
    name: "treatments[n].productsWithTreatment[n].doseUnit",
    type: "string",
    example: "l/ha",
    rule: "Está contido no ENUM de 'doseUnit' aceitas",
  },
  {
    name: "treatments[n].productsWithTreatment[n].product",
    type: "string",
    example: "6402b83186aa43b848bae24d",
    rule: "ObjectID válido, que faz refêrencia a um documento de 'product' existente",
  },
  {
    name: "harvests",
    type: "Harvest[]",
    example: `[{...}]`,
  },
  {
    name: "harvests[n].date",
    type: "Date.toJSON()",
    example: "2023-03-02T17:17:17.907Z",
    rule: "Data válida",
  },
  {
    name: "harvests[n].climateEvents",
    type: "string",
    example: "Excesso de chuva",
  },
  {
    name: "harvests[n].naturalPhenomena",
    type: "string",
    example: "El niño",
  },
  {
    name: "harvests[n].subHarvests",
    type: "SubHarvests[]",
    example: "[{...}]",
  },
  {
    name: "harvests[n].subHarvests[n].treatment",
    type: "string",
    example: "64037048f6478bb572dbd2be",
    rule: "ObjectID válido, que faz refêrencia a um documento de 'treatment' existente",
  },
  {
    name: "harvests[n].subHarvests[n].weight",
    type: "number",
    example: "25.82",
    rule: "Número válido, possívelmente com 2 casas decimais",
  },
  {
    name: "harvests[n].subHarvests[n].weightUnit",
    type: "string",
    example: "kg",
    rule: "Está contido no ENUM de 'weightUnit' aceitas",
  },
  {
    name: "harvests[n].subHarvests[n].area",
    type: "number",
    example: "12.94",
    rule: "Número válido, possívelmente com 2 casas decimais",
  },
  {
    name: "harvests[n].subHarvests[n].areaUnit",
    type: "string",
    example: "ha",
    rule: "Está contido no ENUM de 'areaUnit' aceitas",
  },
  {
    name: "harvests[n].subHarvests[n].picture",
    type: "Blob",
    example: "Blob('some-data')",
    rule: "Deve ser um blob contendo uma imagem que posteriormente será colocada no AWS S3 pelo serviço backend",
  },
  {
    name: "harvests[n].subHarvests[n].observations",
    type: "string",
    example: "A planta esta bonita",
  },
];

const field: RoutesData = {
  title: "Campos",
  routes: [
    {
      title: "Criar Campo",
      description: "Criar campo atrelado ao usuário logado",
      path: "/fields",
      method: "POST",
      headers: [paramAuthorization],
      bodyParams: [...paramsField],
      urlParams: [],
      successResponses: [successResponseResourceCreated],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseInvalidFieldFormat,
      ],
      notes:
        "O campo deve ser criado e atrelado ao usuário logado no momento, através de uma refência de ID no campo 'createdBy'",
    },
    {
      title: "Consultar Campos",
      description: "Consultar campos previamente criados",
      path: "/fields",
      method: "GET",
      headers: [paramAuthorization],
      bodyParams: [],
      urlParams: [],
      successResponses: [
        {
          code: "200",
          content: `{ fields: Field[] }`,
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
      ],
      notes:
        "Só devem ser retornados os campos criados pelo usuário logado no momento, o que pode ser identificado através do campo 'createdBy'",
    },
    {
      title: "Consultar Campo",
      description: "Consultar campo previamente criado",
      path: "/fields/:id",
      method: "GET",
      headers: [paramAuthorization],
      bodyParams: [],
      urlParams: [],
      successResponses: [
        {
          code: "200",
          content: `{ field: Field }`,
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceNotFound,
        errorResponseResourceForbidden,
      ],
      notes:
        "O campo só deve ser retornado caso o usuário logado seja o criador do campo, o que pode ser identificado através do campo 'createdBy'",
    },
    {
      title: "Editar Campo",
      description: "Editar campo previamente criado",
      path: "/fields/:id",
      method: "PUT",
      headers: [paramAuthorization],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseInvalidFieldFormat,
        errorResponseResourceNotFound,
        errorResponseResourceForbidden,
      ],
      bodyParams: [...paramsField],
      notes: "",
      successResponses: [successResponseResourceUpdated],
      urlParams: [],
    },
  ],
};

export default field;
