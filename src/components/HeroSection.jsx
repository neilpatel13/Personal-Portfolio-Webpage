
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">  
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Neil</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Patel</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mx-auto max-2-2xl opacity-0 animate-fade-in-delay-3"> 
                        A passionate software developer with a knack for creating innovative solutions.
                        Currently obtaining a Master's in Computer Science at NJIT
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>

                </div>
            </div> 

           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
                <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
           </div> 
        </section>
    );
};
 // got the hero section working, now need to add the projects section and footer
 //video at 1.28.30