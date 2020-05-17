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
var schedule = require("node-schedule");
const userControlller_1 = require("../controllers/userControlller");
exports.TimeSchedule = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userControlller = new userControlller_1.UserController();
        return schedule.scheduleJob("/30* * * * * *", (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("call first");
            return yield userControlller.getUsers(req, res, _next);
            //   const options = {
            //     method: "get",
            //     uri: "http://127.0.0.1:4001/api/v1/users/hasMany"
            //   };
            //   request(options, function (error, _response, body) {
            //     console.log(_response);
            //     console.log(body);
            //   });
        }));
    }
    catch (error) {
        if (error)
            throw error;
    }
});
exports.test = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Test");
    }
    catch (error) {
        if (error)
            throw error;
    }
});
