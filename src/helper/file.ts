// import * as fs from "fs-extra";

// export const fileMove = async (
//   folderName: string,
//   fileName: string
// ): Promise<string> => {
//   try {
//     await fs.ensureDirSync(`./uploads/${folderName}`);
//     fs.moveSync(
//       `./uploads/${fileName}`,
//       `./uploads/${folderName}/${fileName}`,
//       {
//         overwrite: true,
//       }
//     );
//     return `/uploads/${folderName}/${fileName}`;
//   } catch (error) {
//     throw new APIError(error);
//   }
// };

const fs = require("fs");
const path = require("path");

// Where fileName is name of the file and response is Node.js Reponse.
export const responseFile = async (resp: any) => {
    var filePath = path.join(__dirname, "index.html");
    await fs.readFile("filePath", function (error: any, pgResp: any) {
        if (error) {
            resp.writeHead(404);
            resp.write('Contents you are looking are Not Found');
        } else {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(pgResp);
        }
        resp.end();
    });
};
