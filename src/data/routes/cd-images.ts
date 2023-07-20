import { paramAuthorization } from "../../constants/params";
import {
  errorResponseInvalidAuthorization,
  errorResponseInvalidFieldFormat,
  errorResponseMissingAuthorization,
  errorResponseResourceNotFound,
} from "../../constants/responses";
import { RoutesData } from "../../types/Routes.types";

const images: RoutesData = {
  title: "Imagens",
  routes: [
    {
      headers: [
        {
          name: "Content-Type",
          type: "string",
          example: "multipart/form-data",
        },
        paramAuthorization,
      ],
      bodyParams: [
        {
          name: "image",
          type: "FormData",
          example: "FormData()",
        },
      ],
      method: "POST",
      description: "Send image and return URI, Size, name",
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseInvalidFieldFormat,
      ],
      notes: "",
      path: "/images",
      successResponses: [
        {
          code: "201",
          content: `{ fileName: '5bbbe24a-46ab-4ba8-a281-551814259e3a.jpg' }`,
        },
      ],
      title: "Criar Imagem",
      urlParams: [],
    },
    {
      headers: [paramAuthorization],
      bodyParams: [],
      method: "GET",
      description: "Retrieve temporary signed URL for S3 image",
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceNotFound,
      ],
      notes:
        "Our S3 Buckets are all private, so the only entity with direct access to them is the backend server, which we use in this route to generate a temporary (5-10 minutes) URL that allows the client to get the image for a brief time.",
      path: "/images/:fileName",
      successResponses: [
        {
          code: "201",
          content: `{ signedUrl: 'https://s3.console.aws.amazon.com/s3/object/open-fields-dev-static-files?region=us-east-2&prefix=5bbbe24a-46ab-4ba8-a281-551814259e3a.jpg' }`,
        },
      ],
      title: "Consultar Imagem",
      urlParams: [],
    },
    {
      headers: [paramAuthorization],
      bodyParams: [],
      method: "DELETE",
      description: "Delete specific image from S3 bucket",
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
      ],
      notes: "",
      path: "/images/:fileName",
      successResponses: [
        {
          code: "200",
          content: "",
        },
      ],
      title: "Deletar Imagem",
      urlParams: [],
    },
  ],
};

export default images;
