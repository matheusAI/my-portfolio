export default function Loading() {
  return (
    <div className="relative w-[200px] h-[60px] z-[1]">
      <div className="absolute w-[20px] h-[20px] left-[15%] bg-white rounded-full animate-circle"></div>
      <div className="absolute w-[20px] h-[20px] left-[45%] bg-white rounded-full animate-circle delay-[0.2s]"></div>
      <div className="absolute w-[20px] h-[20px] right-[15%] bg-white rounded-full animate-circle delay-[0.3s]"></div>

      <div className="absolute w-[20px] h-[4px] left-[15%] bg-black rounded-full blur-[1px] opacity-90 animate-shadow z-[-1]"></div>
      <div className="absolute w-[20px] h-[4px] left-[45%] bg-black rounded-full blur-[1px] opacity-90 animate-shadow delay-[0.2s] z-[-1]"></div>
      <div className="absolute w-[20px] h-[4px] right-[15%] bg-black rounded-full blur-[1px] opacity-90 animate-shadow delay-[0.3s] z-[-1]"></div>
    </div>
  );
}
