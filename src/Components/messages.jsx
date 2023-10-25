import React from 'react';
import './messages.css';

function Messages({ messages, onDeleteMessage }) {
  
  const sortedMessages = [...messages].sort((a, b) => b.date - a.date);

  const handleDelete = (id) => {
    
    onDeleteMessage(id);
  };

  return (
    <div>
      <div className='message-container'>
        <h2>Messages reçus</h2>
        {sortedMessages && sortedMessages.length > 0 ? (
          <table className="message-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Adresse e-mail</th>
                <th>Message</th>
                <th>Date</th>
                <th>Action</th> 
              </tr>
            </thead>
            <tbody>
              {sortedMessages.map((message, index) => (
                <tr key={message.id} className={message.lu ? "message-read" : "message-unread"}>
                  <td>{message.id}</td>
                  <td>{message.name}</td>
                  <td>{message.email}</td>
                  <td>{message.message}</td>
                  <td>{new Date(message.date).toLocaleString()}</td>
                  <td>
                    <button onClick={() => handleDelete(message.id)}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Aucun message à afficher</p>
        )}
      </div>
    </div>
  );
}

export default Messages;