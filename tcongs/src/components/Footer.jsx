// src/components/Footer.jsx
import logo from "../assets/logo.svg"
export default function Footer() {
  return (
    <footer className="bg-[#0a0a0d] px-6 pt-20 pb-10 text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
           <a href="#home" className="flex items-center">
                     <img
                       src={logo}
                       alt="Tcongs Infotech"
                       className="h-10 w-auto object-contain"
                     />
                   </a>
            <p className="mt-4 max-w-sm text-sm text-white/50">
              Empowering global brands with 8+ years of expertise in custom web
              development, e-commerce marketplace optimization, and Generative
              Engine Optimization (GEO). We turn complex challenges into
              seamless digital growth.
            </p>

            <a
              href="https://in.linkedin.com/company/tcongs-infotech"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-lime-300/40 hover:text-lime-300"
            >
              in
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/80">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li>
                <a href="/" className="hover:text-lime-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about.html" className="hover:text-lime-300">
                  Company
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-lime-300">
                  Solution
                </a>
              </li>
              <li>
                <a href="/work-with-us.html" className="hover:text-lime-300">
                  Connect
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/80">
              Scale Your Online Business
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li>Launch on Top Marketplaces</li>
              <li>Build High-Converting Stores</li>
              <li>Optimize Listings for Sales</li>
              <li>Run Profitable Ad Campaigns</li>
              <li>Grow Globally</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row">
          <p>
            Mumbai Office: Based in Mumbai, India. Serving clients worldwide.
          </p>
          <p>© 2026 Tcongs Infotech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
