import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-03.svg';
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';
import {useGame} from "../../contextes/GameContext";
import {getVariationClass} from "../../pages/utility/utils";

function DashboardCard03() {
  const {gameData, setGameData} = useGame();
  const currentStep = gameData.currentStep;
  const stats = gameData.stats;
  const previousCa = stats.ca[currentStep - 1] ? stats.ca[currentStep - 1] : 0;
  let variationCaPercent = ((stats.ca[currentStep] - previousCa) / previousCa * 100) || 0;



  const chartData = {
    labels: Array.from({ length: stats.argent.length }, (_, index) => `Step${index + 1}`),
    datasets: [
      // Indigo line
      {
        data: stats.ca,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
      // Gray line
      {
        data: stats.charges,
        borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.25)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
    ],
  };

  return (
      <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        <div className="px-5 pt-5">
          <header className="flex justify-between items-start mb-2">
            {/* Icon */}
            <img src={Icon} width="32" height="32" alt="Icon 01" />
            {/* Menu button */}
          </header>
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Chiffre d'affaire</h2>
          <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">CA et charges</div>
          <div className="flex items-start">
            <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">${stats.ca[currentStep]}</div>
            <div className={`text-sm font-semibold text-white px-1.5 ${getVariationClass(variationCaPercent)} rounded-full`}>{variationCaPercent}%</div>
          </div>
        </div>
        {/* Chart built with Chart.js 3 */}
        <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
          {/* Change the height attribute to adjust the chart height */}
          <LineChart data={chartData} width={389} height={128} />
        </div>
      </div>
  );
}

export default DashboardCard03;
