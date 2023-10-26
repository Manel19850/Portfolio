import React, { useState, useEffect } from 'react';
import { getFirestore, collection,getDocs, doc, deleteDoc } from 'firebase/firestore';
import Messages from '../Components/messages';

function Dashboard() {
  const [messages, setMessages] = useState([]);

  const deleteMessage = async (messageId) => {
    const db = getFirestore();
    const messageDocRef = doc(db, 'messages', messageId);
    await deleteDoc(messageDocRef);
    // Après la suppression, mettez à jour l'état des messages pour refléter le changement
    setMessages((prevMessages) => prevMessages.filter((message) => message.id !== messageId));
  };

  useEffect(() => {
    // Récupérer les messages depuis Firebase
    const fetchMessages = async () => {
      const db = getFirestore();
      const messagesCollection = collection(db, 'messages');
      const messagesSnapshot = await getDocs(messagesCollection);
      const messagesData = messagesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesData);
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <Messages messages={messages} onDeleteMessage={deleteMessage} />
    </div>
  );
}

export default Dashboard;
