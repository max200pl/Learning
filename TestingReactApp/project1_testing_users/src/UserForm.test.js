import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

/** JEST FRAMEWORK 
 * 1. JEST has the ability to run just one single test file at a svg-time
 * 2.  
 * 
 * 
*/

/** Mock Functions in JEST FRAMEWORK (not real)
 * 1. Simulated callback function as a prop. (Form example simulated form submission)
 * 2. Have some internal storage
 *      a. Number of times I have been celled
 *      b. Arguments I have received
 * 3. 
*/

/** Input can be selected with
 *  1. screen.getByLabelText(/enter email/)
 *  2. screen.getByRole('textbox', {name: /enter email/i}) <== REACT PREFERS
*/


test('it show two inputs and a button', () => {
    // render the component

    render(<UserForm />)
    // Manipulate the component or find an element in it

    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button')

    // Assertion - make sure the component is doing
    //  What we expect it to do
    expect(inputs).toHaveLength(2)//two inputs visible
    expect(button).toBeInTheDocument(); // exactly visible on the screen
})

test('it calls onUser Add when the form is submitted', () => {
    // //Not the beset IMPLEMENTATION
    // const argList = [];
    // const callback = (...args) => {
    //     argList.push(args);
    // }

    const mock = jest.fn(); // <===  Mock Function

    // Try to render my component
    render(<UserForm onUserAdd={mock} />);

    //Find the two inputs 

    //! brittle approach
    // const [nameInput, emailInput] = screen.getAllByRole('textbox'); <== brittle approach

    const nameInput = screen.getByRole('textbox', {
        name: /name/i  // "i" not worry about lowercase or uppercase
    });
    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });


    // Simulate typing in an name
    user.click(nameInput);
    user.keyboard('jane');

    // Simulate typing in an email
    user.click(emailInput);
    user.keyboard('jane@example.com');

    //Find the button
    const button = screen.getByRole('button');

    //Simulate clicking the button
    user.click(button);

    // Assertion to make sure 'onUserAdd' gets called with email/name
    // expect(argList).toHaveLength(1);
    // expect(argList[0][0]).toEqual({ name: 'jane', email: 'jane@example.com' });

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@example.com' });
})

