import { useState, useEffect } from 'react';
import { projectFireStorage } from '../firebase/config';

export const useFirestore = (collection) => {

    const [docs, setDocs] = useState([]);

    useEffect(() => {

        const unsub = projectFireStorage.collection( collection )
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push( {...doc.data(), id: doc.id} );
                })
                setDocs( documents );
            })

            return () => unsub();
    },[collection])

    return {
        docs
    }
}
