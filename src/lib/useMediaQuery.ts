import { useState, useEffect } from 'react'

const useMediaQuery = (query: string) => {
    const [queryMatches, setQueryMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const match = window.matchMedia(query);
        const listener = ({ isTrusted, matches }: MediaQueryListEvent) => {
            setQueryMatches(matches && isTrusted);
        };
        match.addListener(listener);
        return () => {
            match.removeListener(listener);
        };
    }, [query]);

    return queryMatches;
}

export default useMediaQuery