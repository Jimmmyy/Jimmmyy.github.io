"use client";

import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Close,
  Title,
} from "@radix-ui/react-dialog";
import { useLanguage } from "@/context/LanguageContext";

const ContactDialog = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();

    if (!name || !email || !message) {
      alert(t.contact.fillAllFields);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert(t.contact.invalidEmail);
      return;
    }
    alert(t.contact.success);
    form.reset();
  };

  return (
    <Root>
      <Trigger asChild>
        <button className="group px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-[2px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 relative overflow-hidden">
          <span className="relative z-10">{t.nav.contact}</span>
        </button>
      </Trigger>

      <Portal>
        <Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
        <Content className="fixed top-1/2 left-1/2 w-[90vw] max-w-md max-h-[90vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-xl z-50 border border-gray-200 dark:border-gray-700">
          <Close className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-white transition">
            ✕
          </Close>

          <Title className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.contact.title}
          </Title>

          <form
            action="https://formspree.io/f/xkgzzpjb"
            method="POST"
            target="_blank"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              name="name"
              type="text"
              placeholder={t.contact.name}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="email"
              type="email"
              placeholder={t.contact.email}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder={t.contact.message}
              rows={4}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg hover:-translate-y-[1px] duration-300"
            >
              {t.contact.send}
            </button>
          </form>
        </Content>
      </Portal>
    </Root>
  );
};

export default ContactDialog;
