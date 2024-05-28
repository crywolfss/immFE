import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const RegisForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    country: "United States",
    companyProfile: "",
    province: "United States",
    picName: "",
    regency: "United States",
    picPosition: "",
    employeeCount: "",
    phoneNumber: "",
    companyType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("YOUR_API_ENDPOINT_HERE", formData);
      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="mx-auto p-6 lg:px-8">
      <div className="lg:px-8 border-gray-900/10 pb-12">
        <h2 className="px-6 py-4 text-3xl font-semibold leading-7 text-center text-gray-900">
          Daftarkan Perusahaan Anda
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-1 text-start sm:grid-cols-6 p-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nama Perusahaan
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
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
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="companyProfile"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Profil Perusahaan
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="companyProfile"
                  id="companyProfile"
                  value={formData.companyProfile}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="province"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Provinsi
              </label>
              <div className="mt-2">
                <select
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="picName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nama PIC
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="picName"
                  id="picName"
                  value={formData.picName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="regency"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Kabupaten
              </label>
              <div className="mt-2">
                <select
                  id="regency"
                  name="regency"
                  value={formData.regency}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="picPosition"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Posisi PIC
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="picPosition"
                  id="picPosition"
                  value={formData.picPosition}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="employeeCount"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Jumlah Karyawan
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="employeeCount"
                  id="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nomor Telepon
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="companyType"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tipe Perusahaan
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="companyType"
                  id="companyType"
                  value={formData.companyType}
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
