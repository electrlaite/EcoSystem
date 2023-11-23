import React, { useState, useEffect } from 'react';
import {useGame} from "../../contextes/GameContext";

function StepConfig() {
    const { gameData, setGameData } = useGame();
    const [competences, setCompetences] = useState(gameData.competences);
    const [totalPoints, setTotalPoints] = useState(25);

    useEffect(() => {
        // Mettre à jour le total des points lors de la modification des compétences
        const totalUsedPoints = Object.values(competences).reduce((sum, value) => sum + value, 0);
        setTotalPoints(25 - totalUsedPoints);
    }, [competences]);

    const handleSliderChange = (competence, value) => {
        const updatedValue = Number(value);
        const updatedCompetences = {
            ...competences,
            [competence]: updatedValue
        };
        const totalUsedPoints = Object.values(updatedCompetences).reduce((sum, val) => sum + val, 0);

        if (totalUsedPoints <= 25) {
            setCompetences(updatedCompetences);

            // Mise à jour de 'argent' dans 'stats' si la compétence modifiée est 'argent'
            if (competence === 'argent') {
                const newArgentValue = updatedValue * 10000; // Calcul du nouveau montant d'argent
                setGameData(prevGameData => ({
                    ...prevGameData,
                    stats: {
                        ...prevGameData.stats,
                        argent: [newArgentValue] // Ajoute la nouvelle valeur à la fin du tableau
                    }
                }));
            }
        }
    };

    useEffect(() => {
        // Mettre à jour le contexte GameContext avec les nouvelles compétences
        setGameData({
            ...gameData,
            competences: competences
        });
    }, [competences]);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md w-full">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Répartir les points de compétence (Points restants : {totalPoints})</h2>
            {Object.entries(competences).map(([key, value]) => (
                <div key={key} className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={value}
                        onChange={(e) => handleSliderChange(key, e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                </div>
            ))}
        </div>

    );
}

export default StepConfig;
