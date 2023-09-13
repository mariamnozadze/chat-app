// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from "react-chat-engine-advanced";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  // const chatProps = useMultiChatLogic(
  //   "0aa03052-722a-4a91-875c-6c7466942137",
  //   props.user.username,
  //   props.user.secret
  // );

  return (
    <div style={{ height: "100vh" }}>
      {/* <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} /> */}
      <PrettyChatWindow
        projectId="0aa03052-722a-4a91-875c-6c7466942137"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
