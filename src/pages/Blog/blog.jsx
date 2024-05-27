import React from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import './blog.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Cari Blog atau Artikel disini" className="search-input" />
      <button className="search-button">
        <MagnifyingGlassIcon className="icon" />
      </button>
    </div>
  );
};

const Card = ({ title, description, image, author, date, category }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <div className="card-meta">
          <span style={{ color: '#2A64F6', fontWeight: '600' }}>{category}</span>
        </div>
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="card-title" style={{ color: '#000', fontWeight: '600' }}>{title}</h2>
          {title === 'Peluncuran TBN Indonesia' ? (
            <Link to="/isi-blog">
              <ArrowRightIcon className="arrow-icon h-8 w-8 text-gray-500" />
            </Link>
          ) : (
            <ArrowRightIcon className="arrow-icon h-8 w-8 text-gray-500" />
          )}
        </div>
        <p className="card-description">{description}</p>
        <div className="card-author">
          <img src={author.image} alt={author.name} className="author-image" />
          <div className="author-info">
            <span>{author.name}</span>
            <span className="card-date">{date}</span>
            <div className="svg-icons ml-40" style={{ display: 'flex', alignItems: 'left' , marginTop: '-20px'}}>
              <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clipRule="evenodd" />
              </svg>
              <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clipRule="evenodd" />
              </svg>
              <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clipRule="evenodd" />
              </svg>
              <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clipRule="evenodd" />
              </svg>
              <svg className="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 ml-2" style={{ fontSize: '0.70rem' }}>(112)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const cardsData = [
    {
      title: 'TBN Asia Annual Conference 2024',
      description: 'Konferensi TBN Asia di Singapura, 12-14 September 2024, dengan tema "Purpose Driven Social Impact", akan menghubungkan bisnis sosial dengan pendanaan dan mentor.',
      image : "src/assets/Blog/image 227.png", 
      author: { name: 'Olivia Rhye', image: 'src/assets/Blog/Avatar (1).jpg' },
      date: '20 Mei 2024',
      category: 'Bisnis'
    },
    {
      title: 'TBN Asia\'s Regional Programming and Outreach',
      description: 'Konferensi TBN Asia di Singapura, 12-14 September 2024, fokus pada "Purpose Driven Social Impact", menghubungkan bisnis sosial dengan pendanaan dan mentor.',
      image: "src/assets/Blog/Image.png", 
      author: { name: 'Phoenix Baker', image: 'src/assets/Blog/Avatar (2).jpg' },
      date: '19 April 2024',
      category: 'Bisnis'
    },
    {
      title: 'Uplifting Poverty through Enterprise Solutions in Southeast Asia',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      image: "src/assets/Blog/Image (1).png", 
      author: { name: 'Lana Steiner', image: 'src/assets/Blog/Avatar (3).jpg' },
      date: '18 Feb 2024',
      category: 'Bisnis'
    },
    {
      title: 'Transformational Sales Conference 2023',
      description: 'Acara ini berfokus pada adaptasi dalam lanskap penjualan digital dan pentingnya memenuhi kebutuhan pelanggan',
      image: "src/assets/Blog/Image (2).png", 
      author: { name: 'Alec Whitten', image: 'src/assets/Blog/Avatar (4).jpg' },
      date: '17 Jan 2024',
      category: 'Bisnis'
    },
    {
      title: 'Kolaborasi Lintas Sektor dan Lintas Batas',
      description: 'Kolaborasi sektor publik, swasta, masyarakat, dan planet penting untuk perubahan sistemik melawan kemiskinan.',
      image: "src/assets/Blog/Image (3).png", 
      author: { name: 'Demi Wllkinson', image: 'src/assets/Blog/Avatar (5).jpg' },
      date: '16 Jan 2024',
      category: 'Bisnis'
    },
    {
      title: 'Peluncuran TBN Indonesia',
      description: 'Setelah konferensi di Bali 2022, TBN Indonesia kembangkan ekosistem sosial di Indonesia, fokus pada pertanian, digital, hijau, pendidikan, dan seni/fashion.',
      image: "src/assets/Blog/Image (4).png", 
      author: { name: 'Candice Wu', image: 'src/assets/Blog/Avatar (6).jpg' },
      date: '15 Jan 2024',
      category: 'Bisnis'
    },
    {
      title: 'TBN Asia Bali Hybrid Conference 2022',
      description: 'Konferensi di Bali, 22-24 September 2022, dukung perusahaan sosial di Asia Tenggara',
      image: "src/assets/Blog/Image (5).png", 
      author: { name: 'Natali Craig', image: 'src/assets/Blog/Avatar (7).jpg' },
      date: '14 Jan 2022',
      category: 'Bisnis'
    },
    {
      title: 'Hosting the Delegates of TBN Asia’s Conference',
      description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
      image: "src/assets/Blog/Image (4).png",
      author: { name: 'Drew Cano', image: 'src/assets/Blog/Avatar (8).jpg'},
      date: '13 Jan 2022',
      category: 'Bisnis'
    },
    {
      title: 'Annual Conference Overview',
      description: 'konferensi TBN Asia 2022 dan perjalanan dampak ke Mana Earthly Paradise, menyoroti teknologi ekologi dan bisnis berkelanjutan',
      image: "src/assets/Blog/Image (4).png",
      author: { name: 'Oralndo Digss', image: 'src/assets/Blog/Avatar.jpg' },
      date: '12 Jan 2022',
      category: 'Bisnis'
    },
  ];

  return (
    <div>
      <SearchBar />
      <div className="card-grid">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
