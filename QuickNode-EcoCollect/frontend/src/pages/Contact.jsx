import Footer from "../components/footer";
import HomeFooter from "../components/homepage_components/HomeFooter";
import Header from "../components/navigation/Header";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <Header />

      <div className="mx-auto max-w-lg border border-gray-200 px-10 py-12 mt-20 mb-12 flex flex-col rounded-lg shadow-md bg-white">
        <h1 className="font-bold text-3xl text-primary40 text-center mb-8">
          Contact Us
        </h1>

        <div className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium text-primary40 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="outline-none p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-primary40 focus:bg-white transition"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium text-primary40 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="outline-none p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-primary40 focus:bg-white transition"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="reason" className="font-medium text-primary40 mb-2">
              Your Reason
            </label>
            <textarea
              name="reason"
              id="reason"
              rows="6"
              className="outline-none p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-primary40 focus:bg-white transition"
              placeholder="Tell us why you're reaching out"
            ></textarea>
          </div>

          <button className="bg-primary40 px-6 py-3 rounded-md text-white font-semibold hover:bg-primary30 transition w-full shadow-lg">
            Submit
          </button>
        </div>
      </div>

      <HomeFooter />
      <Footer />
    </div>
  );
};

export default Contact;
