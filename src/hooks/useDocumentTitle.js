import { useEffect } from 'react';

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = String(title);
    }, [title]);
}

export default useDocumentTitle;
