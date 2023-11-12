import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const MyFooter = () => {
  return (
    <footer className="flex flex-col text-black-100 border-t border-gray-100 mt-5">
      <div className="flex max-md:flex-col flex-wrap gap-5 justify-between sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            width={118}
            height={16}
            alt="logo"
          />
          <p className="text-base text-gray-700">@Copyright blablabla<br/>All rights reserved</p>
        </div>

        {
          footerLinks.map(link=>(
            <div key={link.title} className="footer__link" >
              <h3 className="font-bold">{link.title}</h3>
              {
                link.links.map(item=>(
                  <Link key={item.title} href={item.url}>{item.title}</Link>
                ))
              }
            </div>

          ))
        }
      </div>
      <div className="flex justify-between text-gray-700 py-5 px-5  border-t border-gray-100">
        <div>
          @Copyright 2023
        </div>
        <div className="flex gap-5">
          <p>Privacy</p>
          <p>Legal notes</p>
        </div>
      </div>
    </footer>
  )
};

export default MyFooter;
