import { useState, useEffect } from 'react';
import { projectStorage, projectFireStorage, timeStamp } from '../firebase/config';


const useStorage = (file) => {

    const [progress, setProgress] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=> {

        // References
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFireStorage.collection('images');

        // Uploading the file to de reference
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress( percentage );
        }, (error) => {
            setError( error );
        }, async() => {
            let url = await storageRef.getDownloadURL();
            let createdAt = timeStamp();
            collectionRef.add({
                url,
                createdAt
            })
            setUrl( url );
        })

    }, [file]);

    return { progress, url, error }

}


export default useStorage;