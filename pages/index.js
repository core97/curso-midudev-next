import { useState, useEffect } from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import Button from '../components/Button';
import GitHub from '../components/Icons/Github';
import { colors } from '../styles/theme';

import { loginWithGithub, onAuthStateChanged } from '../firebase/client';

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handleClick = () => {
    loginWithGithub()
      .then((user) => {
        const { avatar, username, url } = user;
        setUser(user);

        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>devter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout>
        <section>
          <img src='/devter-logo.png' />
          <h1>Devter</h1>
          <h2>Talk about development with developers</h2>
          <div>
            {user === null && (
              <Button onClick={handleClick}>
                <GitHub fill='#fff' width='24px' height='24px' />
                Login with Github
              </Button>
            )}
            {user && user.avatar && (
              <div>
                <img src={user.avatar} />
                <strong>{user.username}</strong>
              </div>
            )}
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        div {
          margin-top: 16px;
        }

        img {
          width: 120px;
        }
        h1 {
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 16px;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
