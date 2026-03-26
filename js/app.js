// eslint-disable-next-line import/extensions
import {
    animateHomeBackground,
    animateProfessionText,
    animateNameText,
    animateIntroText,
    animateSkillTags,
    animateJobCards,
    animateIntroIcons,
    animateIntroPhotos,
} from "./animate";

const init = () => {
    animateHomeBackground();
    animateProfessionText();
    animateIntroText();
    animateIntroPhotos();
    animateIntroIcons();
    animateNameText();
    animateSkillTags();
    animateJobCards();
};

/* Wait for DOM to be loaded  */
window.addEventListener("DOMContentLoaded", () => {
    init();
});
