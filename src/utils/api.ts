export const fetcher = (url: string) =>
  fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  });

export const multiFetcher = (urls: string[]) =>
  Promise.all(urls.map(url => fetcher(url)));
