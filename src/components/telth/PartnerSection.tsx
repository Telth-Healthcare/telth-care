import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  organisation: string;
  organisationType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  organisation?: string;
  organisationType?: string;
  message?: string;
}

const partnerTypes = [
  { label: "Hospitals & Clinics", title: "Extend Your Care Reach", desc: "Deploy a network of trained home-visit CMs linked directly to your physicians and care teams." },
  { label: "Corporate Wellness", title: "Employee Health Programmes", desc: "Annual health checks, chronic disease management, and wellness monitoring for your workforce." },
  { label: "Government & NGOs", title: "Community Health at Scale", desc: "Scale health delivery with trained, tech-equipped CMs across districts, wards, and communities." },
];

export default function PartnerSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    organisation: '',
    organisationType: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    
    if (!formData.organisation.trim()) {
      newErrors.organisation = 'Organisation name is required';
    }
    
    if (!formData.organisationType) {
      newErrors.organisationType = 'Please select an organisation type';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/info@mytelth.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          organisation: formData.organisation,
          organisationType: formData.organisationType,
          message: formData.message,
          _subject: 'New Partnership Enquiry',
          _template: 'table'
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          city: '', 
          organisation: '', 
          organisationType: '', 
          message: '' 
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const ref = useScrollAnimation();
  
  return (
    <section id="partner" className="bg-background py-24">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-primary">For Organisations</span>
          <h2 className="text-foreground text-[36px] md:text-[42px] font-bold leading-[1.12] mt-3 mb-4 font-display">Partner with Telth</h2>
          <p className="text-muted-foreground text-[17px] leading-[1.75] max-w-xl mx-auto">Hospitals, corporates, and government bodies — we build custom CM deployment programmes for your context.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {partnerTypes.map((p) => (
            <div key={p.title} className="bg-card rounded-2xl p-8 border border-border hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-primary mb-3">{p.label}</div>
              <h3 className="text-foreground text-[18px] font-bold mb-2 leading-snug font-display">{p.title}</h3>
              <p className="text-muted-foreground text-[14px] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl border border-border p-10 max-w-2xl mx-auto">
          <h3 className="text-foreground text-[22px] font-bold mb-2 font-display">Send us an enquiry</h3>
          <p className="text-muted-foreground text-[15px] mb-8">Fill in the form and our partnerships team will respond within 24 hours.</p>
          
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fadeIn">
              <p className="font-semibold">Thank you for your enquiry!</p>
              <p className="text-sm mt-1">Our partnerships team from <span className="font-medium">telth.care</span> will contact you within 24 hours.</p>
              <p className="text-xs mt-2 text-green-600">This message will disappear in 5 seconds...</p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <p className="font-semibold">Something went wrong.</p>
              <p className="text-sm mt-1">Please try again or email us directly at <span className="font-medium">info@telth.care</span></p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-foreground">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-border'} bg-background text-[15px] outline-none focus:border-primary transition-colors font-[inherit]`}
              />
              {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
            </div>

            {/* Organisation */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-foreground">
                Organisation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
                placeholder="Hospital / Company name"
                className={`px-4 py-3 rounded-lg border ${errors.organisation ? 'border-red-500' : 'border-border'} bg-background text-[15px] outline-none focus:border-primary transition-colors font-[inherit]`}
              />
              {errors.organisation && <span className="text-red-500 text-xs">{errors.organisation}</span>}
            </div>

            {/* City */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-foreground">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Your city"
                className={`px-4 py-3 rounded-lg border ${errors.city ? 'border-red-500' : 'border-border'} bg-background text-[15px] outline-none focus:border-primary transition-colors font-[inherit]`}
              />
              {errors.city && <span className="text-red-500 text-xs">{errors.city}</span>}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-foreground">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className={`px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-border'} bg-background text-[15px] outline-none focus:border-primary transition-colors font-[inherit]`}
              />
              {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-[13px] font-semibold text-foreground">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@organisation.com"
                className={`px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-border'} bg-background text-[15px] outline-none focus:border-primary transition-colors font-[inherit]`}
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
            </div>

            {/* Organisation Type */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-foreground">
                Organisation Type <span className="text-red-500">*</span>
              </label>
              <select
                name="organisationType"
                value={formData.organisationType}
                onChange={handleChange}
                className={`px-4 py-3 rounded-lg border ${errors.organisationType ? 'border-red-500' : 'border-border'} bg-background text-[15px] outline-none focus:border-primary transition-colors font-[inherit] ${!formData.organisationType ? 'text-muted-foreground' : 'text-foreground'}`}
              >
                <option value="" disabled>Select type</option>
                <option value="Hospital / Clinic">Hospital / Clinic</option>
                <option value="Corporate">Corporate</option>
                <option value="Government / NGO">Government / NGO</option>
                <option value="Other">Other</option>
              </select>
              {errors.organisationType && <span className="text-red-500 text-xs">{errors.organisationType}</span>}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-[13px] font-semibold text-foreground">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your requirements…"
                className={`px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-border'} bg-background text-[15px] outline-none focus:border-primary transition-colors font-[inherit] resize-none`}
              />
              {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto mt-2 bg-primary text-primary-foreground font-bold text-[15px] px-10 py-3.5 rounded-xl hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg transition-all cursor-pointer border-none disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}