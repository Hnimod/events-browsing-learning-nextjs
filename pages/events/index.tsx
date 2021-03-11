import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';

export default function Events() {
  const events = getAllEvents();
  const router = useRouter();

  function filterHandler(year: string, month: string) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <>
      <EventsSearch onSubmit={filterHandler} />
      <EventList events={events} />
    </>
  );
}
