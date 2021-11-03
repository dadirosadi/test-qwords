import { useState } from "react";
import address from "./../../assets/images/footer/address.png";
import phone from "./../../assets/images/footer/phone.png";
import email from "./../../assets/images/footer/email.png";
import fb from "./../../assets/images/footer/fb.png";
import ig from "./../../assets/images/footer/ig.png";
import twitter from "./../../assets/images/footer/twitter.png";
import linkedin from "./../../assets/images/footer/linkedin.png";

const Footer = () => {
    const [emails, setEmails] = useState("");
    return <footer className="bg-thirdary py-16 text-sm">
        <div className="max-w-6xl mx-auto text-white">
            <div className="mb-8"><span className="text-white text-3xl font-bold">Qwords</span></div>
            <div className="flex justify-between">
                <div className="flex flex-col gap-3">
                    <span className="cursor-pointer  text-lg font-medium">Tentang Kami</span>
                    <span className="cursor-pointer">Profil Perusahaan</span>
                    <span className="cursor-pointer">Klien</span>
                    <span className="cursor-pointer">Mitra</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="cursor-pointer text-lg font-medium">Solusi</span>
                    <span className="cursor-pointer">Web hosting</span>
                    <span className="cursor-pointer">cloud management</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="cursor-pointer  text-lg font-medium">Media</span>
                    <span className="cursor-pointer">Artikel</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="cursor-pointer  text-lg font-medium">Hubungi Kami</span>
                    <div className="flex gap-4 items-center">
                        <span>
                            <img src={address} />
                        </span>
                        <div>
                            <div><span className="cursor-pointer">Alamat</span></div>
                            <div><span className="cursor-pointer">Jalan sukajadi No. 3c, Bandung</span></div>
                        </div>

                    </div>
                    <div className="flex gap-4 items-center">
                        <span>
                            <img src={phone} />
                        </span>
                        <div>
                            <div><span className="cursor-pointer">Phone</span></div>
                            <div><span className="cursor-pointer">022-123-1234</span></div>
                        </div>

                    </div>
                    <div className="flex gap-4 items-center">
                        <span>
                            <img src={email} />
                        </span>
                        <div>
                            <div><span className="cursor-pointer">E-Mail</span></div>
                            <div><span className="cursor-pointer">hello@qwords.co.id</span></div>
                        </div>

                    </div>


                </div>
                <div className="flex flex-col gap-3">
                    <span className="cursor-pointer  text-lg font-medium">Temukan Kami di</span>
                    <div className="flex gap-5">
                        <span className="cursor-pointer"> <img src={fb} /></span>
                        <span className="cursor-pointer"> <img src={twitter} /></span>
                        <span className="cursor-pointer"> <img src={ig} /></span>
                        <span className="cursor-pointer"> <img src={linkedin} /></span>
                    </div>
                    <span className="text-lg font-medium mt-5">Dapatkan Berita Terbaru</span>
                    <div>
                        <input className="text-xs p-2 text-thirdary border border-white" type="email" value={emails} onChange={(e) => { setEmails(e.target.value) }} placeholder="ketik alamat email disini" /><button type="button" className="border border-white py-2 px-2 text-xs">Kirim</button></div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;