import React, { useState, useContext, useRef } from 'react';
import {useGame} from "../../contextes/GameContext";
import MessagesSidebar from "../messages/MessagesSidebar";
import MessagesBody from "../messages/MessagesBody";
import MessagesFooter from "../messages/MessagesFooter";


function StepChat() {
    const { gameData, setGameData } = useGame();
    const [selectedChat, setSelectedChat] = useState(0);
    const messageEndRef = useRef(null);
    const currentChat = gameData.steps[gameData.currentStep].chat[selectedChat];
    const [messages, setMessages] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [askedQuestions, setAskedQuestions] = useState([]);
    const [rewards, setRewards] = useState([]);


    const handleSelectChat = (chat) => {
        setSelectedChat(chat);
        console.log(chat, "selectedChat", gameData.steps[gameData.currentStep].chat[selectedChat]);
        setMessages([]);
        setAskedQuestions([]);
    };

    const handleAskQuestion = (questionIndex) => {
        const question = currentChat.questions[questionIndex];
        setDropdownOpen(false);

        setMessages((prevMessages) => [
            ...prevMessages,
            question.question,
            question.answer
        ]);

        // Vérifier et traiter les récompenses
        if (question.reward) {
            if(!question.reward.claimed) {
                updateCompetences(question.reward);
                setRewards((prevRewards) => [...prevRewards, {answer: question.answer, reward: question.reward}]);
            }
        }

        setAskedQuestions((prevAskedQuestions) => [...prevAskedQuestions, questionIndex]);
    };

    const updateCompetences = (reward) => {
        setGameData((prevGameData) => {
            const newCompetences = { ...prevGameData.competences };
            Object.entries(reward).forEach(([key, value]) => {
                if (newCompetences[key] !== undefined) {
                    newCompetences[key] += value;
                }
            });
            return {
                ...prevGameData,
                competences: newCompetences
            };
        });
    };


    return (
        <div className="flex flex-col col-span-full sm:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Chat</h2>
            </header>
        <main className="grow">
            <div className="relative flex h-full">
                {/* Messages sidebar */}
                <MessagesSidebar
                    chatData={gameData.steps[gameData.currentStep].chat}
                    onSelectChat={handleSelectChat}
                    selectedChat={selectedChat}
                />

                {/* Messages body */}
                <div className="grow flex flex-col">
                    <div className="grow px-4 sm:px-6 md:px-5 py-6">
                        <div className="flex justify-center">
                            <div className="inline-flex items-center justify-center text-xs text-slate-600 px-2.5 py-1 bg-white border border-slate-200 rounded-full font-bold">
                                {currentChat.name || 'Chat Name'}
                            </div>
                        </div>
                        <div className="flex items-start mb-4 last:mb-0">
                            <div>
                                <div className="text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-b-2 p-3 mb-1 text-center">
                                    {currentChat.description || 'Chat description'}
                                </div>
                            </div>
                        </div>
                        {/* Chat msg */}
                        <div className="flex items-start mb-4 last:mb-0">
                            <div>
                                <div className="text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-3 rounded-lg rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-md mb-1">
                                    Hey ! Que veux-tu savoir ?
                                </div>
                            </div>
                        </div>

                        {
                            messages.map((message, index) => (
                                <div key={"message"+index} className="flex items-start mb-4 last:mb-0">
                                    <div>
                                        <div className={`text-sm ${index%2 === 0 ? "bg-indigo-500 text-white border-transparent" : "bg-white border-slate-200 text-slate-800"} p-3 rounded-lg rounded-tl-none border shadow-md mb-1`}>
                                            {message}
                                        </div>
                                        {rewards.filter(reward => reward.answer === message && !reward.claimed).map((reward, rewardIndex) => (
                                            <div key={rewardIndex} className="flex justify-center mt-1">
                                                <div className="inline-flex items-center justify-center text-xs text-slate-600 px-2.5 py-1 bg-green-300 border border-slate-200 rounded-full font-bold">
                                                    Vous avez gagné en {Object.entries(reward.reward)
                                                    .filter(([key, _]) => key !== 'claimed')
                                                    .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)} (+${value})`)
                                                    .join(", ")}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="sticky bottom-0">
                        <div className="flex items-center justify-between bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 px-4 sm:px-6 md:px-5 h-16">
                            {/* Dropdown pour les questions */}
                            <div className="relative inline-flex w-full">
                                <button
                                    className="btn w-full justify-between bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-200"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    <span>Sélectionnez une question</span>
                                    <svg className="shrink-0 ml-1 fill-current text-slate-400" width="11" height="7" viewBox="0 0 11 7">
                                        <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
                                    </svg>
                                </button>
                                {dropdownOpen && (
                                    <div className="z-10 absolute bottom-full left-0 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1">
                                        {currentChat.questions.map((q, index) => (
                                            !askedQuestions.includes(index) && (
                                            <button
                                                key={index}
                                                className="flex items-center justify-between w-full hover:bg-slate-50 dark:hover:bg-slate-700/20 py-2 px-3 cursor-pointer"
                                                onClick={() => handleAskQuestion(index)}
                                            >
                                                <span>{q.question}</span>
                                            </button>
                                        )))}
                                        {
                                            (askedQuestions.length === currentChat.questions.length) && (
                                                <span className="flex items-center text-center justify-center w-full py-2 px-3">
                                                    <span>Aucune question disponible</span>
                                                </span>
                                            )
                                        }
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </div>
    );
}

export default StepChat;
