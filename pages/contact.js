import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-[100vh] bg-teal-900 pt-48">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl text-white font-bold mb-4">Contact Us</h1>
        <p className="text-white mb-6">
          We'd love to hear from you! Feel free to get in touch with us using the
          information below.
        </p>
        <div className="text-white">
          <p>
            <b>Email:</b>{" "}
            <a href="mailto:contact@labolarochester.com" className="text-blue-200">
              contact@labolarochester.com
            </a>
          </p>
          <p>
            <b>Phone:</b>{" "}
            <a href="tel:5854340044" className="text-blue-200 ">
              (585) 434-0044
            </a>
          </p>
          <p>
            <b>Address:</b> 240 East Main St., Rochester, NY 14604
          </p>
        </div>
        
        <div className="mt-6 text-white">
            <span className="text-sm">Looking to book an event? Fill out our <Link href="/bookAnEvent" className="text-blue-500 underline">form.</Link></span>
            <br/>
        </div>
      </div>
    </div>
  );
}
