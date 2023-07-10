import useSWR from "swr";
import Link from "next/link";

async function fetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
export default function RenderArray() {
  const { data, isLoading, error } = useSWR("/api/products", fetcher);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <ul>
      {data.map((entry) => {
        return (
          <li key={entry.id}>
            <Link href={`/products/${entry.id}`}>{entry.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
