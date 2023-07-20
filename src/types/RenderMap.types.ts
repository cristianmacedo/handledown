import Handlebars from "handlebars";

export type RenderMapItem = {
  name: string;
  template: Handlebars.TemplateDelegate<any>;
  dataList: any[];
};

export type RenderMap = {
  [key: string]: RenderMapItem;
};
