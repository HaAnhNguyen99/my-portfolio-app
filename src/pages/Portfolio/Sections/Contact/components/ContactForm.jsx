import { toast } from 'react-toastify';
export const ContactForm = () => {
  return (
    <div>
      <div>
        <form className="space-y-6">
          <div>
            <label className="block mb-2">Name</label>
            <input type="text" className="w-full p-2 border rounded focus:outline-none focus:border-[#C6E7FF]" />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded focus:outline-none focus:border-[#C6E7FF]" />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea className="w-full p-2 border rounded h-32 focus:outline-none focus:border-[#C6E7FF]"></textarea>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              toast.success('Success! Your operation was completed.');
            }}
            className="bg-[#FFDDAE] px-6 py-2 rounded-full hover:bg-[#C6E7FF] hover:color-primary-hover transition-colors w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
