import React from 'react';
import { Link } from 'react-router-dom';

const IsiBlog = () => {
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
                        <img src="src/assets/Blog/maxy.svg" alt="MAXY Academy" className="rounded-lg" />
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
                            <h2 className="font-bold mb-6">Mengembangkan Ekosistem Sosial yang Inovatif</h2>
                            <p>Setelah sukses menggelar konferensi di Bali pada tahun 2022, Transformational Business Network (TBN) Indonesia melangkah lebih jauh dengan mengembangkan ekosistem sosial yang bertujuan untuk menciptakan dampak positif di berbagai sektor di Indonesia. Fokus utamanya terletak pada bidang pertanian, digital, hijau, pendidikan, serta seni dan fashion. Langkah ini tidak hanya bertujuan untuk memperkuat perekonomian lokal, tetapi juga meningkatkan kualitas hidup masyarakat melalui pendekatan berkelanjutan dan inovatif.</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="font-bold">1. Meningkatkan Pertanian dengan Teknologi dan Pendekatan Berkelanjutan</h2>
                            <p>Indonesia sebagai negara agraris memiliki potensi besar di sektor pertanian. TBN Indonesia berupaya untuk memanfaatkan teknologi terkini dan metode pertanian berkelanjutan untuk meningkatkan produktivitas dan kualitas hasil pertanian.</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="font-bold">2. Transformasi Digital: Mendorong Ekonomi Digital</h2>
                            <p>Di era digital, pemanfaatan teknologi informasi menjadi kunci dalam menggerakkan ekonomi. TBN Indonesia berkomitmen untuk mendorong transformasi digital melalui beberapa program, antara lain:</p>
                            <ul className="list-disc list-inside ml-6">
                                <li>Inkubator Startup: Menyediakan platform bagi startup digital untuk berkembang dengan dukungan mentor dan akses ke jaringan investor.</li>
                                <li>Pelatihan Teknologi: Menyelenggarakan pelatihan mengenai teknologi terkini seperti AI, blockchain, dan big data bagi pelaku usaha dan generasi muda.</li>
                                <li>Digitalisasi UMKM: Membantu UMKM untuk mengadopsi teknologi digital dalam operasional mereka, termasuk e-commerce dan pemasaran digital.</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h2 className="font-bold">3. Ekosistem Hijau: Menuju Lingkungan Berkelanjutan</h2>
                            <p>Komitmen TBN Indonesia terhadap keberlanjutan juga tercermin dalam upaya mereka mengembangkan ekosistem hijau. Beberapa langkah yang diambil meliputi:</p>
                            <ul className="list-disc list-inside ml-6">
                                <li>Proyek Energi Terbarukan: Pengembangan proyek energi terbarukan seperti tenaga surya dan angin untuk mengurangi ketergantungan pada energi fosil.</li>
                                <li>Kampanye Lingkungan: Melaksanakan kampanye untuk meningkatkan kesadaran masyarakat tentang pentingnya menjaga lingkungan.</li>
                            </ul>
                        </div>
                        <div className="flex justify-between items-center mt-4 bg-[#7198F9] rounded-xl px-4 py-4">
                            <a href="#" className="text-white font-semibold flex items-center">
                                Halaman
                                <div className="h-8 w-8 bg-[#2A64F6] rounded-full ml-6 flex items-center justify-center text-white text-xs font-semibold">1</div>
                                <Link to="/isi-blog2" className="h-8 w-8 bg-white rounded-full ml-2 flex items-center justify-center text-[#2A64F6] text-xs font-semibold">2</Link>
                            </a>
                            <Link to="/isi-blog2" className="text-white font-semibold bg-[#2A64F6] px-4 py-2 rounded-xl flex items-center justify-between">
                                Selanjutnya
                                <svg className="ml-2 w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
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
            </div>
        </div>
    );
};

export default IsiBlog;
