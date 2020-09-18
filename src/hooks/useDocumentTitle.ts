import { useEffect } from 'react';

function useDocumentTitle(title: string): void {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

export default useDocumentTitle;
