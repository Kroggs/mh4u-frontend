export function isRequestSuccessful(status: number): boolean {
    return (status >= 200 && status < 300) || status == 304;
}