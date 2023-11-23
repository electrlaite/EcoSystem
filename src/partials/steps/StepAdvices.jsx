import React, { useState } from 'react';
import { useGame } from "../../contextes/GameContext";
import Tooltip from "../../components/Tooltip";

function StepAdvices() {
    const { gameData } = useGame();
    const [checkedAdvices, setCheckedAdvices] = useState(new Set());

    const toggleAdvice = (index) => {
        setCheckedAdvices(prevCheckedAdvices => {
            const newCheckedAdvices = new Set(prevCheckedAdvices);
            if (newCheckedAdvices.has(index)) {
                newCheckedAdvices.delete(index);
            } else {
                newCheckedAdvices.add(index);
            }
            return newCheckedAdvices;
        });
    };

    return (
        <div className="flex flex-col col-span-full sm:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Conseils</h2>
            </header>
            <div className="space-y-4 p-4">
                {gameData.steps[gameData.currentStep].advices.map((advice, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-4">
                        <div className="flex items-center">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox w-5 h-5 rounded-full peer"
                                    checked={checkedAdvices.has(index)}
                                    onChange={() => toggleAdvice(index)}
                                />
                                <span className={`font-medium text-slate-800 dark:text-slate-100 peer-checked:line-through ml-2`}>{advice.title}</span>
                                <Tooltip className="ml-2" size="lg">
                                    <div className="text-sm">{advice.description}</div>
                                </Tooltip>
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StepAdvices;
