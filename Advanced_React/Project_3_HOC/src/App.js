import { includeUpdatableResouce } from "./components/include-updatable-resource";
import { includeUser } from "./components/include-user";
import { UserInfoForm } from "./components/user-form";
import { UserInfo } from "./components/user-info";

const UserInfoWithUser = includeUpdatableResouce(UserInfo, "2");

function App() {
  return (
    <>
      <UserInfoForm />
    </>
  );
}

export default App;
