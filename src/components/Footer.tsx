import pkg from "../../package.json";

/**
 * Footer component.
 * Displays copyright, portfolio version, and a link to the release.
 */

const Footer = () => {
  return (
    <footer className="w-full mt-24 py-8 border-t border-gray-700 text-center text-sm text-gray-400">
      <p>
        © {new Date().getFullYear()} Jimmy Nguyen —{" "}
        <a
          href={`https://github.com/Jimmmyy/Jimmmyy.github.io/releases/tag/v${pkg.version}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          v{pkg.version}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
