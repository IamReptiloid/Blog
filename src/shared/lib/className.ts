type Mode = Record<string, boolean | string>;

export function className(mainClass: string, options: Mode = {}, arrayClass: string[] = []): string {
    return [
        mainClass,
        ...arrayClass.filter(Boolean),
        ...Object.entries(options)
            .filter(option => !!option[1])
            .map(option => option[0]),
    ].join(' ');
}