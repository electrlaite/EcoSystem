import React from 'react';
import { useGame } from "../../contextes/GameContext";

function DashboardCard07() {
  const { gameData, setGameData } = useGame();
  const { stats, competences } = gameData;
  const currentStep = gameData.currentStep;

  const handleEmployeeChange = (e) => {
    const newCount = Math.max(0, Math.min(currentStep*5, Number(e.target.value))); // Entre 0 et 10
    setGameData(prevGameData => ({
      ...prevGameData,
      stats: {
        ...prevGameData.stats,
        employes: prevGameData.stats.employes.map((v, i) => i === currentStep ? newCount : v)
      }
    }));
  };

  const handleNameChange = (e) => {
    const newName = e.target.value.slice(0, 20); // Limite à 20 caractères
    setGameData(prevGameData => ({
      ...prevGameData,
      config: {
        ...prevGameData.config,
        name: newName
      }
    }));
  };

  return (
      <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">Autres données</h2>
        </header>
        <div className="p-3">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              {/* Table body */}
              <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
              {/* Rows for Stats */}
              <tr><td colSpan={2} className={"text-center font-bold"}>Stats</td></tr>
              {Object.entries(stats).map(([statName, statValues]) => (
                  <tr key={statName}>
                    <td className="p-2">{statName.charAt(0).toUpperCase() + statName.slice(1)}</td>
                    <td className="p-2">{statValues[currentStep]}</td>
                  </tr>
              ))}
              <tr><td colSpan={2} className={"text-center font-bold"}>Compétences</td></tr>
              {/* Rows for Competences */}
              {Object.entries(competences).map(([competenceName, competenceValue]) => (
                  <tr key={competenceName}>
                    <td className="p-2">{competenceName.charAt(0).toUpperCase() + competenceName.slice(1)}</td>
                    <td className="p-2">{competenceValue}</td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">Configuration</h2>
        </header>
        <div className="p-3">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              {/* Table body */}
              <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
              <tr>
                <td className="p-2">Employés</td>
                <td className="p-2">
                  <input
                      type="number"
                      value={stats.employes[currentStep]}
                      onChange={handleEmployeeChange}
                      min="0"
                      max={currentStep * 5}
                      className="border border-slate-300 rounded p-1"
                  />
                </td>
              </tr>
              {/* Ligne pour le nom de l'entreprise */}
              <tr>
                <td className="p-2">Nom de l'entreprise</td>
                <td className="p-2">
                  <input
                      type="text"
                      value={gameData.config.name}
                      onChange={handleNameChange}
                      maxLength={20}
                      className="border border-slate-300 rounded p-1 w-full"
                  />
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default DashboardCard07;
