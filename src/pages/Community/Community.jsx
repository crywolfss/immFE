const Community = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 bg-white p-4 shadow rounded-lg">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Cari Grup"
                  className="w-full p-2 border rounded"
                />
              </div>
              <h2 className="text-xl font-bold mb-4">Group</h2>
              <ul>
                <li className="mb-2">
                  <a href="#" className="flex items-center space-x-2">
                    <img
                      src="src/assets/community/group1.svg"
                      alt="Group"
                      className="w-10 h-10 rounded-full"
                    />
                    <span>Community Investor</span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center space-x-2">
                    <img
                      src="src/assets/community/group2.svg"
                      alt="Group"
                      className="w-10 h-10 rounded-full"
                    />
                    <span>Socipreneur Fams</span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center space-x-2">
                    <img
                      src="src/assets/community/group3.svg"
                      alt="Group"
                      className="w-10 h-10 rounded-full"
                    />
                    <span>Young Impactmakers</span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center space-x-2">
                    <img
                      src="src/assets/community/group4.svg"
                      alt="Group"
                      className="w-10 h-10 rounded-full"
                    />
                    <span>Impact Hub</span>
                  </a>
                </li>
              </ul>
              <button className="w-full bg-blue-500 text-white py-2 rounded mt-4">
                Buat Grup Baru
              </button>
            </div>

            {/* Main Content */}
            <div className="w-3/4 pl-4">
              <div className="mb-4 p-4 bg-white shadow rounded-lg">
                <textarea
                  className="w-full p-2 border rounded"
                  placeholder="Bagikan Pengalaman atau Pertanyaan..."
                />
                <div className="text-right mt-2">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded">
                    Tambahkan Foto
                  </button>
                </div>
              </div>

              {/* Posts */}
              <div className="space-y-4">
                <div className="bg-white p-4 shadow rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="User"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Justin Hubner</h4>
                      <p className="text-sm text-gray-500">1 hour ago</p>
                    </div>
                  </div>
                  <p>Happy banget belajar Bootcamp Dasar...</p>
                  <div className="flex space-x-4 mt-2">
                    <button className="flex items-center space-x-1">
                      <span className="text-blue-500">Suka</span>
                    </button>
                    <button className="flex items-center space-x-1">
                      <span className="text-blue-500">Balas</span>
                    </button>
                  </div>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="User"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Rafael Struick</h4>
                      <p className="text-sm text-gray-500">3 hours ago</p>
                    </div>
                  </div>
                  <p>Sangat seru belajar Sociopreneur Dasar...</p>
                  <div className="flex space-x-4 mt-2">
                    <button className="flex items-center space-x-1">
                      <span className="text-blue-500">Suka</span>
                    </button>
                    <button className="flex items-center space-x-1">
                      <span className="text-blue-500">Balas</span>
                    </button>
                  </div>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="User"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Rizky Ridho</h4>
                      <p className="text-sm text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                  <p>Seru banget mengikuti Bootcamp Sociopreneur...</p>
                  <div className="flex space-x-4 mt-2">
                    <button className="flex items-center space-x-1">
                      <span className="text-blue-500">Suka</span>
                    </button>
                    <button className="flex items-center space-x-1">
                      <span className="text-blue-500">Balas</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-1/4 pl-4">
              <div className="bg-white p-4 shadow rounded-lg mb-4">
                <h2 className="text-xl font-bold mb-4">Chats</h2>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="flex items-center space-x-2">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="User"
                        className="w-10 h-10 rounded-full"
                      />
                      <span>Komunitas Lorem Ipsum</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="flex items-center space-x-2">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="User"
                        className="w-10 h-10 rounded-full"
                      />
                      <span>Loren Mays UX/UI</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="flex items-center space-x-2">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="User"
                        className="w-10 h-10 rounded-full"
                      />
                      <span>Isoum May UX/UI</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="flex items-center space-x-2">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="User"
                        className="w-10 h-10 rounded-full"
                      />
                      <span>Mentor May UX/UI</span>
                    </a>
                  </li>
                </ul>
                <button className="w-full bg-blue-500 text-white py-2 rounded mt-4">
                  Mulai Chat Baru
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;
