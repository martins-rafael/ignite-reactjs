import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => (
  <button className={styles.subscribeButton} type="button">
    Subscribe now
  </button>
);