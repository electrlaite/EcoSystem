import React, { useState } from 'react';

import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import {useGame} from "../contextes/GameContext";
import StepQuestion from "../partials/steps/StepQuestion";
import StepAdvices from "../partials/steps/StepAdvices";
import StepChat from "../partials/steps/StepChat";
import Banner2 from "../components/Banner2";

function Dashboard() {

    const {gameData, setGameData} = useGame();

  const isInGame = () => {
    console.log(gameData.competences.motivation > 0, gameData.competences.famille > 0, gameData.stats.argent[gameData.currentStep] >= 0, gameData.currentStep, "total", (gameData.competences.motivation > 0 && gameData.competences.famille > 0 && gameData.stats.argent[gameData.currentStep] >= 0) || gameData.currentStep === 0);
    return true;
  }

  const [banner2InfoOpen, setBanner2InfoOpen] = useState(true);


  return (
    <div className="flex h-[100dvh] overflow-hidden">

      {/* Sidebar */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {isInGame() && (
                <>

                  {/* Dashboard actions */}
                  <div className="grid grid-cols-12 gap-6 mb-12">

                    <StepQuestion />
                  </div>

                  {/* Cards */}
                  <Banner2 open={banner2InfoOpen} setOpen={setBanner2InfoOpen}>
                    En selectionnant vos choix, les informations de la carte ci-dessous vont changer. Ces informations sont des estimations. Des calculs sont effectués à chaque tour en prenant en compte vos compétences et du contexte.
                  </Banner2>
                  <div className="grid grid-cols-12 gap-6">

                    <DashboardCard01 />
                    <DashboardCard02 />
                    <DashboardCard03 />
                    <DashboardCard09 />
                    <DashboardCard04 />
                    <StepAdvices />
                    <StepChat />
                    <DashboardCard06 />
                    <DashboardCard07 />
                  </div>
                </>
            )}

          </div>
        </main>

      </div>

    </div>
  );
}

export default Dashboard;