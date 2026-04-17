import InnerPage from "../components/InnerPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Law Office of A. James Mullaney",
  description: "Contact the Law Office of A. James Mullaney at 904-364-4565 to schedule a consultation.",
};

export default function ContactPage() {
  return (
    <InnerPage
      title="Contact Law Office of A. James Mullaney"
      breadcrumbs={[{ label: "Contact" }]}
      showSidebar={false}
    >
      <p>
        While this website provides general information, it does not constitute
        legal advice. The best way to get guidance on your specific legal issue
        is to contact a lawyer. To schedule a meeting with an attorney, please
        call the firm or complete the intake form below.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div>
          <h2>Office Information</h2>
          <p>
            <strong>Law Office of A. James Mullaney</strong>
            <br />
            8777 San Jose Blvd. Ste. 302
            <br />
            Jacksonville, FL 32217
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1-904-364-4565">904-364-4565</a>
          </p>
          <h3>Office Hours</h3>
          <p>
            Monday - Friday: 9:00 AM - 5:00 PM
            <br />
            Saturday - Sunday: By appointment
          </p>
        </div>

        <div>
          <h2>Send A Message</h2>
          <form className="space-y-4" action="/api/contact" method="post">
            <div>
              <label className="block text-[14px] font-semibold mb-1">Name *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#C93523]"
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold mb-1">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#C93523]"
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#C93523]"
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold mb-1">Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#C93523]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#C93523] text-white uppercase font-semibold tracking-wider text-[14px] px-8 py-3 hover:bg-[#a82b1c] transition-colors"
              style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </InnerPage>
  );
}
