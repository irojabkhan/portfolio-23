import React from "react";
import {
  EnvelopeIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../Icons/Icons";

function SocialLinks() {
  return (
    <>
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://github.com/irojabkhan"
            target="_blank"
          >
            <GithubIcon style={{ height: 20, width: 20 }} />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://twitter.com/irojabkhan"
            target="_blank"
          >
            <TwitterIcon style={{ height: 20, width: 20 }} />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://www.linkedin.com/in/rojab-khan-482779136/"
            target="_blank"
          >
            <LinkedInIcon style={{ height: 20, width: 20 }} />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href="mailto:irojabkhan@gmail.com"
          >
            <EnvelopeIcon style={{ height: 20, width: 20 }} />
          </a>
        </li>
      </ul>
    </>
  );
}

export default SocialLinks;
