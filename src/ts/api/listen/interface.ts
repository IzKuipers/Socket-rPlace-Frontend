export type ListenerStore = Map<string, ListenerFunction>;
export type ListenerFunction = (...args: any[]) => void;
