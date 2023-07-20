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

const paramsTreatment: Param[] = [
  {
    name: "isControl",
    type: "boolean",
    example: "true",
    rule: "Apenas 1 tratamento por campo demonstrativo deve ser marcado como 'isControl=true'",
  },
  {
    name: "isAbsoluteWitness",
    type: "boolean",
    example: "true",
    rule: "Caso 'isAbsoluteWitness=true', não devem haver produtos no array 'productsWithTreatment'",
  },
  {
    name: "productsWithTreatment",
    type: "ProductsWithTreatment[]",
    example: "[{ ... }]",
    rule: "Deve conter pelo menos 2 itens",
  },
  {
    name: "productsWithTreatment[n].stage",
    type: "string",
    example: "TSI",
    rule: "Está contido no ENUM de 'productStage' aceitas",
  },
  {
    name: "productsWithTreatment[n].dose",
    type: "number",
    example: "24",
  },
  {
    name: "productsWithTreatment[n].doseUnit",
    type: "string",
    example: "l/ha",
    rule: "Está contido no ENUM de 'doseUnit' aceitas",
  },
  {
    name: "productsWithTreatment[n].product",
    type: "string",
    example: "6402b83186aa43b848bae24d",
    rule: "ObjectID válido, que faz refêrencia a um documento de 'product' existente",
  },
];

const treatment: RoutesData = {
  title: "Tratamentos",
  routes: [
    {
      title: "Criação de Tratamento",
      description: "Criar tratamento e atrela-lo ao campo mencionado",
      path: "/treatments",
      method: "POST",
      urlParams: [
        {
          name: "fieldId",
          example: "6402b0f300f0a2438ba92594",
          type: "string",
          rule: "ObjectID válido, que faz refêrencia a um documento de 'field' existente",
        },
      ],
      bodyParams: paramsTreatment,
      successResponses: [successResponseResourceCreated],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseInvalidFieldFormat,
      ],
      headers: [paramAuthorization],
      notes:
        "O tratamento criado deve ser referenciado dentro do array de IDs 'treatment' no 'field' mencionado",
    },
    {
      title: "Editar tratamento",
      description: "Editar tratamento previamente criado",
      method: "PUT",
      headers: [paramAuthorization],
      path: "/treatments/:id",
      urlParams: [],
      bodyParams: paramsTreatment,
      successResponses: [successResponseResourceUpdated],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseInvalidFieldFormat,
        errorResponseResourceNotFound,
        errorResponseResourceForbidden,
      ],
      notes:
        "Não há necessidade de atualizar o array de 'treatments' dentro do 'field',\
        pois a referência para o documento que acabou de ser atualizado ja está lá.",
    },
  ],
};

export default treatment;
