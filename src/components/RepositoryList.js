import RepositoryItem from './RepositoryItem';

import '../styles/repositories.scss';

const repository = {
  name: 'moveIt',
  description: 'Recupere o foco e seja mais produtivo com o Move.it!',
  link: 'https://github.com/martins-rafael/moveIt',
};

const RepositoryList = () => (
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

export default RepositoryList;