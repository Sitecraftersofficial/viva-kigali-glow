import vivaLogo from "@/assets/viva-logo.png";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-16 h-16 mb-4 mx-auto animate-pulse">
          <img src={vivaLogo} alt="VIVA PLUS" className="w-full h-full rounded-full" />
        </div>
        <div className="flex space-x-1 justify-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="text-foreground mt-4 text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;