'use client';

import { useState } from 'react';
import styles from './MessageForm.module.scss';

export default function MessageForm() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  const sendMessage = async () => {
    try {
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setReply(data.reply);
    } catch (err) {
      setReply('Error sending message.');
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type 'Hi'"
      />
      <button onClick={sendMessage}>Send</button>

      {reply && (
        <p>
          <strong>Response:</strong> {reply}
        </p>
      )}
    </div>
  );
}
