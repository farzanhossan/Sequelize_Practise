// var fcm = require("fcm-notification");
// var FCM = new fcm("shaikat-63872-firebase-adminsdk-2nswo-2059fc5326.json");

// export const FcmNotification = async () => {
//   try {
//     const Tokens = ["sdsas"];
//     const message = {
//       data: {
//         score: "850",
//         time: "2:45",
//       },
//       notification: {
//         title: "Navish",
//         body: "Test message by navish",
//       },
//     };

//     return new Promise((resolve, reject) => {
//       FCM.sendToMultipleToken(message, Tokens, function (
//         err: any,
//         response: any
//       ) {
//         if (err) {
//           console.log("Error: ", err);
//         } else {
//             resolve(response);
//         }
//       });
//     });
//   } catch (error) {
//     if (error) throw error;
//   }
// };
/////////////////////////////////////////////////////////////////
var admin = require("firebase-admin");

var serviceAccount = require("../../shaikat-63872-firebase-adminsdk-2nswo-2059fc5326.json");

export const FcmNotification = async () => {
  try {
    await admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://shaikat-63872.firebaseio.com"
    });
    var registrationToken = "asdasd";

    var payload = {
      notification: {
        title: "Account Deposit",
        body: "A deposit to your savings account has just cleared.",
      },
      data: {
        account: "Savings",
        balance: "$3020.25",
      },
    };

    var options = {
      priority: "high",
      timeToLive: 60 * 60 * 24,
    };

    return new Promise(async(resolve, reject) => {
      await admin
        .messaging()
        .sendToDevice(registrationToken, payload, options)
        .then(function (response: any) {
          console.log("Successfully sent message:", response);
          resolve(response);
        })
        .catch(function (error: any) {
          console.log("Error sending message:", error);
          reject(error);
        });
    });
  } catch (error) {
    if (error) throw error;
  }
};
/////////////////////////////////////////////

// export const FcmNotification = async () => {
//   try {
//     var FCM = require("fcm-node");
//     var serverKey = "AAAAeqRJ3OE:APA91bEN9vQqdkYiiCJQcVjDWX-eswssPHwTmN_m7vfgV06JOIoqUOCFVYZZj8qJHOPXHQ6ZO8vNJ1srI0Y8pWl2QqfJgNJYl8eP0DYh_5xkCoBCTXGFYu-NNa8Arc1SFeSrTxMuGC7k"; //put your server key here
//     var fcm = new FCM(serverKey);

//     var message = {
//       //this may vary according to the message type (single recipient, multicast, topic, et cetera)
//       to: "firebase-adminsdk-2nswo@shaikat-63872.iam.gserviceaccount.com",
//       collapse_key: "your_collapse_key",

//       notification: {
//         title: "Title of your push notification",
//         body: "Body of your push notification",
//       },

//       data: {
//         //you can send only notification or only data(or include both)
//         my_key: "my value",
//         my_another_key: "my another value",
//       },
//     };

//     fcm.send(message, function (err: any, response: any) {
//       if (err) {
//         console.log("Something has gone wrong!", err);
//       } else {
//         console.log("Successfully sent with response: ", response);
//       }
//     });
//   } catch (error) {
//     if (error) throw error;
//   }
// };
