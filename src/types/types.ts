export type WorkoutType = {
    day: string;
    am: string;
    pm: string;
    notes: string;
    total: string;
    completed? : boolean;
    stravaActivityId? : string

};

export type WeekType ={
    weekNumber: number;
    phase: number;
    phaseLabel: string;
    weekTitle: string;
    totalMiles: string;
    workouts: WorkoutType[];
};

export type PhaseType ={
    phaseNumber: number;
    phaseLabel: string;
    weeks: number[];
    expectedProgress? : string;
};

export type StravaAuthType ={
    isConnected : boolean;
    token?: string;
    athleteName? : string;
    profilePic? : string;
};