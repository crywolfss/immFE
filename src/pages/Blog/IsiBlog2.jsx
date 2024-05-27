import React from 'react';
import { Link } from 'react-router-dom';

const IsiBlog2 = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white rounded-lg p-6 mb-6">
                <div className="mb-4">
                    <Link to="/blog" className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        All Posts
                    </Link>
                </div>
                <div className="flex flex-col mb-8">
                    <div className="flex justify-center">
                        <img src="src/assets/Blog/maxytbn.svg" alt="MAXY TBN" className="rounded-lg" />
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="bg-[#F4F4F4] px-2 py-1 font-semibold">Bisnis</span>
                        <span className="mx-3"></span>
                        <span className='font-semibold'>2 min read</span>
                        <span className="mx-5"></span>
                        <div className="flex items-center text-blue-500">
                            <span><img src="src/assets/Blog/star.svg" alt="rating"/></span>
                            <span className="ml-2 text-black text-xs">(112)</span>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <h1 className="text-3xl font-bold">Peluncuran TBN Indonesia</h1>
                    <img src="src/assets/Blog/tbn.svg" alt="TBN Indonesia" className="w-full mt-4"/>
                </div>
                <div className="flex justify-between items-center text-sm mb-6">
                    <div>Written by Candice Wu</div>
                    <div>Published on 15 January 2023</div>
                    <div>Sumber Artikel: <a href="https://www.tbnindonesia.com" className="text-blue-500">https://www.tbnindonesia.com</a></div>
                    <button>
                        <img src="src/assets/Blog/share.svg" alt="share"/>
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/3 text-justify">
                        <div className="mb-4">
                            <h2 className="font-bold">4. Pendidikan: Membangun Generasi Masa Depan</h2>
                            <p>Pendidikan menjadi pilar penting dalam pembangunan bangsa. TBN Indonesia berinvestasi dalam pendidikan untuk memastikan bahwa generasi masa depan memiliki keterampilan dan pengetahuan yang dibutuhkan untuk menghadapi tantangan global. Inisiatif di bidang ini meliputi:</p>
                            <ul className="list-disc list-inside ml-6">
                                <li>Beasiswa dan Program Magang: Menyediakan beasiswa dan peluang magang bagi pelajar berprestasi di berbagai bidang.</li>
                                <li>Kerjasama dengan Institusi Pendidikan: Berkolaborasi dengan universitas dan sekolah untuk menyelenggarakan program pelatihan dan penelitian.</li>
                                <li>Program Literasi Digital: Mengajarkan keterampilan digital dasar hingga lanjutan kepada siswa dan masyarakat umum.</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h2 className="font-bold">5. Seni dan Fashion: Menghargai Kreativitas Lokal</h2>
                            <p>Seni dan fashion merupakan aspek penting dari identitas budaya Indonesia. TBN Indonesia berusaha untuk memajukan sektor ini melalui berbagai inisiatif:</p>
                            <ul className="list-disc list-inside ml-6">
                                <li>Dukungan bagi Seniman Lokal: Memberikan dukungan kepada seniman lokal dalam bentuk dana, ruang pameran, dan pelatihan.</li>
                                <li>Promosi Produk Lokal: Membantu produk fashion lokal untuk menembus pasar internasional melalui pameran dan kolaborasi dengan desainer internasional.</li>
                                <li>Pendidikan Seni: Menyelenggarakan workshop dan program pendidikan untuk mengembangkan bakat-bakat muda di bidang seni dan fashion.</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h2 className="font-bold mb-4">Conclusion</h2>
                            <p>TBN Indonesia tidak hanya berfokus pada satu sektor, tetapi mengembangkan pendekatan holistik untuk menciptakan ekosistem sosial yang berkelanjutan dan inovatif di Indonesia. Dengan memanfaatkan teknologi, meningkatkan pendidikan, serta menghargai lingkungan dan budaya lokal, TBN Indonesia berupaya untuk membangun masa depan yang lebih cerah bagi seluruh masyarakat Indonesia. Peluncuran ini menandai awal dari perjalanan panjang menuju perubahan yang lebih baik dan berkelanjutan di berbagai aspek kehidupan.</p>
                        </div>
                        <div className="flex justify-between items-center mt-4 bg-[#7198F9] rounded-xl px-4 py-4">
                            <a href="#" className="text-white font-semibold flex items-center">
                                Halaman
                                <Link to="/isi-blog" className="h-8 w-8 bg-white rounded-full ml-6 flex items-center justify-center text-[#2A64F6] text-xs font-semibold">1</Link>
                                <div className="h-8 w-8 bg-[#2A64F6] rounded-full ml-2 flex items-center justify-center text-white text-xs font-semibold">2</div>
                            </a>
                            <Link to="/isi-blog" className="text-white font-semibold bg-[#2A64F6] px-4 py-2 rounded-xl flex items-center justify-between">
                                <svg className="mr-2 w-4 h-4 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                                Sebelumnya
                            </Link>
                        </div>
                    </div>

                    <div className="lg:w-1/3 lg:pl-8 mt-12">
                        <div className="bg-white border border-black p-6 mb-6">
                            <h2 className="text-lg font-bold mb-4">Subscribe to newsletter</h2>
                            <p className="mb-4">Subscribe to receive the latest blog posts to your inbox every week.</p>
                            <form>
                                <input type="email" placeholder="Enter your email" className="w-full p-2 border border-black rounded-md mb-4"/>
                                <button type="submit" className="w-full bg-black text-white p-2 rounded-md mb-4">Subscribe</button>
                                <p className="text-xs">By subscribing you agree to with our <a href="#" className="underline">Privacy Policy</a>.</p>
                            </form>
                        </div>

                        <div className="bg-white rounded-lg p-6 mb-8">
                            <h2 className="text-lg font-bold mb-4">Blog Terpopuler</h2>
                            <div className="mb-4 flex items-center">
                            <img src="src/assets/Blog/image 227.png" alt="TBN Asia Annual Conference 2024" className="w-32 h-32 mr-4 rounded-xl" />
                            <div>
                                <a href="#" className="font-bold">TBN Asia Annual Conference 2024</a>
                                <p className="text-gray-600">By Mike - Mei 20, 2024</p>
                            </div>
                            </div>
                            <div className="mb-4 flex items-center">
                            <img src="src/assets/Blog/Image.png" alt="TBN Asia Annual Conference 2024" className="w-32 h-32 mr-4 rounded-xl" />
                            <div>
                                <a href="#" className=" font-bold">TBN Asia's Regional Programming and Outreach</a>
                                <p className="text-gray-600">By Ben - April 19, 2024</p>
                            </div>
                            </div>
                            <Link to="/blog" className="font-semibold">Lihat Selengkapnya →</Link>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                <div className="flex flex-col mb-4 bg-gray-100 rounded-xl px-6 py-4">
                    <h2 className="text-lg font-bold mb-4">Komentar</h2>
                    <div className="flex flex-col mb-4 bg-white rounded-xl px-4 py-4 ml-2 shadow-lg">
                        <div className="flex items-center mb-2">
                            <p className="text-md font-bold text-[#2A64F6] ml-4">Beri rating artikel</p>
                            <img src="src/assets/Blog/add-star.svg" className="ml-2" alt="star icon" />
                        </div>
                        <input type='text' 
                            className="text-md ml-2 p-2 mb-3 rounded w-full border-none outline-none focus:outline-none focus:ring-0" 
                            placeholder="Tuliskan Komentar ......">
                        </input>
                        <div className="flex items-center justify-between ml-4 mb-1">
                            <div className="flex items-center">
                                <img src="src/assets/Blog/picture.svg" className="mr-2" alt="picture icon" />
                                <p className="text-sm">Tambahkan Foto</p>
                            </div>
                            <img src="src/assets/Blog/send.svg" className="ml-2" alt="send icon" />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="flex flex-col mb-4 bg-white rounded-xl px-4 py-4 ml-2 shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <img src="src/assets/Blog/justin.svg" alt="Justin Hubner" className="w-10 h-10 mr-4 rounded-full" />
                                <div>
                                    <h3 className="font-semibold">Justin Hubner</h3>
                                    <p className="text-sm text-gray-500">1 minute ago</p>
                                </div>
                            </div>
                            <img src="src/assets/Blog/titik.svg" alt="menu icon" className="w-6 h-6" />
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="mr-2">Rating :</span>
                            <span className="flex">
                                <img src="src/assets/Blog/star-full.svg" alt="star" className="w-4 h-4 mr-2"/>
                                <img src="src/assets/Blog/star-full.svg" alt="star" className="w-4 h-4 mr-2"/>
                                <img src="src/assets/Blog/star-full.svg" alt="star" className="w-4 h-4 mr-2"/>
                                <img src="src/assets/Blog/star-full.svg" alt="star" className="w-4 h-4 mr-2"/>
                                <img src="src/assets/Blog/star-empty.svg" alt="star" className="w-4 h-4 mr-2"/>
                            </span>
                        </div>
                        <p className="mb-2">Wah, Keren Banget TBN Indonesia! Senang Banget Lihat Ada Inisiatif Yang Fokus Pada Berbagai Sektor Penting Seperti Pertanian, Digital, Dan Lingkungan. Semoga Sukses Terus Dan Bisa Bawa Dampak Positif Buat Banyak Orang 👍</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img src="src/assets/Blog/like.svg" alt="like icon" className="w-4 h-4 mr-2" />
                                <p>Suka</p>
                            </div>
                            <div className="flex items-center">
                                <img src="src/assets/Blog/reply.svg" alt="reply icon" className="w-4 h-4 mr-2" />
                                <p>Balas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mb-4 bg-white rounded-xl px-4 py-4 ml-2 shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <img src="src/assets/Blog/rafael.svg" alt="Rafael Struick" className="w-10 h-10 mr-4 rounded-full" />
                                <div>
                                    <h3 className="font-semibold">Rafael Struick</h3>
                                    <p className="text-sm text-gray-500">1 minute ago</p>
                                </div>
                            </div>
                            <img src="src/assets/Blog/titik.svg" alt="menu icon" className="w-6 h-6" />
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="mr-2">Rating :</span>
                            <span className="flex">
                                <img src="src/assets/Blog/star-full.svg" alt="star" className="w-4 h-4 mr-2"/>
                                <img src="src/assets/Blog/star-full.svg" alt="star" className="w-4 h-4 mr-2"/>
                                <img src="src/assets/Blog/star-full.svg" alt="star" className="w-4 h-4 mr-2"/>
                                <img src="src/assets/Blog/star-full.svg" alt="star" className="w-4 h-4 mr-2"/>
                                <img src="src/assets/Blog/star-empty.svg" alt="star" className="w-4 h-4 mr-2"/>
                            </span>
                        </div>
                        <p className="mb-2">Artikel ini sangat informatif! Salut buat TBN Indonesia yang nggak cuma mikirin ekonomi tapi juga peduli sama lingkungan dan budaya lokal. Penasaran nih, apa ada contoh proyek yang udah berhasil dijalankan? Keep up the good work!</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img src="src/assets/Blog/like.svg" alt="like icon" className="w-4 h-4 mr-2" />
                                <p>Suka</p>
                            </div>
                            <div className="flex items-center">
                                <img src="src/assets/Blog/reply.svg" alt="reply icon" className="w-4 h-4 mr-2" />
                                <p>Balas</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-4 bg-white rounded-xl px-4 py-4 ml-2 shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <img src="src/assets/Blog/rizky.svg" alt="Rizky Ridho" className="w-10 h-10 mr-4 rounded-full" />
                                <div>
                                    <h3 className="font-semibold">Rizky Ridho</h3>
                                    <p className="text-sm text-gray-500">1 minute ago</p>
                                </div>
                            </div>
                            <img src="src/assets/Blog/titik.svg" alt="menu icon" className="w-6 h-6" />
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="mr-2">Rating :</span>
                            <span className="flex">
                                <img src="src/assets/Blog/star-full.svg" alt="star" className="w-4 h-4 mr-2"/>
                                <img src="src/assets/Blog/star-full.svg" alt="star" className="w-4 h-4 mr-2"/>
                                <img src="src/assets/Blog/star-full.svg" alt="star" className="w-4 h-4 mr-2"/>
                                <img src="src/assets/Blog/star-full.svg" alt="star" className="w-4 h-4 mr-2"/>
                                <img src="src/assets/Blog/star-empty.svg" alt="star" className="w-4 h-4 mr-2"/>
                            </span>
                        </div>
                        <p className="mb-2">Mantap! Langkah TBN Indonesia ini benar-benar inspiratif. Transformasi digital dan dukungan buat UMKM pasti bakal bantu banget perkembangan bisnis lokal. Semoga makin banyak yang terlibat dan ikut berkontribusi!</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img src="src/assets/Blog/like.svg" alt="like icon" className="w-4 h-4 mr-2" />
                                <p>Suka</p>
                            </div>
                            <div className="flex items-center">
                                <img src="src/assets/Blog/reply.svg" alt="reply icon" className="w-4 h-4 mr-2" />
                                <p>Balas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default IsiBlog2;
