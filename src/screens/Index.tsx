
import { WorkoutProvider, useWorkoutContext } from '../context/WorkoutContext';
import WeekView from '../components/WeekView';
import StravaConnect from '../components/StravaConnect';

const WeekSelector = () => {
  const { allWeeks, currentWeek, setCurrentWeek, isWeekCompleted } = useWorkoutContext();
  
  return (
    <div className="week-selector">
      {allWeeks.map(week => (
        <button
          key={week}
          onClick={() => setCurrentWeek(week)}
          className={`week-button ${
            currentWeek === week 
              ? 'week-button-active' 
              : isWeekCompleted(week) 
                ? 'week-button-completed' 
                : 'bg-secondary'
          }`}
        >
          {week}
        </button>
      ))}
    </div>
  );
};

const MarathonTracker = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Marathon Training Plan</h1>
        <p className="text-muted-foreground">18-Week Sub-4 Hour Program</p>
      </header>
      
      <div className="mb-6">
        <StravaConnect />
      </div>
      
      <WeekSelector />
      
      <WeekView />
      
      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>Click on a workout to mark it as completed</p>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <WorkoutProvider>
      <div className="min-h-screen bg-gray-50">
        <MarathonTracker />
      </div>
    </WorkoutProvider>
  );
};

export default Index;
