import { useRouter } from 'next/router';
import ErrorAlert from '../../components/error-alert/error-alert';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';

import { getEventById } from '../../dummy-data';

function EventDetail() {
  const router = useRouter();

  const eventID = router.query.eventID;
  const event = getEventById(eventID);

  if (!event) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>No Event Found!</p>
        </ErrorAlert>
      </div>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        address={event.location}
        date={event.date}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetail;
