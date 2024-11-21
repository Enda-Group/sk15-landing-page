declare module "animejs" {
    interface AnimeInstance {
      play: () => void;
      pause: () => void;
      restart: () => void;
      reverse: () => void;
      seek: (time: number) => void;
      completed: boolean;
    }
  
    interface AnimeParams {
      targets: string | HTMLElement | NodeList | Array<string | HTMLElement> | Record<string, any>;
      duration?: number;
      delay?: number;
      easing?: string;
      loop?: boolean | number;
      direction?: "normal" | "reverse" | "alternate";
      autoplay?: boolean;
      round?: number;
      update?: () => void;
      [key: string]: any; // Allows additional options
    }
  
    interface Anime {
      (params: AnimeParams): AnimeInstance;
      timeline: (params?: AnimeParams) => AnimeInstance;
    }
  
    const anime: Anime;
    export default anime;
  }
  