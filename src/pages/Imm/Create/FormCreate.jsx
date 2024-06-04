import { useState, useEffect } from "react";
import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';
import axios from "axios";

export const FormCreate = () => {
  const [formData, setFormData] = useState({
    tags: "",
    judul: "",
    deskripsi: "",
    tujuan: "",
    tanggalMulai: "",
    tanggalSelesai: "",
    negara: "",
    provinsi: "",
    kota: "",
    data_path: null,
    kategori: "",
    dana: "",
    jenis_dana: "",
    dana_lain: "",
    sdg: "",
    indikator: "",
    matrik: "",
  });

  const [tags, setTags] = useState([]);
  const [sdgs, setSdgs] = useState([]);
  const [indicators, setIndicators] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        await axios.get("http://127.0.0.1:8000/api/tag").then((response) => {
          setTags(response.data);
          return
        });
      } catch (err) {
        setError(err.message || 'Error fetching profile data');
    } finally {
        setLoading(false);
    }
    };

    const fetchSdgs = async () => {
      try {
        await axios.get("http://127.0.0.1:8000/api/sdg").then((response) => {
          setSdgs(response.data);
          return
        });
      } catch (err) {
        setError(err.message || 'Error fetching profile data');
    } finally {
        setLoading(false);
    }
    };

    const fetchIndicators = async () => {
      try {
        await axios.get("http://127.0.0.1:8000/api/indicator").then((response) => {
            setIndicators(response.data);
            return
          });
      } catch (err) {
        setError(err.message || 'Error fetching profile data');
    } finally {
        setLoading(false);
    }
    };

    const fetchMetrics = async () => {
      try {
        await axios.get("http://127.0.0.1:8000/api/matrik").then((response) => {
          setMetrics(response.data);
          return
        });
      } catch (err) {
        setError(err.message || 'Error fetching profile data');
    } finally {
        setLoading(false);
    }
    };

    const fetchTagMetrics = async () => {
      try {
        await axios.get("http://127.0.0.1:8000/api/matrik").then((response) => {
          setMetrics(response.data);
          return
        });
      } catch (err) {
        setError(err.message || 'Error fetching profile data');
    } finally {
        setLoading(false);
    }
    };

    fetchTags();
    fetchSdgs();
    fetchIndicators();
    fetchMetrics();
    fetchTagMetrics();
  },);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/projects",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Project created successfully:", response.data);
      // Handle success (e.g., redirect or show success message)
    } catch (error) {
      console.error("Error creating project:", error);
      // Handle error (e.g., show error message)
    }
  };

  const filteredIndicators = indicators.filter(
    (indicator) => indicator.sdg_id === parseInt(formData.sdg)
  );


  // const filteredTagMatriks = indicators.filter(
  //   (tagMatriks) => indicator.sdg_id === parseInt(formData.tags)
  // );

  // const filteredMatrics = indicators.filter(
  //   (indicator) => indicator.sdg_id === parseInt(formData.sdg)
  // );

  if (loading) {
    return <div>Loading...</div>;
}

