import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

export const FormCreate = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    tag_id: [],
    judul: "",
    deskripsi: "",
    tujuan: "",
    tanggalMulai: "",
    tanggalSelesai: "",
    negara_id: "",
    provinsi_id: "",
    kota_id: "",
    data_path: null,
    kategori: "",
    dana: "",
    jenis_dana: "",
    dana_lain: "",
    sdg_id: "",
    indikator_id: "",
    matrik_id: "",
    targetPelanggan: "",
  });

  const [tags, setTags] = useState([]);
  const [countries, setCountries] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [sdgs, setSdgs] = useState([]);
  const [indicators, setIndicators] = useState([]);
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/tag");
        const tagOptions = response.data.map((tag) => ({
          value: tag.id,
          label: tag.nama,
        }));
        setTags(tagOptions);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };
    fetchTags();
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get-countries"
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchSdgs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/get-sdg");
        setSdgs(response.data);
      } catch (error) {
        console.error("Error fetching SDGs:", error);
      }
    };
    fetchSdgs();
  }, []);

  useEffect(() => {
    const fetchUserId = async () => {
      const storedEmail = localStorage.getItem("email");
      if (storedEmail) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/user/${storedEmail}`
          );
          setFormData((prevFormData) => ({
            ...prevFormData,
            user_id: response.data[0].id,
          }));
          localStorage.setItem("id", response.data[0].id);
        } catch (error) {
          console.error("Error fetching user ID:", error);
        }
      }
    };
    fetchUserId();
  }, []);

  const handleCountryChange = async (e) => {
    const selectedCountry = e.target.value;
    setFormData({
      ...formData,
      negara_id: selectedCountry,
      provinsi_id: "",
      kota_id: "",
    });

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/get-regions/${selectedCountry}`
      );
      setProvinces(response.data);
      setCities([]);
    } catch (error) {
      console.error("Error fetching regions:", error);
    }
  };

  const handleProvinceChange = async (e) => {
    const selectedProvince = e.target.value;
    setFormData({ ...formData, provinsi_id: selectedProvince, kota_id: "" });

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/get-cities/${selectedProvince}`
      );
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleCityChange = (e) => {
    setFormData({ ...formData, kota_id: e.target.value });
  };

  const handleSdgChange = async (e) => {
    const selectedSdg = e.target.value;
    setFormData({
      ...formData,
      sdg_id: selectedSdg,
      indikator_id: "",
      matrik_id: "",
    });

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/get-indicators/${selectedSdg}`
      );
      setIndicators(response.data);
      setMetrics([]);
    } catch (error) {
      console.error("Error fetching indicators:", error);
    }
  };

  const handleIndicatorChange = async (e) => {
    const selectedIndicator = e.target.value;
    setFormData({
      ...formData,
      indikator_id: selectedIndicator,
      matrik_id: "",
    });

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/get-metrics/${selectedIndicator}`
      );
      setMetrics(response.data);
    } catch (error) {
      console.error("Error fetching metrics:", error);
    }
  };

  const handleMetricChange = (e) => {
    setFormData({ ...formData, matrik_id: e.target.value });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleTagSelect = (selectedOptions) => {
    const selectedTagIds = selectedOptions.map((option) => option.value);
    setFormData({ ...formData, tag_id: selectedTagIds });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Logging the formData before appending to FormData object
    console.log("Form Data:", formData);

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    // Append each tag as a separate form field
    formData.tag_id.forEach((tagId, index) => {
      data.append(`tag_id[${index}]`, tagId);
    });

    // Logging FormData content
    for (let pair of data.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/add-project",
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
      // Log the error response for debugging
      if (error.response) {
        console.error("Error response:", error.response);
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("General error:", error.message);
      }
      // Handle error (e.g., show error message)
    }
  };

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
              <Select
                closeMenuOnSelect={false}
                options={tags}
                isMulti
                name="tags"
                className="mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                onChange={handleTagSelect}
              />
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
                      className="mt-1 block w-full rounded-md border-[#808080] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      style={{ color: "#808080" }}
                      name="targetPelanggan"
                      value={formData.targetPelanggan}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label className="text-sm font-semibold">
                    Tanggal Mulai Projek
                  </label>
                  <div className="flex space-x-4">
                    <input
                      type="date"
                      className="mt-1 rounded-md border-[#7198F9] bg-[#7198F9] text-white w-full"
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
                      className="mt-1 rounded-md border-[#7198F9] bg-[#7198F9] text-white w-full"
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
                <div className="bg-[#7198F9] p-6 rounded-md text-black flex flex-col">
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">
                      Negara
                    </label>
                    <select
                      className="mt-1 block w-full rounded-md border-[#808080] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      name="negara_id"
                      value={formData.negara_id}
                      onChange={handleCountryChange}
                    >
                      <option value="">Pilih Negara</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">
                      Provinsi
                    </label>
                    <select
                      className="mt-1 block w-full rounded-md border-[#808080] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      name="provinsi_id"
                      value={formData.provinsi_id}
                      onChange={handleProvinceChange}
                    >
                      <option value="">Pilih Provinsi</option>
                      {provinces.map((province, index) => (
                        <option key={index} value={province.id}>
                          {province.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">
                      Kota
                    </label>
                    <select
                      className="mt-1 block w-full rounded-md border-[#808080] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      name="kota_id"
                      value={formData.kota_id}
                      onChange={handleCityChange}
                    >
                      <option value="">Pilih Kota</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city.id}>
                          {city.name}
                        </option>
                      ))}
                    </select>
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
                    <option value="Hibah">Hibah</option>
                    <option value="Pinjaman">Pinjaman</option>
                    <option value="Investasi">Investasi</option>
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
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-2">
                  Kategori SDGs, Indicators dan Metrics
                </h4>
                <div className="bg-white rounded-2xl p-3 outline outline-[#A1A1A1] mb-4">
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">
                      SDG
                    </label>
                    <select
                      className="mt-1 block w-full rounded-md border-[#808080] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      name="sdg_id"
                      value={formData.sdg_id}
                      onChange={handleSdgChange}
                    >
                      <option value="">Pilih SDG</option>
                      {sdgs.map((sdg, index) => (
                        <option key={index} value={sdg.id}>
                          {sdg.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">
                      Indicator
                    </label>
                    <select
                      className="mt-1 block w-full rounded-md border-[#808080] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      name="indikator_id"
                      value={formData.indikator_id}
                      onChange={handleIndicatorChange}
                    >
                      <option value="">Pilih Indicator</option>
                      {indicators.map((indicator, index) => (
                        <option key={index} value={indicator.id}>
                          {indicator.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">
                      Metric
                    </label>
                    <select
                      className="mt-1 block w-full rounded-md border-[#808080] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      name="matrik_id"
                      value={formData.matrik_id}
                      onChange={handleMetricChange}
                    >
                      <option value="">Pilih Metric</option>
                      {metrics.map((metric, index) => (
                        <option key={index} value={metric.id}>
                          {metric.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
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
