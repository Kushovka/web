const ConnectModal = ({ setOpenConnect }) => {
  return (
    <section className="fixed z-30 top-1/2 -translate-y-1/2 px-[100px]  left-0 flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[5px]">
        <h1 className="big-text font-extrabold text-[18px] ">
          connect with me
        </h1>
        <p className="iceland-text text-[16px] text-gray02">
          wanna chat? Or just share something cool?
        </p>
      </div>
      <form
        action="https://formsubmit.co/kushovk2003@mail.ru"
        method="POST"
        className="border border-white/15 rounded-tl-[12px] bg-red01/10 p-[32px] flex flex-col gap-[32px]"
      >
        <div className="flex flex-col gap-[12px]">
          <label
            for="name"
            className="big-text text-[18px] font-extrabold text-red01"
          >
            How should I call you?
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="your name"
            required
            className="bg-black05 px-[20px] py-[14px] border border-black03 placeholder:iceberg-text placeholder:text-[14px] placeholder:text-[gray02]"
          />
        </div>
        <div className="flex flex-col gap-[12px]">
          <label
            for="email"
            className="big-text text-[18px] font-extrabold text-red01"
          >
            Sending from
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your.name@acme.com"
            required
            className="bg-black05 px-[20px] py-[14px] border border-black03 placeholder:iceberg-text placeholder:text-[14px] placeholder:text-[gray02]"
          />
        </div>
        <div className="flex flex-col gap-[12px]">
          <label
            for="message"
            className="big-text text-[18px] font-extrabold text-red01"
          >
            transmitted data
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Hi, I write to you about ..."
            required
            className="bg-black05 px-[20px] py-[14px] border border-black03 placeholder:iceberg-text placeholder:text-[14px] placeholder:text-[gray02]"
          ></textarea>
        </div>
        <div className="flex items-center gap-[16px]">
          <button
            type="submit"
            className="bg-red01/70 hover:bg-red01 hover:rounded-[6px] transition-all duration-300 px-[30px] py-[6px] big-text text-[18px] font-extrabold text-center text-black"
          >
            send message [enter]
          </button>
          <button
            onClick={() => setOpenConnect(false)}
            className="border hover:bg-red01/20 hover:rounded-[6px] transition-all duration-300 border-gray03 px-[30px] py-[6px] big-text text-[18px] font-extrabold text-center text-red01"
          >
            discard [esc]
          </button>
        </div>
      </form>
    </section>
  );
};

export default ConnectModal;
