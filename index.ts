import Handlebars from "handlebars";
import fs from "fs";
import { RenderMap } from "./src/types/RenderMap.types";

const render = async (renderMap: RenderMap) => {
  for (const key in renderMap) {
    const renderMapItem = renderMap[key];
    const outputFolder = `./dist/${renderMapItem.name}`;
    await fs.promises.mkdir(outputFolder, { recursive: true });

    for (const data of renderMapItem.dataList) {
      const rendered = renderMapItem.template(data);
      await fs.promises.writeFile(`${outputFolder}/${data.name}.md`, rendered);
    }
  }
};

const getRenderMap = async (): Promise<RenderMap> => {
  const dataDir = "./src/data";
  const dataTypes = await fs.promises.readdir(dataDir);

  const renderMap: RenderMap = {};

  for (const dataType of dataTypes) {
    if (fs.statSync(`${dataDir}/${dataType}`).isDirectory()) {
      if (!renderMap[dataType]) {
        let templateContent: string;

        try {
          templateContent = await fs.promises.readFile(
            `./src/templates/${dataType}.hbs`,
            { encoding: "utf8", flag: "r" }
          );
        } catch (error) {
          throw new Error(`Template not found: ${dataType}`);
        }

        const template = Handlebars.compile(templateContent);
        renderMap[dataType] = {
          template,
          name: dataType,
          dataList: [],
        };
      }

      const dataFiles = await fs.promises.readdir(`${dataDir}/${dataType}`);

      const dataList = dataFiles.map((dataFile) => ({
        ...require(`${dataDir}/${dataType}/${dataFile}`).default,
        name: dataFile.split(".")[0],
      }));

      renderMap[dataType].dataList = dataList;
    }
  }

  return renderMap;
};

Handlebars.registerHelper("stringify", JSON.stringify);
Handlebars.registerHelper("paramify", (object: any) =>
  new URLSearchParams(object).toString()
);
Handlebars.registerHelper("normalize", (params: any[]) => {
  return params.reduce(
    (params, current) => ({
      ...params,
      [current.name]: current.example,
    }),
    {}
  );
});

(async () => {
  const renderMap = await getRenderMap();
  render(renderMap);
})();
