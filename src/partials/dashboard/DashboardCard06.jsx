import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';
import {useGame} from "../../contextes/GameContext";

function DashboardCard06() {
  const { gameData, setGameData } = useGame();
  const { competences } = gameData;
  const chartData = {
    labels: ['Argent (initial)', 'Motivation', 'Famille', 'Strategie', "Polyvalence"],
    datasets: [
      {
        label: 'Niveau',
        data: [
          competences.argent, competences.motivation, competences.famille, competences.strategie, competences.polyvalence
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.green[500],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.pink[500],
          tailwindConfig().theme.colors.purple[500],
          tailwindConfig().theme.colors.red[500],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.green[600],
          tailwindConfig().theme.colors.blue[600],
          tailwindConfig().theme.colors.pink[600],
          tailwindConfig().theme.colors.purple[600],
          tailwindConfig().theme.colors.red[600],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Répartition des compétences</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default DashboardCard06;
