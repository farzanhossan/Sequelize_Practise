"use strict";
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
var multer = require('multer');
exports.fileUpload = (option, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let upload = multer({}).single(option);
        let fileInfo = yield new Promise(function (resolve, reject) {
            upload(req, res, (err) => {
                if (err)
                    reject(err);
                resolve(req.file);
            });
        });
        return fileInfo;
    }
    catch (error) {
        if (error)
            throw error;
    }
});
