import EventItem from './event-item';
import { Event } from '../../dummy-data';
import styles from './event-list.module.css';

type Props = {
  events: Event[];
};

const EventList = ({ events }: Props) => {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem item={event} key={event.id} />
      ))}
    </ul>
  );
};

export default EventList;
