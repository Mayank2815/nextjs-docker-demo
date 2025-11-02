'use client';

import MessageForm from './components/MessageForm';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Simple HI test API</h1>
      <MessageForm />
    </main>
  );
}
