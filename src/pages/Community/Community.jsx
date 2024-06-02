import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, PhotoIcon } from '@heroicons/react/24/solid';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const Community = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  });
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([
    {
      id: 1,
      user: 'Justin Hubner',
      text: 'Bagaimana Sociopreneur Mengukur Keberhasilan Dan Dampak Dari Usahanya?',
      time: '1 Minutes Ago'
    },
    {
      id: 2,
      user: 'Rafael Struick',
      text: 'Saya Masih Bingung Terkait Membuat Laporan Project Ini, Ada Yang Bisa Membantu?',
      time: '1 Minutes Ago',
    },
    {
      id: 3,
      user: 'Rizky Ridho',
      text: 'Bagaimana Sociopreneur Dapat Berkolaborasi Dengan Berbagai Pihak Untuk Mencapai Tujuan Bersama?',
      time: '1 Minutes Ago'
    }
  ]);

  const userImageUrl = 'src/assets/persons/person-1.jpg';

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handlePostQuestion = () => {
    // Logic to post the question
    console.log('Question posted:', question);
  };

  return (
    <div className="min-h-screen bg-white-100">
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex">
            {/* Sidebar Kiri */}
            <div className="w-1/4 pl-4 bg-white p-2 shadow rounded-lg mb-4">
            <div className="search-bar mb-4">
                <input
                  type="text"
                  placeholder="cari disini"
                  className="search-input w-full p-2 border rounded"
                  style={{ width: '255px' }}
                />
                <button className="search-button">
                  <MagnifyingGlassIcon className="icon" />
                </button>
              </div>
              <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold">Group</h2>
      <p className="text-sm font-semibold text-blue-600">
        <a href="/cari-grup">Jelajahi Grup</a>
      </p>
      </div>
              <ul>
              <li className="mb-5">
  <div className="flex items-center">
    <img
      src="src/assets/community/group1.svg"
      alt="Group"
      className="w-10 h-10 rounded-full"
    />
    <div className="flex flex-col ml-2">
      <span style={{ fontWeight: 'bold' }}>Community Investor</span>
      <span className="text-sm text-gray-500">100+ anggota</span>
    </div>
  </div>
</li>
<li className="mb-5">
  <div className="flex items-center">
    <img
      src="src/assets/community/group2.svg"
      alt="Group"
      className="w-10 h-10 rounded-full"
    />
    <div className="flex flex-col ml-2">
      <span style={{ fontWeight: 'bold' }}>Socipreneur Fams</span>
      <span className="text-sm text-gray-500">100+ anggota</span>
    </div>
  </div>
</li>
<li className="mb-5">
  <div className="flex items-center">
    <img
      src="src/assets/community/group3.svg"
      alt="Group"
      className="w-10 h-10 rounded-full"
    />
    <div className="flex flex-col ml-2">
      <span style={{ fontWeight: 'bold' }}>Young Impactmakers</span>
      <span className="text-sm text-gray-500">100+ anggota</span>
    </div>
  </div>
</li>
<li className="mb-2">
  <div className="flex items-center">
    <img
      src="src/assets/community/group4.svg"
      alt="Group"
      className="w-10 h-10 rounded-full"
    />
    <div className="flex flex-col ml-2">
      <span style={{ fontWeight: 'bold' }}>Impact Hub</span>
      <span className="text-sm text-gray-500">100+ anggota</span>
    </div>
  </div>
</li>

              </ul>
              <button className="w-full bg-blue-500 text-white font-bold py-2 rounded mt-4" style={{ backgroundColor: '#0F1F3E' }}>
              Buat Grup Baru +
              </button>
            </div>

            {/* Konten Utama */}
            <div className="w-2/4 pl-4">
              {/* Form Pertanyaan */}
              <div className="post-question">
                <div className="user-info">
                  <div className="h-10 w-10 bg-gray-200 rounded-full float-right mb-1 ml-1">
                    <img src={userImageUrl} alt="Profile" className="h-full w-full rounded-full object-cover" />
                  </div>
                  <span className="user-name ml-4">Nathan Tjoe A On</span>
                </div>
                <textarea
                  value={question}
                  onChange={handleQuestionChange}
                  placeholder="Bagikan Pengalaman atau Pertanyaan..."
                  className="question-input"
                />
                <div className="post-actions">
                  <button className="upload-photo-button">
                    <PhotoIcon className="upload-icon" />
                    Tambahkan Foto
                  </button>
                  <button className="post-button" onClick={handlePostQuestion}>
                    <svg className="send-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3v7l15 2-15 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Daftar Pertanyaan */}
              <div className="questions-list">
                {questions.map(q => (
                  <div key={q.id} className="question-card" style={{ cursor: 'pointer' }}>
                    <div className="question-header">
                      <div className="user-info">
                        <div className="h-16 w-16 bg-gray-200 rounded-full float-left mb-1 ml-1">
                          <img src={userImageUrl} alt="Profile" className="h-full w-full rounded-full object-cover " />
                        </div>
                        <div className="user-info-details">
                          <div className="user-details">
                            <span className="question-user ml-4">{q.user}</span>
                            <span className="question-time ml-4">{q.time}</span>
                          </div>
                        </div>
                        {q.user !== 'Nathan Tjoe A On' && (
                          <button className="hamburger-icon">
                            <svg className="hamburger" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12ZM10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12ZM19 12C19 13.1046 19.8954 14 21 14C22.1046 14 23 13.1046 23 12C23 10.8954 22.1046 10 21 10C19.89543 10 19 10.8954 19 12Z" fill="#2A64F6"/>
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="question-text">{q.text}</div>
                    {q.images && (
                      <div className="question-images">
                        {q.images.map((img, index) => (
                          <img key={index} src={img} alt={`Question ${q.id} img ${index}`} className="question-image"/>
                        ))}
                      </div>
                    )}
                    <div className="question-actions" style={{ display: 'flex', alignItems: 'center' }}>
                      <button className="like-button"><span><i className="fas fa-thumbs-up" style={{ color: '#2a64f6' }}></i> Suka</span></button>
                      <button className="comment-button" style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span><i className="fas fa-comment" style={{ color: '#2a64f6' }}></i> Komentar</span></button>
                      <button className="share-button"><span><i className="fas fa-share" style={{ color: '#2a64f6' }}></i> Bagikan</span></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          {/* Sidebar Kanan */}
<div className="w-1/4 pl-4">
<div className="w-1/4 pl-4 bg-white p-4 shadow rounded-lg mb-4" style={{ width: '300px', height:'850px' }}>
    <div className="flex justify-between mb-4">
      <button className="bg-blue-500 text-white py-2 rounded" style={{ backgroundColor: '#2A64F6', width: '80px', height: '39px' }}>
        Chats
      </button>
      <button className="bg-blue-500 text-white py-2 rounded" style={{ backgroundColor: '#2A64F6', width: '83px', height: '39px' }}>
        Group
      </button>
      <button className="bg-blue-500 text-white py-2 rounded" style={{ backgroundColor: '#2A64F6', width: '85px', height: '39px' }}>
        Komunitas
      </button>
    </div>
    <ul>
    <li className="mb-5">
  <div className="flex items-center">
    <img
      src="src/assets/community/group3.svg"
      alt="Group"
      className="w-10 h-10 rounded-full"
    />
    <div className="flex flex-col ml-2">
      <span style={{ fontWeight: 'bold' }}>Komunitas Lorem ipsum</span>
      <span className="text-sm text-black-500">Eh, bagi link Indo donk. Mau no....</span>
    </div>
  </div>
</li>
<li className="mb-5">
  <div className="flex items-center">
    <img
      src="src/assets/community/group3.svg"
      alt="Group"
      className="w-10 h-10 rounded-full"
    />
    <div className="flex flex-col ml-2">
      <span style={{ fontWeight: 'bold' }}>Lorem Maxy UI/UX</span>
      <span className="text-sm text-gray-500">Mantap gann</span>
    </div>
  </div>
</li>
<li className="mb-5">
  <div className="flex items-center">
    <img
      src="src/assets/community/group3.svg"
      alt="Group"
      className="w-10 h-10 rounded-full"
    />
    <div className="flex flex-col ml-2">
      <span style={{ fontWeight: 'bold' }}>Mentor Sociopreneur</span>
      <span className="text-sm text-gray-500">Gimana perkembangan kelas kalian?</span>
    </div>
  </div>
</li>
<li className="mb-5">
  <div className="flex items-center">
    <img
      src="src/assets/community/group3.svg"
      alt="Group"
      className="w-10 h-10 rounded-full"
    />
    <div className="flex flex-col ml-2">
      <span style={{ fontWeight: 'bold' }}>Mentor IMM</span>
      <span className="text-sm text-gray-500">okeee</span>
    </div>
  </div>
</li>
<li className="mb-5">
  <div className="flex items-center">
    <img
      src="src/assets/community/group3.svg"
      alt="Group"
      className="w-10 h-10 rounded-full"
    />
    <div className="flex flex-col ml-2">
      <span style={{ fontWeight: 'bold' }}>Staff IMM</span>
      <span className="text-sm text-gray-500">iya betul sekali</span>
    </div>
  </div>
</li>
    </ul>
    <button className="w-full bg-blue-500 text-white font-bold py-2 rounded mt-4" style={{ backgroundColor: '#0F1F3E' }}>
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