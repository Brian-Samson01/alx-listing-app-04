const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Contact Detail</h2>

    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>First Name</label>
          <input type="text" className="border p-2 w-full mt-2" placeholder="Enter your first name" />
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" className="border p-2 w-full mt-2" placeholder="Enter your last name" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Email</label>
          <input type="email" className="border p-2 w-full mt-2" placeholder="Enter your email" />
        </div>

        <div>
          <label>Phone Number</label>
          <input type="text" className="border p-2 w-full mt-2" placeholder="Enter your phone number" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>

      <div className="mt-4">
        <label>Card Number</label>
        <input type="text" className="border p-2 w-full mt-2" placeholder="Enter your card number" />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-2" placeholder="MM/YY" />
        </div>

        <div>
          <label>CVV</label>
          <input type="text" className="border p-2 w-full mt-2" placeholder="Enter CVV" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>

      <div className="mt-4">
        <label>Street Address</label>
        <input type="text" className="border p-2 w-full mt-2" placeholder="Enter street address" />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>City</label>
          <input type="text" className="border p-2 w-full mt-2" placeholder="Enter city" />
        </div>

        <div>
          <label>State</label>
          <input type="text" className="border p-2 w-full mt-2" placeholder="Enter state" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Zip Code</label>
          <input type="text" className="border p-2 w-full mt-2" placeholder="Enter zip code" />
        </div>

        <div>
          <label>Country</label>
          <input type="text" className="border p-2 w-full mt-2" placeholder="Enter country" />
        </div>
      </div>

      {/* Submit Button */}
      <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
