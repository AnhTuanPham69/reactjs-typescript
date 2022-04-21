/** @format */

import { Button, Col, Row } from 'antd';
import { auth } from '../firebase/config';
import firebase from '../firebase/config';
import { addDocument, generateKeywords } from '../firebase/services';
import './style.css';
import { Link } from 'react-router-dom';

const fbProvider = new firebase.auth.FacebookAuthProvider();
const ggProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

const handleLogin = async (provider: any) => {
    try {
        const { additionalUserInfo, user } = await auth.signInWithPopup(
            provider
        );

        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
                displayName: user?.displayName,
                email: user?.email,
                photoURL: user?.photoURL,
                uid: user?.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user?.displayName?.toLowerCase()),
            });
        }
    } catch (error) {
        console.log(error);
        alert(error);
    }
};
export const Homepage = () => {
    return (
        <div>
            <div className="outer-infor">
                <div className="flex justify-center pt-20 ">
                    <div className="card-login-form flex bg-gradient-to-br px-10 from-yellow-200 to-pink-400">
                        <div className="flex justify-center">
                            <Row className="flex justify-center py-8">
                                <Col className="pt-8 px-8">
                                    <Row className="justify-center">
                                        <h1 className="text-cyan-50 text-center text-3xl">
                                            Welcome Guys
                                        </h1>
                                    </Row>
                                    <Row className="justify-center">
                                        <form className="p-4">
                                            <div className="bg-white rounded-2xl border shadow-x1 px-16 py-5 max-w-lg">
                                                <div className="flex flex-col items-center space-y-4">
                                                    <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">
                                                        Login Form
                                                    </h1>
                                                    <input
                                                        type="text"
                                                        placeholder="Email"
                                                        className="border-2 rounded-lg w-full h-12 px-4"
                                                    />
                                                    <input
                                                        type="password"
                                                        placeholder="Password"
                                                        className="border-2 rounded-lg w-full h-12 px-4"
                                                    />
                                                    <p className="text-sm text-gray-500 text-center w-5/6">
                                                        If you dont have an
                                                        account{' '}
                                                        <Link to={'/'}>
                                                            {' '}
                                                            register?{' '}
                                                        </Link>
                                                    </p>
                                                    <button className="bg-red-400 text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full">
                                                        Login
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </Row>
                                    <Row className="justify-center">
                                        <h1 className="text-cyan-50 text-center text-xs">
                                            Login with?
                                        </h1>
                                    </Row>
                                    <Row className="justify-around">
                                        <Col>
                                            {' '}
                                            <Button
                                                shape="round"
                                                style={{
                                                    marginBottom: 5,
                                                }}
                                                onClick={() =>
                                                    handleLogin(ggProvider)
                                                }>
                                                <svg
                                                    className="h-5 w-5 text-red-500"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    {' '}
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                    />{' '}
                                                    <path d="M17.788 5.108A9 9 0 1021 12h-8" />
                                                </svg>
                                            </Button>
                                        </Col>
                                        <Col >
                                            {' '}
                                            <Button
                                                shape="round"
                                                style={{
                                                    marginBottom: 5,
                                                }}
                                                onClick={() =>
                                                    handleLogin(fbProvider)
                                                }>
                                                <svg
                                                    className="h-5 w-5 text-blue-500"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    {' '}
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                    />{' '}
                                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                                </svg>
                                            </Button>
                                        </Col>
                                        <Col>
                                            {' '}
                                            <Button
                                                shape="round"
                                                style={{
                                                    marginBottom: 5,
                                                }}
                                                onClick={() =>
                                                    handleLogin(githubProvider)
                                                }>
                                                <svg
                                                    className="h-5 w-5 text-black"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    {' '}
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                </svg>
                                                {/* Github */}
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
