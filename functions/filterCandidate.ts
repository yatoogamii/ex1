interface ICandidate {
  name: string;
  languages: Array<{
    language: string;
    level: number;
  }>
}

interface IRequest {
  language: string;
  level: number;
}
export function filterCandidate(candidates: ICandidate[], request: IRequest): ICandidate[] {
  return []
}
