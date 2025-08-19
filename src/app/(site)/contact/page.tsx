import ContactForm from "@/components/forms/contact-form";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-900 via-sky-950 to-indigo-900 flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full bg-white/10 dark:bg-black/40 backdrop-blur rounded-2xl shadow-2xl p-8 border border-sky-900/20">
        <h1 className="text-3xl font-bold mb-2 text-white drop-shadow">Let’s connect!</h1>
        <p className="mb-6 text-sky-200">
          Fill out the form below and I’ll get back to you soon.  
          Or email: <a 
            href="mailto:pedrohl.m@hotmail.com" 
            className="underline hover:text-sky-400 transition"
          >pedrohl.m@hotmail.com</a>
        </p>
        <ContactForm />
      </div>
    </div>
  );
}