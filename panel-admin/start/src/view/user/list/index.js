import { Row } from "reactstrap";
import UsersReport from "./Reports";
import Filter from "./Filter";
// import { Filter } from "react-feather";

const UserList = () => {
  return (
    <Row>
      <UsersReport />
      <Filter/>
    </Row>
  );
};

export default UserList