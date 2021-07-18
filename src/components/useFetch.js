import {useState, useEffect} from 'react';

const useFetch = (url) => {
  const [justdata, setJustData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // Runs every render (when state changes)
  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, {signal: abortCont.signal})
      .then(res => { // we get response object
          if (!res.ok) {
            throw Error('Could not fetch the data from that resource');
          }
          return res.json(); // use the json method on that
        }
      )
      .then(data => { // another then() method where we get the data
        setJustData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        if ('AbortError' === err.name) {
          console.log('Fetch has been aborted');
        } else {
          setError(err.message);
          setIsPending(false);
        }
      })
    return () => abortCont.abort();
  }, [url]); // [] empty dependencies array changes behavior to run function only for first render

  return {justdata, isPending, error}
}

export default useFetch;