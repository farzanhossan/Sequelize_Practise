"use strict";
// import * as fs from "fs-extra";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.responseFile = (resp) => __awaiter(void 0, void 0, void 0, function* () {
    var filePath = path.join(__dirname, "index.html");
    yield fs.readFile("filePath", function (error, pgResp) {
        if (error) {
            resp.writeHead(404);
            resp.write('Contents you are looking are Not Found');
        }
        else {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(pgResp);
        }
        resp.end();
    });
});
