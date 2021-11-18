import { FormEvent, useContext, useState } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { withSSRGuest } from '../utils/withSSRGuest';

import styles from '../styles/Home.module.css'

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleSubimit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password
    };

    await signIn(data);
  }

  return (
    <form onSubmit={handleSubimit} className={styles.main}>
      <input
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Home;

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {}
  };
});
