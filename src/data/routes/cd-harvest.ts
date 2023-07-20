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
import { Param, RoutesData } from "../../types/Routes.types";

const paramsHarvest: Param[] = [
  {
    name: "date",
    type: "Date.toJSON()",
    example: "2023-03-02T17:17:17.907Z",
    rule: "Data válida",
  },
  {
    name: "climateEvents",
    type: "string",
    example: "Excesso de chuva",
  },
  {
    name: "naturalPhenomena",
    type: "string",
    example: "El niño",
  },
  {
    name: "subHarvests",
    type: "SubHarvests[]",
    example: "[{...}]",
  },
  {
    name: "subHarvests[n].treatment",
    type: "string",
    example: "64037048f6478bb572dbd2be",
    rule: "ObjectID válido, que faz refêrencia a um documento de 'treatment' existente",
  },
  {
    name: "subHarvests[n].weight",
    type: "number",
    example: "25.82",
    rule: "Número válido, possívelmente com 2 casas decimais",
  },
  {
    name: "subHarvests[n].weightUnit",
    type: "string",
    example: "kg",
    rule: "Está contido no ENUM de 'weightUnit' aceitas",
  },
  {
    name: "subHarvests[n].area",
    type: "number",
    example: "12.94",
    rule: "Número válido, possívelmente com 2 casas decimais",
  },
  {
    name: "subHarvests[n].areaUnit",
    type: "string",
    example: "ha",
    rule: "Está contido no ENUM de 'areaUnit' aceitas",
  },
  {
    name: "subHarvests[n].picture",
    type: "Blob",
    example: "Blob('some-data')",
    rule: "Deve ser um blob contendo uma imagem que posteriormente será colocada no AWS S3 pelo serviço backend",
  },
  {
    name: "subHarvests[n].observations",
    type: "string",
    example: "A planta esta bonita",
  },
];

const harvest: RoutesData = {
  title: "Colheitas",
  routes: [
    {
      title: "Criar Colheita",
      description: "Criar colheita e atrela-lo ao campo mencionado",
      path: "/harvests",
      method: "POST",
      urlParams: [
        {
          name: "fieldId",
          example: "6402b0f300f0a2438ba92594",
          type: "string",
          rule: "ObjectID válido, que faz refêrencia a um documento de 'field' existente",
        },
      ],
      bodyParams: paramsHarvest,
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseInvalidFieldFormat,
      ],
      headers: [paramAuthorization],
      successResponses: [successResponseResourceCreated],
      notes:
        "O tratamento criado deve ser referenciado dentro do array de IDs 'harvests' no 'field' mencionado",
    },
    {
      title: "Editar Colheita",
      description: "Editar Colheita previamente criada",
      path: "/harvests/:id",
      method: "PUT",
      headers: [paramAuthorization],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseInvalidFieldFormat,
        errorResponseResourceNotFound,
        errorResponseResourceForbidden,
      ],
      bodyParams: [...paramsHarvest],
      successResponses: [successResponseResourceUpdated],
      urlParams: [],
      notes:
        "Não há necessidade de atualizar o array de 'harvests' dentro do 'field',\
        pois a referência para o documento que acabou de ser atualizado ja está lá.",
    },
    {
      title: "Listar Colheita",
      description: "Listar Colheita previamente criada",
      path: "/harvests/:id",
      method: "GET",
      headers: [paramAuthorization],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceNotFound,
        errorResponseResourceForbidden,
      ],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: "{ harvest: Harvest }",
        },
      ],
      urlParams: [],
      notes: "",
    },
  ],
};

export default harvest;
