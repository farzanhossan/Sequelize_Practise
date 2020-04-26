import request from "request";

export const generateMifeToken = async (): Promise<any> => {
  const options = {
    method: "POST",
    uri: "https://apigate.robi.com.bd/token",
    form: {
      grant_type: "password",
      username: "MIFE_RobiReel_IGW",
      password: "B@TIgH0)R93#",
      // scope: 'PRODUCTION'
    },
    // json: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic bm1SMWZKYnBtR2QxRWtPQVoxUXBneGZEOEJ3YTp6ZlJGY2g1dEpsbzJZOEQ3RUN3RnNXS3NKOFVh",
    },
  };
  return new Promise((resolve, reject) => {
    request(options, function (error, _response, body) {
      resolve(_response);
    });
  });
};
