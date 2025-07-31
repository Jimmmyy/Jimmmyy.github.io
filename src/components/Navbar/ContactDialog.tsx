"use client";

import * as Dialog from "@radix-ui/react-dialog";

const ContactDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="px-5 py-2 rounded-full bg-blue-800 text-white text-sm font-medium hover:bg-blue-900 transition duration-300 shadow-md hover:shadow-lg hover:-translate-y-[1px]">
          Contact me
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm data-[state=open]:animate-fadeIn" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl z-50">
          <Dialog.Close className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-white">
            ✕
          </Dialog.Close>

          <Dialog.Title className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Contact Me
          </Dialog.Title>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-900 transition shadow-md hover:shadow-lg hover:-translate-y-[1px] duration-300"
            >
              Send
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ContactDialog;