if (error) {
    return <div>Error: {error}</div>;
}


  return (
    <div className="mx-auto max-w-7xl lg:px-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="w-full">
            <h3
              className="font-bold pt-8 text-xl mb-5"
              style={{ fontSize: "32px" }}
            >
              Buat Projek Baru
            </h3>
            <p
              className="text-lg font-semibold mb-2"
              style={{ fontSize: "17px" }}
            >
              Pilih Tag atau Buat yang Baru
            </p>
            <div className="bg-white rounded-2xl p-3 w-full outline outline-[#A1A1A1] mb-4">
            <select
                    className="mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    name="matrik"
                    value={formData.tags}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Pilih Tag
                    </option>
                    {tags.map((tag) => (
                      <option key={tag.id} value={tag.id}>
                        {tag.nama}
                      </option>
                    ))};
                  </select>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 lg:pr-8">
              <div className="mb-2">
                <h4 className="text-lg font-semibold mb-3">
                  Tentang Proyek Anda
                </h4>
                <div className="mb-2">
                  <label className="block text-sm font-semibold mb-2">
                    Nama Projek
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-[#808080] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    style={{ color: "#808080" }}
                    name="judul"
                    value={formData.judul}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-semibold">
                    Deskripsi Projek
                  </label>
                  <textarea
                    className="mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    rows="2"
                    name="deskripsi"
                    value={formData.deskripsi}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-semibold">
                    Tujuan Projek
                  </label>
                  <textarea
                    className="mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    rows="3"
                    name="tujuan"
                    value={formData.tujuan}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-semibold mb-2">
                    Target Pelanggan
                  </label>
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      className="mt-1 block w-280 rounded-md border-[#808080] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      style={{ color: "#808080" }}
                      value="Umur"
                      onChange={handleChange}
                    />
                    <select
                      className="mt-1 w-280 rounded-md border-[#808080] bg-[#FFFFFF] text-grey"
                      name="kategori"
                      value={formData.kategori}
                      onChange={handleChange}
                    >
                      <option>Jenis Pekerjaan</option>
                    </select>
                  </div>
                </div>
                <div className="mb-2">
                  <label className="text-sm font-semibold">
                    Tanggal Mulai Projek
                  </label>
                  <div className="flex space-x-4">
                    <input
                      type="date"
                      className="mt-1 rounded-md border-[#7198F9] bg-[#7198F9] text-white"
                      name="tanggalMulai"
                      value={formData.tanggalMulai}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label className="text-sm font-semibold">
                    Tanggal Berakhir Projek
                  </label>
                  <div className="flex space-x-4">
                    <input
                      type="date"
                      className="mt-1 rounded-md border-[#7198F9] bg-[#7198F9] text-white"
                      name="tanggalSelesai"
                      value={formData.tanggalSelesai}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <h4 className="text-lg font-semibold mb-2">Import Data</h4>
                <div className="bg-[#7198F9] p-8 rounded-md flex items-center justify-center flex-col">
                  <img
                    src="src/assets/icons/icon-upload.svg"
                    alt="Upload icon"
                    className="mb-2"
                  />
                  <p className="text-white text-center">
                    Unggah berbagai informasi yang relevan untuk proyek Anda
                    dengan mudah dan cepat
                  </p>
                  <input
                    type="file"
                    name="data_path"
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-2">Alamat</h4>
                <div className="bg-[#7198F9] p-6 rounded-md text-white flex items-center justify-between">
                  <div>
                    <p className="ml-2 mb-2">DKI JAKARTA</p>
                    <p className="ml-2 mb-2">KOTA JAKARTA PUSAT</p>
                    <p className="ml-2 mb-2">KEMAYORAN</p>
                    <hr className="my-4 border-t border-white" />
                    <p className="ml-2">
                      Jl. Benyamin Sueb, RT.13/RW.7, Gn. Sahari Utara, Kecamatan
                      Sawah Besar, Jkt Utara, Daerah Khusus Ibukota Jakarta
                      10720
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button className="bg-transparent border-none mb-20">
                      <img
                        src="src/assets/icons/icon-bahasa.svg"
                        alt="icon"
                        style={{ transform: "rotate(270deg)" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="mt-8 lg:mt-0">
                <h4 className="text-lg font-semibold mb-2">Kategori Bisnis</h4>
                <div className="mb-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="kategori"
                      className="mr-2"
                      value="Bisnis Baru"
                      checked={formData.kategori === "Bisnis Baru"}
                      onChange={handleChange}
                    />{" "}
                    Bisnis Baru
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="kategori"
                      className="mr-2"
                      value="Bisnis yang sudah ada"
                      checked={formData.kategori === "Bisnis yang sudah ada"}
                      onChange={handleChange}
                    />{" "}
                    Bisnis yang sudah ada
                  </label>
                </div>
              </div>
              <div className="mt-">
                <h4 className="text-lg font-semibold mb-3">Pendanaan</h4>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-4">
                    Jumlah Dana
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    name="dana"
                    value={formData.dana}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-3">
                <h4 className="text-lg font-semibold mb-3">
                  Pendanaan Lainnya
                </h4>
                <div className="mb-4">
                  <label className="block text-sm mb-4">Jenis Dana</label>
                  <select
                    style={{ textAlign: "center" }}
                    className="mt-1 block w-full rounded-md bg-[#7198F9] border-[#7198F9] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white"
                    name="jenis_dana"
                    value={formData.jenis_dana}
                    onChange={handleChange}
                  >
                    <option>Hibah</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-4">Jumlah Dana</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-center"
                    name="dana_lain"
                    value={formData.dana_lain}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-4">SDG</label>
                  <select
                    className="mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    name="sdg"
                    value={formData.sdg}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Pilih SDG
                    </option>
                    {sdgs.map((sdg) => (
                      <option key={sdg.id} value={sdg.id}>
                        {sdg.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-4">Indikator</label>
                  <select
                    className="mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    name="indikator"
                    value={formData.indikator}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Pilih Indikator
                    </option>
                    {filteredIndicators.map((indicator) => (
                      <option key={indicator.id} value={indicator.id}>
                        {indicator.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-4">Matrik</label>
                  <select
                    className="mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    name="matrik"
                    value={formData.matrik}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Pilih Matrik
                    </option>
                    {metrics.map((metric) => (
                      <option key={metric.id} value={metric.id}>
                        {metric.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  style={{ textAlign: "center" }}
                  className="mt-1 block w-full h-10 rounded-md bg-[#7198F9] border-[#7198F9] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white"
                >
                  Klik untuk Pilih SDG, Indicator & Metric
                </button>
              </div>
              <div>
                <h3 className="font-bold pt-2 text-xl mb-5">Maps</h3>
                <img
                  src="src/assets/images/maps_up.svg"
                  alt="maps"
                  style={{ width: "100%" }}
                />
                <div className="flex justify-center mt-10">
                  <button
                    type="submit"
                    className="bg-[#2A64F6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"
                  >
                    Simpan dan Lanjutkan
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "75px" }}></div>
        </div>
      </form>
    </div>
  );
};

export default FormCreate;
