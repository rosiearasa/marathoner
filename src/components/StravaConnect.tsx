import React from 'react';
import { useWorkoutContext } from '../context/WorkoutContext';
import { Button } from '@/components/ui/button';

const STRAVA_CLIENT_ID = '161193'; // You would need to create a Strava API app and get a real client ID
const REDIRECT_URI = window.location.origin;

const StravaConnect: React.FC = () => {
  const { stravaAuth, disconnectStrava } = useWorkoutContext();

  const handleStravaConnect = () => {
    const stravaAuthUrl = `https://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&response_type=code&scope=activity:read_all`;
    
    window.location.href = stravaAuthUrl;
  };

  if (stravaAuth?.isConnected) {
    return (
      <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
        <div className="flex items-center gap-3">
          {stravaAuth.profilePic && (
            <img 
              src={stravaAuth.profilePic} 
              alt="Strava Profile"
              className="w-10 h-10 rounded-full"
            />
          )}
          <div>
            <div className="font-medium">Connected to Strava</div>
            <div className="text-sm text-muted-foreground">{stravaAuth.athleteName}</div>
          </div>
        </div>
        <Button 
          variant="outline" 
          className="ml-auto"
          onClick={() => disconnectStrava()}
        >
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-4 bg-secondary rounded-lg">
      <div>
        <h3 className="font-medium">Connect with Strava</h3>
        <p className="text-sm text-muted-foreground">
          Connect your Strava account to automatically track your runs
        </p>
      </div>
      <Button
        className="bg-[#FC4C02] hover:bg-[#E34402] text-white"
        onClick={handleStravaConnect}
      >
        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
        </svg>
        Connect with Strava
      </Button>
    </div>
  );
};

export default StravaConnect;
