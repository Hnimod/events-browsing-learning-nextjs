import { useRouter } from 'next/router';
import ErrorAlert from '../../components/error-alert/error-alert';
import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../dummy-data';

export default function EventFilter() {
  const router = useRouter();
  const filterInput = router.query.slug;

  if (!filterInput) {
    return (
      <ErrorAlert>
        <p>Loading...</p>
      </ErrorAlert>
    );
  }

  const filteredYear = +filterInput[0];
  const filteredMonth = +filterInput[1];

  if (
    filterInput.length != 2 ||
    filteredYear > 2030 ||
    filteredYear < 2020 ||
    filteredMonth < 1 ||
    filteredMonth > 12 ||
    isNaN(filteredYear) ||
    isNaN(filteredMonth)
  ) {
    return (
      <ErrorAlert>
        <p>Invalid filter inputs please adjust your values</p>
      </ErrorAlert>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorAlert>
        <p>No Event Found</p>
      </ErrorAlert>
    );
  }

  return <EventList events={filteredEvents} />;
}
