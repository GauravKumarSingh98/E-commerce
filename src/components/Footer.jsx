import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center sm:text-left">
          {/* ShopStore */}
          <div>
            <h1 className="text-lg font-semibold">Shopstore</h1>
            <p className="text-sm">Subscribe</p>
            <p className="text-sm">Get 10% off your first order</p>
            <input
              className="text-sm p-2 mt-2 w-full bg-gray-800 text-white border border-gray-700 rounded"
              type="text"
              placeholder="Enter your email"
            />
          </div>

          {/* Support */}
          <div>
            <h1 className="text-lg font-semibold">Support</h1>
            <p className="text-sm">Marathahalli, Bangalore</p>
            <p className="text-sm">shopstore@gmail.com</p>
            <p className="text-sm">+91 9472485539</p>
          </div>

          {/* Account */}
          <div>
            <h1 className="text-lg font-semibold">Account</h1>
            {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map((item) => (
              <p key={item} className="text-sm">{item}</p>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h1 className="text-lg font-semibold">Quick Links</h1>
            {["Privacy Policy", "Terms of Use", "FAQ", "Contact"].map((item) => (
              <p key={item} className="text-sm">{item}</p>
            ))}
          </div>

          {/* Download App */}
          <div>
            <h1 className="text-lg font-semibold">Download App</h1>
            <p className="text-sm">Save $3 with App User only</p>
            {["Terms of Use", "FAQ", "Contact"].map((item) => (
              <p key={item} className="text-sm">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
