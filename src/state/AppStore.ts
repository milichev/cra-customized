import { action, observable } from 'mobx';
import { SpeakStyle } from '../service/YodaService';

export class AppStore {
  @observable speakStyle: SpeakStyle = SpeakStyle.human;

  @action
  toggleSpeak = () => {
    this.speakStyle = this.speakStyle === SpeakStyle.human
      ? SpeakStyle.yoda
      : SpeakStyle.human;
  };
}
