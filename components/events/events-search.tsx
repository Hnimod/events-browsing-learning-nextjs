import React, { useRef, MouseEvent } from 'react';
import Button from '../ui/button';
import styles from './events-search.module.css';

type Props = {
  onSubmit: (year, month) => void;
};

function EventsSearch({ onSubmit }: Props) {
  const yearSelectRef = useRef<HTMLSelectElement>(null);
  const monthSelectRef = useRef<HTMLSelectElement>(null);

  function submitHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const selectedYear = yearSelectRef.current.value;
    const selectedMonth = monthSelectRef.current.value;

    onSubmit(selectedYear, selectedMonth);
  }

  return (
    <form className={styles.form}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearSelectRef}>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthSelectRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button onClick={submitHandler}>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
