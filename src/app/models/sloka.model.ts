export class SlokaModel {
    slokaId: string;
    chapterId: string;
    verseNo: number;
    slokOriginal: string;
    engTransliteration: string;
    hindiMeaning: string;
    engMeaning: string;
    wordToWordMeaning: string;

    constructor(slokaId?: string, chapterId?: string, verseNo?: number, slokOriginal?: string, engTransliteration?: string, hindiMeaning?: string, 
        engMeaning?: string, wordToWordMeaning?: string) {
            this.slokaId = slokaId || '';
            this.chapterId = chapterId || '';
            this.verseNo = verseNo || 0;
            this.slokOriginal = slokOriginal || '';
            this.engTransliteration = engTransliteration || '';
            this.hindiMeaning = hindiMeaning || '';
            this.engMeaning = engMeaning || '';
            this.wordToWordMeaning = wordToWordMeaning || '';
    }
}