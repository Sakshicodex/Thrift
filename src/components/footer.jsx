import React from "react";
import { Footer, Label, TextInput } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsMailbox,
  BsMailbox2,
  BsTwitter,
} from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";


const MyFooter = () => {
  return (
    <footer className=" text-white "style={{ backgroundColor: '#BBB49B' }}>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-12">
        <div className="grid w-full justify-between gap-8 sm:flex sm:items-start sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-2">
            
            <div className="my-8">
              <p className="mb-1"> Copyright © 2023 Uttaran ltd.</p>
              <p>All rights reserved</p>
            </div>

            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-start text-white">
              <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
              <Footer.Icon href="https://www.instagram.com/uttaran.the.thrift.store?igsh=cTZxemFjbjM5Yzll&utm_source=qr" icon={BsInstagram} className="text-white" />
              <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
              <Footer.Icon href="#" icon={BsGithub} className="text-white" />
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-8 items-start sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
            <div>
              <Footer.Title title="Company" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  About us
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Blog
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Contact us
                </Footer.Link>
                
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Support" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Help center
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Terms of service
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Legal
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Privacy policy
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Status
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default MyFooter;
