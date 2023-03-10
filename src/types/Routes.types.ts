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
  reason?: string;
}

export interface Route {
  title: string;
  description: string;
  path: string;
  method: "GET" | "POST" | "DELETE";
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
