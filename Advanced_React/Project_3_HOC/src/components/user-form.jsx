import { includeUpdatableResouce } from "./include-updatable-resource";
import { includeUpdatableUser } from "./include-updatable-user";

export const UserInfoForm = includeUpdatableResouce(
  ({ user, onChangeUser, onPostUser, onResetUser }) => {
    const { name, age } = user || {};

    return user ? (
      <>
        <label htmlFor="name">
          Name:
          <input
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
            id="name"
            type="text"
          />
        </label>

        <label htmlFor="age">
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
            id="age"
          />
        </label>

        <button type="button" onClick={onResetUser}>
          Reset
        </button>
        <button type="button" onClick={onPostUser}>
          Save
        </button>
      </>
    ) : (
      <h3>Loading...</h3>
    );
  },
  "/user/2",
  "user"
);
