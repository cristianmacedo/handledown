export type RenderMapItem = {
  name: string;
  template: HandlebarsTemplateDelegate<any>;
  dataList: any[];
};

export type RenderMap = {
  [key: string]: RenderMapItem;
};
