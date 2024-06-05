import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RegisForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({

    nama_perusahaan: "",
    profil_perusahaan: "",
    nama_pic: "",
    posisi_pic: "",
    nomor_telepon: "",
    country: "",
    provinsi: "",
    kabupaten: "",
    jumlah_karyawan: "",
    tipe_perusahaan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   const fetchUserId = async () => {
  //     const storedEmail = localStorage.getItem('email');
  //     if (storedEmail) {
  //       try {
  //         const response = await axios.get(`http://127.0.0.1:8000/api/user/${storedEmail}`);
  //         setFormData(prevFormData => ({
  //           ...prevFormData,
  //           user_id: response.data.id
  //         }));
  //         console.log(response.data);
  //         console.log(response.data.id);
  //       } catch (error) {
  //         console.error('Error fetching user ID:', error);
  //       }
  //     }
  //   };
  //   fetchUserId();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post("http://127.0.0.1:8000/api/company", formData);
      console.log('Response:', response.data);
      // Navigate to a success page or another route if needed
      navigate('/imm-home', { state: { company: formData } });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="mx-auto p-6 lg:px-8">
      <div className="lg:px-8 border-gray-900/10 pb-12">
        <h2 className="px-6 py-4 text-3xl font-semibold leading-7 text-center text-gray-900">
          Daftarkan Perusahaan Anda
        </h2>

        <form onSubmit={handleSubmit}>
          {/* <input hidden name="user_id" id="user_id" value={formData.user_id} onChange={handleChange} /> */}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-1 text-start sm:grid-cols-6 p-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="nama_perusahaan"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nama Perusahaan
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nama_perusahaan"
                  id="nama_perusahaan"
                  value={formData.nama_perusahaan}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                >
                  <option value="">Select Country</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="profil_perusahaan"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Profil Perusahaan
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="profil_perusahaan"
                  id="profil_perusahaan"
                  value={formData.profil_perusahaan}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="provinsi"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Provinsi
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="provinsi"
                  id="provinsi"
                  value={formData.provinsi}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="nama_pic"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nama PIC
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nama_pic"
                  id="nama_pic"
                  value={formData.nama_pic}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="kabupaten"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Kabupaten
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="kabupaten"
                  id="kabupaten"
                  value={formData.kabupaten}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="posisi_pic"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Posisi PIC
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="posisi_pic"
                  id="posisi_pic"
                  value={formData.posisi_pic}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="jumlah_karyawan"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Jumlah Karyawan
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="jumlah_karyawan"
                  id="jumlah_karyawan"
                  value={formData.jumlah_karyawan}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="nomor_telepon"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nomor Telepon
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="nomor_telepon"
                  id="nomor_telepon"
                  value={formData.nomor_telepon}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="tipe_perusahaan"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tipe Perusahaan
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="tipe_perusahaan"
                  id="tipe_perusahaan"
                  value={formData.tipe_perusahaan}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full items-center">
            <button
              type="submit"
              className="flex w-1/5 justify-center rounded-md bg-[#0F1F3E] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#7198F9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Simpan Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
