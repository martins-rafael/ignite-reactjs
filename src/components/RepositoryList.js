import { useEffect, useState } from 'react';
import RepositoryItem from './RepositoryItem';

import '../styles/repositories.scss';

const repository = {
  name: 'moveIt',
  description: 'Recupere o foco e seja mais produtivo com o Move.it!',
  link: 'https://github.com/martins-rafael/moveIt',
};

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}

export default RepositoryList;