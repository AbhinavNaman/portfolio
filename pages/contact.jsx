import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "",title:"", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message || !form.title ) {
      setStatus("error: Fill all fields");
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus("error: Invalid email");
      return;
    }

    // const token = await recaptchaRef.current.executeAsync();
    // recaptchaRef.current.reset();

    // if (!token) {
    //   setStatus("error: reCAPTCHA failed");
    //   return;
    // }

    setLoading(true);
    setStatus(null);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          title: form.title,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      console.log("Email sent ✅", result);
      setStatus("success");
      setForm({ name: "", email: "", message: "", title:"" });
    } catch (err) {
      console.error(err);
      setStatus("error: Could not send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#0d1117] text-white min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Me</h1>

        

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#161b22] border border-gray-700 rounded-lg p-6 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#0d1117] border border-gray-600 rounded text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#0d1117] border border-gray-600 rounded text-white"
          />

           <input
            type="text"
            name="title"
            placeholder="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#0d1117] border border-gray-600 rounded text-white"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#0d1117] border border-gray-600 rounded text-white resize-none"
          />

          {/* <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            size="invisible"
            ref={recaptchaRef}
          /> */}
 <div className="flex justify-end gap-6 ">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
         
     <button
            onClick={()=>setForm({ name: "", email: "", message: "", title:"" })}
            className=" bg-white text-black font-semibold  px-2 rounded hover:bg-gray-200 transition"
          >
            Reset
          </button>
          </div>
         

          {status && (
            <p className={`text-sm mt-2 ${
              status.startsWith("success")
                ? "text-green-400"
                : "text-red-400"
            }`}>
              {status.replace("error:", "")}
            </p>
          )}
        </motion.form>
      </div>
    </main>
  );
}
