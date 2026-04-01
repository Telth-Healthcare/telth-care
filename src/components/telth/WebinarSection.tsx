import { useState } from "react";
import { apiClient } from "@/api/client";
import { handleAxiosError } from "@/api/handleAxiosError";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

export default function WebinarSection() {
  const [ state, setState] = useState({
    email: '',
  });
  const ref = useScrollAnimation();

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      try {
        const response = await apiClient.postWebinar('web/webinars/', {
          email: state.email,
          description: "Join our free webinar." ,
        });
        toast.success("Your form as successfully send, our admin will contact you shortly.")   
        setState({ 
          email: '', 
        });
        
        
      } catch (error) {
        const errorMessage = handleAxiosError(error, 'Something went wrong. Please try again.')
        toast.error(errorMessage);
      }
    };
  

  return (
    <section id="webinar" className="bg-telth-navy py-20">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-primary">
              Free Live Demo
            </span>

            <h2 className="text-white text-[34px] md:text-[40px] font-bold leading-[1.12] mt-3 mb-4 font-display">
              See it live before you decide.
            </h2>

            <p className="text-white/50 text-[16px] leading-[1.75] mb-8">
              Join our free Saturday webinar. Watch a real CM demonstration, see
              the HES device in action, and ask our team anything.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 bg-white/[0.06] border border-white/10 rounded-xl text-white text-[15px] placeholder-white/30 outline-none focus:border-primary transition-colors font-[inherit]"
              />

              <button onClick={handleSubmit} className="bg-primary text-primary-foreground font-bold text-[14px] px-6 py-3.5 rounded-xl hover:opacity-90 transition-colors cursor-pointer border-none whitespace-nowrap">
                Reserve My Spot
              </button>
            </div>

            <p className="text-white/25 text-[13px] mt-3">
              Every Saturday at 11:00 AM IST — Free, no commitment required
            </p>
          </div>

          {/* Webinar Image */}
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
            alt="Healthcare training session"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
