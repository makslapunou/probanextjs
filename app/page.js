async function getData() {
  const res = await fetch(`http://uhcmsspa.ukrdomen.com/api/v1/site/menu/list`);
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <div>
      Data - {JSON.stringify(data.list)}
    </div>
  )
}
