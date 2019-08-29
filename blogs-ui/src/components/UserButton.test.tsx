import React from 'react';
import {render, cleanup, waitForElement} from '@testing-library/react'
import { UserButton, UserButtonProps } from './UserButton';

afterEach(cleanup);

describe(`UserButton tests`, () => {
    it(`Should correctly mark the selected user`, async (done) => {
        const testUser = {id: 1, email: "test@email.com", name: "testName", username: "testuser", posts: []}
        const props: UserButtonProps = {
            user: testUser,
            selectedUser: {...testUser, id: 2},
            selectUser: () => {}
        };

        const {container, getByText} = render(<UserButton user={props.user} selectedUser={props.user} selectUser={props.selectUser}/>);
        let element = await waitForElement(() => getByText(props.user.username));
        expect(element).toMatchSnapshot();

        const button = container.querySelector('.btn-warning');
        expect(button).toMatchSnapshot();
        done();
    })
})