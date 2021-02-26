import Lobby from "../Lobby";
import LiarLiarContext from "../utils/LiarLiarContext";
import UserCard from "../../../components/UserCard";
import PortalCodeCard from "../../../components/LobbyCards/PortalCodeCard";

const Waiting = () => {

  return (
    <LiarLiarContext.Consumer>
      {
        ({ portalID, users }) => {
          return (
            <Lobby>
              <PortalCodeCard
                portalCode={portalID}
              />
              {
                users.map((user) => {
                  return <UserCard />;
                })
              }
            </Lobby>
          );
        }
      }
    </LiarLiarContext.Consumer>
  );
};

export default Waiting;
