declare module 'typewriter-effect/dist/core' {
    interface TypewriterOptions {
      loop?: boolean;
      delay?: number;
      cursor?: string;
      strings?: string[];
      autoStart?: boolean;
      deleteSpeed?: number;
    }
  
    export default class Typewriter {
      constructor(element: HTMLElement, options?: TypewriterOptions);
      typeString(text: string): Typewriter;
      deleteChars(amount: number): Typewriter;
      pauseFor(duration: number): Typewriter;
      start(): Typewriter;
    }
  }
  