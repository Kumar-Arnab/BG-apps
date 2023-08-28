export class Chapter {
    chapterNumber: number;
    chapterId: string;
    noOfVerses: number;
    hindiName: string;
    engTranslation: string;
    engTransliteration: string;
    hindiMeaning: string;
    engMeaning: string;
    engSummary: string;
    hindiSummary: string;

    constructor(chapterNumber?: number, chapterId?: string, noOfVerses?: number, hindiName?: string, engTranslation?: string, engTransliteration?: string,
        hindiMeaning?: string, engMeaning?: string, engSummary?: string, hindiSummary?: string) {
            this.chapterNumber = chapterNumber || 0;
            this.chapterId = chapterId || '';
            this.noOfVerses = noOfVerses || 0;
            this.hindiName = hindiName || '';
            this.engTranslation = engTranslation || '';
            this.engTransliteration = engTransliteration || '';
            this.hindiMeaning = hindiMeaning || '';
            this.engMeaning = engMeaning || '';
            this.engSummary = engSummary || '';
            this.hindiSummary = hindiSummary || '';
    }
}