"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-24 px-10 border-t border-white/10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">

        {/* COLUMN 1 */}
        <div>
          <h3 className="font-semibold text-lg mb-6 tracking-wide">
            AUREN EXPERIENCE
          </h3>

          <img
            src="aurenair.png"
            alt="Experience"
            className="mb-4 rounded-lg object-cover h-32 w-full"
          />

          <p className="text-sm text-gray-400 leading-relaxed">
            Join the Auren community to unlock exclusive launches,
            early access, and premium listening experiences.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-6 tracking-wide">
            WE CARE
          </h3>

          <img
            src="aurenlite.png"
            alt="Sustainability"
            className="mb-4 rounded-lg object-cover h-32 w-full"
          />

          <p className="text-sm text-gray-400 leading-relaxed">
            We design with purpose — combining innovation,
            sustainability, and performance in every product.
          </p>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-6 tracking-wide">
            CONTACT
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-white transition cursor-pointer">Chat with us</li>
            <li className="hover:text-white transition cursor-pointer">WhatsApp</li>
            <li className="hover:text-white transition cursor-pointer">FAQ & Support</li>
            <li className="hover:text-white transition cursor-pointer">Store Locator</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h3 className="font-semibold text-lg mb-6 tracking-wide">
            SERVICES
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-white transition cursor-pointer">Shipping</li>
            <li className="hover:text-white transition cursor-pointer">Returns</li>
            <li className="hover:text-white transition cursor-pointer">Support</li>
            <li className="hover:text-white transition cursor-pointer">Promotions</li>
          </ul>
        </div>

        {/* COLUMN 5 */}
        <div>
          <h3 className="font-semibold text-lg mb-6 tracking-wide">
            OUR COMPANY
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-white transition cursor-pointer">Careers</li>
            <li className="hover:text-white transition cursor-pointer">Investor Relations</li>
            <li className="hover:text-white transition cursor-pointer">Sustainability</li>
            <li className="hover:text-white transition cursor-pointer">Press</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-16 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Auren Audio. All rights reserved.
      </div>

    </footer>
  );
}