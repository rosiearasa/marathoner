import React from "react";
import type { WorkoutType } from "@/types/types";
import { useWorkoutContext } from "@/context/WorkoutContext";
import { Checkbox } from "@/components/ui/checkbox"

interface WorkoutCardProps {
  workout: WorkoutType;
  weekNumber: number;
  dayIndex: number;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout, weekNumber, dayIndex }) => {
  const { completedWorkouts, toggleWorkoutCompletion, stravaAuth } = useWorkoutContext();
  const isCompleted = completedWorkouts[`week-${weekNumber}-day-${dayIndex}`];

  return (
    <div
      className={`workout-card ${isCompleted ? 'workout-card-completed' : ''}`}
      onClick={() => toggleWorkoutCompletion(weekNumber, dayIndex)}
    >
      <div className="checkmark">
        <Checkbox checked={isCompleted} />
      </div>
      <div className="workout-card-content">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-lg">{workout.day}</h3>
          <span className="text-sm font-medium bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-full">
            {workout.total}
          </span>
        </div>
        <div className="space-y-2">
          {workout.am !== "-" && (
            <div>
              <span className="text-sm font-medium text-gray-500">AM:</span>
              <p className="text-sm">{workout.am}</p>
            </div>
          )}
          {workout.pm !== "-" && (
            <div>
              <span className="text-sm font-medium text-gray-500">PM:</span>
              <p className="text-sm">{workout.pm}</p>
            </div>
          )}
          {workout.notes && (
            <div>
              <span className="text-sm font-medium text-gray-500">Notes:</span>
              <p className="text-sm">{workout.notes}</p>
            </div>
          )}
        </div>
        {stravaAuth?.isConnected && !isCompleted && (
          <div className="mt-2 text-xs text-[#FC4C02]">
            Click to mark as completed or connect Strava activity
          </div>
        )}
        {workout.stravaActivityId && (
          <div className="mt-2 flex items-center">
            <svg className="h-4 w-4 mr-1 text-[#FC4C02]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
            </svg>
            <a
              href={`https://www.strava.com/activities/${workout.stravaActivityId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#FC4C02]"
              onClick={(e) => e.stopPropagation()}
            >
              View on Strava
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutCard;