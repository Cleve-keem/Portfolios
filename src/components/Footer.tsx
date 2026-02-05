import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 py-8">
      <div>
        <div>
          <div className="mb-4">
            <h1 className="text-3xl font-bold">Thank You!</h1>
            <small className="text-[10px] font-bold">
              For sparing some time and reviewing my work
            </small>
          </div>
          <p className="text-[12px]">
            Do you have great idea and want to share. Let’s make something
            amazing together
          </p>
          <button className="bg-brand px-3 py-2 text-xs text-white my-4 rounded-2xl">
            Get in touch with me
          </button>
        </div>
        <div>
          <span className="w-full h-0.5 inline-block bg-footer-muted" />
        </div>
      </div>
    </footer>
  );
}
