import { ArrowLeftIcon, Bar3Icon, DeleteIcon, EditIcon, PlusIcon, ResetIcon, XIcon } from "./Icons"

// export const IconsButton = ({ onClick, icon }) => {
//     return (
//         <button onClick={onClick}
//             className="border border-gray-300 rounded-md p-1 text-gray-600 text-sm items-center cursor-pointer hover:bg-gray-100">
//             {icon}
//         </button>
//     )
// }

// export const IconTextButton_Black = ({ icon, children, onClick }) => {
//     return (
//         <button onClick={onClick}
//             className=" text-white text-xs mt-3 inline-flex items-center px-4 py-1.5 border border-transparent font-medium rounded-md bg-gray-900 hover:bg-gray-800"
//         >
//             {icon}
//             <span className="ml-1">{children}</span>
//         </button>
//     );
// };

// export const IconTextButton_White = ({ icon, children, onClick }) => {
//     return (
//         <button onClick={onClick}
//             className="border border-gray-300 rounded-md px-4 py-1 text-gray-600 text-sm flex items-center cursor-pointer hover:bg-gray-100"
//         >
//             {icon}
//             <span className="ml-1">{children}</span>
//         </button>
//     );
// };

export const CloseButton = ({ onClick }) => {
  return (
    <button onClick={onClick}
      className="border border-gray-300 rounded-md p-1 text-gray-600 text-sm items-center cursor-pointer hover:bg-gray-100">
      <XIcon className={'h-5 w-5'} />
    </button>
  )
}

export const ResetButton = ({ onClick }) => {
  return (
    <button onClick={onClick}
      className="border border-gray-300 rounded-md p-1 text-gray-600 text-sm items-center cursor-pointer hover:bg-gray-100">
      <ResetIcon className={'h-3 w-3'} />
    </button>
  )
}

export const AddButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick}
      className=" text-white text-xs mt-3 inline-flex items-center px-4 py-1.5 border border-transparent font-medium rounded-md bg-gray-900 hover:bg-gray-800"
    >
      <PlusIcon className="h-3 w-3" />
      <span className="ml-1">{children}</span>
    </button>
  );
};

export const EditButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick}
      className=" text-white text-xs mt-3 inline-flex items-center px-4 py-1.5 border border-transparent font-medium rounded-md bg-gray-900 hover:bg-gray-800"
    >
      <EditIcon className={'h-3 w-3'} />
      <span className="ml-1">{children}</span>
    </button>
  );
};

export const BackButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick}
      className="border border-gray-300 rounded-md px-4 py-1 text-gray-600 text-sm flex items-center cursor-pointer hover:bg-gray-100"
    >
      <ArrowLeftIcon className="h-3 w-3" />
      <span className="ml-1">{children}</span>
    </button>
  );
};

export const DeleteButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick}
      className="text-xs mt-3 inline-flex items-center px-4 py-1.5 border border-gray-300 font-medium rounded-md hover:border-red-200 hover:text-red-200"
    >
      <DeleteIcon className="h-3 w-3" />
      <span className="ml-1">{children}</span>
    </button>
  );
};

export const BgBlackButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick}
      className='text-white text-xs mt-3 inline-flex items-center px-4 py-1.5 border border-transparent font-medium rounded-md bg-gray-900 hover:bg-gray-800'
    >
      <span className="ml-1">{children}</span>
    </button>
  );
};

export const BgWhiteButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick}
      className='text-xs mt-3 inline-flex items-center px-4 py-1.5 border border-gray-300 font-medium rounded-md hover:bg-gray-200'
    >
      <span className="ml-1">{children}</span>
    </button>
  );
};
