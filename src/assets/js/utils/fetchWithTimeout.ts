interface Parameters {
  url: string;
  options?: any;
  timeout?: number;
}

const fetchWithTimeout = ({ url, options = {}, timeout = 60000 }: Parameters) =>
  Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Fetch timeout')), timeout),
    ),
  ]);

export default fetchWithTimeout;
