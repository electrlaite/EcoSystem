import React from 'react';
import Tooltip from '../../components/Tooltip';
import BarChart from '../../charts/BarChart02';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';
import {useGame} from "../../contextes/GameContext";
import {getVariationClass} from "../../pages/utility/utils";

function DashboardCard09() {
  const {gameData, setGameData} = useGame();
  const currentStep = gameData.currentStep;
  const stats = gameData.stats;
  const previousCa = stats.ca[currentStep - 1] ? stats.ca[currentStep - 1] : 0;
  const previousCharges = stats.charges[currentStep - 1] ? stats.charges[currentStep - 1] : 0;
  const previousBenef = previousCa + previousCharges;
  let variationBenefPercent = (((stats.ca[currentStep] + stats.charges) - previousBenef) / previousBenef * 100) || 0;
  const negativeCharges = stats.charges.map(charge => -Math.abs(charge));

  const chartData = {
    labels: Array.from({ length: stats.ca.length }, (_, index) => `Étape ${index + 1}`),
    datasets: [
      // Light blue bars
      {
        label: 'CA',
        data: stats.ca,
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'Charges',
        data: negativeCharges,
        backgroundColor: tailwindConfig().theme.colors.indigo[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[300],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">CA VS Charges</h2>
        <Tooltip className="ml-2" size="lg">
          <div className="text-sm">Ceci correspond à votre bénéfice</div>
        </Tooltip>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">${stats.ca[currentStep] + stats.charges[currentStep]}</div>
          <div className={`text-sm font-semibold text-white px-1.5 ${getVariationClass(variationBenefPercent)} rounded-full`}>{variationBenefPercent}%</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData} width={595} height={248} />
      </div>
    </div>
  );
}

export default DashboardCard09;
