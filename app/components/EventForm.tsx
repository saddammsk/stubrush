'use client';

import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context/useGlobalContext';
import EventStepOne from './EventStepOne';
import EventStepTwo from './EventStepTwo';
import EventStepThree from './EventStepThree';

type EventListFormTab = 'contact-event-tab' | 'event-details-tab' | 'event-listed-tab';

export const EventForm = () => {
  const { setEventlistFormTab, eventlistFormTab } = useGlobalContext();

  const handleTabChange = (tab: EventListFormTab) => {
    setEventlistFormTab(tab);
  };

  const isValidEventListFormTab = (tab: string | null): tab is EventListFormTab => {
    return ['contact-event-tab', 'event-details-tab', 'event-listed-tab'].includes(tab as string);
  };

  useEffect(() => {
    if (!isValidEventListFormTab(eventlistFormTab)) {
      setEventlistFormTab('contact-event-tab'); 
    }
  }, [eventlistFormTab]);
  
  

  return (
    <div className="w-full">
      <form id="list-event-form" action="/successfullReg">
        {/* Custom Tab List */}
        <div className="flex md:flex-row flex-col items-center justify-center mb-[99px]">
          <button
            onClick={(e) => {e.preventDefault();handleTabChange('contact-event-tab')}}
            className={`contact-info rounded-full py-3 px-5 border ${
              eventlistFormTab === 'contact-event-tab' ? 'border-yellow1 text-white' : 'border-white'
            }`}
            id="Contact-Info-Tab"
          >
            <div>
              <span
                className={`bg-yellow1 border ${
                  eventlistFormTab === 'contact-event-tab' ? 'border-white' : 'border-transparent'
                } rounded-md py-1 px-4 mr-3 font-bold text-base`}
              >
                1
              </span>
              Contact Info
            </div>
          </button>
          <div className="flex-grow h-0.5 bg-white"></div>
          <button
            onClick={(e) => {e.preventDefault(); handleTabChange('event-details-tab')}}
            className={`event-details rounded-full py-3 px-5 border ${
              eventlistFormTab === 'event-details-tab' ? 'border-yellow1 text-white' : 'border-white'
            }`}
            id="Event-Details-Tab"
          >
            <div>
              <span
                className={`bg-yellow1 border ${
                  eventlistFormTab === 'event-details-tab' ? 'border-white' : 'border-transparent'
                } rounded-md py-1 px-4 mr-3 font-bold text-base`}
              >
                2
              </span>
              Event Details
            </div>
          </button>
          <div className="flex-grow h-0.5 bg-white"></div>
          <button
            onClick={(e) => {e.preventDefault(); handleTabChange('event-listed-tab')}}
            className={`event-listed rounded-full py-3 px-5 border ${
              eventlistFormTab === 'event-listed-tab' ? 'border-yellow1 text-white' : 'border-white'
            }`}
            id="Event-Listed-Tab"
          >
            <div>
              <span
                className={`bg-yellow1 border ${
                  eventlistFormTab === 'event-listed-tab' ? 'border-white' : 'border-transparent'
                } rounded-md py-1 px-4 mr-3 font-bold text-base`}
              >
                3
              </span>
              Event Listed!
            </div>
          </button>
        </div>

        {/* Tab Panels */}
        <div>
          {<div className={`${eventlistFormTab === 'contact-event-tab'? "block" : "hidden"}`}>
             <EventStepOne />
           </div>}
           {<div className={`${eventlistFormTab === 'event-details-tab'? "block" : "hidden"}`}>
           <EventStepTwo />
           </div>}
           {<div className={`${eventlistFormTab === 'event-listed-tab'? "block" : "hidden"}`}>
           <EventStepThree />
           </div>}
        </div>
      </form>
    </div>
  );
};
