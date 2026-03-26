import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default const initScrollTrigger = () => {
    ScrollTrigger.create({
        trigger: "#skills",
        start: "top 80%",
        toggleActions: "play none none none",
        
    });
};
