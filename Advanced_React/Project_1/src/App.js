import axios from "axios";
import { UserInfo } from "./components/user-info";
import { DataSourceWithRender } from "./components/data-source-with-render";
import { UserLouder } from "./components/user-louder";
import { ResourceLouder } from "./components/resource-loader";
import { DataSource } from "./components/data-source";
import { BookInfo } from "./components/book-info";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const Message = ({ message }) => {
  return <h1>{message}</h1>;
};

function App() {
  return (
    <>
      <h1>Start Here!</h1>

      <UserLouder userId={"1"}>
        <UserInfo />
      </UserLouder>

      <ResourceLouder resourceName={"user"} resourceUrl={"/users/2"}>
        <UserInfo />
      </ResourceLouder>

      <ResourceLouder resourceName={"books"} resourceUrl={"/books/2"}>
        <BookInfo />
      </ResourceLouder>

      <DataSource
        getData={() => getDataFromServer("/users/2")}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSource>
      <DataSourceWithRender
        getData={() => getDataFromServer("/users/1")}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceWithRender>

      <DataSource
        getData={() => getDataFromLocalStorage("books")}
        resourceName={"Message"}
      >
        <Message />
      </DataSource>
    </>
  );
}

export default App;
