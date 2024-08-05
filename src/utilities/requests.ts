export async function fetchPageData(slug: string) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pages?where[slug][equals]=${slug}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!res.ok) {
        throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
      }
  
      const data = await res.json();
      return data.docs[0];
    } catch (error) {
      console.error('Error fetching page data:', error);
      return null;
    }
  }