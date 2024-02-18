import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Payment = () => {
  const [patientName, setPatientName] = useState("");
  const [receipt, setReceipt] = useState(null);
  const [paymentType, setPaymentType] = useState("online");
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePatientNameChange = (event) => {
    setPatientName(event.target.value);
  };

  const handleReceiptChange = (event) => {
    const file = event.target.files[0];
    setReceipt(file);
  };

  const handlePaymentTypeChange = (type) => {
    setPaymentType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      setPatientName("");
      setReceipt(null);
      setPaymentType("online");
      setPaymentStatus("Payment Details Saved Successfully!");
    }, 200); 
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5 bg-cover bg-center" style={{ backgroundImage: `url(https://img.freepik.com/free-vector/background-about-medical-science_1017-4473.jpg)` }}>
      <div className="w-full lg:w-1/2 p-8 rounded-md bg-white bg-opacity-90 text-black text-center">
        <h2 className="text-3xl font-semibold mb-4">Payment Details</h2>

        {paymentStatus ? (
          <div className="text-green-500">
            {paymentStatus}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 border p-6 rounded-md">
            <div className="mb-4 text-left">
              <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
                Patient's Name
              </label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={patientName}
                onChange={handlePatientNameChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4 text-left">
              <label htmlFor="receipt" className="block text-sm font-medium text-gray-700">
                Upload Receipt
              </label>
              <input
                type="file"
                id="receipt"
                name="receipt"
                accept=".pdf, .jpg, .png"
                onChange={handleReceiptChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div className="mb-4 text-left">
              <label className="block text-sm font-medium text-gray-700">Payment Type</label>
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="online"
                    checked={paymentType === "online"}
                    onChange={() => handlePaymentTypeChange("online")}
                    className="form-radio h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2">Online</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="offline"
                    checked={paymentType === "offline"}
                    onChange={() => handlePaymentTypeChange("offline")}
                    className="form-radio h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2">Offline</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 mx-auto block"
            >
              Submit Payment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Payment;
