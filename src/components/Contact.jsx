function Contact() {
  return (
    <section>
      <div className="contact-bg flex flex-col items-center justify-center gap-10">
        <h1 className="text-white text-3xl sm:text-5xl text-center">
          Learn more about <br /> investing with Binhoff
        </h1>
        <div className="flex sm:flex-row flex-col gap-4">
            <input className="bg-white w-full sm:w-80 px-6 py-4 rounded-lg outline-none" type="text" placeholder="Inter Your Email"/>
            <button className="btn bg-black border border-gray-800 text-white px-20">Sign up</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
