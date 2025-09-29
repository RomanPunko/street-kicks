import axios from 'axios';

export function getErrorMessage(err: unknown): string {
  const DEFAULT = 'Unknown error';

  if (!err) return DEFAULT;
  
  if (axios.isAxiosError(err)) {
    const respData = err.response?.data as { message?: unknown } | undefined;
    if (respData && typeof respData.message === 'string') return respData.message;
    return err.message ?? DEFAULT;
  }
  if (err instanceof Error) return err.message;

  if (typeof err === 'object' && err !== null) {
    const e = err as { message?: unknown };
    if (typeof e.message === 'string') return e.message;
  }
  return DEFAULT;
}
