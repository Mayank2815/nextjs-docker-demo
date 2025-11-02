'use client';

import { useState } from 'react';

export default function Home() {
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
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'sans-serif',
        background: '#111',
        color: '#fff',
      }}
    >
      <h1>🧠 Simple Chat API</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type 'Hi'"
        style={{
          padding: '10px',
          marginTop: '20px',
          borderRadius: '8px',
          width: '250px',
        }}
      />
      <button
        onClick={sendMessage}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          borderRadius: '8px',
          backgroundColor: '#0070f3',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Send
      </button>
      {reply && (
        <p style={{ marginTop: '20px', fontSize: '18px' }}>
          <strong>Response:</strong> {reply}
        </p>
      )}
    </main>
  );
}
