import { Data } from "./Data.types";

export interface Param {
  name: string;
  type: string;
  example: string;
  rule?: string;
}

export interface Response {
  code: string;
  content: string | null;
  json?: boolean;
  reason?: string;
}

export interface Route {
  title: string;
  description: string;
  path: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  headers: Param[];
  urlParams: Param[];
  bodyParams: Param[];
  successResponses: Response[];
  errorResponses: Response[];
  notes: string;
}

export interface RoutesData extends Data {
  routes: Route[];
}
