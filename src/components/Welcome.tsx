/** @format */

import { Avatar, Button, Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { auth } from '../firebase/config';
import './style.css';

type UserContextType = {
    user: {
        uid: string;
        photoURL: string;
        displayName: string;
        email: string;
    };
};

export default function Welcome() {
    const {
        user: { uid, photoURL, displayName, email },
    } = useContext(AuthContext) as UserContextType;
    return (
        <div>
            <div className="outer-infor">
                <div className="flex justify-center p-20 ">
                    <div className="card-login-form flex bg-gradient-to-br px-10 from-yellow-200 to-pink-400">
                        {' '}
                        <Row className="flex justify-center py-8">
                            <Col>
                                <Avatar size="large" src={photoURL}></Avatar>
                                <Title
                                    style={{ textAlign: 'center' }}
                                    level={5}>
                                    Welcome {displayName}
                                </Title>
                                <div>
                                    <b>Your id:</b> {uid}
                                </div>
                                <div>
                                    <b>Your email:</b>{' '}
                                    {email
                                        ? email
                                        : 'the email is not provided'}
                                </div>
                                <br />
                                <Button
                                    shape="round"
                                    style={{ width: '100%', marginBottom: 5 }}
                                    onClick={() => auth.signOut()}>
                                    Logout
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}
