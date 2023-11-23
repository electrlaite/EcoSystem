import React from 'react';


function MessagesSidebar({
                             chatData,
                             onSelectChat,
                             selectedChat,
                         }) {

    return (
        <div
            id="messages-sidebar"
            className={`absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transition-transform duration-200 ease-in-out`}
        >
            <div className="sticky top-16 bg-white dark:bg-slate-900 overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-slate-200 dark:border-slate-700 md:w-72 xl:w-80">
                {/* #Marketing group */}
                <div>
                    {/* Group body */}
                    <div className="px-5 py-4">
                        {/* Direct messages */}
                        <div className="mt-4">
                            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-3">Contacts disponibles</div>
                            <ul className="mb-6 space-y-1">
                                {
                                    chatData.map((chat, index) => (
                                        <li className="-mx-2" key={"chat"+index}>
                                            <button className={`flex items-center justify-between w-full p-2 rounded ${index === selectedChat ? "bg-indigo-200" : ""}`} onClick={() => {onSelectChat(index)}}>
                                                <div className="flex items-center truncate">
                                                    <div className="truncate">
                                                        <span className="text-sm font-medium text-slate-800 dark:text-slate-100">{chat.name}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center ml-2">
                                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                </div>
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* Channels
            <Channels />*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessagesSidebar;