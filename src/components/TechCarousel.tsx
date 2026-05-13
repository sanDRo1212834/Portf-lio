import { motion } from "motion/react";
import { 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiVite, 
  SiFirebase, 
  SiSupabase,
  SiGooglegemini
} from "react-icons/si";

const technologies = [
  { icon: SiHtml5, name: "HTML5", color: "text-orange-500" },
  { icon: SiCss, name: "CSS3", color: "text-blue-500" },
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { icon: SiReact, name: "React", color: "text-cyan-400" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
  { icon: SiExpress, name: "Express", color: "text-gray-400" },
  { icon: SiVite, name: "Vite", color: "text-purple-500" },
  { icon: SiFirebase, name: "Firebase", color: "text-yellow-500" },
  { icon: SiSupabase, name: "Supabase", color: "text-emerald-500" },
  { icon: SiGooglegemini, name: "Gemini AI", color: "text-blue-400" },
];

export function TechCarousel() {
  // Duplicating the array twice allows us to shift exactly -50% for a perfect infinite loop
  const carouselItems = [...technologies, ...technologies];

  return (
    <div className="w-full relative py-12 border-y border-stone-800 bg-stone-900/50 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-stone-950 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-stone-950 to-transparent"></div>
      
      <div className="flex overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // speed
          }}
        >
          {carouselItems.map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-3 shrink-0 group mx-8 px-4">
              <tech.icon className={`w-14 h-14 ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
              <span className="text-sm font-medium text-stone-400 group-hover:text-stone-200 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
