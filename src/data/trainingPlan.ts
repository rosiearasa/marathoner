import type { WeekType, PhaseType } from "@/types/types";
export const phases: PhaseType[] = [
  {
    phaseNumber: 1,
    phaseLabel: "Foundation Building",
    weeks: [1, 2, 3, 4],
    expectedProgress: "5K: ~27:00 (8:42/mile), 10K: ~1:01:30 (9:55/mile), HM easy pace: ~2:29 (11:22/mile)"
  },
  {
    phaseNumber: 2,
    phaseLabel: "Strength Development",
    weeks: [5, 6, 7, 8],
    expectedProgress: "5K: ~25:45 (8:18/mile), 10K: ~57:30 (9:16/mile), HM race potential: ~2:12 (10:05/mile)"
  },
  {
    phaseNumber: 3, 
    phaseLabel: "Specific Endurance",
    weeks: [9, 10, 11, 12],
    expectedProgress: "5K: ~24:30-25:00 (7:54-8:03/mile), 10K: ~53:30-54:30 (8:38-8:47/mile), HM race potential: ~2:02-2:05 (9:19-9:32/mile), Marathon potential: ~4:20-4:30 (9:55-10:18/mile)"
  },
  {
    phaseNumber: 4,
    phaseLabel: "Marathon-Specific Training",
    weeks: [13, 14, 15, 16, 17, 18],
    expectedProgress: "Marathon: 3:58:30-4:00:00 (9:06-9:09/mile), Half Marathon: 1:55-1:58 (8:46-9:00/mile), 10K: 49:30-51:00 (7:58-8:13/mile), 5K: 23:30-24:00 (7:34-7:44/mile)"
  }
];

