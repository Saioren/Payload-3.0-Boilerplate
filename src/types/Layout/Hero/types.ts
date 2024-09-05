import { Media } from "@/types/Fields/Media/types";
import { PaddingOption } from "../Padding/types";

type HeroTypes = 'standard' | 'lowImpact'

export type Hero = {
    type?: HeroTypes;
    standardHero?: StandardHero; // add your own hero types
    lowImpactHero?: LowImpactHero;
}

export type StandardHero = {
    padding: PaddingOption;
    heading: string;
    heroImage: Media;
}

export type LowImpactHero = {
    padding: PaddingOption;
    heading: string;
}