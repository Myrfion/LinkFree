import Head from "next/head";

import Event from "../components/Event";
import Alert from "../components/Alert";

export async function getServerSideProps(context) {
  let events = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events`);
    events = await res.json();
  } catch (e) {
    console.log("ERROR search users", e);
  }

  return {
    props: { events },
  };
}

export default function Events({ events }) {
  return (
    <>
      <Head>
        <title>Events the community members are going to</title>
        <meta name="description" content="Search LinkFree user directory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col px-6 align-center">
        {!events.length && <Alert type="info" message="No events found" />}
        <ul>
          {events.map((event) => (
            <li key={event.name}>
              <Event event={event} username={event.author} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
