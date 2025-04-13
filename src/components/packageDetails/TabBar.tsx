const TabBar = ({tabs,activeTab, handleUpdateTab}) => {

  return (
    <div className="w-full bg-gray-50 shadow-md border-white">
  <div className="max-w-4xl">
    <nav className="flex">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleUpdateTab(tab.id)}
          className={`flex-1 px-4 py-2 text-sm sm:text-base font-medium border-b-2 flex items-center justify-center transition duration-200 ${
            activeTab === tab.id
              ? 'border-blue-500 text-blue-600 bg-white'
              : 'border-transparent text-gray-500 hover:text-blue-500 hover:border-blue-300'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  </div>
</div>

  );
};

export default TabBar;
