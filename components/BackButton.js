import { useRouter } from 'next/navigation'

export default function BackButton({ onClick, href }){
  const router = useRouter();

  const handleBack = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 px-4 py-2 border border-green-600 text-white font-semibold rounded-lg shadow-sm transition-all duration-300 hover:bg-green-700"
    >
      Back
    </button>
  );
};

