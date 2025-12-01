abstract class SimpleCodec<T> {

    private map: Map<string, T> = new Map()

    constructor() {
        this.fill()
    }

    public abstract fill(): void

    public add(key: string, value: T) {
        this.map.set(key, value)
    }

    public get(key: string) {
        return this.map.get(key)
    }

}

export default SimpleCodec