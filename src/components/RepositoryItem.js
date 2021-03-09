const RepositoryItem = ({ repository }) => (
  <li>
    <strong>{repository.name}</strong>
    <p>{repository.description}</p>

    <a href={repository.html_url}>Acessar repositório</a>
  </li>
);

export default RepositoryItem;