export const trainingPlan: WeekType[] = [
  {
    weekNumber: 1,
    phase: 1,
    phaseLabel: "Foundation Building",
    weekTitle: "Week 1",
    totalMiles: "51 miles",
    workouts: [
      {
        day: "Monday",
        am: "6 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "6 miles"
      },
      {
        day: "Tuesday",
        am: "8 miles w/ 4 miles at tempo",
        pm: "-",
        notes: "Tempo @ 9:40-9:50/mile",
        total: "8 miles"
      },
      {
        day: "Wednesday",
        am: "5 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "5 miles"
      },
      {
        day: "Thursday",
        am: "6 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "6 miles"
      },
      {
        day: "Friday",
        am: "6 miles easy",
        pm: "8 miles (2mi warm-up + 20×400m w/ 200m jog + 2mi cool-down)",
        notes: "400m @ 1:55-2:00",
        total: "14 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "14 miles long run",
        pm: "-",
        notes: "Easy pace (11:50-12:00/mile)",
        total: "14 miles"
      }
    ]
  },
  {
    weekNumber: 2,
    phase: 1,
    phaseLabel: "Foundation Building",
    weekTitle: "Week 2",
    totalMiles: "52 miles",
    workouts: [
      {
        day: "Monday",
        am: "6 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "6 miles"
      },
      {
        day: "Tuesday",
        am: "8 miles w/ 4 miles at tempo",
        pm: "-",
        notes: "Tempo @ 9:35-9:45/mile",
        total: "8 miles"
      },
      {
        day: "Wednesday",
        am: "6 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "6 miles"
      },
      {
        day: "Thursday",
        am: "6 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "6 miles"
      },
      {
        day: "Friday",
        am: "5 miles easy",
        pm: "8 miles (2mi warm-up + 20×400m w/ 200m jog + 2mi cool-down)",
        notes: "400m @ 1:53-1:58",
        total: "13 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "15 miles long run",
        pm: "-",
        notes: "Easy pace (11:45-11:55/mile)",
        total: "15 miles"
      }
    ]
  },
  {
    weekNumber: 3,
    phase: 1,
    phaseLabel: "Foundation Building",
    weekTitle: "Week 3",
    totalMiles: "53 miles",
    workouts: [
      {
        day: "Monday",
        am: "6 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "6 miles"
      },
      {
        day: "Tuesday",
        am: "9 miles w/ 4×5 min threshold",
        pm: "-",
        notes: "Threshold @ 9:30-9:40/mile",
        total: "9 miles"
      },
      {
        day: "Wednesday",
        am: "6 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "6 miles"
      },
      {
        day: "Thursday",
        am: "6 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "6 miles"
      },
      {
        day: "Friday",
        am: "5 miles easy",
        pm: "8 miles (2mi warm-up + 20×400m w/ 200m jog + 2mi cool-down)",
        notes: "400m @ 1:52-1:57",
        total: "13 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "16 miles long run",
        pm: "-",
        notes: "Easy pace (11:40-11:50/mile)",
        total: "16 miles"
      }
    ]
  },
  {
    weekNumber: 4,
    phase: 1,
    phaseLabel: "Foundation Building",
    weekTitle: "Week 4",
    totalMiles: "55 miles",
    workouts: [
      {
        day: "Monday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Tuesday",
        am: "9 miles w/ 4×5 min threshold",
        pm: "-",
        notes: "Threshold @ 9:25-9:35/mile",
        total: "9 miles"
      },
      {
        day: "Wednesday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Thursday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Friday",
        am: "6 miles easy",
        pm: "8 miles (2mi warm-up + 20×400m w/ 200m jog + 2mi cool-down)",
        notes: "400m @ 1:50-1:55",
        total: "14 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "17 miles long run",
        pm: "-",
        notes: "Easy pace (11:35-11:45/mile)",
        total: "17 miles"
      }
    ]
  },
  {
    weekNumber: 5,
    phase: 2,
    phaseLabel: "Strength Development",
    weekTitle: "Week 5",
    totalMiles: "56 miles",
    workouts: [
      {
        day: "Monday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Tuesday",
        am: "9 miles w/ 5×5 min threshold",
        pm: "-",
        notes: "Threshold @ 9:20-9:30/mile",
        total: "9 miles"
      },
      {
        day: "Wednesday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Thursday",
        am: "10 miles medium-long",
        pm: "-",
        notes: "Steady pace (11:00-11:10/mile)",
        total: "10 miles"
      },
      {
        day: "Friday",
        am: "5 miles easy",
        pm: "8 miles (2mi warm-up + 22×400m w/ 200m jog + 2mi cool-down)",
        notes: "400m @ 1:48-1:53",
        total: "13 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "18 miles long run",
        pm: "-",
        notes: "Easy pace (11:30-11:40/mile)",
        total: "18 miles"
      }
    ]
  },
  {
    weekNumber: 6,
    phase: 2,
    phaseLabel: "Strength Development",
    weekTitle: "Week 6",
    totalMiles: "58 miles",
    workouts: [
      {
        day: "Monday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Tuesday",
        am: "9 miles w/ 6×1 min hills",
        pm: "-",
        notes: "Hard uphill, easy downhill",
        total: "9 miles"
      },
      {
        day: "Wednesday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Thursday",
        am: "11 miles medium-long",
        pm: "-",
        notes: "Steady pace (10:50-11:00/mile)",
        total: "11 miles"
      },
      {
        day: "Friday",
        am: "5 miles easy",
        pm: "8 miles (2mi warm-up + 22×400m w/ 200m jog + 2mi cool-down)",
        notes: "400m @ 1:47-1:52",
        total: "13 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "19 miles long run",
        pm: "-",
        notes: "Easy pace (11:25-11:35/mile)",
        total: "19 miles"
      }
    ]
  },
  {
    weekNumber: 7,
    phase: 2,
    phaseLabel: "Strength Development",
    weekTitle: "Week 7",
    totalMiles: "60 miles",
    workouts: [
      {
        day: "Monday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Tuesday",
        am: "10 miles w/ 5×5 min threshold",
        pm: "-",
        notes: "Threshold @ 9:15-9:25/mile",
        total: "10 miles"
      },
      {
        day: "Wednesday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Thursday",
        am: "12 miles medium-long",
        pm: "-",
        notes: "Steady pace (10:45-10:55/mile)",
        total: "12 miles"
      },
      {
        day: "Friday",
        am: "4 miles easy",
        pm: "8 miles (2mi warm-up + 24×400m w/ 200m jog + 2mi cool-down)",
        notes: "400m @ 1:46-1:51",
        total: "12 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "20 miles long run w/ 2×2 miles at MP",
        pm: "-",
        notes: "Easy pace + MP segments @ 9:15-9:20/mile",
        total: "20 miles"
      }
    ]
  },
  {
    weekNumber: 8,
    phase: 2,
    phaseLabel: "Strength Development",
    weekTitle: "Week 8 (Cutback)",
    totalMiles: "50 miles",
    workouts: [
      {
        day: "Monday",
        am: "6 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "6 miles"
      },
      {
        day: "Tuesday",
        am: "8 miles w/ 8×1 min hills",
        pm: "-",
        notes: "Hard uphill, easy downhill",
        total: "8 miles"
      },
      {
        day: "Wednesday",
        am: "6 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "6 miles"
      },
      {
        day: "Thursday",
        am: "9 miles medium-long",
        pm: "-",
        notes: "Steady pace (10:45-10:55/mile)",
        total: "9 miles"
      },
      {
        day: "Friday",
        am: "4 miles easy",
        pm: "8 miles (2mi warm-up + 20×400m w/ 200m jog + 2mi cool-down)",
        notes: "400m @ 1:45-1:50",
        total: "12 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "18 miles long run",
        pm: "-",
        notes: "Easy pace (11:20-11:30/mile)",
        total: "18 miles"
      }
    ]
  },
  {
    weekNumber: 9,
    phase: 3,
    phaseLabel: "Specific Endurance",
    weekTitle: "Week 9",
    totalMiles: "60 miles",
    workouts: [
      {
        day: "Monday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Tuesday",
        am: "10 miles w/ 6×800m",
        pm: "-",
        notes: "800m @ 3:50-3:55 w/ 400m jog",
        total: "10 miles"
      },
      {
        day: "Wednesday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Thursday",
        am: "12 miles medium-long",
        pm: "-",
        notes: "Steady pace (10:40-10:50/mile)",
        total: "12 miles"
      },
      {
        day: "Friday",
        am: "4 miles easy",
        pm: "6 miles w/ 6 miles threshold",
        notes: "Threshold @ 9:10-9:20/mile",
        total: "10 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "20 miles long run w/ 4 miles at HMP",
        pm: "-",
        notes: "Easy pace + HMP @ 9:40-9:50/mile",
        total: "20 miles"
      }
    ]
  },
  {
    weekNumber: 10,
    phase: 3,
    phaseLabel: "Specific Endurance",
    weekTitle: "Week 10",
    totalMiles: "62 miles",
    workouts: [
      {
        day: "Monday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Tuesday",
        am: "10 miles w/ 5×1000m",
        pm: "-",
        notes: "1000m @ 4:50-4:55 w/ 400m jog",
        total: "10 miles"
      },
      {
        day: "Wednesday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Thursday",
        am: "12 miles medium-long",
        pm: "-",
        notes: "Steady pace (10:35-10:45/mile)",
        total: "12 miles"
      },
      {
        day: "Friday",
        am: "4 miles easy",
        pm: "6 miles w/ 6 miles threshold",
        notes: "Threshold @ 9:05-9:15/mile",
        total: "10 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "22 miles long run w/ 3×2 miles at MP",
        pm: "-",
        notes: "MP segments @ 9:10-9:15/mile",
        total: "22 miles"
      }
    ]
  },
  {
    weekNumber: 11,
    phase: 3,
    phaseLabel: "Specific Endurance",
    weekTitle: "Week 11",
    totalMiles: "64 miles",
    workouts: [
      {
        day: "Monday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Tuesday",
        am: "11 miles w/ 8×800m",
        pm: "-",
        notes: "800m @ 3:45-3:50 w/ 400m jog",
        total: "11 miles"
      },
      {
        day: "Wednesday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Thursday",
        am: "12 miles medium-long",
        pm: "-",
        notes: "Steady pace (10:30-10:40/mile)",
        total: "12 miles"
      },
      {
        day: "Friday",
        am: "4 miles easy",
        pm: "7 miles w/ 7 miles threshold",
        notes: "Threshold @ 9:00-9:10/mile",
        total: "11 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "20 miles long run w/ 6 miles at HMP",
        pm: "-",
        notes: "Easy pace + HMP @ 9:30-9:40/mile",
        total: "20 miles"
      }
    ]
  },
  {
    weekNumber: 12,
    phase: 3,
    phaseLabel: "Specific Endurance",
    weekTitle: "Week 12 (Taper)",
    totalMiles: "52 miles",
    workouts: [
      {
        day: "Monday",
        am: "6 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "6 miles"
      },
      {
        day: "Tuesday",
        am: "9 miles w/ 5×1000m",
        pm: "-",
        notes: "1000m @ 4:45-4:50 w/ 400m jog",
        total: "9 miles"
      },
      {
        day: "Wednesday",
        am: "6 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "6 miles"
      },
      {
        day: "Thursday",
        am: "10 miles medium-long",
        pm: "-",
        notes: "Steady pace (10:30-10:40/mile)",
        total: "10 miles"
      },
      {
        day: "Friday",
        am: "4 miles easy",
        pm: "6 miles w/ 5 miles threshold",
        notes: "Threshold @ 9:00-9:10/mile",
        total: "10 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "16 miles long run w/ 5 miles at MP",
        pm: "-",
        notes: "MP segments @ 9:10-9:15/mile",
        total: "16 miles"
      }
    ]
  },
  {
    weekNumber: 13,
    phase: 4,
    phaseLabel: "Marathon-Specific Training",
    weekTitle: "Week 13",
    totalMiles: "66 miles",
    workouts: [
      {
        day: "Monday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Tuesday",
        am: "10 miles w/ 6 miles at HMP",
        pm: "-",
        notes: "HMP @ 9:20-9:30/mile",
        total: "10 miles"
      },
      {
        day: "Wednesday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Thursday",
        am: "12 miles medium-long",
        pm: "-",
        notes: "Steady pace (10:30-10:40/mile)",
        total: "12 miles"
      },
      {
        day: "Friday",
        am: "5 miles easy",
        pm: "10 miles w/ 5×1600m",
        notes: "1600m @ 7:55-8:05 w/ 2 min jog",
        total: "15 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "20 miles long run w/ 8 miles at MP",
        pm: "-",
        notes: "MP segments @ 9:05-9:10/mile",
        total: "20 miles"
      }
    ]
  },
  {
    weekNumber: 14,
    phase: 4,
    phaseLabel: "Marathon-Specific Training",
    weekTitle: "Week 14",
    totalMiles: "69 miles",
    workouts: [
      {
        day: "Monday",
        am: "8 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "8 miles"
      },
      {
        day: "Tuesday",
        am: "12 miles w/ 4×2 miles at MP",
        pm: "-",
        notes: "MP @ 9:05-9:10/mile w/ 3 min jog",
        total: "12 miles"
      },
      {
        day: "Wednesday",
        am: "8 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "8 miles"
      },
      {
        day: "Thursday",
        am: "12 miles medium-long",
        pm: "-",
        notes: "Steady pace (10:25-10:35/mile)",
        total: "12 miles"
      },
      {
        day: "Friday",
        am: "5 miles easy",
        pm: "9 miles w/ 3×2 miles at HMP",
        notes: "HMP @ 9:20-9:30/mile w/ 3 min jog",
        total: "14 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "22 miles long run",
        pm: "-",
        notes: "Steady pace (10:45-10:55/mile)",
        total: "22 miles"
      }
    ]
  },
  {
    weekNumber: 15,
    phase: 4,
    phaseLabel: "Marathon-Specific Training",
    weekTitle: "Week 15 (Peak Volume)",
    totalMiles: "72 miles",
    workouts: [
      {
        day: "Monday",
        am: "8 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "8 miles"
      },
      {
        day: "Tuesday",
        am: "14 miles w/ 8 miles progression",
        pm: "-",
        notes: "Start easy, finish at MP",
        total: "14 miles"
      },
      {
        day: "Wednesday",
        am: "8 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "8 miles"
      },
      {
        day: "Thursday",
        am: "12 miles medium-long",
        pm: "-",
        notes: "Steady pace (10:20-10:30/mile)",
        total: "12 miles"
      },
      {
        day: "Friday",
        am: "4 miles easy",
        pm: "8 miles w/ 6×1000m",
        notes: "1000m @ 4:40-4:45 w/ 400m jog",
        total: "12 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "24 miles long run",
        pm: "-",
        notes: "Steady pace (10:40-10:50/mile)",
        total: "24 miles"
      }
    ]
  },
  {
    weekNumber: 16,
    phase: 4,
    phaseLabel: "Marathon-Specific Training",
    weekTitle: "Week 16",
    totalMiles: "65 miles",
    workouts: [
      {
        day: "Monday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Tuesday",
        am: "16 miles w/ middle 12 at MP",
        pm: "-",
        notes: "MP @ 9:05-9:10/mile",
        total: "16 miles"
      },
      {
        day: "Wednesday",
        am: "7 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "7 miles"
      },
      {
        day: "Thursday",
        am: "10 miles medium-long",
        pm: "-",
        notes: "Steady pace (10:20-10:30/mile)",
        total: "10 miles"
      },
      {
        day: "Friday",
        am: "4 miles easy",
        pm: "8 miles w/ 8×800m",
        notes: "800m @ 3:40-3:45 w/ 400m jog",
        total: "12 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "20 miles long run w/ 14 miles at MP",
        pm: "-",
        notes: "MP @ 9:05-9:10/mile",
        total: "20 miles"
      }
    ]
  },
  {
    weekNumber: 17,
    phase: 4,
    phaseLabel: "Marathon-Specific Training",
    weekTitle: "Week 17 (Initial Taper)",
    totalMiles: "52 miles",
    workouts: [
      {
        day: "Monday",
        am: "6 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "6 miles"
      },
      {
        day: "Tuesday",
        am: "10 miles w/ 3×2 miles at MP-10 sec",
        pm: "-",
        notes: "MP-10 @ 8:55-9:00/mile w/ 3 min jog",
        total: "10 miles"
      },
      {
        day: "Wednesday",
        am: "6 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "6 miles"
      },
      {
        day: "Thursday",
        am: "8 miles medium-long",
        pm: "-",
        notes: "Steady pace (10:20-10:30/mile)",
        total: "8 miles"
      },
      {
        day: "Friday",
        am: "4 miles easy",
        pm: "6 miles w/ 6×400m",
        notes: "400m @ 1:42-1:45 w/ 400m jog",
        total: "10 miles"
      },
      {
        day: "Saturday",
        am: "Rest day",
        pm: "-",
        notes: "Focus on recovery",
        total: "0 miles"
      },
      {
        day: "Sunday",
        am: "16 miles long run w/ 6 miles at MP",
        pm: "-",
        notes: "MP @ 9:05-9:10/mile",
        total: "16 miles"
      }
    ]
  },
  {
    weekNumber: 18,
    phase: 4,
    phaseLabel: "Marathon-Specific Training",
    weekTitle: "Week 18 (Final Taper)",
    totalMiles: "30 miles + Marathon",
    workouts: [
      {
        day: "Monday",
        am: "5 miles easy",
        pm: "-",
        notes: "Add strides (6×100m)",
        total: "5 miles"
      },
      {
        day: "Tuesday",
        am: "5 miles w/ 3×1 mile at MP",
        pm: "-",
        notes: "MP @ 9:05-9:10/mile",
        total: "5 miles"
      },
      {
        day: "Wednesday",
        am: "5 miles easy",
        pm: "-",
        notes: "Add strides (4×100m)",
        total: "5 miles"
      },
      {
        day: "Thursday",
        am: "4 miles w/ 6×30 sec strides",
        pm: "-",
        notes: "Strides @ 5K effort",
        total: "4 miles"
      },
      {
        day: "Friday",
        am: "3 miles very easy",
        pm: "-",
        notes: "Super easy pace",
        total: "3 miles"
      },
      {
        day: "Saturday",
        am: "2 miles very easy + 4×100m strides",
        pm: "-",
        notes: "Loosen up legs",
        total: "2 miles"
      },
      {
        day: "Sunday",
        am: "MARATHON",
        pm: "-",
        notes: "Target: 3:58:30-4:00:00",
        total: "26.2 miles"
      }
    ]
  }
];

// Function to get all week numbers
export const getAllWeekNumbers = () => {
  return trainingPlan.map(week => week.weekNumber);
};

// Function to get a specific week by number
export const getWeekByNumber = (weekNumber: number): WeekType | undefined => {
  return trainingPlan.find(week => week.weekNumber === weekNumber);
};

// Function to get phase information for a week
export const getPhaseForWeek = (weekNumber: number): PhaseType | undefined => {
  return phases.find(phase => phase.weeks.includes(weekNumber));
};

