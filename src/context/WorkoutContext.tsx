import React, { createContext, useContext, useState, useEffect } from 'react';
import type { WeekType, StravaAuthType } from '../types/types';
import { getAllWeekNumbers, getWeekByNumber } from '../data/trainingPlan';

interface WorkoutContextType{
    currentWeek : number;
    setCurrentWeek: (week: number) => void;
    allWeeks: number[];
    weekData: WeekType | undefined;
    completedWorkouts: Record<string, boolean>;
    toggleWorkoutCompletion: (weekNumber : number, dayIndex: number) => void;
    isWeekCompleted:(weekNumber: number) => boolean;
    stravaAuth: StravaAuthType |null
    connectToStrava:(token: string, athleteName: string, profilePic: string) => void;
    disconnectStrava: () => void;
  linkStravaActivity: (weekNumber: number, dayIndex: number, activityId: string) => void;

}

const WorkoutContext = createContext<WorkoutContextType | undefined> (undefined);

export const WorkoutProvider: React.FC<{ children: React.ReactNode }> = ({ children })=>{
    const allWeeks = getAllWeekNumbers();
    const [currentWeek, setCurrentWeek] = useState<number>(1);
    const [weekData, setWeekData] = useState<WeekType |undefined> (getWeekByNumber(1));
    const [completedWorkouts, setCompletedWorkouts] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('completedWorkouts');
    return saved ? JSON.parse(saved) : {};});

      const [stravaAuth, setStravaAuth] = useState<StravaAuthType | null>(() => {
    const saved = localStorage.getItem('stravaAuth');
    return saved ? JSON.parse(saved) : null;
  });

    useEffect(() => {
    localStorage.setItem('completedWorkouts', JSON.stringify(completedWorkouts));
  }, [completedWorkouts]);

  useEffect(() => {
    if (stravaAuth) {
      localStorage.setItem('stravaAuth', JSON.stringify(stravaAuth));
    } else {
      localStorage.removeItem('stravaAuth');
    }
  }, [stravaAuth]);

  useEffect(() => {
    setWeekData(getWeekByNumber(currentWeek));
  }, [currentWeek]);

    // Check for Strava authentication callback
  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');
    
    if (code) {
      // In a real app, you would exchange this code for an access token
      // using your backend or a serverless function
      console.log("Got Strava authorization code:", code);
      
      // For demo purposes, we'll simulate a successful authentication
      connectToStrava(
        'mock_token_123', 
        'John Runner', 
        'https://randomuser.me/api/portraits/men/32.jpg'
      );
      
      // Clean up the URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);
const toggleWorkoutCompletion = (weekNumber: number, dayIndex: number) => {
    const key = `week-${weekNumber}-day-${dayIndex}`;
    
    setCompletedWorkouts(prev => {
      const updatedWorkouts = {
        ...prev,
        [key]: !prev[key]
      };
      
      return updatedWorkouts;
    });
  };

  const isWeekCompleted = (weekNumber: number): boolean => {
    const week = getWeekByNumber(weekNumber);
    if (!week) return false;
    
    return week.workouts.every((_, index) => 
      completedWorkouts[`week-${weekNumber}-day-${index}`] === true
    );
  };

  const connectToStrava = (token: string, athleteName: string, profilePic: string) => {
    setStravaAuth({
      isConnected: true,
      token,
      athleteName,
      profilePic
    });
  };

  const disconnectStrava = () => {
    setStravaAuth(null);
  };

  const linkStravaActivity = (weekNumber: number, dayIndex: number) => {
    // In a real implementation, you would store this link in your database
    // For this demo, we'll just mark the workout as completed
    toggleWorkoutCompletion(weekNumber, dayIndex);
  };

  return (
    <WorkoutContext.Provider
      value={{
        currentWeek,
        setCurrentWeek,
        allWeeks,
        weekData,
        completedWorkouts,
        toggleWorkoutCompletion,
        isWeekCompleted,
        stravaAuth,
        connectToStrava,
        disconnectStrava,
        linkStravaActivity
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error('useWorkoutContext must be used within a WorkoutProvider');
  }
  return context;
};
