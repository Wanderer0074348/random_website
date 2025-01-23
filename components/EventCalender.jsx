'use client';

import { useState, useEffect } from 'react';
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';


const EventCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/data/events.json');
        const data = await response.json();
        const formattedEvents = data.map(event => ({
          ...event,
          date: new Date(event.date)
        }));
        setEvents(formattedEvents);
        setSelectedEvent(formattedEvents[0]); // Set first event as default
      } catch (error) {
        console.error('Error loading events:', error);
      }
    };

    fetchEvents();
  }, []);

  const EventList = () => (
    <div className="h-full overflow-y-auto pr-4 custom-scrollbar">
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => setSelectedEvent(event)}
            className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
              selectedEvent?.id === event.id
                ? 'bg-[#E95420]/20 border-[#E95420]'
                : 'bg-zinc-900 border-[#E95420]/30 hover:border-[#E95420]/60'
            }`}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-mono text-[#E95420] mb-2">{event.title}</h3>
              <span className="text-white/60 text-sm">
                {event.date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <p className="text-white/80 line-clamp-2">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const EventDetails = () => {
    if (!selectedEvent) return (
      <div className="flex items-center justify-center h-full text-white/60">
        <p className="text-lg font-mono">Select an event to view details</p>
      </div>
    );

    return (
      <div className="h-full overflow-hidden">
        <div className="h-full overflow-y-auto pr-4 custom-scrollbar">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-mono text-[#E95420] break-words">{selectedEvent.title}</h3>
              <div className="flex items-center text-white/60 space-x-2">
                <CalendarIcon className="h-5 w-5" />
                <span>
                  {selectedEvent.date.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
            
            <p className="text-white/80 break-words text-lg leading-relaxed">{selectedEvent.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-800/50 p-5 rounded-lg border border-[#E95420]/30 flex items-start space-x-3">
                <MapPinIcon className="h-6 w-6 text-[#E95420] flex-shrink-0" />
                <div>
                  <p className="text-[#E95420] font-mono mb-2 font-semibold">Location</p>
                  <p className="text-white/80 break-words">{selectedEvent.location}</p>
                </div>
              </div>
              <div className="bg-zinc-800/50 p-5 rounded-lg border border-[#E95420]/30 flex items-start space-x-3">
                <UsersIcon className="h-6 w-6 text-[#E95420] flex-shrink-0" />
                <div>
                  <p className="text-[#E95420] font-mono mb-2 font-semibold">Attendees</p>
                  <p className="text-white/80">{selectedEvent.attendees}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-black relative">
      {/* Ubuntu orange borders */}
      <div className="w-full h-[2px] bg-[#E95420] absolute top-0" />
      <div className="w-full h-[2px] bg-[#E95420] absolute bottom-0" />

      <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono text-[#E95420] mb-12 text-center font-bold">
          Past Events
        </h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-zinc-900 p-4 md:p-6 rounded-lg shadow-lg border border-[#E95420]/30 
            h-[500px] md:h-[600px]">
            <EventList />
          </div>
          <div className="bg-zinc-900 p-4 md:p-6 rounded-lg shadow-lg border border-[#E95420]/30 
            h-[500px] md:h-[600px]">
            <EventDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;