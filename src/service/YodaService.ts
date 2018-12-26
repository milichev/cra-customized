export enum SpeakStyle {
  human,
  yoda
}

export class YodaService {
  speak(style: SpeakStyle): string {
    return style === SpeakStyle.human
      ? 'Human is here'
      : 'Is here Yoda';
  }
}
