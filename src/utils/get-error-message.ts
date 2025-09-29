export function getErrorMessage(err: unknown): string {
  if (!err) return 'Unknown error';
  if (err instanceof Error) return err.message;
  if (typeof err === 'object') {
    const e = err as Record<string, unknown>;
    if (
      e.response &&
      typeof e.response === 'object' &&
      (e.response as Record<string, any>).data?.message &&
      typeof (e.response as Record<string, any>).data.message === 'string'
    ) {
      return (e.response as any).data.message;
    }
    if (typeof (e as any).message === 'string') return (e as any).message;
  }

  return 'Unknown error';
}
