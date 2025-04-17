import { useCallback } from "react";
import { useDataSource } from "./data-source.hook";

const fetchFromServer = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

const getDataFromLocalStorage = (key) => () => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const UserInfo = ({ userId }) => {
  //   const user = useResource("/current-user" + userId);

  const fetchUser = useCallback(
    () => fetchFromServer("/current-user" + userId),
    [userId]
  );

  const fetchMessage = useCallback(() => fetchFromServer("/message"), []);

  const user = useDataSource(fetchUser);
  const message = useDataSource(fetchMessage);

  const { name, age, country, books } = user || {};
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
