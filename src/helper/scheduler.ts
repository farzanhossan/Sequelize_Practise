var schedule = require("node-schedule");
import request from "request";
import { UserController } from "../controllers/userControlller";

export const TimeSchedule = async () => {
  try {
    const userControlller = new UserController();
    return schedule.scheduleJob(
      "/30* * * * * *",
      async (req: any, res: any, _next: any) => {
        console.log("call first");
        return await userControlller.getUsers(req, res, _next);

        //   const options = {
        //     method: "get",
        //     uri: "http://127.0.0.1:4001/api/v1/users/hasMany"
        //   };
        //   request(options, function (error, _response, body) {
        //     console.log(_response);
        //     console.log(body);
        //   });
      }
    );
  } catch (error) {
    if (error) throw error;
  }
};

export const test = async () => {
  try {
    console.log("Test");
  } catch (error) {
    if (error) throw error;
  }
};
