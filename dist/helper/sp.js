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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
exports.createSP = (name, param, query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sql = `CREATE PROCEDURE ${name} (IN ${param} integer)
        BEGIN
        ${query}
        END`;
        const exe = yield connection_1.default.query(sql);
        console.log(exe);
    }
    catch (error) {
        if (error)
            throw error;
    }
});
exports.getSP = (spFunction) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield connection_1.default.query(`CALL ${spFunction}`);
    }
    catch (error) {
        if (error)
            throw error;
    }
});
