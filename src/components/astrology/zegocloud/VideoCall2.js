// import * as React from 'react';
// // import './style.css';
// import { getUserID } from "../astrologerdetail";
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

// function randomID(len) {
//   let result = '';
//   if (result) return result;
//   var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
//     maxPos = chars.length,
//     i;
//   len = len || 5;
//   for (i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

// export function getUrlParams(
//   url: string = window.location.href
// ): URLSearchParams {
//   let urlStr = url.split('?')[1];
//   return new URLSearchParams(urlStr);
// }

// export default function App() {
//   const roomID = getUrlParams().get('roomID') || randomID(5);
//   let myMeeting = async (element: HTMLDivElement) => {

//  // generate Kit Token
//  const appID = 117315587;
//  const response =  getUserID();
//  const serverSecret = "7d73c3ebbc300b3863c13e2711a69195";
// //  console.log(window.location.pathname)
//  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5), response);

//  // Create instance object from Kit Token.
//  const zp = ZegoUIKitPrebuilt.create(kitToken);
//  // start the call
//  zp.joinRoom({
//         container: element,
//         sharedLinks: [
//           {
//             name: 'Personal link',
//             url:
//              window.location.protocol + '//' + 
//              window.location.host +  '/#/VideoCall' + window.location.pathname +
//               '?roomID=' +
//               roomID,
//           },
          
//         ],
//         scenario: {
//          mode: ZegoUIKitPrebuilt.VideoConference,
//         },
//    });
//   };

//   return (
//     <div
//       className="myCallContainer"
//       ref={myMeeting}
//       style={{ width: '100vw', height: '100vh' }}
//     ></div>
//   );
// }