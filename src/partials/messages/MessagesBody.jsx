import React from 'react';

import User01 from '../../images/user-40-11.jpg';
import User02 from '../../images/user-40-12.jpg';
import ChatImage from '../../images/chat-image.jpg';

function MessagesBody({currentChat, messageEndRef}) {
  console.log(currentChat, "currentChatINBODY");
  return (
    <div className="grow px-4 sm:px-6 md:px-5 py-6">
      <div className="flex justify-center">
        <div className="inline-flex items-center justify-center text-xs text-slate-600 px-2.5 py-1 bg-white border border-slate-200 rounded-full font-bold">
          {currentChat.name || 'Chat Name'}
        </div>
      </div>
      <div className="flex items-start mb-4 last:mb-0">
        <div>
          <div className="text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-b-2 p-3 mb-1 text-center">
            {currentChat.description}
          </div>
        </div>
      </div>
      {/* Chat msg */}
      <div className="flex items-start mb-4 last:mb-0">
        <div>
          <div className="text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-3 rounded-lg rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-md mb-1">
            Hey ! Comment Pui-je t'aider ?
          </div>
        </div>
      </div>
      {/* Chat msg
      <div className="flex items-start mb-4 last:mb-0">
        <div>
          <div className="text-sm bg-indigo-500 text-white p-3 rounded-lg rounded-tl-none border border-transparent shadow-md mb-1">
            Hey Dominik Lamakani 👋<br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 🙌
          </div>
        </div>
      </div>

       Date separator */}
    </div>
  );
}

export default MessagesBody;
