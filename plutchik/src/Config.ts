import {ConfigInterface} from "./interfaces/ConfigInterface";

export class Config {
    element: string = "drawer";
    isMobile: boolean = false;
    labels: Array<Array<string>> = [
        ["ecstasy", "admiration", "terror", "amazement", "grief", "loathing", "rage", "vigilance"],
        ["joy", "trust", "fear", "surprise", "sadness", "disgust", "anger", "anticipation"],
        ["serenity", "acceptance", "apprehension", "distraction", "pensiveness", "boredom", "annoyance", "interest"],
        ["optimistm", "love", "submission", "awe", "disapproval", "emorse", "contempt", "aggressiveness"]
    ];

    constructor (config: ConfigInterface) {
        Object.keys(config).forEach((key) => {
            this[key] = config[key];
        });
    }
}