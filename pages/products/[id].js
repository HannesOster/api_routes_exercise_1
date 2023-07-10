import useSWR from "swr";

import { useRouter } from "next/router";

async function fetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
export default function RenderProduct() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(`/api/products/${id}`, fetcher);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>
        {data.price}
        {data.currency}
      </p>
      <p>{data.category}</p>
    </>
  );
}
