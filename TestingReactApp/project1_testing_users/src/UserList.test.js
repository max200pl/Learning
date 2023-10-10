import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

/**
 * screen.logTestingPlaygroundURL()
 *  1. Take all the HTML that is currently rendered
 *  2. Generate a link that includes that HTML =>  https://testing-playground.com/#markup=DwEwlgbgfMAuCGAjANgUxrAFq+IMCcNMoA5eAW1WAHosioBRc+MZGu9w97XDRAexABPAhjwAreADsqtPHAnTUAAQDmzVgDoAxv3Lt5tLrGN4AzhQNioF8mo3Ideq5xi0BwtwhToa4aEA
 *  3. I need selected some all role need added some styles => style='border: 10px solid red; display: block;'
*/

/** TABLE ELEMENTS
 * ELEMENT     ROLE
 *  thead  ==>  rowgroup
 *  tbody  ==>  rowgroup
 *  tr     ==>  row
 *  th     ==>  columnheader
 *  td     ==>  cell
*/

/** FIEND ELEMENT
 * 1) USING ID => dataTestID // NOT A GOOD IDEA
 *   1. added in markup prop =>  <tbody data-testid="users">{renderedUsers}</tbody>
 *   2. export within from '@testing-library/react';
 *   3. within(screen.getByTestId('users')).getAllByRole("row")
 *
 * 2)
*/

test('render one roe per user', () => {
    // Render the component
    const users = [
        { name: 'jane', email: 'jane@gmail.com' },
        { name: 'sam', email: 'sam@gmail.com' }
    ]
    const { container } = render(<UserList users={users} />);

    //Find all the rows is the table
    //! First approach
    // const rows = screen.getAllByRole('row');
    //! Second approach
    // const rows = within(screen.getByTestId('users')).getAllByRole("row");
    //! Third approach
    // const table = container.querySelector('table');
    // eslint-disable-next-line
    const rows = container.querySelectorAll('tbody tr');


    // Assertions: correct number of rows in the table
    expect(rows).toHaveLength(2);
})

test('render the email and name of each user', () => {

})
