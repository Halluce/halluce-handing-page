import React from 'react';

const icons = [
  {
    for: 'discord',
    link: 'https://discord.gg/98UybbEgdc',
  },
  {
    for: 'twitter',
    link: 'https://mobile.twitter.com/HalluceNFTs',
  },
  {
    for: 'linkedin',
    link: 'https://www.linkedin.com/company/halluce/',
  },
];
const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white px-3 md:px-5 lg:px-7 py-7">
    <ul className="flex flex-col md:flex-row flex-wrap max-w-5xl justify-between mx-auto gap-6">
      <li>
        <h4>Organization</h4>
        <ul>
          <li>Careers</li>
        </ul>
      </li>

      <li>
        <h4>FAQ</h4>
        <ul>
          <li>Fees</li>
        </ul>
      </li>

      <li>
        <h4>Documents</h4>
        <ul>
          <li>Viral Paper</li>
        </ul>
      </li>
      <li>
        <h4>Join Our Community</h4>
        <ul className="flex gap-4">
          {icons.map((icon) => (
            <li key={icon.for}>
              <a
                href={icon.link}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
              >
                <img
                  className="w-6 h-6 md:w-8 md:h-8"
                  src={`/assets/icons/${icon.for}.svg`}
                  alt=""
                />
              </a>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <h4>For Queries, Contact</h4>
        <a href="mailto:obakeng@halluce.com">obakeng@halluce.com</a>
      </li>
    </ul>
  </footer>
);
export default Footer;
