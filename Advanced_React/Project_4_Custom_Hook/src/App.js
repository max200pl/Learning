import { BookInfo } from "./components/book-info";
import { UserInfo } from "./components/user-info";

function App() {
  return (
    <>
      <UserInfo userId={"1"} />
      <UserInfo userId={"2"} />
      <BookInfo bookId={"1"} />
      <BookInfo bookId={"2"} />
    </>
  );
}

export default App;
