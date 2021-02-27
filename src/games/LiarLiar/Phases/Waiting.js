import Lobby from "../Lobby";
import LiarLiarContext from "../utils/LiarLiarContext";
import UserCard from "../../../components/UserCard";
import PortalCodeCard from "../../../components/LobbyCards/PortalCodeCard";
import PlayButton from "../PlayButton";

const Waiting = () => {
  return (
    <LiarLiarContext.Consumer>
      {({ liarLiarState: { portalID, users } }) => {
        return (
          <Lobby>
            <PortalCodeCard portalCode={portalID} />
            {users &&
              users.map((user, index) => {
                return <UserCard user={{ ...user }} key={index + 1} />;
              })}
          </Lobby>
        );
      }}
    </LiarLiarContext.Consumer>
  );
};

export default Waiting;
