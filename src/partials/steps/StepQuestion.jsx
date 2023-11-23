import arrowIcon from "../../images/icon-01.svg";
import React, {useEffect} from "react";
import {useGame} from "../../contextes/GameContext";
import { Icon } from '@iconify/react';
import StepConfig from "./StepConfig";

let croissance = [1, 1, 1, 1.2, 1.3, 1.5, 1.5, 1.2, 0.9, 0.7]
function StepQuestion(){
    let {gameData, setGameData} = useGame();
    let currentStep = gameData.steps[gameData.currentStep];
    let choices = currentStep.choices;
    let [selectedChoice, setSelectedChoice] = React.useState(null);

    let validable = () => {
        switch (gameData.currentStep) {
            case 0:
                return !(Object.values(gameData.competences).every(value => value >= 1) &&
                    gameData.competences.argent +
                    gameData.competences.famille +
                    gameData.competences.polyvalence +
                    gameData.competences.motivation +
                    gameData.competences.strategie === 25);
                break;
                default:
                    return selectedChoice === null;
        }
    }
    let nextStep = () => {
        setSelectedChoice(null);
        let prevGameData = {...gameData};
            // Copier les valeurs actuelles de stats pour le step suivant
            let updatedStats = { ...prevGameData.stats };
            Object.keys(updatedStats).forEach(key => {
                let lastValue = updatedStats[key][updatedStats[key].length - 1];
                updatedStats[key][updatedStats[key].length] = lastValue;
            });

            let impactVentes = 1;
            let impactPrice = 1;
            let updatedComp = { ...prevGameData.competences };
            console.log("currentStep", updatedComp);
            updatedComp.motivation -=1;
            console.log("currentStepbis", updatedComp);
            switch (gameData.currentStep) {
                case 2:
                    if(prevGameData.config.domaine != "vente") updatedStats.ventes[updatedStats.ventes.length - 1] = updatedStats.ventes[updatedStats.ventes.length - 1]/10;
                    console.log("TRIGGER2", currentStep);
                    break;
                case 3:
                    console.log("TRIGGER3", currentStep);
                    if(prevGameData.config.accompagnement == "mentor") {
                        updatedComp.polyvalence = updatedComp.polyvalence + 3;
                        updatedComp.motivation = updatedComp.motivation + 5;
                        updatedComp.strategie = updatedComp.strategie + 3;
                    }
                    else if(prevGameData.config.accompagnement == "classic") {
                        updatedComp.polyvalence = updatedComp.polyvalence + 1;
                        updatedComp.motivation = updatedComp.motivation + 3;
                        updatedComp.strategie = updatedComp.strategie + 2;
                    }
                    if(gameData.config.domaine == "vente") {
                        updatedStats.ventes[updatedStats.ventes.length - 1] = updatedStats.ventes[updatedStats.ventes.length - 1] + 1000;
                    }
                    else {
                        updatedStats.ventes[updatedStats.ventes.length - 1] = updatedStats.ventes[updatedStats.ventes.length - 1] + 10;
                    }
                    break;
                case 5:
                    console.log("TRIGGER5", currentStep);
                    if(gameData.config.marketing == "qualite"){
                        impactPrice += Math.random();
                    }
                    else if(gameData.config.marketing == "quantite"){
                        impactVentes += Math.random();
                    }
                    break;
                case 6:
                    console.log("TRIGGER6", currentStep);
                    if(gameData.config.management == "prime"){
                        impactVentes += (Math.random()/2);
                    }
                    break;
                case 7:
                    console.log("TRIGGER7", currentStep);
                    if(gameData.config.investissement == "100k"){
                        updatedComp.polyvalence = updatedComp.polyvalence + 1;
                        updatedComp.motivation = updatedComp.motivation + 3;
                        updatedComp.strategie = updatedComp.strategie + 2;
                    }
                    else if(gameData.config.investissement == "1m"){
                        updatedComp.polyvalence = updatedComp.polyvalence + 3;
                        updatedComp.motivation = updatedComp.motivation + 5;
                        updatedComp.strategie = updatedComp.strategie + 3;
                    }
            }
            console.log("updatedStats before", updatedStats);

            let addFees = prevGameData.config.accompagnement == "mentor" ? 0.1 : prevGameData.config.accompagnement == "classic" ? 0.05 : 0;
            updatedStats.ventes[updatedStats.ventes.length - 1] = Math.round((((updatedStats.ventes[updatedStats.ventes.length - 1] * croissance[prevGameData.currentStep]) * (1 + (prevGameData.competences.polyvalence / 10 + (prevGameData.competences.strategie * 2) / 10 + prevGameData.competences.motivation/10) / 4))*((updatedStats.employes[updatedStats.employes.length - 1]/10)+1))*impactVentes);

            let tauxDebt = prevGameData.config.accompagnement == "mentor" ? 1 : prevGameData.config.accompagnement == "classic" ? 1.01 : 0.06;

            let prixProd = Math.round(((prevGameData.config.domaine == "vente" ? 100 : 1000) * (1+((prevGameData.competences.polyvalence/10 + (prevGameData.competences.strategie*2)/10)/3)))*impactPrice);

            let fraisEmployes = updatedStats.employes[updatedStats.employes.length - 1] * 6000;

            let fraisProd = Math.round((30 / ((prevGameData.competences.strategie == 0 ? 1 : prevGameData.competences.strategie / 30)) *updatedStats.ventes[updatedStats.ventes.length - 1]) + fraisEmployes);

            let refundDebt = Math.round((updatedStats.dettes[updatedStats.dettes.length - 1]*tauxDebt + updatedStats.dettes[updatedStats.dettes.length - 1]) / (prevGameData.steps.length - prevGameData.currentStep+1 + 10));
            updatedStats.dettes[updatedStats.dettes.length - 1] -= refundDebt;

            let tax = (updatedStats.ventes[updatedStats.ventes.length - 1]*prixProd - fraisProd) *0.2;

            let fraisSuivi = ((updatedStats.ventes[updatedStats.ventes.length - 1]*prixProd - fraisProd) - tax) * addFees;

            updatedStats.ca[updatedStats.ca.length - 1] = updatedStats.ca[updatedStats.ca.length - 1] + updatedStats.ventes[updatedStats.ventes.length - 1]*prixProd;

            updatedStats.charges[updatedStats.charges.length - 1] = updatedStats.charges[updatedStats.charges.length - 1] + refundDebt + fraisProd + tax + fraisSuivi;

            updatedStats.argent[updatedStats.argent.length - 1] +=  updatedStats.ventes[updatedStats.ventes.length - 1]*prixProd - updatedStats.charges[updatedStats.charges.length - 1];

            console.log("tax", tax, "fraisSuivi", fraisSuivi, "fraisProd", fraisProd, "refundDebt", refundDebt, "prixProd", prixProd, "fraisEmployes", fraisEmployes, "tauxDebt", tauxDebt, "impactPrice", impactPrice, "impactVentes", impactVentes, "addFees", addFees);
            console.log("updatedStats", updatedStats, updatedComp);

            prevGameData.currentStep = prevGameData.currentStep + 1;
            prevGameData.stats = updatedStats;
            prevGameData.competences = updatedComp;

            setGameData(prevGameData);
    }

    function selectChoice(choiceIndex) {
        setSelectedChoice(choiceIndex);
        let choice = currentStep.choices[choiceIndex];

        if (!choice || !choice.impact) {
            console.error("Invalid choice or choice does not have an impact");
        }
        console.log(gameData);
        let newStats = { ...gameData.stats };

        for (let [statKey, impact] of Object.entries(choice.impact)) {
            let lastValue = newStats[statKey][newStats[statKey].length-2];

            switch (impact.type) {
                case 'add':
                    lastValue += impact.value;
                    break;
                case 'multiply':
                    lastValue *= impact.value;
                    break;
                case 'divide':
                    lastValue /= impact.value;
                    break;
                default:
                    console.error("Unknown impact type");
                    break;
            }

            if (newStats[statKey]) {
                newStats[statKey][gameData.currentStep+1] = lastValue; // Mettre à jour la valeur pour l'étape suivante
            }
        }

        let newConfig = { ...gameData.config };
        if(choice.configImpact){
            for (let [statKey, configImpact] of Object.entries(choice.configImpact)) {
                newConfig[statKey] = configImpact;
            }
        }


        setGameData(prevGameData => ({
            ...prevGameData,
            stats: newStats,
            config: newConfig
        }));
        console.log(gameData.stats)
    }

    return (
        <div className="flex flex-col col-span-full sm:col-span-12 xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-5">
            <div>
                <header className="flex justify-between items-start mb-2">
                    {/* Icon */}
                    <img src={arrowIcon} width="32" height="32" alt="Icon 01" />
                    {/* Menu button */}
                </header>
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">{currentStep.description}</h2>
                <div>
                    {currentStep.help && (
                        <div className="flex flex-col space-y-4 p-2 border-2 mb-5">
                            <h3 className="font-bold">Aide : </h3>
                            {Object.entries(currentStep.help).map(([key, value]) => (
                                <div key={key} className="p-4 border border-gray-200 rounded shadow-sm">
                                    <h3 className="text-lg font-semibold">{key}</h3>
                                    <p className="text-gray-600">{value}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <form>
                    <div className="sm:flex space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
                        {choices.map((choice, index) => (
                            <label key={choice.id} className="flex-1 relative block cursor-pointer" onClick={() => selectChoice(index)}>
                                <input type="radio" name="radio-buttons" className="peer sr-only" />
                                <div className="h-full text-center bg-white dark:bg-slate-800 px-4 py-6 rounded border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm duration-150 ease-in-out">
                                    <Icon icon={choice.icon} className="inline-flex w-10 h-10 shrink-0 mb-2" />
                                    <div className="font-medium text-slate-800 dark:text-slate-100 mb-1">{choice.title}</div>
                                    <div className="text-sm">{choice.description}</div>
                                </div>
                                <div className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 dark:peer-checked:border-indigo-500 rounded pointer-events-none" aria-hidden="true"></div>
                            </label>
                        ))}
                    </div>
                        {gameData.currentStep === 0 && (
                            <div className="sm:flex space-y-3 sm:space-y-0 sm:space-x-4 mb-8 w-full">
                                <StepConfig />
                            </div>
                        )}
                    </form>
                    <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white disabled:bg-slate-500 disabled:hover:bg-slate-500" disabled={validable()} onClick={nextStep}>Passer à l'étape suivante</button>
                </div>
            </div>
        </div>
    );
}

export default StepQuestion;