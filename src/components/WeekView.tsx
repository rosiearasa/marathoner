import React from 'react';
import { useWorkoutContext } from '../context/WorkoutContext';
import WorkoutCard from './WorkoutCard';
import { getPhaseForWeek } from '../data/trainingPlan';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WeekView: React.FC = () => {
  const { currentWeek, weekData } = useWorkoutContext();
  const phaseInfo = getPhaseForWeek(currentWeek);
  
  if (!weekData) {
    return <div className="text-center py-8">No data available for this week</div>;
  }
  
  // Calculate completion percentage
  const totalWorkouts = weekData.workouts.length;
  const completedCount = weekData.workouts.filter((_, index) => {
    const key = `week-${weekData.weekNumber}-day-${index}`;
    return localStorage.getItem('completedWorkouts') ? 
      JSON.parse(localStorage.getItem('completedWorkouts') || '{}')[key] : false;
  }).length;
  
  const completionPercentage = totalWorkouts > 0 ? 
    Math.round((completedCount / totalWorkouts) * 100) : 0;
  
  return (
    <div className="fade-in">
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <div className="phase-header">
            <div className="text-sm">Phase {phaseInfo?.phaseNumber}: {phaseInfo?.phaseLabel}</div>
          </div>
          
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">{weekData.weekTitle}</CardTitle>
            <div className="text-lg font-medium">{weekData.totalMiles}</div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm font-medium">{completionPercentage}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 gap-4">
        {weekData.workouts.map((workout, index) => (
          <WorkoutCard 
            key={`${weekData.weekNumber}-${index}`}
            workout={workout}
            weekNumber={weekData.weekNumber}
            dayIndex={index}
          />
        ))}
      </div>
      
      {phaseInfo?.expectedProgress && (
        <div className="mt-8 p-4 bg-secondary rounded-lg">
          <h3 className="font-semibold mb-2">Expected Progress After Phase {phaseInfo.phaseNumber}</h3>
          <p className="text-sm">{phaseInfo.expectedProgress}</p>
        </div>
      )}
    </div>
  );
};

export default WeekView;
