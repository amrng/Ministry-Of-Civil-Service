// interface Iprops {
//     title: string,
//     content: string
//     pic?: string,
//     video?: string,
//     publishDate: string,
//     publisher?: string,
//     hashtags?: string[]

// }
import NewsImage from "../assets/imad.jpeg";

export default function NewsDetails() {
  return (
    <section className="space-y-7">
      <h1 className="text-2xl lg:text-5xl md:text-3xl selection:bg-[#CEA672]">
        Interior Minister tells US envoy: We're prepared to secure Libya's
        elections
      </h1>

      <div className="text-gray-500 text-center text-sm">
        Share: FaceBook, Telegram, X
      </div>

      <div className="flex flex-col w-full gap-10">
        <div>
          <img className="w-full rounded-3xl" src={NewsImage} alt={"title"} />
        </div>
        <h2>
          {`The Minister-designate of Interior, Emad Al-Trabelsi, confirmed his
          Ministry's full readiness to secure the presidential and parliamentary
          elections and to work on preparing security plans for the vote. These
          remarks came during a meeting between Al-Trabelsi and the US envoy to
          Libya, Richard Norland, the Chargé d'Affairs at the US Embassy in
          Tripoli, and the Political and Security Attaché at the US Embassy.


             
          The media office of the Ministry of the Interior indicated that the
          Minister had highlighted their efforts in redeveloping and securing
          the Ras Ajdair border crossing. He also informed them of the
          preparations the Ministry had been making to reopen and secure
          Al-Dabdab border crossing with Algeria and its operation by the
          security apparatuses affiliated with the Ministry of Interior.
          


          Al-Trabelsi also talked about securing the border sector extending
          from Ras Ajdair to Mashahad Saleh, and that work is underway to secure
          the border sector with Algeria. Norland thanked the Ministry of
          Interior for its efforts in facilitating the procedures of the US
          Embassy and securing diplomatic delegations in preparation for its
          opening in Tripoli. He also requested the assistance of agencies
          working in Libya, and the Minister issued instructions to the
          Department of International Relations and Cooperation to provide
          assistance to ensure full cooperation.`}
        </h2>
      </div>

      <div className="flex justify-around items-center px-4 sm:px-8">
        <p className="text-gray-500 text-sm">By: Ahmed Yousry</p>
        <p className="text-gray-500 text-sm">Date: 03-04-2022</p>
      </div>
    </section>
  );
}
