// eslint-disable-next-line import/extensions
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrambleTextPlugin, SplitText);
gsap.registerPlugin(ScrollTrigger);

export const animateHomeBackground = () => {
    gsap.from("#home-background", {
        opacity: 0.5,
        scale: 1.5,
        duration: 5,
        rotate: 10,
        ease: "power2.out",
    });
};

export const animateProfessionText = () => {
    gsap.from("#profession-text", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        delay: 1,
    });
};

export const animateNameText = () => {
    SplitText.create("#header h1", {
        type: "chars",
        autoSplit: true,
        onSplit(self) {
            return gsap.from(self.chars, {
                duration: 0.7,
                fontWeight: 700,
                delay: 0.2,
                ease: "power2.out",
                stagger: 0.05,
            });
        },
    });
};

export const animateIntroText = () => {
    const paragraphs = document.querySelectorAll("#intro p");
    paragraphs.forEach((p) => {
        SplitText.create(p, {
            type: "lines",
            autoSplit: true,
            onSplit(self) {
                return gsap.from(self.lines, {
                    duration: 0.5,
                    opacity: 0,
                    y: 20,
                    ease: "power2.out",
                    delay: 0.5,
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: p,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
            },
        });
    });
};

export const animateIntroPhotos = () => {
    const photos = document.querySelectorAll("#photos-1 img");

    const positions = [
        {
            x: "-80%",
            y: "-10%",
            rotation: -7,
        },
        {
            x: "-20%",
            y: "-4%",
            rotation: -3,
        },
        {
            x: "30%",
            y: "-7%",
            rotation: 4,
        },
        {
            x: "70%",
            y: "-1%",
            rotation: -5,
        },
    ];

    photos.forEach((photo, index) => {
        gsap.fromTo(
            photo,
            {
                y: "-50%",
                opacity: 0,
            },
            {
                opacity: 1,
                duration: "random(.5, 1.5)",
                y: positions[index].y,
                x: positions[index].x,
                rotation: positions[index].rotation,
                ease: "power2.out",
                delay: "random(0.2, 0.6)",
                scrollTrigger: {
                    trigger: photo,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            },
        );

        photo.addEventListener("mouseover", (event) => {
            gsap.to(event.currentTarget, {
                duration: 0.5,
                scale: 1.2,
                ease: "power2.out",
                zIndex: 99,
            });
        });

        photo.addEventListener("mouseout", (event) => {
            gsap.to(event.currentTarget, {
                duration: 0.5,
                scale: 1,
                ease: "power2.out",
                zIndex: index,
            });
        });
    });
};

export const animateIntroIcons = () => {
    const icons = document.querySelectorAll("#photos-2 img");
    icons.forEach((icon) => {
        gsap.from(icon, {
            duration: "random(0.5, 2)",
            scale: 0,
            ease: "elastic.inOut",
            scrollTrigger: {
                trigger: icon,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    });
};

export const animateSkillTags = () => {
    const skillTags = document.querySelectorAll(".autres-skills span");
    skillTags.forEach((tag) => {
        gsap.from(tag, {
            duration: "random(0.5, 2)",
            scale: 0,
            ease: "elastic.inOut",
            delay: Math.random() * 0.5,
            scrollTrigger: {
                trigger: "#skills",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    });
};

export const animateJobCards = () => {
    const jobCards = document.querySelectorAll(".job-conteneur");
    jobCards.forEach((card) => {
        gsap.from(card, {
            y: 150,
            scale: 0.8,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
                stagger: 0.5,
            },
        });

        const paragraphs = card.querySelectorAll("p");
        paragraphs.forEach((p) => {
            SplitText.create(p, {
                type: "lines",
                autoSplit: true,
                onSplit(self) {
                    return gsap.from(self.lines, {
                        duration: 0.5,
                        opacity: 0,
                        y: 20,
                        ease: "power2.out",
                        delay: 0.5,
                        stagger: 0.05,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    });
                },
            });
        });

        const jobCardsWithImage = document.querySelectorAll(".job-conteneur[id^='image-']");
        gsap.from(jobCardsWithImage, {
            duration: 1,
            backgroundSize: "fill",
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    });
};
