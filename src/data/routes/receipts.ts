import {
  errorResponseInvalidAuthorization,
  errorResponseMissingAuthorization,
  paramAuthorization,
} from "../../constants/routes";
import { RoutesData } from "../../types/Routes.types";

const paramItemsRelation = {
  name: "itemsRelation",
  type: "string",
  example: "true",
  rule: "Returns each receipt with receipt items populated",
};

const paramTrackingRelation = {
  name: "trackingRelation",
  type: "string",
  example: "true",
  rule: "Returns the tracking properties if the transporter info exists on our database",
};

const receiptsNotes =
  "Items or tracking info should NOT be populated by default.";

const receiptsData: RoutesData = {
  title: "Notas fiscais",
  routes: [
    {
      title: "Notas Fiscais",
      description: "Recuperar lista de notas fiscais",
      path: "/api/receipts",
      method: "GET",
      headers: [paramAuthorization],
      urlParams: [paramItemsRelation, paramTrackingRelation],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: "{ receipts: [...] }",
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
      ],
      notes: receiptsNotes,
    },
    {
      title: "Nota Fiscal",
      description: "Recuperar nota fiscal específica",
      path: "/api/receipts/:id",
      method: "GET",
      headers: [paramAuthorization],
      urlParams: [paramItemsRelation, paramTrackingRelation],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: "{ receipt: {...} }",
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
      ],
      notes: receiptsNotes,
    },
  ],
};

export default receiptsData;
