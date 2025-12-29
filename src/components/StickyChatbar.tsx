import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export default function StickyChatbar() {
  const placeholders = [
    "What is HackaVibe?",
    "When's the next club meeting?",
    "How do I join Vibe Coders?",
    "What projects are you working on?",
    "Tell me about your mentorship program"
  ];

  const handleChange = (_e: React.ChangeEvent<HTMLInputElement>) => {
    // Hook up to your handler if needed
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit logic here
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-2xl">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
