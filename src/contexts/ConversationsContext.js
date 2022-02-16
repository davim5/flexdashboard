import { createContext, useState, useEffect } from 'react';
import { api } from '../services/api';

export const ConversationsContext = createContext([]);

export function ConversationsProvider(){
    const [conversations, setConversations] = useState([]);

     useEffect(()=>{
        api.get('conversations')
        .then(response => setConversations(response.data));
    },[]);
}